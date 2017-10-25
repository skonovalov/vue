<template>
<header class="header">
	<nav>
		<router-link to="/">index page</router-link>
		<span>{{ name }}</span>
	</nav>
</header>
</template>

<script>
export default {
	props: {
		name: String
	},
	data() {
		return {
			__name: typeof this.name !== 'undefined' ? name: ''
		};
	}
};
</script>
