import Vue from 'vue';
import VueRouter from 'vue-router';

import ArticleComponent from '../components/ArticleComponent.vue';

Vue.use(VueRouter);

const routes = [
	{path: '/', component: ArticleComponent}
];

export default new VueRouter({
	routes
});