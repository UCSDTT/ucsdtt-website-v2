import { S as SvelteComponentDev, i as init, s as safe_not_equal, e as element, t as text, a as space, c as claim_element, b as children, d as claim_text, f as detach, g as attr, h as add_location, j as insert, k as append, n as noop, m as mount_component, q as transition_in, r as transition_out, u as destroy_component } from './chunk.86736f05.js';
import { P as Pillars } from './chunk.47bcbe3a.js';

/* src/components/Origin.svelte generated by Svelte v3.6.2 */

const file = "src/components/Origin.svelte";

function create_fragment(ctx) {
	var div, h1, t0, t1, p0, t2, t3, p1, t4, strong0, t5, t6, t7, p2, strong1, t8, t9, strong2, t10, t11, strong3, t12, t13, strong4, t14, t15, strong5, t16, t17, strong6, t18, t19, strong7, t20, t21, strong8, t22, t23, strong9, t24, t25, strong10, t26, t27, strong11, t28, t29, strong12, t30, t31, strong13, t32, t33, t34, p3, t35, strong14, t36, t37, strong15, t38, t39, t40, img0, t41, img1;

	return {
		c: function create() {
			div = element("div");
			h1 = element("h1");
			t0 = text("The Origins of Theta Tau");
			t1 = space();
			p0 = element("p");
			t2 = text("In the Spring of 2009, several students of UCSD's Jacobs School of\n    Engineering felt that there was a lack of engineering representation in the\n    Greek community on campus. Luckily an opportunity arose for them to change\n    that.");
			t3 = space();
			p1 = element("p");
			t4 = text("With the help of a Theta Tau alumnus,\n    ");
			strong0 = element("strong");
			t5 = text("Jennifer Young");
			t6 = text("\n    , thirteen founding fathers took the first step towards establishing a\n    chapter of the nation's oldest and largest professional engineering\n    fraternity on the UCSD campus.");
			t7 = space();
			p2 = element("p");
			strong1 = element("strong");
			t8 = text("Ashay Verma");
			t9 = text(",\n    ");
			strong2 = element("strong");
			t10 = text("Errynne Bell");
			t11 = text(",\n    ");
			strong3 = element("strong");
			t12 = text("Takahiro Kuwayama");
			t13 = text(",\n    ");
			strong4 = element("strong");
			t14 = text("Amelia Chu");
			t15 = text(",\n    ");
			strong5 = element("strong");
			t16 = text("Xiumei Wu");
			t17 = text(",\n    ");
			strong6 = element("strong");
			t18 = text("Chris Lam");
			t19 = text(",\n    ");
			strong7 = element("strong");
			t20 = text("Chuong Do");
			t21 = text(",\n    ");
			strong8 = element("strong");
			t22 = text("Joe Shao");
			t23 = text(",\n    ");
			strong9 = element("strong");
			t24 = text("Michelle Mojica");
			t25 = text(",\n    ");
			strong10 = element("strong");
			t26 = text("Tanakorn Best Techajongchareon");
			t27 = text(",\n    ");
			strong11 = element("strong");
			t28 = text("Scott Louie");
			t29 = text(",\n    ");
			strong12 = element("strong");
			t30 = text("Alan Leung");
			t31 = text(",\n    and ");
			strong13 = element("strong");
			t32 = text("John Phu Nguyen");
			t33 = text(".");
			t34 = space();
			p3 = element("p");
			t35 = text("On November 20th, 2010, UCSD was installed as the \n    ");
			strong14 = element("strong");
			t36 = text("Epsilon Delta Chapter");
			t37 = text(" of \n    ");
			strong15 = element("strong");
			t38 = text("Theta Tau");
			t39 = text(".");
			t40 = space();
			img0 = element("img");
			t41 = space();
			img1 = element("img");
			this.h();
		},

		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { id: true, class: true }, false);
			var div_nodes = children(div);

			h1 = claim_element(div_nodes, "H1", { id: true, class: true }, false);
			var h1_nodes = children(h1);

			t0 = claim_text(h1_nodes, "The Origins of Theta Tau");
			h1_nodes.forEach(detach);
			t1 = claim_text(div_nodes, "\n  ");

			p0 = claim_element(div_nodes, "P", { class: true }, false);
			var p0_nodes = children(p0);

			t2 = claim_text(p0_nodes, "In the Spring of 2009, several students of UCSD's Jacobs School of\n    Engineering felt that there was a lack of engineering representation in the\n    Greek community on campus. Luckily an opportunity arose for them to change\n    that.");
			p0_nodes.forEach(detach);
			t3 = claim_text(div_nodes, "\n  ");

			p1 = claim_element(div_nodes, "P", { class: true }, false);
			var p1_nodes = children(p1);

			t4 = claim_text(p1_nodes, "With the help of a Theta Tau alumnus,\n    ");

			strong0 = claim_element(p1_nodes, "STRONG", {}, false);
			var strong0_nodes = children(strong0);

			t5 = claim_text(strong0_nodes, "Jennifer Young");
			strong0_nodes.forEach(detach);
			t6 = claim_text(p1_nodes, "\n    , thirteen founding fathers took the first step towards establishing a\n    chapter of the nation's oldest and largest professional engineering\n    fraternity on the UCSD campus.");
			p1_nodes.forEach(detach);
			t7 = claim_text(div_nodes, "\n  ");

			p2 = claim_element(div_nodes, "P", { class: true }, false);
			var p2_nodes = children(p2);

			strong1 = claim_element(p2_nodes, "STRONG", {}, false);
			var strong1_nodes = children(strong1);

			t8 = claim_text(strong1_nodes, "Ashay Verma");
			strong1_nodes.forEach(detach);
			t9 = claim_text(p2_nodes, ",\n    ");

			strong2 = claim_element(p2_nodes, "STRONG", {}, false);
			var strong2_nodes = children(strong2);

			t10 = claim_text(strong2_nodes, "Errynne Bell");
			strong2_nodes.forEach(detach);
			t11 = claim_text(p2_nodes, ",\n    ");

			strong3 = claim_element(p2_nodes, "STRONG", {}, false);
			var strong3_nodes = children(strong3);

			t12 = claim_text(strong3_nodes, "Takahiro Kuwayama");
			strong3_nodes.forEach(detach);
			t13 = claim_text(p2_nodes, ",\n    ");

			strong4 = claim_element(p2_nodes, "STRONG", {}, false);
			var strong4_nodes = children(strong4);

			t14 = claim_text(strong4_nodes, "Amelia Chu");
			strong4_nodes.forEach(detach);
			t15 = claim_text(p2_nodes, ",\n    ");

			strong5 = claim_element(p2_nodes, "STRONG", {}, false);
			var strong5_nodes = children(strong5);

			t16 = claim_text(strong5_nodes, "Xiumei Wu");
			strong5_nodes.forEach(detach);
			t17 = claim_text(p2_nodes, ",\n    ");

			strong6 = claim_element(p2_nodes, "STRONG", {}, false);
			var strong6_nodes = children(strong6);

			t18 = claim_text(strong6_nodes, "Chris Lam");
			strong6_nodes.forEach(detach);
			t19 = claim_text(p2_nodes, ",\n    ");

			strong7 = claim_element(p2_nodes, "STRONG", {}, false);
			var strong7_nodes = children(strong7);

			t20 = claim_text(strong7_nodes, "Chuong Do");
			strong7_nodes.forEach(detach);
			t21 = claim_text(p2_nodes, ",\n    ");

			strong8 = claim_element(p2_nodes, "STRONG", {}, false);
			var strong8_nodes = children(strong8);

			t22 = claim_text(strong8_nodes, "Joe Shao");
			strong8_nodes.forEach(detach);
			t23 = claim_text(p2_nodes, ",\n    ");

			strong9 = claim_element(p2_nodes, "STRONG", {}, false);
			var strong9_nodes = children(strong9);

			t24 = claim_text(strong9_nodes, "Michelle Mojica");
			strong9_nodes.forEach(detach);
			t25 = claim_text(p2_nodes, ",\n    ");

			strong10 = claim_element(p2_nodes, "STRONG", {}, false);
			var strong10_nodes = children(strong10);

			t26 = claim_text(strong10_nodes, "Tanakorn Best Techajongchareon");
			strong10_nodes.forEach(detach);
			t27 = claim_text(p2_nodes, ",\n    ");

			strong11 = claim_element(p2_nodes, "STRONG", {}, false);
			var strong11_nodes = children(strong11);

			t28 = claim_text(strong11_nodes, "Scott Louie");
			strong11_nodes.forEach(detach);
			t29 = claim_text(p2_nodes, ",\n    ");

			strong12 = claim_element(p2_nodes, "STRONG", {}, false);
			var strong12_nodes = children(strong12);

			t30 = claim_text(strong12_nodes, "Alan Leung");
			strong12_nodes.forEach(detach);
			t31 = claim_text(p2_nodes, ",\n    and ");

			strong13 = claim_element(p2_nodes, "STRONG", {}, false);
			var strong13_nodes = children(strong13);

			t32 = claim_text(strong13_nodes, "John Phu Nguyen");
			strong13_nodes.forEach(detach);
			t33 = claim_text(p2_nodes, ".");
			p2_nodes.forEach(detach);
			t34 = claim_text(div_nodes, "\n  ");

			p3 = claim_element(div_nodes, "P", { class: true }, false);
			var p3_nodes = children(p3);

			t35 = claim_text(p3_nodes, "On November 20th, 2010, UCSD was installed as the \n    ");

			strong14 = claim_element(p3_nodes, "STRONG", {}, false);
			var strong14_nodes = children(strong14);

			t36 = claim_text(strong14_nodes, "Epsilon Delta Chapter");
			strong14_nodes.forEach(detach);
			t37 = claim_text(p3_nodes, " of \n    ");

			strong15 = claim_element(p3_nodes, "STRONG", {}, false);
			var strong15_nodes = children(strong15);

			t38 = claim_text(strong15_nodes, "Theta Tau");
			strong15_nodes.forEach(detach);
			t39 = claim_text(p3_nodes, ".");
			p3_nodes.forEach(detach);
			t40 = claim_text(div_nodes, "\n  ");

			img0 = claim_element(div_nodes, "IMG", { id: true, src: true, alt: true, class: true }, false);
			var img0_nodes = children(img0);

			img0_nodes.forEach(detach);
			t41 = claim_text(div_nodes, "\n  ");

			img1 = claim_element(div_nodes, "IMG", { src: true, alt: true, class: true }, false);
			var img1_nodes = children(img1);

			img1_nodes.forEach(detach);
			div_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			attr(h1, "id", "letter-header");
			attr(h1, "class", "svelte-tlsyle");
			add_location(h1, file, 35, 2, 800);
			attr(p0, "class", "svelte-tlsyle");
			add_location(p0, file, 36, 2, 855);
			add_location(strong0, file, 44, 4, 1158);
			attr(p1, "class", "svelte-tlsyle");
			add_location(p1, file, 42, 2, 1108);
			add_location(strong1, file, 50, 4, 1389);
			add_location(strong2, file, 51, 4, 1423);
			add_location(strong3, file, 52, 4, 1458);
			add_location(strong4, file, 53, 4, 1498);
			add_location(strong5, file, 54, 4, 1531);
			add_location(strong6, file, 55, 4, 1563);
			add_location(strong7, file, 56, 4, 1595);
			add_location(strong8, file, 57, 4, 1627);
			add_location(strong9, file, 58, 4, 1658);
			add_location(strong10, file, 59, 4, 1696);
			add_location(strong11, file, 60, 4, 1749);
			add_location(strong12, file, 61, 4, 1783);
			add_location(strong13, file, 62, 8, 1820);
			attr(p2, "class", "svelte-tlsyle");
			add_location(p2, file, 49, 2, 1381);
			add_location(strong14, file, 66, 4, 1926);
			add_location(strong15, file, 67, 4, 1973);
			attr(p3, "class", "svelte-tlsyle");
			add_location(p3, file, 64, 2, 1863);
			attr(img0, "id", "founders");
			attr(img0, "src", "images/founders.jpg");
			attr(img0, "alt", "the mighty founders");
			attr(img0, "class", "svelte-tlsyle");
			add_location(img0, file, 69, 2, 2010);
			attr(img1, "src", "images/hamntongs.png");
			attr(img1, "alt", "the seals");
			attr(img1, "class", "svelte-tlsyle");
			add_location(img1, file, 70, 2, 2084);
			attr(div, "id", "letter");
			attr(div, "class", "svelte-tlsyle");
			add_location(div, file, 34, 0, 780);
		},

		m: function mount(target, anchor) {
			insert(target, div, anchor);
			append(div, h1);
			append(h1, t0);
			append(div, t1);
			append(div, p0);
			append(p0, t2);
			append(div, t3);
			append(div, p1);
			append(p1, t4);
			append(p1, strong0);
			append(strong0, t5);
			append(p1, t6);
			append(div, t7);
			append(div, p2);
			append(p2, strong1);
			append(strong1, t8);
			append(p2, t9);
			append(p2, strong2);
			append(strong2, t10);
			append(p2, t11);
			append(p2, strong3);
			append(strong3, t12);
			append(p2, t13);
			append(p2, strong4);
			append(strong4, t14);
			append(p2, t15);
			append(p2, strong5);
			append(strong5, t16);
			append(p2, t17);
			append(p2, strong6);
			append(strong6, t18);
			append(p2, t19);
			append(p2, strong7);
			append(strong7, t20);
			append(p2, t21);
			append(p2, strong8);
			append(strong8, t22);
			append(p2, t23);
			append(p2, strong9);
			append(strong9, t24);
			append(p2, t25);
			append(p2, strong10);
			append(strong10, t26);
			append(p2, t27);
			append(p2, strong11);
			append(strong11, t28);
			append(p2, t29);
			append(p2, strong12);
			append(strong12, t30);
			append(p2, t31);
			append(p2, strong13);
			append(strong13, t32);
			append(p2, t33);
			append(div, t34);
			append(div, p3);
			append(p3, t35);
			append(p3, strong14);
			append(strong14, t36);
			append(p3, t37);
			append(p3, strong15);
			append(strong15, t38);
			append(p3, t39);
			append(div, t40);
			append(div, img0);
			append(div, t41);
			append(div, img1);
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
