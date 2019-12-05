// TODO: fuccccckkkk

export default async ({ store, route }) => {
	let path =  route.path;
	let step = path.split('/');
	let breadcrumbs = [];

	for (let index = 0; index < step.length; index++) {
		const view = step[index];
		
		if (index == 0) {
			breadcrumbs.push({
				text: "overview", url: "/"
			});
		}
		else {
			if (view == '') break;
			
			let url = '';
			// let viewComponent = route.matched.filter(r => r.view);
			for (let i = 1; i <= index; i++) {
				url += `/${step[i]}`;
			}
			breadcrumbs.push({
				// text: viewComponent.name || view,
				text: view,
				url
			});
		}
	}

	store.commit('breadcrumbs/set', breadcrumbs);
}