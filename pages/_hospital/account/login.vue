<template>
	<v-row>
		<v-col cols="12" class="mb-5">
			<p class="primary--text mb-1 font-weight-bold">Welcome back!</p>
			<h1 class="ma-0">Sign In</h1>
		</v-col>
		<v-col cols="12" class="py-1">
			<v-text-field outlined label="Enter email or ID" />
		</v-col>
		<v-col cols="12" class="py-1">
			<v-text-field outlined label="Enter Password" />
		</v-col>
		<v-col cols="12" class="pt-1">
			<v-row no-gutters>
				<v-spacer class="hidden-sm-and-down"></v-spacer>
				<v-btn text small color="accent">Forgot Password?</v-btn>
			</v-row>
		</v-col>
		<v-col cols="12">
			<v-btn large color="primary">SIGN IN</v-btn>
		</v-col>
		<v-col cols="12">
			<v-row no-gutters class="align-center caption-1">
				<span>New patient?</span>
				<v-btn text small color="accent" class="text-capitalize">Create Account</v-btn>
			</v-row>
		</v-col>
	</v-row>
</template>

<script>
export default {
	layout: 'auth'
}
</script>

<style>
</style>
