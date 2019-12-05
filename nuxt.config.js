export default {
	mode: 'spa',
	head: {
		titleTemplate: '%s - Clepius',
		title: 'Clepius',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		]
	},
	loading: { color: '#fff' },
	css: [
	],
	plugins: [
	],
	buildModules: [
		'@nuxtjs/vuetify',
	],
	modules: [
		// Doc: https://axios.nuxtjs.org/usage
		'@nuxtjs/axios',
		// Doc: https://github.com/nuxt-community/dotenv-module
		'@nuxtjs/dotenv',
	],
	axios: {
	},
	vuetify: {
		customVariables: ['~/assets/style/variables.scss'],
		defaultAssets: false,
		optionsPath: '~/plugins/vuetify.options.js'
	},
	/*
	** Build configuration
	*/
	build: {
		/*
		** You can extend webpack config here
		*/
		extend(config, ctx) {
		}
	}
}
