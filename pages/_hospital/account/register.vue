<template>
	<v-row>
		<v-col cols="12" class="mb-5">
			<p class="primary--text mb-1 font-weight-bold">Welcome!</p>
			<h1 class="ma-0">Patient Registration</h1>
		</v-col>
		<v-col xs="12" sm="6" class="py-0" cols="12">
			<v-text-field dense outlined label="First Name"/>
		</v-col>
		<v-col xs="12" sm="6" class="py-0" cols="12">
			<v-text-field dense outlined label="Last Name"/>
		</v-col>
		<v-col xs="12" cols="12" class="py-0">
			<p class="ma-0 font-weight-bold">Address</p>
		</v-col>
		<v-col xs="12" cols="12">
			<v-textarea outlined label="Home Address"></v-textarea>
		</v-col>
		<v-col sm="6" class="py-0">
			<v-text-field dense outlined label="State / City"/>
		</v-col>
		<v-col sm="6" class="py-0">
			<v-text-field dense outlined label="LGA"/>
		</v-col>
		<v-col xs="12" cols="12" class="py-0">
			<p class="ma-0 font-weight-bold">Contact Information</p>
		</v-col>
		<v-col sm="6" xs="12" cols="12" class="py-0">
			<v-text-field dense outlined label="Email Address"/>
		</v-col>
		<v-col sm="6" xs="12" cols="12" class="py-0">
			<v-text-field dense outlined label="Phone Number"/>
		</v-col>
		<v-col sm="12" cols="12" class="py-0">
			<p class="ma-0 font-weight-bold">Create a Password</p>
		</v-col>
		<v-col xs="12" cols="12" class="py-0">
			<v-text-field dense type="password" outlined label="Enter Password"/>
		</v-col>
		<v-col xs="12" cols="12" class="py-0">
			<v-text-field dense type="password" outlined label="Confirm Password"/>
		</v-col>
		<v-col xs="12" cols="12" class="py-0">
			<v-checkbox
				label="I agree to the Terms, Conditions and Fees"
			></v-checkbox>
		</v-col>
		<v-col xs="12" cols="12">
			<v-btn large color="primary">CREATE ACCOUNT</v-btn>
		</v-col>
		<div class="px-3 py-10 font-weight-bold">
			Already have an account? <a style="color: #FB3276">Sign In</a>
		</div>
	</v-row>
</template>

<script>
	export default {
		layout: 'auth'
	}
</script>

<style>
</style>
