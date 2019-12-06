<template>
	<main class="container">
		<h1>Hello {{ bundler }}</h1>
		<file-input v-model="fileInput"></file-input>
		<button
			class="button is-primary"
			@click="processFileData"
		>
			Process file
		</button>
	</main>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	data() {
		return {
			bundler: 'Parcel',
			fileInput: '',
			records: [],
		};
	},
	methods: {
		processFileData() {
			console.log(this.fileInput);
		},
	},
});
</script>

<style lang="scss" scoped>
.container {
	color: green;
}
</style>
