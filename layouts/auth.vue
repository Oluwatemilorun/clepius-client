<template>
	<v-app>
		<v-row class="pa-sm-10 pa-xs-0 justify-center justify-md-end align-center">
			<v-col cols="12" md="5" class="pa-12">
				<v-card outlined class="px-4 pt-3">
					<v-card-text>
						<nuxt />

						<div class="d-flex flex-wrap justify-center justify-md-space-between mt-10">
							<v-btn text small color="accent">Privacy Policy</v-btn>
							<!-- <v-btn text small color="accent">Terms & Conditions</v-btn> -->
							<v-btn text small color="accent">How it works</v-btn>
						</div>
					</v-card-text>
				</v-card>
			</v-col>
		</v-row>
	</v-app>
</template>

<script>
export default {}
</script>

<style>
</style>