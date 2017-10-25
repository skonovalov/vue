<template>
<div class="item item-single">
	<div class="row">
		<div class="item-img">
			<img v-bind:src="record.img" alt="">
		</div>
		<div class="item-info">
			<h1>{{ record.header }}</h1>
			<p>{{ record.text }}</p>
			<p>{{ record.text2 }}</p>
		</div>
	</div>
</div>
</template>

<script>
import items from '../assets/articles';

export default {
	name: 'article',
	data() {
		return {
			record: []
		};
	},

	created() {
		this.record = items[this.$route.params.id - 1];
		console.log(this.record);
	}
}
</script>

<style>
.item-single {
	height: 100%;
	border-radius: 0;
	border: 0;
}

.row:before,
.row:after {
	content: '';
	display: table;
	clear: both;
}

.item-img{
	float: left;
	width: 200px;
}

.item-info {
	float: left;
	width: calc(100% - 240px);
	padding-left: 20px;
}

h1 {
	font-size: 40px;
	line-height: 48px;
	color: #000000;
	font-weight: 500;
}

p {
	font-size: 16px;
	line-height: 20px;
}
</style>


