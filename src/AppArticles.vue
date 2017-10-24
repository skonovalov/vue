<template>
<div id="app">
	<div class="container">
		<h2>Geek Articles</h2>
		<div class="app__search">
			<input type="text" v-on:input="searchArticle">
		</div>
		<div class="app__top">
			<article-component v-for="item in articles" v-bind:item="item" v-bind:key="item.id"></article-component>
		</div>
	</div>
</div>
</template>

<script>
import Articles from './assets/articles';
import ArticleComponent from './components/ArticleComponent.vue';

export default {
	name: 'app',
	components: {
		'article-component': ArticleComponent
	},
	data () {
		return {
			articles: []
		}
	},
	methods: {
		searchArticle(ev) { console.log(ev.target.value);
			let query = ev.target.value;
			let newArray = this.articles.filter((item) => {
				return item.header.toLowerCase().match(query);
			});
			
			this.articles = ! query.trim() ? Articles.items : newArray;
		}
	},
	
	created() {
		this.articles = Articles.items.slice();
	}
}
</script>

<style>
* {
	box-sizing: border-box;
}

body {
	font-family: 'Raleway', sans-serif;
	background: #fff;
}

.container {
	width: 500px;
	margin: 0 auto;
}

.app__search {
	margin-bottom: 20px;
}

.app__search input {
	width: 100%;
	height: 30px;
	padding: 0 15px;
	border-radius: 5px;
	border: 1px solid #ccc;
	outline: none;
}

.item {
	margin-bottom: 20px;
	padding: 15px;
	background: #f5f5f5;
	border: 1px solid #ccc;
	border-radius: 5px;
	overflow: hidden;
	font-size: 0;
}

.item__img {
	display: inline-block;
	vertical-align: top;
	width: 70px;
}

.item__text {
	display: inline-block;
	vertical-align: top;
	width: calc(100% - 90px);
	margin-left: 20px;
}

.item__text h3 {
	font-size: 22px;
	line-height: 30px;
	font-weight: 400;
	color: #000;
	margin-bottom: 10px;
}

.item__text p {
	margin: 0;
	font-size: 16px;
	line-height: 20px;
	font-weight: 400;
	color: #666;
}

h3 {
	margin: 0;
}

h2 {
	margin: 0;
	margin-bottom: 20px;
	text-transform: uppercase;
	text-align: center;
}

img {
	max-width: 100%;
}
</style>
