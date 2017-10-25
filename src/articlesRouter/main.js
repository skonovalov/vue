import Vue from 'vue';
import AppArticles from './components/AppArticles.vue';

import router from './router';

new Vue({
	el: '#app',
	router,
	render: h => h(AppArticles)
});