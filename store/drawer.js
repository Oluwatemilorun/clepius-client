export const state = () => ({
	show: true,
	mini: true
});

export const mutations = {
	toggle: (state, toggle) => {
		state.show = toggle;
	},
	toggleMini: (state, toggle) => {
		if (state.show === false) {
			state.mini = false;
			state.show = true;
		}
		else {
			state.mini = toggle;
		}
	}
}