<template>
  <div>
    <v-card>
      <v-card-title>
        <span class="headline">Select Dates</span>
      </v-card-title>
      <v-card-text>
        <v-text-field
          :value="formattedDates"
          readonly
        ></v-text-field>
        <div class="buttons">
          <Button @click="adjustRange(0)">+0</Button>
          <Button @click="adjustRange(1)">+1</Button>
          <Button @click="adjustRange(3)">+3</Button>
          <Button @click="adjustRange(5)">+5</Button>
          <Button @click="adjustRange(7)">+7</Button>
          <Button @click="adjustRange(15)">+15</Button>
        </div>
        <Calendar
          v-model="selectedDates"
          selectionMode="range"
          :inline="true"
          :showButtonBar="true"
          :showWeek="true"
          class="p-calendar"
          style="width: 100%;"
          :dayStyle="{ 'background-color': 'green', color: 'white' }"
           @date-select="onDateSelect"
        />
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import dayjs from 'dayjs';

export default {
  data() {
    return {
      selectedDates: [],
      startDate: null,
      endDate: null,
      originalStartDate: null,
      originalEndDate: null,
      manualSelection: true,
    };
  },
  computed: {
    formattedDates() {
      if (this.selectedDates.length === 2) {
        return `${dayjs(this.selectedDates[0]).format('DD/MM/YYYY')} - ${dayjs(this.selectedDates[1]).format('DD/MM/YYYY')}`;
      }
      return '';
    }
  },
  watch: {
    selectedDates(newDates) {
      if(this.manualSelection ){
        console.log('seleccionados: ',newDates);
        this.originalStartDate =newDates[0];
        this.originalEndDate = newDates[1]? newDates[1]:newDates[0];
      }
    }
  },
  methods: {
    onDateSelect() {
      this.manualSelection = true;
    },
    adjustRange(days) {
      if (this.originalStartDate && this.originalEndDate) {
        this.manualSelection = false;
        const start = dayjs(this.originalStartDate).subtract(days, 'day').toDate();
        const end = dayjs(this.originalEndDate).add(days, 'day').toDate();
        this.selectedDates = [start, end];
        console.log('seleccionados',this.selectedDates);
      }
    }
  }
};
</script>

<style scoped>
.date-picker {
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 5px;
}
.date-picker .day.selected {
  background-color: #4caf50;
  color: #fff;
}
.buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 10px;
}
.buttons .v-btn {
  background-color: #4caf50;
  color: white;
}
.p-calendar {
  width: 100%;
  height: auto;
}
</style>
