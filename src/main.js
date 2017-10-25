import Vue from 'vue';
import VueRouter from 'vue-router';
import AppArticles from './AppArticles.vue';


new Vue({
	el: '#app',
	render: h => h(AppArticles)
})