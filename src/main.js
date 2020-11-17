import Vue from 'vue';

// import { sync } from 'vuex-router-sync';
// import VModal from 'vue-js-modal';
// import Vue2TouchEvents from 'vue2-touch-events';
// import VueProgressiveImage from 'vue-progressive-image';
// import '@babel/polyfill';
// import store from 'vuexStore';
// import router from './router/router';

import App from './pages/app/App';

// import '@src/assets/scss/main.scss';
//
// import '@src/scssLoader';

// Vue.config.productionTip = false;
// sync(store, router);
// Vue.use(VModal);
// Vue.use(Vue2TouchEvents, { longTapTimeInterval: 500 });
// Vue.use(VueProgressiveImage);

// setup();

new Vue({
	// router,
	// store,
	render: h => h(App),
}).$mount('#app');