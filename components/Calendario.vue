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
        <date-picker
          :value="formattedDates"
          range
          @input="onUpdate"
          class="date-picker"
          :show-calendar="true"
        ></date-picker>
        <div class="buttons">
          <v-btn @click="adjustRange(-1)">-1</v-btn>
          <v-btn @click="adjustRange(1)">+1</v-btn>
          <v-btn @click="adjustRange(3)">+3</v-btn>
          <v-btn @click="adjustRange(5)">+5</v-btn>
          <v-btn @click="adjustRange(7)">+7</v-btn>
          <v-btn @click="adjustRange(15)">+15</v-btn>
        </div>
        <Calendar inline showWeek />
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import 'vue2-datepicker/index.css';
import DatePicker from 'vue2-datepicker';
import dayjs from 'dayjs';

export default {
  components: {
    DatePicker,
  },
  data() {
    return {
      date: null,
      selectedDates: [],
      startDate: null,
      endDate: null,
       value: null
    };
  },
  computed: {
    formattedDates() {
      if (this.startDate && this.endDate) {
        return `${dayjs(this.startDate).format('DD/MM/YYYY')} - ${dayjs(this.endDate).format('DD/MM/YYYY')}`;
      }
      return '';
    }
  },
  methods: {
    onUpdate(dates) {
      this.selectedDates = dates;
      this.startDate = dates[0];
      this.endDate = dates[1];
    },
    adjustRange(days) {
      if (this.startDate) {
        this.endDate = dayjs(this.startDate).add(days, 'day').format('YYYY-MM-DD');
        this.selectedDates = [this.startDate, this.endDate];
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
}
.buttons .v-btn {
  background-color: #4caf50;
  color: white;
}
</style>

