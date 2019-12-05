export const state = () => ({
	items: [],
	// currentTitle: 'SDI'
});

export const mutations = {
	set(state, items) {
		state.items = items || [];
		state.currentTitle = state.items.length == 1 ? state.items[state.items.length - 1]['text'] : `${state.items[state.items.length - 2]['text']}/${state.items[state.items.length - 1]['text']}`;
	},
	setTitle(state, title) {
		state.currentTitle = title;
	}
}

export const getters = {

}