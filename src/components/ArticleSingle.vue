<template>
<div class="item item-single">
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
  
}
</script>

<style>
.item-single {
	
}
</style>


