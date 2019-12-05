<template>
	<v-app>
		<Toolbar />
		<Drawer />
		<v-content>
			<v-container>
				<nuxt />
			</v-container>
		</v-content>
	</v-app>
</template>

<script>

import Toolbar from '~/components/Toolbar'
import Drawer from '~/components/Drawer'

export default {
	components: {
		Toolbar,
		Drawer
	},
	data() {
		return {
		}
	}
}
</script>
