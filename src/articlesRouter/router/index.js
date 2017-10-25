import Vue from 'vue';
import VueRouter from 'vue-router';

import ArticlesComponent from '../components/ArticlesComponent.vue';
import ArticleSingleComponent from '../components/ArticleSingleComponent.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'index',
		component: ArticlesComponent
	},
	{
		path: '/article/:id',
		name: 'article',
		component: ArticleSingleComponent
	}
];

export default new VueRouter({
	routes,
	mode: 'history'
});