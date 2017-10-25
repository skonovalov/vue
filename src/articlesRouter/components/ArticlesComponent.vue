<template>
<div class="articles">
	<h2>Geek Articles</h2>
	<div class="app__search">
		<input type="text" v-on:input="searchArticle">
	</div>
	<div class="app__top">
		<articles-item-component v-for="item in articles" v-bind:item="item" v-bind:key="item.id"></articles-item-component>
	</div>
</div>
</template>

<script>
import ArticlesItemComponent from './ArticlesItemComponent.vue';
import items from '../assets/articles';

export default {
	name: 'ArticlesItemComponent',
	components: {
		'articlesItemComponent': ArticlesItemComponent
	},
	data() {
		return {
			items,
			articles: []
		};
	},

	methods: {
		searchArticle(ev) {
			let query = ev.target.value;
			let newArray = this.articles.filter((item) => {
				return item.header.toLowerCase().match(query);
			});

			this.articles = ! query.trim() ? this.items.slice() : newArray;
		}
	},
	created() {
		this.articles = items.slice();
	}
}
</script>

