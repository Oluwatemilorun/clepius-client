<template>
	<v-app-bar fixed dense flat app>
		<v-app-bar-nav-icon @click.stop="toggleMini()" />
		<v-toolbar-title class="toolbar-title text-truncate">Hospital Name</v-toolbar-title>
		<v-chip small class="ml-2 accent lighten-4">
			<v-breadcrumbs divider=">" class="pa-1">
				<v-breadcrumbs-item to="/">
					<v-icon color="secondary">mdi-home</v-icon>
				</v-breadcrumbs-item>
				<v-breadcrumbs-item
					v-for="(breadcrumb, i) in $store.state.breadcrumbs.items"
					:key="i"
					class="text-capitalize"
				>{{breadcrumb.text}}</v-breadcrumbs-item>
			</v-breadcrumbs>
		</v-chip>
		<v-spacer></v-spacer>
		<v-btn text icon color="tertiary">
			<v-icon>mdi-magnify</v-icon>
		</v-btn>
		<v-btn text icon color="tertiary">
			<v-icon>mdi-bell-outline</v-icon>
		</v-btn>
		<v-btn text icon color="primary">
			<v-icon>mdi-account-circle-outline</v-icon>
		</v-btn>
	</v-app-bar>
</template>

<script>
export default {
	methods: {
		toggleMini() {
			this.$store.commit('drawer/toggleMini', !this.$store.state.drawer.mini)
		}
	}
}
</script>

<style>
.toolbar-title {
	max-width: 170px;
}
</style>