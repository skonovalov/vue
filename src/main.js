import Vue from 'vue';
import VueMaterial from 'vue-material';
import AppTax from './AppTax.vue';

import 'vue-material/dist/vue-material.css';

Vue.use(VueMaterial);

Vue.material.registerTheme('my', {
	app: {
		primary: 'cyan'
	},
	about: {
		primary: 'indigo'
	},
	contact: {
		primary: 'teal'
	}
});

Vue.material.setCurrentTheme('my');

new Vue({
	el: '#app',
	render: h => h(AppTax)
})
