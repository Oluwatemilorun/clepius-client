<template>
	<v-app class="wrapper" :style="`background-image: url(${Pattern})`">
		<v-container fill-height>
			<nuxt />
		</v-container>
	</v-app>
</template>

<script>

import Pattern from '~/assets/img/bg/pattern.png'

export default {
	data() {
		return {
			Pattern
		}
	}
}
</script>

<style>
.wrapper {
	background-attachment: fixed;
	background-repeat: repeat;
	background-position: top;
}
</style>