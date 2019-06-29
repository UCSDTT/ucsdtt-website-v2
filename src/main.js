import App from './index.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Theta Tau'
	}
});

export default app;