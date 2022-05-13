import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// import api from "../axios/index";
import { mdiAccount } from "@mdi/js";

export const store = new Vuex.Store({
    state: {
        icon: mdiAccount
    },
    getters: {},
    mutations: {},
    actions: {},
    module: {},
});
