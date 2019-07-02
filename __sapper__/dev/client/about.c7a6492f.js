import { S as SvelteComponentDev, i as init, s as safe_not_equal, e as element, t as text, c as claim_element, b as children, d as claim_text, f as detach, g as attr, h as add_location, j as insert, k as append, n as noop, a as space, m as mount_component, q as transition_in, r as transition_out, u as destroy_component } from './chunk.86736f05.js';
import { P as Pillars } from './chunk.47bcbe3a.js';

/* src/components/Origin.svelte generated by Svelte v3.6.2 */

const file = "src/components/Origin.svelte";

function create_fragment(ctx) {
	var div, t;

	return {
		c: function create() {
			div = element("div");
			t = text("My box");
			this.h();
		},

		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true }, false);
			var div_nodes = children(div);

			t = claim_text(div_nodes, "My box");
			div_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			attr(div, "class", "letter svelte-1vnvjdl");
			add_location(div, file, 9, 0, 182);
		},

		m: function mount(target, anchor) {
			insert(target, div, anchor);
			append(div, t);
		},

		p: noop,
		i: noop,
		o: noop,

		d: function destroy(detaching) {
			if (detaching) {
				detach(div);
			}
		}
	};
}

class Origin extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, null, create_fragment, safe_not_equal, []);
	}
}

/* src/routes/about.svelte generated by Svelte v3.6.2 */

function create_fragment$1(ctx) {
	var t0, t1, current;

	var pillars = new Pillars({ $$inline: true });

	var origin = new Origin({ $$inline: true });

	return {
		c: function create() {
			t0 = space();
			pillars.$$.fragment.c();
			t1 = space();
			origin.$$.fragment.c();
			this.h();
		},

		l: function claim(nodes) {
			t0 = claim_text(nodes, "\n\n");
			pillars.$$.fragment.l(nodes);
			t1 = claim_text(nodes, "\n\n");
			origin.$$.fragment.l(nodes);
			this.h();
		},

		h: function hydrate() {
			document.title = "About";
		},

		m: function mount(target, anchor) {
			insert(target, t0, anchor);
			mount_component(pillars, target, anchor);
			insert(target, t1, anchor);
			mount_component(origin, target, anchor);
			current = true;
		},

		p: noop,

		i: function intro(local) {
			if (current) return;
			transition_in(pillars.$$.fragment, local);

			transition_in(origin.$$.fragment, local);

			current = true;
		},

		o: function outro(local) {
			transition_out(pillars.$$.fragment, local);
			transition_out(origin.$$.fragment, local);
			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(t0);
			}

			destroy_component(pillars, detaching);

			if (detaching) {
				detach(t1);
			}

			destroy_component(origin, detaching);
		}
	};
}

class About extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, null, create_fragment$1, safe_not_equal, []);
	}
}

export default About;
