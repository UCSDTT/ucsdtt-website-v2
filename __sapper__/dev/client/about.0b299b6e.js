import { S as SvelteComponentDev, i as init, s as safe_not_equal, a as space, e as element, t as text, d as claim_text, c as claim_element, b as children, f as detach, h as add_location, g as attr, j as insert, k as append, n as noop } from './chunk.86736f05.js';
import './chunk.0f2b918c.js';

/* src/routes/about.svelte generated by Svelte v3.6.2 */

const file = "src/routes/about.svelte";

function create_fragment(ctx) {
	var t0, h1, t1, t2, h3, t3, t4, div3, div0, img0, t5, h40, t6, t7, p0, t8, t9, div1, img1, t10, h41, t11, t12, p1, t13, t14, div2, img2, t15, h42, t16, t17, p2, t18;

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
			p0 = element("p");
			t8 = text("We strive to make the group as closely knit as possible throughout one’s\n      college years. Our goal is to develop bonds between our brothers that will\n      last a lifetime. We foster an inviting, safe, and social environment in\n      which our members become lifelong friends.");
			t9 = space();
			div1 = element("div");
			img1 = element("img");
			t10 = space();
			h41 = element("h4");
			t11 = text("Philanthropy");
			t12 = space();
			p1 = element("p");
			t13 = text("For the purpose of our members’ personal growth, as well as our\n      community’s benefits, we are involved in projects that give back to the\n      community around us. Serving alongside brothers will establish strong\n      bonds and also guarantee a truly meaningful time through one’s college\n      years.");
			t14 = space();
			div2 = element("div");
			img2 = element("img");
			t15 = space();
			h42 = element("h4");
			t16 = text("Professionalism");
			t17 = space();
			p2 = element("p");
			t18 = text("We also seek to shape up one’s professional interests to prepare them for\n      their life ahead of college. We plan various networking opportunities as\n      well as events that provide a sneak peek at different professional\n      careers.");
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
			t5 = claim_text(div0_nodes, "\n    ");

			h40 = claim_element(div0_nodes, "H4", { class: true }, false);
			var h40_nodes = children(h40);

			t6 = claim_text(h40_nodes, "Brotherhood");
			h40_nodes.forEach(detach);
			t7 = claim_text(div0_nodes, "\n    ");

			p0 = claim_element(div0_nodes, "P", {}, false);
			var p0_nodes = children(p0);

			t8 = claim_text(p0_nodes, "We strive to make the group as closely knit as possible throughout one’s\n      college years. Our goal is to develop bonds between our brothers that will\n      last a lifetime. We foster an inviting, safe, and social environment in\n      which our members become lifelong friends.");
			p0_nodes.forEach(detach);
			div0_nodes.forEach(detach);
			t9 = claim_text(div3_nodes, "\n  ");

			div1 = claim_element(div3_nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			img1 = claim_element(div1_nodes, "IMG", { src: true, alt: true, class: true }, false);
			var img1_nodes = children(img1);

			img1_nodes.forEach(detach);
			t10 = claim_text(div1_nodes, "\n    ");

			h41 = claim_element(div1_nodes, "H4", { class: true }, false);
			var h41_nodes = children(h41);

			t11 = claim_text(h41_nodes, "Philanthropy");
			h41_nodes.forEach(detach);
			t12 = claim_text(div1_nodes, "\n    ");

			p1 = claim_element(div1_nodes, "P", {}, false);
			var p1_nodes = children(p1);

			t13 = claim_text(p1_nodes, "For the purpose of our members’ personal growth, as well as our\n      community’s benefits, we are involved in projects that give back to the\n      community around us. Serving alongside brothers will establish strong\n      bonds and also guarantee a truly meaningful time through one’s college\n      years.");
			p1_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			t14 = claim_text(div3_nodes, "\n  ");

			div2 = claim_element(div3_nodes, "DIV", { class: true }, false);
			var div2_nodes = children(div2);

			img2 = claim_element(div2_nodes, "IMG", { src: true, alt: true, class: true }, false);
			var img2_nodes = children(img2);

			img2_nodes.forEach(detach);
			t15 = claim_text(div2_nodes, "\n    ");

			h42 = claim_element(div2_nodes, "H4", { class: true }, false);
			var h42_nodes = children(h42);

			t16 = claim_text(h42_nodes, "Professionalism");
			h42_nodes.forEach(detach);
			t17 = claim_text(div2_nodes, "\n    ");

			p2 = claim_element(div2_nodes, "P", {}, false);
			var p2_nodes = children(p2);

			t18 = claim_text(p2_nodes, "We also seek to shape up one’s professional interests to prepare them for\n      their life ahead of college. We plan various networking opportunities as\n      well as events that provide a sneak peek at different professional\n      careers.");
			p2_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			document.title = "About";
			add_location(h1, file, 54, 0, 896);
			add_location(h3, file, 56, 0, 912);
			attr(img0, "src", "icons/pillar.png");
			attr(img0, "alt", "pillar");
			attr(img0, "class", "svelte-dpsgzc");
			add_location(img0, file, 60, 4, 1022);
			attr(h40, "class", "svelte-dpsgzc");
			add_location(h40, file, 61, 4, 1070);
			add_location(p0, file, 62, 4, 1095);
			attr(div0, "class", "pillar svelte-dpsgzc");
			add_location(div0, file, 59, 2, 997);
			attr(img1, "src", "icons/pillar.png");
			attr(img1, "alt", "pillar");
			attr(img1, "class", "svelte-dpsgzc");
			add_location(img1, file, 70, 4, 1431);
			attr(h41, "class", "svelte-dpsgzc");
			add_location(h41, file, 71, 4, 1479);
			add_location(p1, file, 72, 4, 1505);
			attr(div1, "class", "pillar svelte-dpsgzc");
			add_location(div1, file, 69, 2, 1406);
			attr(img2, "src", "icons/pillar.png");
			attr(img2, "alt", "pillar");
			attr(img2, "class", "svelte-dpsgzc");
			add_location(img2, file, 81, 4, 1868);
			attr(h42, "class", "svelte-dpsgzc");
			add_location(h42, file, 82, 4, 1916);
			add_location(p2, file, 83, 4, 1945);
			attr(div2, "class", "pillar svelte-dpsgzc");
			add_location(div2, file, 80, 2, 1843);
			attr(div3, "class", "pillars svelte-dpsgzc");
			add_location(div3, file, 58, 0, 973);
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
			append(div0, t7);
			append(div0, p0);
			append(p0, t8);
			append(div3, t9);
			append(div3, div1);
			append(div1, img1);
			append(div1, t10);
			append(div1, h41);
			append(h41, t11);
			append(div1, t12);
			append(div1, p1);
			append(p1, t13);
			append(div3, t14);
			append(div3, div2);
			append(div2, img2);
			append(div2, t15);
			append(div2, h42);
			append(h42, t16);
			append(div2, t17);
			append(div2, p2);
			append(p2, t18);
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
