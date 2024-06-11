

<template>
  <v-app>
    <v-main>
      <v-container
      class="d-flex justify-center align-center custom-height"
      :style="{ backgroundImage: 'url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F4.bp.blogspot.com%2F-TpYdDO1ErvY%2FUoEuKIfWZjI%2FAAAAAAABzOk%2Faw6kuanYuRQ%2Fs1600%2Fpaisaje-praga3.jpg&f=1&nofb=1&ipt=f6316fe4fa250d537d90f4f482dc98357f81e6e9189be263d3219a0687b01797&ipo=images)', backgroundSize: 'cover', backgroundPosition: 'center' }"
    >
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
.custom-height {
  height: 500px; /* Puedes ajustar esta altura según sea necesario */
}
</style>
