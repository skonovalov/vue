<template>
<div class="list">
	<md-table>
		<md-table-header>
			<md-table-row>
			<md-table-head>Название</md-table-head>
			<md-table-head>Категория</md-table-head>
			<md-table-head>Месяц</md-table-head>
			<md-table-head>Сумма</md-table-head>
			</md-table-row>
		</md-table-header>

		<md-table-body>
			<md-table-row v-for="item in taxes" v-bind:key="item.id">
				<md-table-cell>{{ item.name }}</md-table-cell>
				<md-table-cell>{{ item.category }}</md-table-cell>
				<md-table-cell>{{ item.month }}</md-table-cell>
				<md-table-cell>{{ item.amount }} руб.</md-table-cell>
			</md-table-row>

			<md-table-row>
				<md-table-cell colspan="4">Налог: <span>{{ total }}</span> руб.</md-table-cell>
			</md-table-row>
		</md-table-body>
	</md-table>
</div>
</template>

<script>
export default {
	props: {
		taxes: Array,
		total: Number
	}
}
</script>

