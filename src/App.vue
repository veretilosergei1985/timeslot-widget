<template>
  <div id="app">
      <vue-scheduler
          :min-date="minDate"
          :max-date="null"
          :labels="{
                today: 'Hoy',
                back: 'Atrás',
                next: 'Siguiente',
                month: 'Mes',
                week: 'Semana',
                day: 'Día',
                all_day: 'Todo el día'
            }"
          :time-range="[9, 20]"
          :available-views="['month', 'week', 'day']"
          :initial-date="initDate"
          initial-view="week"
          use12
          :show-today-button="false"
          eventDisplay="eventDisplay"
          :events="events"
      />
  </div>
</template>

<script>
import VueScheduler from './components/VueScheduler';
import './scss/main.scss';
import moment from 'moment';

export default {
    name: 'App',
    components: {
      VueScheduler
    },
    data() {
        return {
        }
    },
    props: {
        minDate: moment("2022-03-06"),
        initDate: moment("2022-03-06")
    },
    computed: {
        events() {
            console.log(this.$store.state.events)
            return this.$store.state.events;
        },
    },
    mounted() {
        var date = moment("2016-10-19");
        console.log(date.isValid())
        this.$store.dispatch('getEvents');
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
