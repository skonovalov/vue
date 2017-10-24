<template>
<div class="item">
	<div class="item__img">
		<img v-bind:src="item.img">
	</div>
	<div class="item__text">
		<h3>{{ item.header }}</h3>
		<p>{{ item.text }}</p>
	</div>
</div>
</template>

<script>
export default {
	props: {
		item: {
			type: Object
		}
	}	
}
</script>
