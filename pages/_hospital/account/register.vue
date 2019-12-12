<template>
	<v-app style="background-color: #eee">
		<v-row class="pa-sm-10 pa-xs-0 justify-center align-center">
			<v-col md="6" sm="12" xs="12" cols="12"></v-col>
			<v-col md="6" sm="12" xs="12" class="pa-12" cols="12">
				<v-card outlined class="pa-7">
					<p style="color: #6200ea" class="ma-0 font-weight-bold">Welcome!</p>
					<h1 class="ma-0 mb-5">Patient Registration</h1>
					<v-row>
						<v-col xs="12" sm="6" class="py-0" cols="12">
							<v-text-field dense outlined label="First Name"/>
						</v-col>
						<v-col xs="12" sm="6" class="py-0" cols="12">
							<v-text-field dense outlined label="Last Name"/>
						</v-col>
					</v-row>
					<v-row>
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
					</v-row>
					<v-row>
						<v-col xs="12" cols="12" class="py-0">
							<p class="ma-0 font-weight-bold">Contact Information</p>
						</v-col>
						<v-col sm="6" xs="12" cols="12" class="py-0">
							<v-text-field dense outlined label="Email Address"/>
						</v-col>
						<v-col sm="6" xs="12" cols="12" class="py-0">
							<v-text-field dense outlined label="Phone Number"/>
						</v-col>
					</v-row>
					<v-row>
						<v-col sm="12" cols="12" class="py-0">
							<p class="ma-0 font-weight-bold">Create a Password</p>
						</v-col>
						<v-col xs="12" cols="12" class="py-0">
							<v-text-field dense type="password" outlined label="Enter Password"/>
						</v-col>
						<v-col xs="12" cols="12" class="py-0">
							<v-text-field dense type="password" outlined label="Confirm Password"/>
						</v-col>
					</v-row>
					<v-checkbox
						label="I agree to the Terms, Conditions and Fees"
					></v-checkbox>
					<v-btn large color="primary">CREATE ACCOUNT</v-btn>
					<div class="py-10 font-weight-bold">
						Already have an account? <a style="color: #FB3276">Sign In</a>
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
