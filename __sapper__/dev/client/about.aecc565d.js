import { S as SvelteComponentDev, i as init, s as safe_not_equal, a as space, e as element, t as text, d as claim_text, c as claim_element, b as children, f as detach, h as add_location, g as attr, j as insert, k as append, n as noop } from './chunk.86736f05.js';
import './chunk.0f2b918c.js';

/* src/routes/about.svelte generated by Svelte v3.6.2 */

const file = "src/routes/about.svelte";

function create_fragment(ctx) {
	var t0, h1, t1, t2, h3, t3, t4, div3, div0, img0, t5, h40, t6, t7, div1, img1, t8, h41, t9, t10, div2, img2, t11, h42, t12;

	return {
		c: function create() {
			t0 = space();
			h1 = element("h1");
			t1 = text("About");
			t2 = space();
			h3 = element("h3");
			t3 = text("Theta Tau bases its moral tenets in three pillars:");
			t4 = space();
			div3 = element("div");
			div0 = element("div");
			img0 = element("img");
			t5 = space();
			h40 = element("h4");
			t6 = text("Brotherhood");
			t7 = space();
			div1 = element("div");
			img1 = element("img");
			t8 = space();
			h41 = element("h4");
			t9 = text("Philanthropy");
			t10 = space();
			div2 = element("div");
			img2 = element("img");
			t11 = space();
			h42 = element("h4");
			t12 = text("Professionalism");
			this.h();
		},

		l: function claim(nodes) {
			t0 = claim_text(nodes, "\n\n");

			h1 = claim_element(nodes, "H1", {}, false);
			var h1_nodes = children(h1);

			t1 = claim_text(h1_nodes, "About");
			h1_nodes.forEach(detach);
			t2 = claim_text(nodes, "\n\n");

			h3 = claim_element(nodes, "H3", {}, false);
			var h3_nodes = children(h3);

			t3 = claim_text(h3_nodes, "Theta Tau bases its moral tenets in three pillars:");
			h3_nodes.forEach(detach);
			t4 = claim_text(nodes, "\n\n");

			div3 = claim_element(nodes, "DIV", { class: true }, false);
			var div3_nodes = children(div3);

			div0 = claim_element(div3_nodes, "DIV", { class: true }, false);
			var div0_nodes = children(div0);

			img0 = claim_element(div0_nodes, "IMG", { src: true, alt: true, class: true }, false);
			var img0_nodes = children(img0);

			img0_nodes.forEach(detach);
			t5 = claim_text(div0_nodes, "\n\t\t");

			h40 = claim_element(div0_nodes, "H4", {}, false);
			var h40_nodes = children(h40);

			t6 = claim_text(h40_nodes, "Brotherhood");
			h40_nodes.forEach(detach);
			div0_nodes.forEach(detach);
			t7 = claim_text(div3_nodes, "\n\t");

			div1 = claim_element(div3_nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			img1 = claim_element(div1_nodes, "IMG", { src: true, alt: true, class: true }, false);
			var img1_nodes = children(img1);

			img1_nodes.forEach(detach);
			t8 = claim_text(div1_nodes, "\n\t\t");

			h41 = claim_element(div1_nodes, "H4", {}, false);
			var h41_nodes = children(h41);

			t9 = claim_text(h41_nodes, "Philanthropy");
			h41_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			t10 = claim_text(div3_nodes, "\n\t");

			div2 = claim_element(div3_nodes, "DIV", { class: true }, false);
			var div2_nodes = children(div2);

			img2 = claim_element(div2_nodes, "IMG", { src: true, alt: true, class: true }, false);
			var img2_nodes = children(img2);

			img2_nodes.forEach(detach);
			t11 = claim_text(div2_nodes, "\n\t\t");

			h42 = claim_element(div2_nodes, "H4", {}, false);
			var h42_nodes = children(h42);

			t12 = claim_text(h42_nodes, "Professionalism");
			h42_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			document.title = "About";
			add_location(h1, file, 35, 0, 578);
			add_location(h3, file, 37, 0, 594);
			attr(img0, "src", "icons/pillar.png");
			attr(img0, "alt", "pillar");
			attr(img0, "class", "svelte-127iken");
			add_location(img0, file, 41, 2, 701);
			add_location(h40, file, 42, 2, 745);
			attr(div0, "class", "pillar svelte-127iken");
			add_location(div0, file, 40, 1, 678);
			attr(img1, "src", "icons/pillar.png");
			attr(img1, "alt", "pillar");
			attr(img1, "class", "svelte-127iken");
			add_location(img1, file, 45, 2, 798);
			add_location(h41, file, 46, 2, 842);
			attr(div1, "class", "pillar svelte-127iken");
			add_location(div1, file, 44, 1, 775);
			attr(img2, "src", "icons/pillar.png");
			attr(img2, "alt", "pillar");
			attr(img2, "class", "svelte-127iken");
			add_location(img2, file, 49, 2, 896);
			add_location(h42, file, 50, 2, 940);
			attr(div2, "class", "pillar svelte-127iken");
			add_location(div2, file, 48, 1, 873);
			attr(div3, "class", "pillars svelte-127iken");
			add_location(div3, file, 39, 0, 655);
		},

		m: function mount(target, anchor) {
			insert(target, t0, anchor);
			insert(target, h1, anchor);
			append(h1, t1);
			insert(target, t2, anchor);
			insert(target, h3, anchor);
			append(h3, t3);
			insert(target, t4, anchor);
			insert(target, div3, anchor);
			append(div3, div0);
			append(div0, img0);
			append(div0, t5);
			append(div0, h40);
			append(h40, t6);
			append(div3, t7);
			append(div3, div1);
			append(div1, img1);
			append(div1, t8);
			append(div1, h41);
			append(h41, t9);
			append(div3, t10);
			append(div3, div2);
			append(div2, img2);
			append(div2, t11);
			append(div2, h42);
			append(h42, t12);
		},

		p: noop,
		i: noop,
		o: noop,

		d: function destroy(detaching) {
			if (detaching) {
				detach(t0);
				detach(h1);
				detach(t2);
				detach(h3);
				detach(t4);
				detach(div3);
			}
		}
	};
}

class About extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, null, create_fragment, safe_not_equal, []);
	}
}

export default About;
