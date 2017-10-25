<template>
<div class="item">
	<router-link v-bind:to="{name: 'article', params: {id: item.id}}">
		<div class="item__img">
			<img v-bind:src="item.img">
		</div>
		<div class="item__text">
			<h3>{{ item.header }}</h3>
			<p>{{ item.text }}</p>
		</div>
	</router-link>
</div>
</template>

<script>
export default {
	props: {
		item: Object
	}
};
</script>
