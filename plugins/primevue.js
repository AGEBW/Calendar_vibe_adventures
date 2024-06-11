// plugins/primevue.js
import Vue from 'vue'
import PrimeVue from 'primevue/config'
import Calendar from 'primevue/calendar'
import SelectButton from 'primevue/selectbutton';
import Button from 'primevue/button';
import 'primevue/resources/primevue.min.css'
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primeicons/primeicons.css'

Vue.use(PrimeVue)
Vue.component('Calendar', Calendar)
Vue.component('SelectButton', SelectButton);
Vue.component('Button', Button);
