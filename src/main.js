import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

import "regenerator-runtime/runtime.js";
import './sass/global.scss';
import routes from './routes/index.js';

Vue.use(VueRouter);

const app = new Vue({
	render: (h) => h(App),
	router,
}).$mount('#app');

const router = new VueRouter({
	mode: 'history',
	routes,
});
