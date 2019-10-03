import Vue from 'vue';
import Vuex from 'vuex';

import indexModel from './modules/index';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        index: indexModel,
    },
});

export default store;
