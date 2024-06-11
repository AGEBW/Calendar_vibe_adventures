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
  methods: {
    adjustRange(days) {
    if (this.selectedDates.length != 0) {
      const selectedDate = this.selectedDates[0];
      this.startDate = days != 0 ? dayjs(selectedDate).subtract(Math.abs(days), 'day').toDate() : selectedDate;
      this.endDate = days != 0 ? dayjs(selectedDate).add(days, 'day').toDate() : null;
      this.selectedDates = this.endDate ? [this.startDate, this.endDate] : [this.startDate];
    }
  },

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
