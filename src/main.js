import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './routers';
import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueRouter);
Vue.use(VueAxios, axios);
// 实例化VueRouter
new Vue({
	router
}).$mount('#app');