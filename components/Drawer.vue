<template>
	<v-navigation-drawer v-model="drawer" :mini-variant="mini" fixed app color="primary">
		<v-list dark>
			<v-list-item>
				<v-list-item-avatar>
					<img src="~/assets/img/icons/logo.svg" alt />
				</v-list-item-avatar>
				<v-list-item-title>
					<span class="White--text font-weight-bold">Clepius</span>
				</v-list-item-title>
			</v-list-item>
		</v-list>
		<v-divider dark></v-divider>
		<v-sheet color="transparent" class="list-items--wrapper pa-0">
			<!-- TODO: render list item based on authenticated user types. USE v-if ON LIST -->
			<v-list dense dark>
				<v-list-item v-for="(item, i) in ManagementDrawerItems" :key="i" :to="item.to" router exact>
					<v-list-item-avatar>
						<v-icon>{{ item.icon }}</v-icon>
					</v-list-item-avatar>
					<v-list-item-content>
						<v-list-item-title v-text="item.title" />
					</v-list-item-content>
				</v-list-item>
			</v-list>
			<v-list dense dark>
				<v-list-item v-for="(item, i) in UserDrawerItems" :key="i" :to="item.to" router exact>
					<v-list-item-avatar>
						<v-icon>{{ item.icon }}</v-icon>
					</v-list-item-avatar>
					<v-list-item-content>
						<v-list-item-title v-text="item.title" />
					</v-list-item-content>
				</v-list-item>
			</v-list>
			<v-list dense dark>
				<v-list-item v-for="(item, i) in PatientDrawerItems" :key="i" :to="item.to" router exact>
					<v-list-item-avatar>
						<v-icon>{{ item.icon }}</v-icon>
					</v-list-item-avatar>
					<v-list-item-content>
						<v-list-item-title v-text="item.title" />
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-sheet>
		<v-list dense dark>
			<v-list-item>
				<v-list-item-avatar>
					<v-icon>mdi-logout</v-icon>
				</v-list-item-avatar>
				<v-list-item-content>
					<v-list-item-title>Log out</v-list-item-title>
				</v-list-item-content>
				<v-list-item-action>
					<v-tooltip right>
						<template v-slot:activator="{ on }">
							<v-btn text icon color="white" @click.stop="mini = !mini" v-on="on">
								<v-icon>mdi-chevron-left</v-icon>
							</v-btn>
						</template>
						<span>Go Mini</span>
					</v-tooltip>
				</v-list-item-action>
			</v-list-item>
		</v-list>
	</v-navigation-drawer>
</template>

<script>
const ManagementDrawerItems = []
const UserDrawerItems = []
const PatientDrawerItems = []

export default {
	data() {
		return {
			ManagementDrawerItems,
			UserDrawerItems,
			PatientDrawerItems
		}
	},
	computed: {
		drawer: {
			get() {
				return this.$store.state.drawer.show
			},
			set(newVal) {
				this.$store.commit('drawer/toggle', newVal)
			}
		},
		mini: {
			get() {
				return this.$store.state.drawer.mini
			},
			set(newVal) {
				this.$store.commit('drawer/toggleMini', newVal)
			}
		}
	}
}
</script>

<style>
.list-items--wrapper {
	height: calc(100vh - 150px);
}
</style>