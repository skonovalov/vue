<template>
	<div class="app" id="app">
		<header-component v-bind:name="currentRoute"></header-component>

		<div class="content">
			<transition name="fade">
				<router-view></router-view>
			</transition>
		</div>

		<footer-component></footer-component>
	</div>
</template>

<script>
import HeaderComponent from './HeaderComponent.vue';
import FooterComponent from './FooterComponent.vue';

export default {
	name: 'index',
	data() {
		return {
			currentRoute: ''
		};
	},
	components: {
		'headerComponent': HeaderComponent,
		'footerComponent': FooterComponent
	},
	
	watch: {
		'$route'(to, from) {
			this.currentRoute = `${to.name} -> ${to.params.id}`;
		}
	}
}
</script>

<style>
* {
	box-sizing: border-box;
}

html,
body {
	height: 100%;
}

body {
	margin: 0;
	padding: 0;
	min-width: 900px;
}

.app {
	height: 100%;
	display: flex;
	flex-direction: column;
}

.content {
	flex: 1;
}

header {
	height: 100px;
	background: #fed12f;
}

footer {
	height: 100px;
	background: #ffddee;
}

.articles {
	width: 500px;
	margin: 0 auto;
	margin-top: 20px;
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

.fade-enter-active,
.fade-leave-active {
	transition: opacity .5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
	opacity: 0;
}
</style>


