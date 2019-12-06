<template>
	<section class="container">
		<h2 class="title">
			File Upload
		</h2>
		<p class="subtitle">
			Your data will be processed in your browser. It will not be sent to
			any servers.
		</p>
		<form class="form">
			<input
				id="fileInput"
				ref="myFiles"
				class="input is-primary"
				type="file"
				@change="processFile"
			>
		</form>
	</section>
</template>

<script>
export default {
	methods: {
		processFile() {
			// $refs gives a direct link to the element
			const { files } = this.$refs.myFiles;
			const reader = new FileReader();

			reader.readAsText(files[0]);
			reader.onload = (event) => {
				console.log(event.target.result);

				this.$emit('input', event.target.result);
			};
			reader.onerror = (evt) => {
				if (evt.target.error.name === 'NotReadableError') {
					alert('Canno\'t read file !');
				}
			};
		},
	},
};
</script>

<style scoped></style>
