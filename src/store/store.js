import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        events: [
            {
                date: new Date(),
                startTime: "13:00",
                endTime: "14:00",
            },
            {
                date: new Date(),
                startTime: "15:00",
                endTime: "16:00",
            }
        ]
    },
    mutations: {
        getEvents(state, data) {
            console.log(data);
        }
    },
    actions: {
        getEvents() {
            console.log(123123);
        }
    }
})
export default store;
