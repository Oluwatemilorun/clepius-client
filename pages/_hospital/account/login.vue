<template>
	<v-app style="background-color: #eee">
		<v-row class="pa-sm-10 pa-xs-0 justify-center align-center">
			<v-col md="6" sm="12" xs="12" cols="12"></v-col>
			<v-col md="6" sm="12" xs="12" class="pa-12" cols="12">
				<v-card outlined class="pa-7">
					<p style="color: #6200ea" class="ma-0 font-weight-bold">Welcome back!</p>
					<h1 class="ma-0">Sign In</h1>
					<v-text-field outlined dense class="mt-10" label="Enter email or ID"/>
					<v-text-field outlined dense label="Enter Password"/>
					<div class="d-flex flex-row-reverse">
						<a style="color: #FB3276" class="font-weight-bold">Forgot Password?</a>
					</div>
					<v-btn large color="primary">SIGN IN</v-btn>
					<div class="mt-5 font-weight-bold">
						New patient? <a style="color: #FB3276">Create Account</a>
					</div>
					<div class="d-flex justify-space-between mt-10">
						<a style="color: #FB3276" class="font-weight-bold">Privacy Policy</a>
						<a style="color: #FB3276" class="font-weight-bold">Terms & Conditions</a>
						<a style="color: #FB3276" class="font-weight-bold">How it works</a>
					</div>
				</v-card>
			</v-col>
		</v-row>
	</v-app>
</template>

<script>
export default {
	layout: 'blank'
}
</script>

<style>
</style>
