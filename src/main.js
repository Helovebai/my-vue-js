import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';

// 引入公共样式
import './styles/public.scss';

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
