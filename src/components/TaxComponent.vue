<template>
	<div class="tax">
		<div class="input">
			<md-input-container>
				<label>Название:</label>
				<md-input v-model.lazy="name"></md-input>
			</md-input-container>
		</div>
		<div class="input">
			<md-input-container>
				<label>Категория</label>
				<md-select v-model.lazy="category">
					<md-option value="1">Покупка</md-option>
					<md-option value="2">Продажа</md-option>
					<md-option value="3">Выйгрыш</md-option>
					<md-option value="4">Получение прибыли</md-option>
				</md-select>
			</md-input-container>
		</div>
		<div class="input input-2">
			<md-input-container>
				<label>Месяц:</label>
				<md-select v-model.lazy="month">
					<md-option value="январь">январь</md-option>
					<md-option value="февраль">февраль</md-option>
					<md-option value="март">март</md-option>
					<md-option value="апрель">апрель</md-option>
					<md-option value="май">май</md-option>
					<md-option value="июнь">июнь</md-option>
					<md-option value="июль">июль</md-option>
					<md-option value="август">август</md-option>
					<md-option value="сентябрь">сентябрь</md-option>
					<md-option value="октябрь">октябрь</md-option>
					<md-option value="ноябрь">ноябрь</md-option>
					<md-option value="декабрь">декабрь</md-option>
				</md-select>
			</md-input-container>
			<md-input-container>
				<label>Сумма:</label>
				<md-input v-model.lazy="amount"></md-input>
			</md-input-container>
		</div>

		<div class="input">
			<md-button class="md-raised md-primary" v-on:click="addTax">Добавить</md-button>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			name: '',
			category: '',
			month: '',
			amount: ''
		};
	},

	methods: {
		addTax() {
			this.$emit('add', {
				id: Date.now(),
				name: this.name,
				category: this.category,
				month: this.month,
				amount: this.amount
			});

			this.eraseFrom();
		},

		eraseFrom() {
			this.name     = '';
			this.category = '';
			this.month    = '';
			this.amount   = '';
		}
	}
}
</script>

