<template>
<!-- расчет налогов  -->
<div id="app">
	<h1 class="md-title">
		<div class="container">
			Расчет налогов
		</div>
	</h1>

	<div class="container">
		<tax-component v-on:add="addTax"></tax-component>
		<tax-list-component v-bind:taxes="taxes" v-bind:total="tax"></tax-list-component>
	</div>
</div>
</template>

<script>
import TaxComponent from './components/TaxComponent.vue';
import TaxListComponent from './components/TaxListComponent.vue';

export default {
	components: {
		'taxComponent': TaxComponent,
		'taxListComponent': TaxListComponent
	},
	data() {
		return {
			taxes: [],
			tax: 0
		};
	},

	methods: {
		addTax(obj) {
			this.taxes.push(obj);
			this.getTax();
		},

		getTax() {
			let last = this.taxes[this.taxes.length - 1];

			switch (parseInt(last.category, 10)) {
				case 1:
					this.tax += Math.floor(last.amount * 0.18);
					break;
				case 2:
				case 3:
				case 4:
					this.tax += Math.floor(last.amount * 0.13);
					break;
			}
		}
	}
}
</script>

<style>
.container {
	width: 600px;
	margin: 0 auto;
}

.input-2 div {
	display: inline-block;
	vertical-align: middle;
	width: 65%;
}

.input-2 div > div {
	width: 100%;
}

.input-2 div + div {
	width: 30%;
	margin-left: 4%;
}

h1 {
	margin-top: 0;
	padding: 20px 0;
	color: #ffffffde;
	background: #3f51b5;
}

.tax {
	padding-bottom: 20px;
	border-bottom: 1px solid #ffffffde;
}

[colspan="4"] {
	text-align: right;
}

td span {
	padding: 0 10px;
	color: #000000;
	font-weight: 500;
}
</style>

