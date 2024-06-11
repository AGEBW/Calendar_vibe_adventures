

<template>
  <v-app>
    <v-main>
      <v-container  class="d-flex justify-center align-center">
        <v-btn  color="primary" @click="showCalendarModal()">Open calendar</v-btn>
        <v-dialog v-model="modal_c" max-width="500">
          <v-card title="Dialog" v-if="modal_c">
           <!--  <Calendario ></Calendario> -->
             <Cale></Cale>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="red" @click="showCalendarModal()">Close</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Calendario from '@/components/Calendario.vue';
import Cale from '@/components/Cale.vue';

export default {
  components: {
    Calendario,
    Cale
  },
  data() {
    return {
      modal_c: false,
      formattedDates: ''
    };
  },
  methods:{
    showCalendarModal(){
      this.modal_c = !this.modal_c;
    }
  }
};
</script>

<style>
.button_s{
  align-items: center;
  align-content: center;
}
</style>
