'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var sirv = _interopDefault(require('sirv'));
var polka = _interopDefault(require('polka'));
var compression = _interopDefault(require('compression'));
var fs = _interopDefault(require('fs'));
var path = _interopDefault(require('path'));
var Stream = _interopDefault(require('stream'));
var http = _interopDefault(require('http'));
var Url = _interopDefault(require('url'));
var https = _interopDefault(require('https'));
var zlib = _interopDefault(require('zlib'));

// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const posts = [
	{
		title: 'What is Sapper?',
		slug: 'what-is-sapper',
		html: `
			<p>First, you have to know what <a href='https://svelte.dev'>Svelte</a> is. Svelte is a UI framework with a bold new idea: rather than providing a library that you write code with (like React or Vue, for example), it's a compiler that turns your components into highly optimized vanilla JavaScript. If you haven't already read the <a href='https://svelte.dev/blog/frameworks-without-the-framework'>introductory blog post</a>, you should!</p>

			<p>Sapper is a Next.js-style framework (<a href='blog/how-is-sapper-different-from-next'>more on that here</a>) built around Svelte. It makes it embarrassingly easy to create extremely high performance web apps. Out of the box, you get:</p>

			<ul>
				<li>Code-splitting, dynamic imports and hot module replacement, powered by webpack</li>
				<li>Server-side rendering (SSR) with client-side hydration</li>
				<li>Service worker for offline support, and all the PWA bells and whistles</li>
				<li>The nicest development experience you've ever had, or your money back</li>
			</ul>

			<p>It's implemented as Express middleware. Everything is set up and waiting for you to get started, but you keep complete control over the server, service worker, webpack config and everything else, so it's as flexible as you need it to be.</p>
		`
	},

	{
		title: 'How to use Sapper',
		slug: 'how-to-use-sapper',
		html: `
			<h2>Step one</h2>
			<p>Create a new project, using <a href='https://github.com/Rich-Harris/degit'>degit</a>:</p>

			<pre><code>npx degit "sveltejs/sapper-template#rollup" my-app
			cd my-app
			npm install # or yarn!
			npm run dev
			</code></pre>

			<h2>Step two</h2>
			<p>Go to <a href='http://localhost:3000'>localhost:3000</a>. Open <code>my-app</code> in your editor. Edit the files in the <code>src/routes</code> directory or add new ones.</p>

			<h2>Step three</h2>
			<p>...</p>

			<h2>Step four</h2>
			<p>Resist overdone joke formats.</p>
		`
	},

	{
		title: 'Why the name?',
		slug: 'why-the-name',
		html: `
			<p>In war, the soldiers who build bridges, repair roads, clear minefields and conduct demolitions — all under combat conditions — are known as <em>sappers</em>.</p>

			<p>For web developers, the stakes are generally lower than those for combat engineers. But we face our own hostile environment: underpowered devices, poor network connections, and the complexity inherent in front-end engineering. Sapper, which is short for <strong>S</strong>velte <strong>app</strong> mak<strong>er</strong>, is your courageous and dutiful ally.</p>
		`
	},

	{
		title: 'How is Sapper different from Next.js?',
		slug: 'how-is-sapper-different-from-next',
		html: `
			<p><a href='https://github.com/zeit/next.js'>Next.js</a> is a React framework from <a href='https://zeit.co'>Zeit</a>, and is the inspiration for Sapper. There are a few notable differences, however:</p>

			<ul>
				<li>It's powered by <a href='https://svelte.dev'>Svelte</a> instead of React, so it's faster and your apps are smaller</li>
				<li>Instead of route masking, we encode route parameters in filenames. For example, the page you're looking at right now is <code>src/routes/blog/[slug].html</code></li>
				<li>As well as pages (Svelte components, which render on server or client), you can create <em>server routes</em> in your <code>routes</code> directory. These are just <code>.js</code> files that export functions corresponding to HTTP methods, and receive Express <code>request</code> and <code>response</code> objects as arguments. This makes it very easy to, for example, add a JSON API such as the one <a href='blog/how-is-sapper-different-from-next.json'>powering this very page</a></li>
				<li>Links are just <code>&lt;a&gt;</code> elements, rather than framework-specific <code>&lt;Link&gt;</code> components. That means, for example, that <a href='blog/how-can-i-get-involved'>this link right here</a>, despite being inside a blob of HTML, works with the router as you'd expect.</li>
			</ul>
		`
	},

	{
		title: 'How can I get involved?',
		slug: 'how-can-i-get-involved',
		html: `
			<p>We're so glad you asked! Come on over to the <a href='https://github.com/sveltejs/svelte'>Svelte</a> and <a href='https://github.com/sveltejs/sapper'>Sapper</a> repos, and join us in the <a href='https://svelte.dev/chat'>Discord chatroom</a>. Everyone is welcome, especially you!</p>
		`
	}
];

posts.forEach(post => {
	post.html = post.html.replace(/^\t{3}/gm, '');
});

const contents = JSON.stringify(posts.map(post => {
	return {
		title: post.title,
		slug: post.slug
	};
}));

function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}

var route_0 = /*#__PURE__*/Object.freeze({
	get: get
});

const lookup = new Map();
posts.forEach(post => {
	lookup.set(post.slug, JSON.stringify(post));
});

function get$1(req, res, next) {
	// the `slug` parameter is available because
	// this file is called [slug].json.js
	const { slug } = req.params;

	if (lookup.has(slug)) {
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});

		res.end(lookup.get(slug));
	} else {
		res.writeHead(404, {
			'Content-Type': 'application/json'
		});

		res.end(JSON.stringify({
			message: `Not found`
		}));
	}
}

var route_1 = /*#__PURE__*/Object.freeze({
	get: get$1
});

function noop() { }
function run(fn) {
    return fn();
}
function blank_object() {
    return Object.create(null);
}
function run_all(fns) {
    fns.forEach(run);
}
function safe_not_equal(a, b) {
    return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
}

let current_component;
function set_current_component(component) {
    current_component = component;
}
function get_current_component() {
    if (!current_component)
        throw new Error(`Function called outside component initialization`);
    return current_component;
}
function onMount(fn) {
    get_current_component().$$.on_mount.push(fn);
}
function setContext(key, context) {
    get_current_component().$$.context.set(key, context);
}
const escaped = {
    '"': '&quot;',
    "'": '&#39;',
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;'
};
function escape(html) {
    return String(html).replace(/["'&<>]/g, match => escaped[match]);
}
function each(items, fn) {
    let str = '';
    for (let i = 0; i < items.length; i += 1) {
        str += fn(items[i], i);
    }
    return str;
}
const missing_component = {
    $$render: () => ''
};
function validate_component(component, name) {
    if (!component || !component.$$render) {
        if (name === 'svelte:component')
            name += ' this={...}';
        throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`);
    }
    return component;
}
let on_destroy;
function create_ssr_component(fn) {
    function $$render(result, props, bindings, slots) {
        const parent_component = current_component;
        const $$ = {
            on_destroy,
            context: new Map(parent_component ? parent_component.$$.context : []),
            // these will be immediately discarded
            on_mount: [],
            before_render: [],
            after_render: [],
            callbacks: blank_object()
        };
        set_current_component({ $$ });
        const html = fn(result, props, bindings, slots);
        set_current_component(parent_component);
        return html;
    }
    return {
        render: (props = {}, options = {}) => {
            on_destroy = [];
            const result = { head: '', css: new Set() };
            const html = $$render(result, props, {}, options);
            run_all(on_destroy);
            return {
                html,
                css: {
                    code: Array.from(result.css).map(css => css.code).join('\n'),
                    map: null // TODO
                },
                head: result.head
            };
        },
        $$render
    };
}

/* src\components\Hero.svelte generated by Svelte v3.6.2 */

const css = {
	code: ".parallax.svelte-7he76g{position:absolute;top:4em;width:50em;height:30em;left:50%;margin-left:-25em;will-change:transform;display:none;z-index:-1}@media(min-width: 1000px){.parallax.svelte-7he76g{display:block}}@media(max-width: 999px){h1.text-display.svelte-7he76g{font-size:3em}}h1.text-display.svelte-7he76g{text-align:center;margin-top:2em;padding:3em 5em 0 5em;color:white;text-shadow:0 0 10px black;font-size:5em;padding:0.1em;background-color:rgba(128, 0, 0, 0.7);filter:drop-shadow(0 0 0.3em yellow);z-index:1}",
	map: "{\"version\":3,\"file\":\"Hero.svelte\",\"sources\":[\"Hero.svelte\"],\"sourcesContent\":[\"<!-- Taken from https://github.com/sveltejs/site-kit/blob/master/components/ParallaxLogo.svelte -->\\r\\n<!-- Draws an SVG along with a big title and a small title. See: index.svelte -->\\r\\n\\r\\n<script>\\r\\n\\timport { fade, fly } from 'svelte/transition';\\r\\n\\timport { onMount } from 'svelte';\\r\\n\\r\\n\\tlet visible = false;\\r\\n\\r\\n\\texport let svg;\\r\\n\\texport let titleBig;\\r\\n\\texport let titleSmall;\\r\\n\\r\\n\\tlet sy = 0;\\r\\n\\tlet iw = 0;\\r\\n\\r\\n\\t$: dispSmall = iw <= 1000;\\r\\n\\r\\n\\tonMount(()=> {\\r\\n\\t\\tvisible = true;\\r\\n\\t})\\r\\n</script>\\r\\n\\r\\n<svelte:window bind:scrollY={sy} bind:innerWidth={iw}/>\\r\\n\\r\\n<style>\\r\\n\\t.parallax {\\r\\n\\t\\tposition: absolute;\\r\\n\\t\\ttop: 4em;\\r\\n\\t\\twidth: 50em;\\r\\n\\t\\theight: 30em;\\r\\n\\t\\tleft: 50%;\\r\\n\\t\\tmargin-left: -25em;\\r\\n\\t\\twill-change: transform;\\r\\n\\t\\tdisplay: none;\\r\\n\\t\\tz-index: -1;\\r\\n\\t}\\r\\n\\r\\n\\t@media (min-width: 1000px) {\\r\\n\\t\\t.parallax {\\r\\n\\t\\t\\tdisplay: block;\\r\\n\\t\\t}\\r\\n\\t}\\r\\n\\t@media (max-width: 999px) {\\r\\n\\t\\th1.text-display {\\r\\n\\t\\t\\tfont-size: 3em;\\r\\n\\t\\t}\\r\\n\\t}\\r\\n\\r\\n\\th1.text-display {\\r\\n\\t\\t/* position: relative; */\\r\\n\\t\\ttext-align: center;\\r\\n\\t\\tmargin-top: 2em;\\r\\n\\t\\tpadding: 3em 5em 0 5em;\\r\\n\\t\\t/* top: 1.9em;\\r\\n\\t\\tleft: 3.5em;\\r\\n\\t\\tright: 3.5em;\\r\\n\\t\\tmin-width: 10em; */\\r\\n\\t\\tcolor: white;\\r\\n\\t\\ttext-shadow: 0 0 10px black;\\r\\n\\t\\tfont-size: 5em;\\r\\n\\t\\tpadding: 0.1em;\\r\\n\\t\\tbackground-color: rgba(128, 0, 0, 0.7);\\r\\n\\t\\tfilter: drop-shadow(0 0 0.3em yellow);\\r\\n\\t\\tz-index: 1;\\r\\n\\t}\\r\\n\\r\\n\\r\\n</style>\\r\\n\\r\\n{#if visible}\\r\\n\\t<h1 \\r\\n\\t\\tclass=\\\"text-display lg-view\\\" \\r\\n\\t\\tin:fade\\r\\n\\t>\\r\\n\\t\\t{dispSmall ? titleSmall : titleBig}\\r\\n\\t</h1>\\r\\n{/if}\\r\\n{#if visible}\\r\\n\\t<svg \\r\\n\\t\\txmlns=\\\"http://www.w3.org/2000/svg\\\"\\r\\n\\t\\tviewBox=\\\"0 0 64 64\\\"\\r\\n\\t\\twidth=\\\"64px\\\"\\r\\n\\t\\theight=\\\"64px\\\"\\r\\n\\t\\tclass=\\\"parallax\\\"\\r\\n\\t\\tstyle=\\\"transform: translate(0, {sy * .4}px)\\\"\\r\\n\\t>\\r\\n\\t\\t<path\\r\\n\\t\\t\\td={svg}\\r\\n\\t\\t\\topacity=\\\"0.6\\\" \\r\\n\\t\\t\\tin:fly=\\\"{{y: -5, delay: 250}}\\\"\\r\\n\\t\\t/>\\r\\n\\t</svg>\\r\\n{/if}\\r\\n\\r\\n\\t<!-- <img {alt} {src} class=\\\"parallax\\\" style=\\\"transform: translate(0, {sy * .4}px)\\\"> -->\"],\"names\":[],\"mappings\":\"AA0BC,SAAS,cAAC,CAAC,AACV,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,GAAG,CACR,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,IAAI,CAAE,GAAG,CACT,WAAW,CAAE,KAAK,CAClB,WAAW,CAAE,SAAS,CACtB,OAAO,CAAE,IAAI,CACb,OAAO,CAAE,EAAE,AACZ,CAAC,AAED,MAAM,AAAC,YAAY,MAAM,CAAC,AAAC,CAAC,AAC3B,SAAS,cAAC,CAAC,AACV,OAAO,CAAE,KAAK,AACf,CAAC,AACF,CAAC,AACD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAC1B,EAAE,aAAa,cAAC,CAAC,AAChB,SAAS,CAAE,GAAG,AACf,CAAC,AACF,CAAC,AAED,EAAE,aAAa,cAAC,CAAC,AAEhB,UAAU,CAAE,MAAM,CAClB,UAAU,CAAE,GAAG,CACf,OAAO,CAAE,GAAG,CAAC,GAAG,CAAC,CAAC,CAAC,GAAG,CAKtB,KAAK,CAAE,KAAK,CACZ,WAAW,CAAE,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,KAAK,CAC3B,SAAS,CAAE,GAAG,CACd,OAAO,CAAE,KAAK,CACd,gBAAgB,CAAE,KAAK,GAAG,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CACtC,MAAM,CAAE,YAAY,CAAC,CAAC,CAAC,CAAC,KAAK,CAAC,MAAM,CAAC,CACrC,OAAO,CAAE,CAAC,AACX,CAAC\"}"
};

const Hero = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	

	let visible = false;

	let { svg, titleBig, titleSmall } = $$props;

	let sy = 0;

	onMount(()=> {
		visible = true;
	});

	if ($$props.svg === void 0 && $$bindings.svg && svg !== void 0) $$bindings.svg(svg);
	if ($$props.titleBig === void 0 && $$bindings.titleBig && titleBig !== void 0) $$bindings.titleBig(titleBig);
	if ($$props.titleSmall === void 0 && $$bindings.titleSmall && titleSmall !== void 0) $$bindings.titleSmall(titleSmall);

	$$result.css.add(css);

	return `








	${ visible ? `<h1 class="text-display lg-view svelte-7he76g">
			${escape( titleSmall )}
		</h1>` : `` }
	${ visible ? `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64px" height="64px" class="parallax svelte-7he76g" style="transform: translate(0, ${escape(sy * .4)}px)">
			<path${(v => v == null ? "" : ` d="${escape(svg)}"`)(svg)} opacity="0.6"></path>
		</svg>` : `` }

		`;
});

/* src\components\WeAre.svelte generated by Svelte v3.6.2 */

const css$1 = {
	code: "@media(min-width: 1000px){h1.svelte-143iulj{font-size:4em}}@media(max-width: 999px){h1.svelte-143iulj{font-size:2em}}h1#we-are-container.svelte-143iulj{background-color:rgba(255, 255, 255, 0.6);padding:0 10px}",
	map: "{\"version\":3,\"file\":\"WeAre.svelte\",\"sources\":[\"WeAre.svelte\"],\"sourcesContent\":[\"<!-- Displays \\\"We are ...\\\" with a series of different messages passed in as\\r\\nbrother labels. -->\\r\\n\\r\\n<script>\\r\\n    import {fade} from 'svelte/transition';\\r\\n    import {onMount} from 'svelte';\\r\\n\\r\\n    export let brotherLabels;\\r\\n\\r\\n    let visible = false;\\r\\n    let weAreVisible = false;\\r\\n    let wordIndex = 0;\\r\\n\\r\\n    onMount(() => {\\r\\n        weAreVisible = true;\\r\\n        setInterval(() => {\\r\\n            visible = true;\\r\\n            setTimeout(() => {\\r\\n                visible = false;\\r\\n                wordIndex = pickNextIndex(wordIndex);\\r\\n            }, 1000);\\r\\n        }, 1500)\\r\\n    });\\r\\n\\r\\n    function pickNextIndex(curIndex) {\\r\\n        let nextIndex = Math.floor(Math.random() * brotherLabels.length);\\r\\n        if (nextIndex === curIndex) {\\r\\n            return (curIndex + 1) % brotherLabels.length\\r\\n        }\\r\\n        return nextIndex;\\r\\n    }\\r\\n\\r\\n\\r\\n    function typewriter(node, { speed = 50 }) {\\r\\n\\t\\tif (wordIndex < 0 || wordIndex >= brotherLabels.length) {\\r\\n\\t\\t\\tthrow new Error(`wordIndex out of bounds.`);\\r\\n\\t\\t}\\r\\n            \\r\\n\\t\\tconst text = brotherLabels[wordIndex];\\r\\n        const duration = text.length * speed;\\r\\n\\r\\n\\t\\treturn {\\r\\n\\t\\t\\tduration,\\r\\n\\t\\t\\ttick: t => {\\r\\n\\t\\t\\t\\tconst i = ~~(text.length * t);\\r\\n\\t\\t\\t\\tnode.textContent = text.slice(0, i);\\r\\n\\t\\t\\t}\\r\\n        };\\r\\n\\t}\\r\\n</script>\\r\\n\\r\\n<style>\\r\\n    @media (min-width: 1000px) {\\r\\n        h1 {\\r\\n            font-size: 4em;\\r\\n        }\\r\\n    }\\r\\n    @media (max-width: 999px) {\\r\\n        h1 {\\r\\n            /* text-align: center; */\\r\\n            font-size: 2em;\\r\\n        }\\r\\n    }\\r\\n\\r\\n    h1#we-are-container {\\r\\n        background-color: rgba(255, 255, 255, 0.6);\\r\\n        padding: 0 10px;\\r\\n    }\\r\\n</style>\\r\\n\\r\\n<section>\\r\\n    <h1 id=\\\"we-are-container\\\">\\r\\n        {#if weAreVisible}\\r\\n            <span class=\\\"formal\\\" in:fade>We are </span>\\r\\n        {/if}\\r\\n        {#if visible}\\r\\n            <span class=\\\"formal\\\"\\r\\n                in:typewriter\\r\\n                out:fade=\\\"{{duration: 280}}\\\"\\r\\n            >\\r\\n                {brotherLabels[wordIndex]}\\r\\n            </span>\\r\\n        {/if}\\r\\n    </h1>\\r\\n</section>\\r\\n\"],\"names\":[],\"mappings\":\"AAoDI,MAAM,AAAC,YAAY,MAAM,CAAC,AAAC,CAAC,AACxB,EAAE,eAAC,CAAC,AACA,SAAS,CAAE,GAAG,AAClB,CAAC,AACL,CAAC,AACD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AACvB,EAAE,eAAC,CAAC,AAEA,SAAS,CAAE,GAAG,AAClB,CAAC,AACL,CAAC,AAED,EAAE,iBAAiB,eAAC,CAAC,AACjB,gBAAgB,CAAE,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAC1C,OAAO,CAAE,CAAC,CAAC,IAAI,AACnB,CAAC\"}"
};

const WeAre = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	

    let { brotherLabels } = $$props;

    let visible = false;
    let weAreVisible = false;
    let wordIndex = 0;

    onMount(() => {
        weAreVisible = true;
        setInterval(() => {
            visible = true;
            setTimeout(() => {
                visible = false;
                wordIndex = pickNextIndex(wordIndex);
            }, 1000);
        }, 1500);
    });

    function pickNextIndex(curIndex) {
        let nextIndex = Math.floor(Math.random() * brotherLabels.length);
        if (nextIndex === curIndex) {
            return (curIndex + 1) % brotherLabels.length
        }
        return nextIndex;
    }

	if ($$props.brotherLabels === void 0 && $$bindings.brotherLabels && brotherLabels !== void 0) $$bindings.brotherLabels(brotherLabels);

	$$result.css.add(css$1);

	return `





	<section>
	    <h1 id="we-are-container" class="svelte-143iulj">
	        ${ weAreVisible ? `<span class="formal">We are </span>` : `` }
	        ${ visible ? `<span class="formal">
	                ${escape(brotherLabels[wordIndex])}
	            </span>` : `` }
	    </h1>
	</section>`;
});

/* src\components\Pillars.svelte generated by Svelte v3.6.2 */

const css$2 = {
	code: ".pillars.svelte-1tqn20a{display:flex;flex-direction:row;margin:1em 0}.pillar.svelte-1tqn20a{display:flex;flex-direction:column;align-items:center;width:40em;max-width:calc(33vw - 10em);border:4px maroon solid;margin:1em;padding:2em;background-color:white}.pillar.svelte-1tqn20a img.svelte-1tqn20a{width:10em}.pillar.svelte-1tqn20a h4.svelte-1tqn20a{font-size:1.8em;color:maroon;text-align:center;border-bottom:3px maroon solid}@media(max-width: 1000px){.pillars.svelte-1tqn20a{flex-direction:column}.pillar.svelte-1tqn20a{max-width:calc(100vw - 6em);width:30em;margin-left:auto;margin-right:auto}}",
	map: "{\"version\":3,\"file\":\"Pillars.svelte\",\"sources\":[\"Pillars.svelte\"],\"sourcesContent\":[\"<style>\\r\\n  .pillars {\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    margin: 1em 0;\\r\\n  }\\r\\n\\r\\n  .pillar {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n    width: 40em;\\r\\n    max-width: calc(33vw - 10em);\\r\\n    border: 4px maroon solid;\\r\\n    margin: 1em;\\r\\n    padding: 2em;\\r\\n    background-color: white;\\r\\n  }\\r\\n\\r\\n  .pillar img {\\r\\n    width: 10em;\\r\\n  }\\r\\n\\r\\n  .pillar h4 {\\r\\n    font-size: 1.8em;\\r\\n    color: maroon;\\r\\n    text-align: center;\\r\\n    border-bottom: 3px maroon solid;\\r\\n  }\\r\\n\\r\\n  @media (max-width: 1000px) {\\r\\n    .pillars {\\r\\n      flex-direction: column;\\r\\n    }\\r\\n\\r\\n    .pillar {\\r\\n      max-width: calc(100vw - 6em);\\r\\n      width: 30em;\\r\\n      margin-left: auto;\\r\\n      margin-right: auto;\\r\\n    }\\r\\n  }\\r\\n</style>\\r\\n\\r\\n<h1>About</h1>\\r\\n\\r\\n<h3>Theta Tau bases its moral tenets in three pillars:</h3>\\r\\n\\r\\n<div class=\\\"pillars\\\">\\r\\n  <div class=\\\"pillar\\\">\\r\\n    <img src=\\\"icons/pillar.png\\\" alt=\\\"pillar\\\" />\\r\\n    <h4>Brotherhood</h4>\\r\\n    <p>\\r\\n      We strive to make the group as\\r\\n      <strong>closely knit as possible</strong>\\r\\n      throughout one’s college years. Our goal is to develop bonds between our\\r\\n      brothers that will last a lifetime. We foster an inviting, safe, and\\r\\n      social environment in which our members become\\r\\n      <strong>lifelong friends</strong>.\\r\\n    </p>\\r\\n  </div>\\r\\n  <div class=\\\"pillar\\\">\\r\\n    <img src=\\\"icons/pillar.png\\\" alt=\\\"pillar\\\" />\\r\\n    <h4>Philanthropy</h4>\\r\\n    <p>\\r\\n      For the purpose of our members’ personal growth, as well as our\\r\\n      community’s benefits, we are involved in projects that <strong>give back \\r\\n      to the community</strong> around us. Serving alongside brothers will \\r\\n      establish strong bonds and also guarantee a truly <strong>meaningful time\\r\\n      through one’s college years</strong>.\\r\\n    </p>\\r\\n  </div>\\r\\n  <div class=\\\"pillar\\\">\\r\\n    <img src=\\\"icons/pillar.png\\\" alt=\\\"pillar\\\" />\\r\\n    <h4>Professionalism</h4>\\r\\n    <p>\\r\\n      We also seek to shape up one’s professional interests to prepare them for\\r\\n      their <strong>life ahead of college</strong>. We plan various \\r\\n      <strong>networking opportunities</strong> as well as events that provide \\r\\n      a sneak peek at different professional careers. Brothers have gone on \\r\\n      to work at <strong>top companies</strong>, pursue their \\r\\n      <strong>passions</strong>, and help each other <strong>realize\\r\\n      their full potential</strong>.\\r\\n    </p>\\r\\n  </div>\\r\\n</div>\"],\"names\":[],\"mappings\":\"AACE,QAAQ,eAAC,CAAC,AACR,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,GAAG,CACnB,MAAM,CAAE,GAAG,CAAC,CAAC,AACf,CAAC,AAED,OAAO,eAAC,CAAC,AACP,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,MAAM,CACnB,KAAK,CAAE,IAAI,CACX,SAAS,CAAE,KAAK,IAAI,CAAC,CAAC,CAAC,IAAI,CAAC,CAC5B,MAAM,CAAE,GAAG,CAAC,MAAM,CAAC,KAAK,CACxB,MAAM,CAAE,GAAG,CACX,OAAO,CAAE,GAAG,CACZ,gBAAgB,CAAE,KAAK,AACzB,CAAC,AAED,sBAAO,CAAC,GAAG,eAAC,CAAC,AACX,KAAK,CAAE,IAAI,AACb,CAAC,AAED,sBAAO,CAAC,EAAE,eAAC,CAAC,AACV,SAAS,CAAE,KAAK,CAChB,KAAK,CAAE,MAAM,CACb,UAAU,CAAE,MAAM,CAClB,aAAa,CAAE,GAAG,CAAC,MAAM,CAAC,KAAK,AACjC,CAAC,AAED,MAAM,AAAC,YAAY,MAAM,CAAC,AAAC,CAAC,AAC1B,QAAQ,eAAC,CAAC,AACR,cAAc,CAAE,MAAM,AACxB,CAAC,AAED,OAAO,eAAC,CAAC,AACP,SAAS,CAAE,KAAK,KAAK,CAAC,CAAC,CAAC,GAAG,CAAC,CAC5B,KAAK,CAAE,IAAI,CACX,WAAW,CAAE,IAAI,CACjB,YAAY,CAAE,IAAI,AACpB,CAAC,AACH,CAAC\"}"
};

const Pillars = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	$$result.css.add(css$2);

	return `<h1>About</h1>

	<h3>Theta Tau bases its moral tenets in three pillars:</h3>

	<div class="pillars svelte-1tqn20a">
	  <div class="pillar svelte-1tqn20a">
	    <img src="icons/pillar.png" alt="pillar" class="svelte-1tqn20a">
	    <h4 class="svelte-1tqn20a">Brotherhood</h4>
	    <p>
	      We strive to make the group as
	      <strong>closely knit as possible</strong>
	      throughout one’s college years. Our goal is to develop bonds between our
	      brothers that will last a lifetime. We foster an inviting, safe, and
	      social environment in which our members become
	      <strong>lifelong friends</strong>.
	    </p>
	  </div>
	  <div class="pillar svelte-1tqn20a">
	    <img src="icons/pillar.png" alt="pillar" class="svelte-1tqn20a">
	    <h4 class="svelte-1tqn20a">Philanthropy</h4>
	    <p>
	      For the purpose of our members’ personal growth, as well as our
	      community’s benefits, we are involved in projects that <strong>give back 
	      to the community</strong> around us. Serving alongside brothers will 
	      establish strong bonds and also guarantee a truly <strong>meaningful time
	      through one’s college years</strong>.
	    </p>
	  </div>
	  <div class="pillar svelte-1tqn20a">
	    <img src="icons/pillar.png" alt="pillar" class="svelte-1tqn20a">
	    <h4 class="svelte-1tqn20a">Professionalism</h4>
	    <p>
	      We also seek to shape up one’s professional interests to prepare them for
	      their <strong>life ahead of college</strong>. We plan various 
	      <strong>networking opportunities</strong> as well as events that provide 
	      a sneak peek at different professional careers. Brothers have gone on 
	      to work at <strong>top companies</strong>, pursue their 
	      <strong>passions</strong>, and help each other <strong>realize
	      their full potential</strong>.
	    </p>
	  </div>
	</div>`;
});

/* src\components\Card.svelte generated by Svelte v3.6.2 */

const css$3 = {
	code: ".card.svelte-dwh743{margin-top:5em;background-color:white;border:4px solid black;width:100%;padding:15px}.wrapper.svelte-dwh743{display:flex;justify-items:center}.subcards.svelte-dwh743{padding:10px}.left-div.svelte-dwh743{border-right:5px dotted #333}.header.svelte-dwh743{padding-top:30px;min-width:100%;text-align:center}@media(max-width: 1000px){.wrapper.svelte-dwh743{flex-direction:column}.wrapper.svelte-dwh743 .subcards.svelte-dwh743{font-size:1em}.left-div.svelte-dwh743{border-right:none}}",
	map: "{\"version\":3,\"file\":\"Card.svelte\",\"sources\":[\"Card.svelte\"],\"sourcesContent\":[\"<!-- A card to display on any page. Contains a left-div and a right-div, as well as\\r\\na header. Put anything into the slots by using slot. see: index.svelte -->\\r\\n\\r\\n<script>\\r\\n    export let section;\\r\\n</script>\\r\\n\\r\\n<style>\\r\\n\\t.card {\\r\\n\\t\\tmargin-top: 5em;\\r\\n\\t\\tbackground-color: white;\\r\\n\\t\\tborder: 4px solid black;\\r\\n\\t\\twidth: 100%;\\r\\n        padding: 15px;\\r\\n    }\\r\\n\\r\\n    .wrapper {\\r\\n        display: flex;\\r\\n        justify-items: center;\\r\\n    }\\r\\n\\r\\n    .subcards {\\r\\n        padding: 10px;\\r\\n    }\\r\\n    \\r\\n    .left-div {\\r\\n        border-right: 5px dotted #333;\\r\\n    }\\r\\n\\r\\n    .header {\\r\\n        padding-top: 30px;\\r\\n        min-width: 100%;\\r\\n        text-align: center;\\r\\n    }\\r\\n\\r\\n    @media (max-width: 1000px) {\\r\\n        .wrapper {\\r\\n            flex-direction: column;\\r\\n        }\\r\\n        \\r\\n        .wrapper .subcards {\\r\\n            font-size: 1em;\\r\\n        }\\r\\n\\r\\n        .left-div {\\r\\n            border-right: none;\\r\\n            /* border-bottom: 5px dotted #333; */\\r\\n        }\\r\\n\\r\\n    }\\r\\n    \\r\\n</style>\\r\\n\\r\\n<section class=\\\"card\\\">\\r\\n    <slot name=\\\"header\\\" class=\\\"header\\\"></slot>\\r\\n    <hr>\\r\\n    <div class=\\\"wrapper\\\">\\r\\n        <section class=\\\"left-div subcards\\\">\\r\\n            <slot name=\\\"left\\\"></slot>\\r\\n        </section>\\r\\n        <section class=\\\"right-div subcards\\\">\\r\\n            <slot name=\\\"right\\\"></slot>\\r\\n        </section>\\r\\n    </div>\\r\\n</section>\"],\"names\":[],\"mappings\":\"AAQC,KAAK,cAAC,CAAC,AACN,UAAU,CAAE,GAAG,CACf,gBAAgB,CAAE,KAAK,CACvB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,CACvB,KAAK,CAAE,IAAI,CACL,OAAO,CAAE,IAAI,AACjB,CAAC,AAED,QAAQ,cAAC,CAAC,AACN,OAAO,CAAE,IAAI,CACb,aAAa,CAAE,MAAM,AACzB,CAAC,AAED,SAAS,cAAC,CAAC,AACP,OAAO,CAAE,IAAI,AACjB,CAAC,AAED,SAAS,cAAC,CAAC,AACP,YAAY,CAAE,GAAG,CAAC,MAAM,CAAC,IAAI,AACjC,CAAC,AAED,OAAO,cAAC,CAAC,AACL,WAAW,CAAE,IAAI,CACjB,SAAS,CAAE,IAAI,CACf,UAAU,CAAE,MAAM,AACtB,CAAC,AAED,MAAM,AAAC,YAAY,MAAM,CAAC,AAAC,CAAC,AACxB,QAAQ,cAAC,CAAC,AACN,cAAc,CAAE,MAAM,AAC1B,CAAC,AAED,sBAAQ,CAAC,SAAS,cAAC,CAAC,AAChB,SAAS,CAAE,GAAG,AAClB,CAAC,AAED,SAAS,cAAC,CAAC,AACP,YAAY,CAAE,IAAI,AAEtB,CAAC,AAEL,CAAC\"}"
};

const Card = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { section } = $$props;

	if ($$props.section === void 0 && $$bindings.section && section !== void 0) $$bindings.section(section);

	$$result.css.add(css$3);

	return `





	<section class="card svelte-dwh743">
	    ${$$slots.header ? $$slots.header({ class: `header svelte-dwh743` }) : ``}
	    <hr>
	    <div class="wrapper svelte-dwh743">
	        <section class="left-div subcards svelte-dwh743">
	            ${$$slots.left ? $$slots.left() : ``}
	        </section>
	        <section class="right-div subcards svelte-dwh743">
	            ${$$slots.right ? $$slots.right() : ``}
	        </section>
	    </div>
	</section>`;
});

const garnetUnfilled = "M 33.740234 2.0605469 C 32.610234 2.0605469 31.490234 2.339375 30.490234 2.859375 C 30.490234 2.859375 29.670234 3.2400781 29.490234 3.3300781 L 20.109375 8.0195312 C 19.629375 8.2595313 19.190547 8.5692188 18.810547 8.9492188 L 8.8300781 18.939453 C 8.5100781 19.249453 8.2395312 19.610234 8.0195312 19.990234 L 3.0292969 28.810547 C 2.3792969 29.900547 2.0292969 31.140156 2.0292969 32.410156 L 2.0976562 45.912109 C 2.0496562 46.744109 2.047375 47.552078 2.109375 48.330078 C 2.139375 48.740078 2.1902344 49.150781 2.2402344 49.550781 C 2.4102344 50.620781 2.6903125 51.609297 3.0703125 52.529297 C 3.1903125 52.809297 3.3209375 53.079609 3.4609375 53.349609 C 3.9309375 54.249609 4.5202344 55.069062 5.2402344 55.789062 C 5.5042344 56.053063 5.7813125 56.30025 6.0703125 56.53125 C 6.2393125 56.66625 6.4206563 56.784203 6.5976562 56.908203 C 6.7236563 56.996203 6.8426562 57.091828 6.9726562 57.173828 C 7.2296562 57.336828 7.5013906 57.480094 7.7753906 57.621094 C 7.8343906 57.651094 7.8892187 57.68975 7.9492188 57.71875 C 8.2692188 57.87575 8.6013594 58.014578 8.9433594 58.142578 C 8.9613594 58.149578 8.9790469 58.159016 8.9980469 58.166016 C 10.448047 58.701016 12.096687 58.976188 13.929688 58.992188 C 13.938688 58.993187 13.944125 58.998047 13.953125 58.998047 C 13.969125 59.000047 13.985 59 14 59 C 14.007 59 14.012531 58.996094 14.019531 58.996094 C 14.047531 58.996094 14.071609 59 14.099609 59 C 14.469609 59 14.840938 58.990938 15.210938 58.960938 C 15.670938 58.940937 16.129609 58.899609 16.599609 58.849609 L 16.619141 58.849609 L 55.5 56.910156 C 56.54 56.860156 57.360391 56.030234 57.400391 54.990234 L 58.890625 16.289062 C 58.900625 16.219062 58.970703 14.320391 58.970703 14.150391 C 58.970703 13.392391 58.907453 12.669797 58.814453 11.966797 C 58.771453 11.600797 58.720391 11.240625 58.650391 10.890625 C 58.640391 10.890625 58.640391 10.879141 58.650391 10.869141 C 58.440391 9.8591406 58.130703 8.9205469 57.720703 8.0605469 C 57.220703 7.0205469 56.569766 6.0795312 55.759766 5.2695312 C 53.629766 3.1395313 50.650391 2.0605469 46.900391 2.0605469 L 33.740234 2.0605469 z M 35.119141 4.0605469 L 43.669922 4.0605469 L 43.369141 4.390625 L 40.060547 7.9335938 C 39.689547 7.3175938 39.195312 6.7676094 38.570312 6.3496094 L 37.910156 5.9101562 L 35.890625 4.5703125 L 35.880859 4.5703125 L 35.119141 4.0605469 z M 46.900391 4.0605469 C 50.100391 4.0605469 52.599609 4.9396875 54.349609 6.6796875 C 54.579609 6.9096875 54.790234 7.1501562 54.990234 7.4101562 C 56.321234 9.1281562 56.978984 11.475016 56.958984 14.291016 L 37.683594 20.658203 L 40.539062 12.089844 C 40.768062 11.403844 40.824906 10.696812 40.753906 10.007812 L 46.160156 11.919922 C 46.270156 11.959922 46.380234 11.980469 46.490234 11.980469 C 46.900234 11.980469 47.289453 11.720547 47.439453 11.310547 C 47.619453 10.790547 47.350078 10.219063 46.830078 10.039062 L 42.320312 8.4394531 L 46.390625 4.0703125 C 46.560625 4.0603125 46.730391 4.0605469 46.900391 4.0605469 z M 31.720703 4.8007812 C 32.310703 4.8007812 32.890625 4.9707812 33.390625 5.3007812 L 33.75 5.5390625 L 35.679688 6.8300781 L 37.460938 8.0097656 C 38.580937 8.7597656 39.070625 10.180938 38.640625 11.460938 L 35.490234 20.900391 C 35.320234 21.400391 35.030625 21.849219 34.640625 22.199219 L 22.390625 33.080078 C 22.010625 33.420078 21.550781 33.659531 21.050781 33.769531 L 11.050781 35.990234 C 9.9207813 36.240234 8.7805469 35.829453 8.0605469 34.939453 L 7.4804688 34.210938 L 6.1503906 32.550781 L 6.140625 32.539062 L 5.6699219 31.949219 C 5.2299219 31.409219 5.0097656 30.750078 5.0097656 30.080078 C 5.0097656 29.750078 5.0596875 29.429375 5.1796875 29.109375 C 5.2296875 28.929375 5.3101562 28.759844 5.4101562 28.589844 L 9.7597656 20.980469 C 9.8897656 20.750469 10.050234 20.539609 10.240234 20.349609 L 20.220703 10.369141 C 20.450703 10.139141 20.72 9.9507813 21 9.8007812 L 30.380859 5.109375 C 30.530859 5.039375 30.679844 4.9796875 30.839844 4.9296875 C 31.129844 4.8396875 31.430703 4.8007813 31.720703 4.8007812 z M 50.310547 11.351562 C 49.921625 11.374859 49.564531 11.624875 49.425781 12.015625 C 49.241781 12.536625 49.514156 13.107969 50.035156 13.292969 L 52.482422 14.160156 C 52.592422 14.199156 52.705406 14.21875 52.816406 14.21875 C 53.228406 14.21875 53.613766 13.961781 53.759766 13.550781 C 53.943766 13.030781 53.670391 12.458438 53.150391 12.273438 L 50.703125 11.40625 C 50.573125 11.36025 50.440188 11.343797 50.310547 11.351562 z M 56.873047 16.423828 C 56.877047 16.450828 56.873906 16.483766 56.878906 16.509766 L 56.869141 16.769531 C 55.885141 24.060531 50.844734 33.314406 42.802734 41.566406 C 42.797734 41.542406 42.799969 41.518141 42.792969 41.494141 L 40.242188 32.804688 C 40.086188 32.274687 39.530953 31.967953 39.001953 32.126953 C 38.471953 32.281953 38.168219 32.837187 38.324219 33.367188 L 40.3125 40.146484 L 24.191406 34.160156 L 35.970703 23.689453 C 36.152703 23.527453 36.317656 23.350062 36.472656 23.164062 L 56.873047 16.423828 z M 56.560547 24.810547 L 55.400391 54.910156 L 25.279297 56.419922 C 31.399297 53.829922 37.839609 49.390859 43.599609 43.630859 C 49.619609 37.610859 54.050547 30.980547 56.560547 24.810547 z M 37.345703 25.099609 C 37.216797 25.084812 37.083172 25.095516 36.951172 25.134766 C 36.421172 25.289766 36.118437 25.845 36.273438 26.375 L 37.017578 28.914062 C 37.145578 29.350062 37.543563 29.632813 37.976562 29.632812 C 38.069563 29.632812 38.163813 29.619797 38.257812 29.591797 C 38.787813 29.436797 39.090547 28.881563 38.935547 28.351562 L 38.191406 25.8125 C 38.074406 25.415 37.732422 25.144 37.345703 25.099609 z M 4.0292969 33.089844 C 4.0492969 33.129844 4.079375 33.159219 4.109375 33.199219 L 5.1796875 34.529297 L 6.4902344 36.179688 C 6.5002344 36.199688 6.5192969 36.220469 6.5292969 36.230469 C 6.9452969 36.736469 7.4442344 37.138453 7.9902344 37.439453 C 7.9872344 37.529453 12.708984 56.933594 12.708984 56.933594 C 11.832984 56.856594 11.021578 56.699656 10.267578 56.472656 C 10.183578 56.447656 10.097625 56.423484 10.015625 56.396484 C 9.839625 56.338484 9.6709531 56.273031 9.5019531 56.207031 C 9.3839531 56.160031 9.2634375 56.1135 9.1484375 56.0625 C 9.0034375 55.9985 8.8636094 55.931328 8.7246094 55.861328 C 8.5906094 55.793328 8.4590781 55.722438 8.3300781 55.648438 C 8.2130781 55.581437 8.097375 55.513406 7.984375 55.441406 C 7.833375 55.344406 7.6879219 55.239766 7.5449219 55.134766 C 7.4599219 55.072766 7.3720625 55.012266 7.2890625 54.947266 C 7.0660625 54.769266 6.8514375 54.581859 6.6484375 54.380859 C 4.5694375 52.289859 3.73 49.210781 4 45.550781 L 7.5292969 40.25 C 7.8392969 39.79 7.7197656 39.169141 7.2597656 38.869141 C 6.7997656 38.559141 6.1791406 38.680625 5.8691406 39.140625 L 4.9492188 40.509766 L 4.9492188 40.529297 L 4.0292969 41.900391 L 4.0292969 33.089844 z M 22.130859 35.527344 L 41.484375 42.714844 C 41.532375 42.732844 41.583813 42.729234 41.632812 42.740234 C 33.416812 50.775234 23.95 56.028141 16.25 56.869141 L 16.089844 56.880859 C 16.004844 56.889859 15.927703 56.894344 15.845703 56.902344 C 15.783703 56.907344 15.719203 56.913969 15.658203 56.917969 C 15.579203 56.925969 15.502828 56.9305 15.423828 56.9375 L 19.464844 45.195312 C 19.644844 44.673313 19.36675 44.105781 18.84375 43.925781 C 18.32175 43.744781 17.751266 44.023875 17.572266 44.546875 L 14.162109 54.457031 L 10.142578 38.046875 C 10.221578 38.050875 10.300859 38.060547 10.380859 38.060547 C 10.750859 38.060547 11.120469 38.019453 11.480469 37.939453 L 21.490234 35.720703 C 21.708234 35.670703 21.921859 35.604344 22.130859 35.527344 z M 45.904297 43.990234 C 45.648547 43.990234 45.392766 44.087703 45.197266 44.283203 L 43.783203 45.697266 C 43.392203 46.087266 43.392203 46.720328 43.783203 47.111328 C 43.978203 47.306328 44.234234 47.404297 44.490234 47.404297 C 44.746234 47.404297 45.002266 47.306328 45.197266 47.111328 L 46.611328 45.697266 C 47.002328 45.306266 47.002328 44.674203 46.611328 44.283203 C 46.415828 44.087703 46.160047 43.990234 45.904297 43.990234 z M 49.439453 47.523438 C 49.183703 47.523437 48.927922 47.620906 48.732422 47.816406 L 47.318359 49.232422 C 46.927359 49.623422 46.927359 50.255484 47.318359 50.646484 C 47.513359 50.842484 47.769391 50.939453 48.025391 50.939453 C 48.281391 50.939453 48.537422 50.841484 48.732422 50.646484 L 50.146484 49.230469 C 50.537484 48.839469 50.537484 48.207406 50.146484 47.816406 C 49.950984 47.620906 49.695203 47.523438 49.439453 47.523438 z M 52.976562 51.060547 C 52.720812 51.060547 52.465031 51.158016 52.269531 51.353516 L 50.853516 52.767578 C 50.462516 53.158578 50.462516 53.790641 50.853516 54.181641 C 51.048516 54.376641 51.304547 54.474609 51.560547 54.474609 C 51.816547 54.474609 52.072578 54.376641 52.267578 54.181641 L 53.683594 52.767578 C 54.074594 52.376578 54.074594 51.744516 53.683594 51.353516 C 53.488094 51.158016 53.232313 51.060547 52.976562 51.060547 z";

/* src\routes\index.svelte generated by Svelte v3.6.2 */

const css$4 = {
	code: ".hero-div.svelte-12o40hp{height:32em;max-width:50em}p.svelte-12o40hp{padding:0 2em 1em 1em}@media(max-width: 999px){.hero-div.svelte-12o40hp{height:20em}body{background-color:white}h3.svelte-12o40hp{text-align:center}}figcaption.svelte-12o40hp{text-align:center;font-size:1.4em}#rush-video.svelte-12o40hp{max-width:50vw}",
	map: "{\"version\":3,\"file\":\"index.svelte\",\"sources\":[\"index.svelte\"],\"sourcesContent\":[\"<script>\\r\\n  import Hero from \\\"../components/Hero.svelte\\\";\\r\\n  import WeAre from \\\"../components/WeAre.svelte\\\";\\r\\n  import Pillars from \\\"../components/Pillars.svelte\\\";\\r\\n  import Card from \\\"../components/Card.svelte\\\";\\r\\n  import { garnetUnfilled } from \\\"../scripts/shapes.js\\\";\\r\\n\\r\\n  const brotherLabels = [\\r\\n    \\\"brothers\\\",\\r\\n    \\\"entrepreneurs\\\",\\r\\n    \\\"leaders\\\",\\r\\n    \\\"pioneers\\\",\\r\\n    \\\"philanthropists\\\",\\r\\n    \\\"friends\\\",\\r\\n    \\\"family\\\",\\r\\n    \\\"diverse\\\",\\r\\n    \\\"adventurers\\\",\\r\\n    \\\"pro gamers\\\",\\r\\n    \\\"youtube stars\\\",\\r\\n    \\\"CEOs\\\",\\r\\n    \\\"project managers\\\",\\r\\n    \\\"artists\\\",\\r\\n    \\\"inclusive\\\"\\r\\n  ];\\r\\n\\r\\n  let iw;\\r\\n</script>\\r\\n\\r\\n<svelte:window bind:innerWidth={iw}/>\\r\\n\\r\\n<style>\\r\\n  .hero-div {\\r\\n    /* width: 100%; */\\r\\n    height: 32em;\\r\\n    max-width: 50em;\\r\\n  }\\r\\n\\r\\n  p {\\r\\n    padding: 0 2em 1em 1em;\\r\\n  }\\r\\n\\r\\n  @media (max-width: 999px) {\\r\\n    .hero-div {\\r\\n      height: 20em;\\r\\n    }\\r\\n\\r\\n    :global(body) {\\r\\n      background-color: white;\\r\\n    }\\r\\n\\r\\n    h3 {\\r\\n      text-align: center;\\r\\n    }\\r\\n  }\\r\\n\\r\\n  figcaption {\\r\\n    text-align: center;\\r\\n    font-size: 1.4em;\\r\\n  }\\r\\n\\r\\n  #rush-video {\\r\\n    max-width: 50vw;\\r\\n  }\\r\\n</style>\\r\\n\\r\\n<svelte:head>\\r\\n  <title>UCSD Theta Tau</title>\\r\\n</svelte:head>\\r\\n\\r\\n<div class=\\\"hero-div\\\">\\r\\n  <Hero\\r\\n    titleBig=\\\"UCSD Theta Tau\\\"\\r\\n    titleSmall=\\\"UCSD ΘΤ\\\"\\r\\n    tagline=\\\"Epsilon Delta\\\"\\r\\n    svg={garnetUnfilled}\\r\\n    alt=\\\"a hero\\\" />\\r\\n</div>\\r\\n<WeAre {brotherLabels} />\\r\\n\\r\\n<Card>\\r\\n  <h3 slot=\\\"header\\\">\\r\\n    <strong>UC San Diego's premier engineering fraternity</strong>\\r\\n  </h3>\\r\\n  <section slot=\\\"left\\\">\\r\\n    <p>\\r\\n      Formed in 1904 with chapters in over 80 campuses, Theta Tau is both the\\r\\n      <strong>nation's largest and oldest co-ed engineering fraternity</strong>.\\r\\n      Our brothers develop each other to not only focus on one aspect of\\r\\n      ourselves, but on many. We strive to be well-rounded people who excel in\\r\\n      <strong>brotherhood</strong>,\\r\\n      <strong>philanthropy</strong>, and\\r\\n      <strong>professionalism</strong>.\\r\\n    </p>\\r\\n    <p>\\r\\n      Brothers assist each other with homework, open doors professionally,\\r\\n      provide a support system, improve the world for those in need, and hang\\r\\n      out with each other among many more things. In addition, a deep,\\r\\n      multidisciplinary network of alumni is always there to help at any time.\\r\\n      Most importantly, Theta Tau has brought people together to form\\r\\n      <strong>connections that will last a lifetime</strong>.\\r\\n    </p>\\r\\n    <p>\\r\\n      No matter where your interests lie or what kind of engineer you may be,\\r\\n      <strong>come check us out</strong>!\\r\\n    </p>\\r\\n  </section>\\r\\n  <figure slot=\\\"right\\\">\\r\\n    {#if iw > 1000}\\r\\n      <!-- width=\\\"1280\\\"\\r\\n      height=\\\"720\\\" -->\\r\\n      <iframe\\r\\n        id=\\\"rush-video\\\"\\r\\n        width=\\\"960\\\"\\r\\n        height=\\\"540\\\"\\r\\n        title=\\\"SP19 rush video\\\"\\r\\n        max-width=\\\"calc(100vw - 4em)\\\"\\r\\n        src=\\\"https://www.youtube.com/embed/FLfQ3UrGNKk\\\"\\r\\n        frameborder=\\\"0\\\"\\r\\n        allow=\\\"accelerometer; autoplay; encrypted-media; gyroscope;\\r\\n        picture-in-picture\\\"\\r\\n        allowfullscreen />\\r\\n      <figcaption>Our rush video for Spring 2019!</figcaption>\\r\\n    {/if}\\r\\n  </figure>\\r\\n</Card>\\r\\n\\r\\n<!-- <div class=\\\"pillars-div\\\">\\r\\n  <h1>the Three Pillars</h1>\\r\\n  <Pillars />\\r\\n</div> -->\\r\\n\"],\"names\":[],\"mappings\":\"AA+BE,SAAS,eAAC,CAAC,AAET,MAAM,CAAE,IAAI,CACZ,SAAS,CAAE,IAAI,AACjB,CAAC,AAED,CAAC,eAAC,CAAC,AACD,OAAO,CAAE,CAAC,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,AACxB,CAAC,AAED,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AACzB,SAAS,eAAC,CAAC,AACT,MAAM,CAAE,IAAI,AACd,CAAC,AAEO,IAAI,AAAE,CAAC,AACb,gBAAgB,CAAE,KAAK,AACzB,CAAC,AAED,EAAE,eAAC,CAAC,AACF,UAAU,CAAE,MAAM,AACpB,CAAC,AACH,CAAC,AAED,UAAU,eAAC,CAAC,AACV,UAAU,CAAE,MAAM,CAClB,SAAS,CAAE,KAAK,AAClB,CAAC,AAED,WAAW,eAAC,CAAC,AACX,SAAS,CAAE,IAAI,AACjB,CAAC\"}"
};

const Index = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	

  const brotherLabels = [
    "brothers",
    "entrepreneurs",
    "leaders",
    "pioneers",
    "philanthropists",
    "friends",
    "family",
    "diverse",
    "adventurers",
    "pro gamers",
    "youtube stars",
    "CEOs",
    "project managers",
    "artists",
    "inclusive"
  ];

	$$result.css.add(css$4);

	return `



	${($$result.head += `<title>UCSD Theta Tau</title>`, "")}

	<div class="hero-div svelte-12o40hp">
	  ${validate_component(Hero, 'Hero').$$render($$result, {
		titleBig: "UCSD Theta Tau",
		titleSmall: "UCSD ΘΤ",
		tagline: "Epsilon Delta",
		svg: garnetUnfilled,
		alt: "a hero"
	}, {}, {})}
	</div>
	${validate_component(WeAre, 'WeAre').$$render($$result, { brotherLabels: brotherLabels }, {}, {})}

	${validate_component(Card, 'Card').$$render($$result, {}, {}, {
		default: () => `
	  `,
		header: () => `<h3 slot="header" class="svelte-12o40hp">
	    <strong>UC San Diego's premier engineering fraternity</strong>
	  </h3>
	  `,
		left: () => `<section slot="left">
	    <p class="svelte-12o40hp">
	      Formed in 1904 with chapters in over 80 campuses, Theta Tau is both the
	      <strong>nation's largest and oldest co-ed engineering fraternity</strong>.
	      Our brothers develop each other to not only focus on one aspect of
	      ourselves, but on many. We strive to be well-rounded people who excel in
	      <strong>brotherhood</strong>,
	      <strong>philanthropy</strong>, and
	      <strong>professionalism</strong>.
	    </p>
	    <p class="svelte-12o40hp">
	      Brothers assist each other with homework, open doors professionally,
	      provide a support system, improve the world for those in need, and hang
	      out with each other among many more things. In addition, a deep,
	      multidisciplinary network of alumni is always there to help at any time.
	      Most importantly, Theta Tau has brought people together to form
	      <strong>connections that will last a lifetime</strong>.
	    </p>
	    <p class="svelte-12o40hp">
	      No matter where your interests lie or what kind of engineer you may be,
	      <strong>come check us out</strong>!
	    </p>
	  </section>
	  `,
		right: () => `<figure slot="right">
	    ${  `` }
	  </figure>
	`
	})}

	`;
});

/* src\components\PledgeClass.svelte generated by Svelte v3.6.2 */

const css$5 = {
	code: ".cursor-box.svelte-13n5avd{position:absolute;padding:50px;border:5px maroon dashed;filter:drop-shadow(0 0 3px white);z-index:2;cursor:pointer;border-radius:40px}.class-img-container.svelte-13n5avd{position:absolute;top:180px;left:70px;border:5px black solid}.class-img-container.svelte-13n5avd img.svelte-13n5avd{background-color:black;cursor:pointer;width:900px}.brother-info.svelte-13n5avd{padding-top:150px;margin-left:800px;z-index:5;height:500px}",
	map: "{\"version\":3,\"file\":\"PledgeClass.svelte\",\"sources\":[\"PledgeClass.svelte\"],\"sourcesContent\":[\"<script>\\r\\n  import { elasticOut } from \\\"svelte/easing\\\";\\r\\n\\r\\n  // Contains an array of Javascript objects.\\r\\n  // Each object contains: \\r\\n  // [\\r\\n  //    {\\r\\n  //         className: string\\r\\n  //         image: string (url to image)\\r\\n  //         members: [{\\r\\n  //           name: string\\r\\n  //           major: string\\r\\n  //           pixelLocationX: number (pixel location on class picture)\\r\\n  //           pixelLocationY: number (same but on y axis)\\r\\n  //           linkedIn: string (the url)\\r\\n  //         },\\r\\n  //     ...]\\r\\n  //    },\\r\\n  // ...]\\r\\n  // basically an ar\\r\\n  // order from newest to oldest\\r\\n  export let pledgeClasses;\\r\\n\\r\\n  let visible = true;\\r\\n  let boxVisible = false;\\r\\n\\r\\n  let classIndex = 0;\\r\\n  let curClass = pledgeClasses[classIndex];\\r\\n\\r\\n  // let curBrother = curClass.members[0]\\r\\n  let curBrother;\\r\\n\\r\\n  let my, mx, sy, sx;\\r\\n  $: picX = `${mx - 55}px`\\r\\n  $: picY = `${my - 140}px`\\r\\n\\r\\n  function handleMouseClick(event) {\\r\\n\\t\\tmx = event.clientX;\\r\\n\\t\\tmy = event.clientY;\\r\\n    boxVisible = true;\\r\\n    curBrother = findNearestBrother();\\r\\n\\r\\n  }\\r\\n\\r\\n  // Finds the closest brother that is also within .cursor-box padding away.\\r\\n  // Returns undefined if none are found.\\r\\n  function findNearestBrother() {\\r\\n    // Getting a list of brothers within the padding.\\r\\n    const brothersInRange = curClass.members.filter((member) => {\\r\\n      if (Math.abs(member.pixelLocationX - mx) < 50 &&\\r\\n          Math.abs(member.pixelLocationY - my) < 50) {\\r\\n            return true;\\r\\n      }\\r\\n      return false;\\r\\n    });\\r\\n\\r\\n    if (brothersInRange.lenght === 0) {\\r\\n      return undefined;\\r\\n    } else if (brothersInRange.length === 1) {\\r\\n      return brothersInRange[0];\\r\\n    }\\r\\n\\r\\n    // If there are multiple brothers, find the closest one.\\r\\n    let nearestBrother;\\r\\n    let closestDist = Infinity;\\r\\n    for (member in brothersInRange) {\\r\\n      let dist = Math.sqrt((member.pixelLocationX - mx) ** 2 +\\r\\n                            (member.pixelLocationY - my) ** 2);\\r\\n      if (dist < closestDist) {\\r\\n        closestDist = dist;\\r\\n        nearestBrother = brother;\\r\\n      }\\r\\n    }\\r\\n\\r\\n    return nearestBrother;\\r\\n  }\\r\\n  \\r\\n</script>\\r\\n\\r\\n<style>\\r\\n  .cursor-box {\\r\\n    position: absolute;\\r\\n    padding: 50px;\\r\\n    border: 5px maroon dashed;\\r\\n    filter: drop-shadow(0 0 3px white);\\r\\n    z-index: 2;\\r\\n    cursor: pointer;\\r\\n    border-radius: 40px;\\r\\n  }\\r\\n\\r\\n  .class-img-container {\\r\\n    position: absolute;\\r\\n    top: 180px;\\r\\n    left: 70px;\\r\\n    border: 5px black solid;\\r\\n  }\\r\\n\\r\\n  .class-img-container img {\\r\\n    background-color: black;\\r\\n    cursor: pointer;\\r\\n    width: 900px;\\r\\n  }\\r\\n\\r\\n  .brother-info {\\r\\n    padding-top: 150px;\\r\\n    margin-left: 800px;\\r\\n    z-index: 5;\\r\\n    height: 500px;\\r\\n  }\\r\\n\\r\\n</style>\\r\\n\\r\\n<p>mx: {mx} my: {my}</p>\\r\\n\\r\\n{#if boxVisible}\\r\\n  <div \\r\\n    class=\\\"cursor-box\\\"\\r\\n    style=\\\"\\r\\n      top: {picY};\\r\\n      left: {picX};\\r\\n    \\\"\\r\\n    on:click={handleMouseClick}\\r\\n  >\\r\\n</div>\\r\\n{/if}\\r\\n\\r\\n<div class=\\\"class-img-container\\\">\\r\\n  <img\\r\\n    on:click={handleMouseClick}\\r\\n    class=\\\"class-img\\\"\\r\\n    src=\\\"{curClass.image}\\\"\\r\\n    alt=\\\"{curClass.className}\\\"\\r\\n  >\\r\\n</div>\\r\\n\\r\\n<div class=\\\"brother-info\\\">\\r\\n  {#if curBrother}\\r\\n    <h3>Brother: {curBrother.name}</h3>\\r\\n    <h4>Major: {curBrother.major}</h4>\\r\\n  {:else}\\r\\n    <h4>Oops! Please try and select a brother (from this class) again.</h4>\\r\\n  {/if}\\r\\n</div>\"],\"names\":[],\"mappings\":\"AAgFE,WAAW,eAAC,CAAC,AACX,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,IAAI,CACb,MAAM,CAAE,GAAG,CAAC,MAAM,CAAC,MAAM,CACzB,MAAM,CAAE,YAAY,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,KAAK,CAAC,CAClC,OAAO,CAAE,CAAC,CACV,MAAM,CAAE,OAAO,CACf,aAAa,CAAE,IAAI,AACrB,CAAC,AAED,oBAAoB,eAAC,CAAC,AACpB,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,KAAK,CACV,IAAI,CAAE,IAAI,CACV,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,AACzB,CAAC,AAED,mCAAoB,CAAC,GAAG,eAAC,CAAC,AACxB,gBAAgB,CAAE,KAAK,CACvB,MAAM,CAAE,OAAO,CACf,KAAK,CAAE,KAAK,AACd,CAAC,AAED,aAAa,eAAC,CAAC,AACb,WAAW,CAAE,KAAK,CAClB,WAAW,CAAE,KAAK,CAClB,OAAO,CAAE,CAAC,CACV,MAAM,CAAE,KAAK,AACf,CAAC\"}"
};

let classIndex = 0;

const PledgeClass = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	// Contains an array of Javascript objects.
  // Each object contains: 
  // [
  //    {
  //         className: string
  //         image: string (url to image)
  //         members: [{
  //           name: string
  //           major: string
  //           pixelLocationX: number (pixel location on class picture)
  //           pixelLocationY: number (same but on y axis)
  //           linkedIn: string (the url)
  //         },
  //     ...]
  //    },
  // ...]
  // basically an ar
  // order from newest to oldest
  let { pledgeClasses } = $$props;
  let boxVisible = false;
  let curClass = pledgeClasses[classIndex];

  // let curBrother = curClass.members[0]
  let curBrother;

  let my, mx;

	if ($$props.pledgeClasses === void 0 && $$bindings.pledgeClasses && pledgeClasses !== void 0) $$bindings.pledgeClasses(pledgeClasses);

	$$result.css.add(css$5);

	let picX = `${mx - 55}px`;
	let picY = `${my - 140}px`;

	return `<p>mx: ${escape(mx)} my: ${escape(my)}</p>

	${ boxVisible ? `<div class="cursor-box svelte-13n5avd" style="
	      top: ${escape(picY)};
	      left: ${escape(picX)};
	    ">
	</div>` : `` }

	<div class="class-img-container svelte-13n5avd">
	  <img class="class-img svelte-13n5avd"${(v => v == null ? "" : ` src="${escape(curClass.image)}"`)(curClass.image)}${(v => v == null ? "" : ` alt="${escape(curClass.className)}"`)(curClass.className)}>
	</div>

	<div class="brother-info svelte-13n5avd">
	  ${ curBrother ? `<h3>Brother: ${escape(curBrother.name)}</h3>
	    <h4>Major: ${escape(curBrother.major)}</h4>` : `<h4>Oops! Please try and select a brother (from this class) again.</h4>` }
	</div>`;
});

/* src\routes\members.svelte generated by Svelte v3.6.2 */

const Members = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	const pledgeClasses = [
		{
			// Just a proof of concept, definitely want to move tihs to a JSON 
			// and write a script to expedite this -> parse roster?
			className: "Upsilon",
			image: "images/upsilon_class.jpg",
			members: [{
				name: "Brent Neldner",
				major: "Computer Science",
				pixelLocationX: 219,
				pixelLocationY: 339,
				linkedIn: "..",
			}, {
				name: "Amy Li",
				major: "Computer Science",
				pixelLocationX: 317,
				pixelLocationY: 374,
				linkedIn: "..",
			}, {
				name: "Jordan Luk",
				major: "Mechanical Engineering",
				pixelLocationX: 409,
				pixelLocationY: 377,
				linkedIn: "..",
			}, {
				name: "Austin Le",
				major: "Data Science",
				pixelLocationX: 529,
				pixelLocationY: 369,
				linkedIn: "..",
			}, {
				name: "Barry Cheung",
				major: "Mechanical Engineering",
				pixelLocationX: 654,
				pixelLocationY: 380,
				linkedIn: "..",
			}, {
				name: "Jade Tran",
				major: "Computer Science",
				pixelLocationX: 715,
				pixelLocationY: 412,
				linkedIn: "..",
			}, {
				name: "Jack Lin",
				major: "Data Science",
				pixelLocationX: 812,
				pixelLocationY: 348,
				linkedIn: "..",
			}, {
				name: "Lulu Zhu",
				major: "Computer Science",
				pixelLocationX: 451,
				pixelLocationY: 476,
				linkedIn: "..",
			}, {
				name: "Claire Zhang",
				major: "Bioengineering",
				pixelLocationX: 600,
				pixelLocationY: 487,
				linkedIn: "..",
			}, {
				name: "BaoBao Laosirihongthong",
				major: "Chemical Engineering",
				pixelLocationX: 398,
				pixelLocationY: 567,
				linkedIn: "..",
			}, {
				name: "Ryan Murase",
				major: "Computer Science",
				pixelLocationX: 791,
				pixelLocationY: 562,
				linkedIn: "..",
			}]
		}
	];

	return `${($$result.head += `<title>Members</title>`, "")}

	<h1>Members</h1>

	${validate_component(PledgeClass, 'PledgeClass').$$render($$result, { pledgeClasses: pledgeClasses }, {}, {})}`;
});

/* src\components\Carousel.svelte generated by Svelte v3.6.2 */

const css$6 = {
	code: ".button-wrapper.svelte-gw26yu{display:flex;justify-items:center}.carousel-button.svelte-gw26yu{z-index:2;padding:0.3em;border-radius:1em;font-size:30px;font-weight:900;color:gold;border:3px white solid;background-color:black;cursor:pointer}.button-left.svelte-gw26yu{margin:auto 1em auto 0}.button-right.svelte-gw26yu{margin:auto 0 auto 1em}.carousel-wrapper.svelte-gw26yu{width:70vw;max-width:calc(100vw - 10em);height:70vh;border:7px black solid;background-color:white;box-shadow:0 0 10px 10px goldenrod;padding:2em}.carousel.svelte-gw26yu{position:relative;width:70vw;max-width:calc(100vw - 10em);height:70vh;overflow:hidden}.carousel.svelte-gw26yu img.svelte-gw26yu{position:absolute;top:-9999px;left:-9999px;right:-9999px;bottom:-9999px;margin:auto}.carousel-caption.svelte-gw26yu{display:block;max-width:calc(100vw - 10em);margin-left:auto;margin-top:1em;margin-right:auto;color:white;font-size:1.4em;text-align:center}.figure-wrapper.svelte-gw26yu{margin:0}",
	map: "{\"version\":3,\"file\":\"Carousel.svelte\",\"sources\":[\"Carousel.svelte\"],\"sourcesContent\":[\"<script>\\r\\n  export let images;\\r\\n  export let caption;\\r\\n\\r\\n  import { onMount } from \\\"svelte\\\";\\r\\n  import { fade, fly } from \\\"svelte/transition\\\";\\r\\n\\r\\n  let image = images[0];\\r\\n  let index = 0;\\r\\n  let visible = true;\\r\\n  let interval;\\r\\n  let iw;\\r\\n\\r\\n  // Lowkey a race condition, but we will fix that later\\r\\n  function nextImage() {\\r\\n    visible = false;\\r\\n    setTimeout(() => {\\r\\n      visible = true;\\r\\n      index = (index + 1) % images.length;\\r\\n      image = images[index];\\r\\n    }, 700);\\r\\n  }\\r\\n\\r\\n  function prevImage() {\\r\\n    visible = false;\\r\\n    setTimeout(() => {\\r\\n      visible = true;\\r\\n      index = (index + images.length - 1) % images.length;\\r\\n      image = images[index];\\r\\n    }, 700);\\r\\n  }\\r\\n\\r\\n  function handleNextClick() {\\r\\n    clearInterval(interval);\\r\\n    if (!visible) {\\r\\n      index = (index + 1) % images.length;\\r\\n      return;\\r\\n    }\\r\\n    nextImage();\\r\\n    interval = setInterval(nextImage, 3900);\\r\\n  }\\r\\n\\r\\n  function handlePrevClick() {\\r\\n    clearInterval(interval);\\r\\n    if (!visible) {\\r\\n      index = (index + images.length - 1) % images.length;\\r\\n      return;\\r\\n    }\\r\\n    prevImage();\\r\\n    interval = setInterval(prevImage, 3900);\\r\\n  }\\r\\n\\r\\n  onMount(() => {\\r\\n    interval = setInterval(nextImage, 3900);\\r\\n\\r\\n    return () => clearInterval(interval);\\r\\n  });\\r\\n</script>\\r\\n\\r\\n<svelte:window bind:innerWidth={iw} />\\r\\n\\r\\n<style>\\r\\n  .button-wrapper {\\r\\n    display: flex;\\r\\n    /* flex-direction: row; */\\r\\n    justify-items: center;\\r\\n  }\\r\\n\\r\\n  .carousel-button {\\r\\n    z-index: 2;\\r\\n    padding: 0.3em;\\r\\n    border-radius: 1em;\\r\\n    font-size: 30px;\\r\\n    font-weight: 900;\\r\\n    color: gold;\\r\\n    border: 3px white solid;\\r\\n    background-color: black;\\r\\n    cursor: pointer;\\r\\n  }\\r\\n\\r\\n  .button-left {\\r\\n    margin: auto 1em auto 0;\\r\\n  }\\r\\n\\r\\n  .button-right {\\r\\n    margin: auto 0 auto 1em;\\r\\n  }\\r\\n\\r\\n  .carousel-wrapper {\\r\\n    width: 70vw;\\r\\n    max-width: calc(100vw - 10em);\\r\\n    height: 70vh;\\r\\n    border: 7px black solid;\\r\\n    background-color: white;\\r\\n    /* background: radial-gradient(maroon, gold 60%); */\\r\\n    box-shadow: 0 0 10px 10px goldenrod;\\r\\n    padding: 2em;\\r\\n  }\\r\\n\\r\\n  .carousel {\\r\\n    position: relative;\\r\\n    width: 70vw;\\r\\n    max-width: calc(100vw - 10em);\\r\\n    height: 70vh;\\r\\n    overflow: hidden;\\r\\n  }\\r\\n\\r\\n  .carousel img {\\r\\n    position: absolute;\\r\\n    top: -9999px;\\r\\n    left: -9999px;\\r\\n    right: -9999px;\\r\\n    bottom: -9999px;\\r\\n    margin: auto;\\r\\n  }\\r\\n\\r\\n  .carousel-caption {\\r\\n    display: block;\\r\\n    max-width: calc(100vw - 10em);\\r\\n    margin-left: auto;\\r\\n    margin-top: 1em;\\r\\n    margin-right: auto;\\r\\n    color: white;\\r\\n    font-size: 1.4em;\\r\\n    text-align: center;\\r\\n  }\\r\\n\\r\\n  .figure-wrapper {\\r\\n    margin: 0;\\r\\n  }\\r\\n</style>\\r\\n\\r\\n<figure class=\\\"figure-wrapper\\\">\\r\\n  <div class=\\\"button-wrapper\\\">\\r\\n    {#if iw > 1000}\\r\\n      <button on:click={handlePrevClick} class=\\\"carousel-button button-left\\\">\\r\\n        &lt;\\r\\n      </button>\\r\\n    {/if}\\r\\n    <div class=\\\"carousel-wrapper\\\">\\r\\n      {#if visible}\\r\\n        <div class=\\\"carousel\\\">\\r\\n          <img\\r\\n            src={image}\\r\\n            alt=\\\"pillar image\\\"\\r\\n            transition:fade={{ duration: 500 }} />\\r\\n        </div>\\r\\n      {/if}\\r\\n    </div>\\r\\n    {#if iw > 1000}\\r\\n      <button on:click={handleNextClick} class=\\\"carousel-button button-right\\\">\\r\\n        &gt;\\r\\n      </button>\\r\\n    {/if}\\r\\n  </div>\\r\\n  <figcaption class=\\\"carousel-caption\\\">{caption}</figcaption>\\r\\n</figure>\\r\\n\\r\\n\"],\"names\":[],\"mappings\":\"AA8DE,eAAe,cAAC,CAAC,AACf,OAAO,CAAE,IAAI,CAEb,aAAa,CAAE,MAAM,AACvB,CAAC,AAED,gBAAgB,cAAC,CAAC,AAChB,OAAO,CAAE,CAAC,CACV,OAAO,CAAE,KAAK,CACd,aAAa,CAAE,GAAG,CAClB,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,GAAG,CAChB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,CACvB,gBAAgB,CAAE,KAAK,CACvB,MAAM,CAAE,OAAO,AACjB,CAAC,AAED,YAAY,cAAC,CAAC,AACZ,MAAM,CAAE,IAAI,CAAC,GAAG,CAAC,IAAI,CAAC,CAAC,AACzB,CAAC,AAED,aAAa,cAAC,CAAC,AACb,MAAM,CAAE,IAAI,CAAC,CAAC,CAAC,IAAI,CAAC,GAAG,AACzB,CAAC,AAED,iBAAiB,cAAC,CAAC,AACjB,KAAK,CAAE,IAAI,CACX,SAAS,CAAE,KAAK,KAAK,CAAC,CAAC,CAAC,IAAI,CAAC,CAC7B,MAAM,CAAE,IAAI,CACZ,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,CACvB,gBAAgB,CAAE,KAAK,CAEvB,UAAU,CAAE,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,IAAI,CAAC,SAAS,CACnC,OAAO,CAAE,GAAG,AACd,CAAC,AAED,SAAS,cAAC,CAAC,AACT,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,IAAI,CACX,SAAS,CAAE,KAAK,KAAK,CAAC,CAAC,CAAC,IAAI,CAAC,CAC7B,MAAM,CAAE,IAAI,CACZ,QAAQ,CAAE,MAAM,AAClB,CAAC,AAED,uBAAS,CAAC,GAAG,cAAC,CAAC,AACb,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,OAAO,CACZ,IAAI,CAAE,OAAO,CACb,KAAK,CAAE,OAAO,CACd,MAAM,CAAE,OAAO,CACf,MAAM,CAAE,IAAI,AACd,CAAC,AAED,iBAAiB,cAAC,CAAC,AACjB,OAAO,CAAE,KAAK,CACd,SAAS,CAAE,KAAK,KAAK,CAAC,CAAC,CAAC,IAAI,CAAC,CAC7B,WAAW,CAAE,IAAI,CACjB,UAAU,CAAE,GAAG,CACf,YAAY,CAAE,IAAI,CAClB,KAAK,CAAE,KAAK,CACZ,SAAS,CAAE,KAAK,CAChB,UAAU,CAAE,MAAM,AACpB,CAAC,AAED,eAAe,cAAC,CAAC,AACf,MAAM,CAAE,CAAC,AACX,CAAC\"}"
};

const Carousel = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { images, caption } = $$props;

  let image = images[0];
  let index = 0;
  let visible = true;
  let interval;

  // Lowkey a race condition, but we will fix that later
  function nextImage() {
    visible = false;
    setTimeout(() => {
      visible = true;
      index = (index + 1) % images.length;
      image = images[index];
    }, 700);
  }

  onMount(() => {
    interval = setInterval(nextImage, 3900);

    return () => clearInterval(interval);
  });

	if ($$props.images === void 0 && $$bindings.images && images !== void 0) $$bindings.images(images);
	if ($$props.caption === void 0 && $$bindings.caption && caption !== void 0) $$bindings.caption(caption);

	$$result.css.add(css$6);

	return `



	<figure class="figure-wrapper svelte-gw26yu">
	  <div class="button-wrapper svelte-gw26yu">
	    ${  `` }
	    <div class="carousel-wrapper svelte-gw26yu">
	      ${ visible ? `<div class="carousel svelte-gw26yu">
	          <img${(v => v == null ? "" : ` src="${escape(image)}"`)(image)} alt="pillar image" class="svelte-gw26yu">
	        </div>` : `` }
	    </div>
	    ${  `` }
	  </div>
	  <figcaption class="carousel-caption svelte-gw26yu">${escape(caption)}</figcaption>
	</figure>`;
});

/* src\components\Origin.svelte generated by Svelte v3.6.2 */

const css$7 = {
	code: "@import url(\"https://fonts.googleapis.com/css?family=Cutive+Mono&display=swap\");div#letter.svelte-1ad3szv{margin-top:5em;width:900px;background-color:white;box-shadow:0 10px 5px 6px black;font-family:\"Cutive Mono\", \"Courier New\", Courier, monospace;padding:2em;max-width:calc(100vw - 10em)}@media(max-width: 1000px){div#letter.svelte-1ad3szv{max-width:calc(100vw - 6em)}}div#letter.svelte-1ad3szv h1#letter-header.svelte-1ad3szv{font-family:\"Cutive Mono\", \"Courier New\", Courier, monospace;font-size:2em}div#letter.svelte-1ad3szv p.svelte-1ad3szv{font-size:1.5em}div#letter.svelte-1ad3szv img#founders.svelte-1ad3szv{-webkit-filter:grayscale(100%);filter:grayscale(100%);width:80%;border:3px black solid}div#letter.svelte-1ad3szv img.svelte-1ad3szv{display:block;width:5%;margin:4em auto 5em auto}",
	map: "{\"version\":3,\"file\":\"Origin.svelte\",\"sources\":[\"Origin.svelte\"],\"sourcesContent\":[\"<style>\\r\\n  @import url(\\\"https://fonts.googleapis.com/css?family=Cutive+Mono&display=swap\\\");\\r\\n  div#letter {\\r\\n    margin-top: 5em;\\r\\n    width: 900px;\\r\\n    background-color: white;\\r\\n    box-shadow: 0 10px 5px 6px black;\\r\\n    font-family: \\\"Cutive Mono\\\", \\\"Courier New\\\", Courier, monospace;\\r\\n    padding: 2em;\\r\\n    max-width: calc(100vw - 10em);\\r\\n  }\\r\\n\\r\\n  @media (max-width: 1000px) {\\r\\n    div#letter {\\r\\n      max-width: calc(100vw - 6em);\\r\\n    }\\r\\n  }\\r\\n\\r\\n  div#letter h1#letter-header {\\r\\n    /* Necessary for override */\\r\\n    font-family: \\\"Cutive Mono\\\", \\\"Courier New\\\", Courier, monospace;\\r\\n    font-size: 2em;\\r\\n  }\\r\\n\\r\\n  div#letter p {\\r\\n    font-size: 1.5em;\\r\\n  }\\r\\n\\r\\n  div#letter img#founders {\\r\\n    -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */\\r\\n    filter: grayscale(100%);\\r\\n    width: 80%;\\r\\n    border: 3px black solid;\\r\\n  }\\r\\n\\r\\n  div#letter img {\\r\\n    display: block;\\r\\n    width: 5%;\\r\\n    margin: 4em auto 5em auto;\\r\\n  }\\r\\n</style>\\r\\n\\r\\n<!-- Scroll looking thing for the origins of theta tau -->\\r\\n<div id=\\\"letter\\\">\\r\\n  <h1 id=\\\"letter-header\\\">The Origins of Theta Tau</h1>\\r\\n  <p>\\r\\n    In the Spring of 2009, several students of UCSD's Jacobs School of\\r\\n    Engineering felt that there was a lack of engineering representation in the\\r\\n    Greek community on campus. Luckily an opportunity arose for them to change\\r\\n    that.\\r\\n  </p>\\r\\n  <p>\\r\\n    <strong>Jennifer Young</strong>,\\r\\n    With the help of a Theta Tau alumnus,\\r\\n    thirteen founding fathers took the first step towards establishing a\\r\\n    chapter of the nation's oldest and largest professional engineering\\r\\n    fraternity on the UCSD campus.\\r\\n  </p>\\r\\n  <p>\\r\\n    <strong>Ashay Verma</strong>,\\r\\n    <strong>Errynne Bell</strong>,\\r\\n    <strong>Takahiro Kuwayama</strong>,\\r\\n    <strong>Amelia Chu</strong>,\\r\\n    <strong>Xiumei Wu</strong>,\\r\\n    <strong>Chris Lam</strong>,\\r\\n    <strong>Chuong Do</strong>,\\r\\n    <strong>Joe Shao</strong>,\\r\\n    <strong>Michelle Mojica</strong>,\\r\\n    <strong>Tanakorn Best Techajongchareon</strong>,\\r\\n    <strong>Scott Louie</strong>,\\r\\n    <strong>Alan Leung</strong>,\\r\\n    and <strong>John Phu Nguyen</strong>.\\r\\n  </p>\\r\\n  <p>\\r\\n    On November 20th, 2010, UCSD was installed as the \\r\\n    <strong>Epsilon Delta Chapter</strong> of \\r\\n    <strong>Theta Tau</strong>.\\r\\n  </p>\\r\\n  <img id=\\\"founders\\\" src=\\\"images/founders.jpg\\\" alt=\\\"the mighty founders\\\">\\r\\n  <img src=\\\"images/hamntongs.png\\\" alt=\\\"the seals\\\">\\r\\n\\r\\n</div>\\r\\n\"],\"names\":[],\"mappings\":\"AACE,QAAQ,IAAI,kEAAkE,CAAC,CAAC,AAChF,GAAG,OAAO,eAAC,CAAC,AACV,UAAU,CAAE,GAAG,CACf,KAAK,CAAE,KAAK,CACZ,gBAAgB,CAAE,KAAK,CACvB,UAAU,CAAE,CAAC,CAAC,IAAI,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,CAChC,WAAW,CAAE,aAAa,CAAC,CAAC,aAAa,CAAC,CAAC,OAAO,CAAC,CAAC,SAAS,CAC7D,OAAO,CAAE,GAAG,CACZ,SAAS,CAAE,KAAK,KAAK,CAAC,CAAC,CAAC,IAAI,CAAC,AAC/B,CAAC,AAED,MAAM,AAAC,YAAY,MAAM,CAAC,AAAC,CAAC,AAC1B,GAAG,OAAO,eAAC,CAAC,AACV,SAAS,CAAE,KAAK,KAAK,CAAC,CAAC,CAAC,GAAG,CAAC,AAC9B,CAAC,AACH,CAAC,AAED,GAAG,sBAAO,CAAC,EAAE,cAAc,eAAC,CAAC,AAE3B,WAAW,CAAE,aAAa,CAAC,CAAC,aAAa,CAAC,CAAC,OAAO,CAAC,CAAC,SAAS,CAC7D,SAAS,CAAE,GAAG,AAChB,CAAC,AAED,GAAG,sBAAO,CAAC,CAAC,eAAC,CAAC,AACZ,SAAS,CAAE,KAAK,AAClB,CAAC,AAED,GAAG,sBAAO,CAAC,GAAG,SAAS,eAAC,CAAC,AACvB,cAAc,CAAE,UAAU,IAAI,CAAC,CAC/B,MAAM,CAAE,UAAU,IAAI,CAAC,CACvB,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,AACzB,CAAC,AAED,GAAG,sBAAO,CAAC,GAAG,eAAC,CAAC,AACd,OAAO,CAAE,KAAK,CACd,KAAK,CAAE,EAAE,CACT,MAAM,CAAE,GAAG,CAAC,IAAI,CAAC,GAAG,CAAC,IAAI,AAC3B,CAAC\"}"
};

const Origin = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	$$result.css.add(css$7);

	return `
	<div id="letter" class="svelte-1ad3szv">
	  <h1 id="letter-header" class="svelte-1ad3szv">The Origins of Theta Tau</h1>
	  <p class="svelte-1ad3szv">
	    In the Spring of 2009, several students of UCSD's Jacobs School of
	    Engineering felt that there was a lack of engineering representation in the
	    Greek community on campus. Luckily an opportunity arose for them to change
	    that.
	  </p>
	  <p class="svelte-1ad3szv">
	    <strong>Jennifer Young</strong>,
	    With the help of a Theta Tau alumnus,
	    thirteen founding fathers took the first step towards establishing a
	    chapter of the nation's oldest and largest professional engineering
	    fraternity on the UCSD campus.
	  </p>
	  <p class="svelte-1ad3szv">
	    <strong>Ashay Verma</strong>,
	    <strong>Errynne Bell</strong>,
	    <strong>Takahiro Kuwayama</strong>,
	    <strong>Amelia Chu</strong>,
	    <strong>Xiumei Wu</strong>,
	    <strong>Chris Lam</strong>,
	    <strong>Chuong Do</strong>,
	    <strong>Joe Shao</strong>,
	    <strong>Michelle Mojica</strong>,
	    <strong>Tanakorn Best Techajongchareon</strong>,
	    <strong>Scott Louie</strong>,
	    <strong>Alan Leung</strong>,
	    and <strong>John Phu Nguyen</strong>.
	  </p>
	  <p class="svelte-1ad3szv">
	    On November 20th, 2010, UCSD was installed as the 
	    <strong>Epsilon Delta Chapter</strong> of 
	    <strong>Theta Tau</strong>.
	  </p>
	  <img id="founders" src="images/founders.jpg" alt="the mighty founders" class="svelte-1ad3szv">
	  <img src="images/hamntongs.png" alt="the seals" class="svelte-1ad3szv">

	</div>`;
});

/* src\routes\about.svelte generated by Svelte v3.6.2 */

const About = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	

  const images = [
    'icons/pillar.png',
    'images/pi_fun.jpg',
    'images/sigma_fun.jpg'
  ];

  const pillarMsg = "Brothers embodying the spirit of Theta Tau through the" + 
    " three pillars.";

	return `${($$result.head += `<title>About</title>`, "")}

	${validate_component(Pillars, 'Pillars').$$render($$result, {}, {}, {})}

	${validate_component(Carousel, 'Carousel').$$render($$result, {
		images: images,
		caption: pillarMsg
	}, {}, {})}

	${validate_component(Origin, 'Origin').$$render($$result, {}, {}, {})}`;
});

/* src\routes\blog\index.svelte generated by Svelte v3.6.2 */

const css$8 = {
	code: "ul.svelte-1she90c{margin:0 0 1em 0;line-height:1.5}",
	map: "{\"version\":3,\"file\":\"index.svelte\",\"sources\":[\"index.svelte\"],\"sourcesContent\":[\"<script context=\\\"module\\\">\\r\\n\\texport function preload({ params, query }) {\\r\\n\\t\\treturn this.fetch(`blog.json`).then(r => r.json()).then(posts => {\\r\\n\\t\\t\\treturn { posts };\\r\\n\\t\\t});\\r\\n\\t}\\r\\n</script>\\r\\n\\r\\n<script>\\r\\n\\texport let posts;\\r\\n</script>\\r\\n\\r\\n<style>\\r\\n\\tul {\\r\\n\\t\\tmargin: 0 0 1em 0;\\r\\n\\t\\tline-height: 1.5;\\r\\n\\t}\\r\\n</style>\\r\\n\\r\\n<svelte:head>\\r\\n\\t<title>Blog</title>\\r\\n</svelte:head>\\r\\n\\r\\n<h1>Recent posts</h1>\\r\\n\\r\\n<ul>\\r\\n\\t{#each posts as post}\\r\\n\\t\\t<!-- we're using the non-standard `rel=prefetch` attribute to\\r\\n\\t\\t\\t\\ttell Sapper to load the data for the page as soon as\\r\\n\\t\\t\\t\\tthe user hovers over the link or taps it, instead of\\r\\n\\t\\t\\t\\twaiting for the 'click' event -->\\r\\n\\t\\t<li><a rel='prefetch' href='blog/{post.slug}'>{post.title}</a></li>\\r\\n\\t{/each}\\r\\n</ul>\"],\"names\":[],\"mappings\":\"AAaC,EAAE,eAAC,CAAC,AACH,MAAM,CAAE,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,CACjB,WAAW,CAAE,GAAG,AACjB,CAAC\"}"
};

function preload({ params, query }) {
	return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
		return { posts };
	});
}

const Index$1 = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { posts } = $$props;

	if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0) $$bindings.posts(posts);

	$$result.css.add(css$8);

	return `${($$result.head += `<title>Blog</title>`, "")}

	<h1>Recent posts</h1>

	<ul class="svelte-1she90c">
		${each(posts, (post) => `
			<li><a rel="prefetch" href="blog/${escape(post.slug)}">${escape(post.title)}</a></li>`)}
	</ul>`;
});

/* src\routes\blog\[slug].svelte generated by Svelte v3.6.2 */

const css$9 = {
	code: ".content.svelte-dkhkxh h2{font-size:1.4em;font-weight:500}.content.svelte-dkhkxh pre{background-color:#f9f9f9;box-shadow:inset 1px 1px 5px rgba(0,0,0,0.05);padding:0.5em;border-radius:2px;overflow-x:auto}.content.svelte-dkhkxh pre code{background-color:transparent;padding:0}.content.svelte-dkhkxh ul{line-height:1.5}.content.svelte-dkhkxh li{margin:0 0 0.5em 0}",
	map: "{\"version\":3,\"file\":\"[slug].svelte\",\"sources\":[\"[slug].svelte\"],\"sourcesContent\":[\"<script context=\\\"module\\\">\\r\\n\\texport async function preload({ params, query }) {\\r\\n\\t\\t// the `slug` parameter is available because\\r\\n\\t\\t// this file is called [slug].html\\r\\n\\t\\tconst res = await this.fetch(`blog/${params.slug}.json`);\\r\\n\\t\\tconst data = await res.json();\\r\\n\\r\\n\\t\\tif (res.status === 200) {\\r\\n\\t\\t\\treturn { post: data };\\r\\n\\t\\t} else {\\r\\n\\t\\t\\tthis.error(res.status, data.message);\\r\\n\\t\\t}\\r\\n\\t}\\r\\n</script>\\r\\n\\r\\n<script>\\r\\n\\texport let post;\\r\\n</script>\\r\\n\\r\\n<style>\\r\\n\\t/*\\r\\n\\t\\tBy default, CSS is locally scoped to the component,\\r\\n\\t\\tand any unused styles are dead-code-eliminated.\\r\\n\\t\\tIn this page, Svelte can't know which elements are\\r\\n\\t\\tgoing to appear inside the {{{post.html}}} block,\\r\\n\\t\\tso we have to use the :global(...) modifier to target\\r\\n\\t\\tall elements inside .content\\r\\n\\t*/\\r\\n\\t.content :global(h2) {\\r\\n\\t\\tfont-size: 1.4em;\\r\\n\\t\\tfont-weight: 500;\\r\\n\\t}\\r\\n\\r\\n\\t.content :global(pre) {\\r\\n\\t\\tbackground-color: #f9f9f9;\\r\\n\\t\\tbox-shadow: inset 1px 1px 5px rgba(0,0,0,0.05);\\r\\n\\t\\tpadding: 0.5em;\\r\\n\\t\\tborder-radius: 2px;\\r\\n\\t\\toverflow-x: auto;\\r\\n\\t}\\r\\n\\r\\n\\t.content :global(pre) :global(code) {\\r\\n\\t\\tbackground-color: transparent;\\r\\n\\t\\tpadding: 0;\\r\\n\\t}\\r\\n\\r\\n\\t.content :global(ul) {\\r\\n\\t\\tline-height: 1.5;\\r\\n\\t}\\r\\n\\r\\n\\t.content :global(li) {\\r\\n\\t\\tmargin: 0 0 0.5em 0;\\r\\n\\t}\\r\\n</style>\\r\\n\\r\\n<svelte:head>\\r\\n\\t<title>{post.title}</title>\\r\\n</svelte:head>\\r\\n\\r\\n<h1>{post.title}</h1>\\r\\n\\r\\n<div class='content'>\\r\\n\\t{@html post.html}\\r\\n</div>\"],\"names\":[],\"mappings\":\"AA4BC,sBAAQ,CAAC,AAAQ,EAAE,AAAE,CAAC,AACrB,SAAS,CAAE,KAAK,CAChB,WAAW,CAAE,GAAG,AACjB,CAAC,AAED,sBAAQ,CAAC,AAAQ,GAAG,AAAE,CAAC,AACtB,gBAAgB,CAAE,OAAO,CACzB,UAAU,CAAE,KAAK,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CAC9C,OAAO,CAAE,KAAK,CACd,aAAa,CAAE,GAAG,CAClB,UAAU,CAAE,IAAI,AACjB,CAAC,AAED,sBAAQ,CAAC,AAAQ,GAAG,AAAC,CAAC,AAAQ,IAAI,AAAE,CAAC,AACpC,gBAAgB,CAAE,WAAW,CAC7B,OAAO,CAAE,CAAC,AACX,CAAC,AAED,sBAAQ,CAAC,AAAQ,EAAE,AAAE,CAAC,AACrB,WAAW,CAAE,GAAG,AACjB,CAAC,AAED,sBAAQ,CAAC,AAAQ,EAAE,AAAE,CAAC,AACrB,MAAM,CAAE,CAAC,CAAC,CAAC,CAAC,KAAK,CAAC,CAAC,AACpB,CAAC\"}"
};

async function preload$1({ params, query }) {
	// the `slug` parameter is available because
	// this file is called [slug].html
	const res = await this.fetch(`blog/${params.slug}.json`);
	const data = await res.json();

	if (res.status === 200) {
		return { post: data };
	} else {
		this.error(res.status, data.message);
	}
}

const Slug = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { post } = $$props;

	if ($$props.post === void 0 && $$bindings.post && post !== void 0) $$bindings.post(post);

	$$result.css.add(css$9);

	return `${($$result.head += `<title>${escape(post.title)}</title>`, "")}

	<h1>${escape(post.title)}</h1>

	<div class="content svelte-dkhkxh">
		${post.html}
	</div>`;
});

/* src\routes\rush.svelte generated by Svelte v3.6.2 */

const Rush = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	return `${($$result.head += `<title>Rush</title>`, "")}

	<h1>Rush Theta Tau!</h1>

	<p>Rush is a four step process:</p>`;
});

/* src\routes\faq.svelte generated by Svelte v3.6.2 */

const Faq = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	return `${($$result.head += `<title>FAQ</title>`, "")}

	<h1>FAQ</h1>

	<p>This is the 'FAQ' page. There's not much here.</p>`;
});

/* src\components\Nav.svelte generated by Svelte v3.6.2 */

const css$a = {
	code: "nav.svelte-1whk2u7{border-bottom:2px solid rgba(255,62,0,0.1);font-weight:300;padding:0 1em;display:flex;position:-webkit-sticky;position:sticky;top:0px;background-color:white;z-index:2}ul.svelte-1whk2u7{margin:0;padding:0}ul.svelte-1whk2u7::after{content:'';display:block;clear:both}li.svelte-1whk2u7{display:block;float:left}.selected.svelte-1whk2u7{position:relative;display:inline-block}.selected.svelte-1whk2u7::after{position:absolute;content:'';width:calc(100% - 1em);height:2px;background-color:maroon;display:block;bottom:-1px}a.svelte-1whk2u7{text-decoration:none;padding:1em 0.5em;display:block}a#letters.svelte-1whk2u7{font-family:'Times New Roman', Times, serif;font-size:2em;padding:0.1em 0.7em 0.1em 0.5em;color:maroon}@media(min-width: 1000px){a.svelte-1whk2u7{font-size:1.5em}a#letters.svelte-1whk2u7{font-size:3em}}a.svelte-1whk2u7:hover{color:maroon}",
	map: "{\"version\":3,\"file\":\"Nav.svelte\",\"sources\":[\"Nav.svelte\"],\"sourcesContent\":[\"<!-- A navbar that shows up on every screen. -->\\r\\n\\r\\n<script>\\r\\n\\texport let segment;\\r\\n</script>\\r\\n\\r\\n<style>\\r\\n\\tnav {\\r\\n\\t\\tborder-bottom: 2px solid rgba(255,62,0,0.1);\\r\\n\\t\\tfont-weight: 300;\\r\\n\\t\\tpadding: 0 1em;\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\tposition: -webkit-sticky;\\r\\n\\t\\tposition: sticky;\\r\\n\\t\\ttop: 0px;\\r\\n\\t\\tbackground-color: white;\\r\\n\\t\\tz-index: 2;\\r\\n\\t}\\r\\n\\r\\n\\tul {\\r\\n\\t\\tmargin: 0;\\r\\n\\t\\tpadding: 0;\\r\\n\\t}\\r\\n\\r\\n\\t/* clearfix */\\r\\n\\tul::after {\\r\\n\\t\\tcontent: '';\\r\\n\\t\\tdisplay: block;\\r\\n\\t\\tclear: both;\\r\\n\\t}\\r\\n\\r\\n\\tli {\\r\\n\\t\\tdisplay: block;\\r\\n\\t\\tfloat: left;\\r\\n\\t}\\r\\n\\t.selected {\\r\\n\\t\\tposition: relative;\\r\\n\\t\\tdisplay: inline-block;\\r\\n\\t}\\r\\n\\r\\n\\t.selected::after {\\r\\n\\t\\tposition: absolute;\\r\\n\\t\\tcontent: '';\\r\\n\\t\\twidth: calc(100% - 1em);\\r\\n\\t\\theight: 2px;\\r\\n\\t\\tbackground-color: maroon;\\r\\n\\t\\tdisplay: block;\\r\\n\\t\\tbottom: -1px;\\r\\n\\t}\\r\\n\\r\\n\\ta {\\r\\n\\t\\ttext-decoration: none;\\r\\n\\t\\tpadding: 1em 0.5em;\\r\\n\\t\\tdisplay: block;\\r\\n\\t}\\r\\n\\r\\n\\ta#letters {\\r\\n\\t\\tfont-family: 'Times New Roman', Times, serif;\\r\\n\\t\\tfont-size: 2em;\\r\\n\\t\\tpadding: 0.1em 0.7em 0.1em 0.5em;\\r\\n\\t\\tcolor: maroon;\\r\\n\\t}\\r\\n\\r\\n\\t@media (min-width: 1000px) {\\r\\n\\t\\ta {\\r\\n\\t\\t\\tfont-size: 1.5em;\\r\\n\\t\\t}\\r\\n\\r\\n\\t\\ta#letters {\\r\\n\\t\\t\\tfont-size: 3em;\\r\\n\\t\\t}\\r\\n\\t}\\r\\n\\r\\n\\ta:hover {\\r\\n\\t\\tcolor: maroon;\\r\\n\\t}\\r\\n\\t\\r\\n</style>\\r\\n\\r\\n<nav>\\r\\n\\t<ul>\\r\\n\\t\\t<li><a id='letters' href='.'>Θ Τ</a></li>\\r\\n\\t\\t<li><a class='{segment === undefined ? \\\"selected\\\" : \\\"\\\"}' href='.'>Home</a></li>\\r\\n\\t\\t<li><a class='{segment === \\\"about\\\" ? \\\"selected\\\" : \\\"\\\"}' href='about'>About</a></li>\\r\\n\\t\\t<li><a class='{segment === \\\"rush\\\" ? \\\"selected\\\" : \\\"\\\"}' href='rush'>Rush</a></li>\\r\\n\\t\\t<li><a class='{segment === \\\"faq\\\" ? \\\"selected\\\" : \\\"\\\"}' href='faq'>FAQ</a></li>\\r\\n\\t\\t<li><a class='{segment === \\\"members\\\" ? \\\"selected\\\" : \\\"\\\"}' href='members'>Members</a></li>\\r\\n\\t</ul>\\r\\n</nav>\"],\"names\":[],\"mappings\":\"AAOC,GAAG,eAAC,CAAC,AACJ,aAAa,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,GAAG,CAAC,EAAE,CAAC,CAAC,CAAC,GAAG,CAAC,CAC3C,WAAW,CAAE,GAAG,CAChB,OAAO,CAAE,CAAC,CAAC,GAAG,CACd,OAAO,CAAE,IAAI,CACb,QAAQ,CAAE,cAAc,CACxB,QAAQ,CAAE,MAAM,CAChB,GAAG,CAAE,GAAG,CACR,gBAAgB,CAAE,KAAK,CACvB,OAAO,CAAE,CAAC,AACX,CAAC,AAED,EAAE,eAAC,CAAC,AACH,MAAM,CAAE,CAAC,CACT,OAAO,CAAE,CAAC,AACX,CAAC,AAGD,iBAAE,OAAO,AAAC,CAAC,AACV,OAAO,CAAE,EAAE,CACX,OAAO,CAAE,KAAK,CACd,KAAK,CAAE,IAAI,AACZ,CAAC,AAED,EAAE,eAAC,CAAC,AACH,OAAO,CAAE,KAAK,CACd,KAAK,CAAE,IAAI,AACZ,CAAC,AACD,SAAS,eAAC,CAAC,AACV,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,YAAY,AACtB,CAAC,AAED,wBAAS,OAAO,AAAC,CAAC,AACjB,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,EAAE,CACX,KAAK,CAAE,KAAK,IAAI,CAAC,CAAC,CAAC,GAAG,CAAC,CACvB,MAAM,CAAE,GAAG,CACX,gBAAgB,CAAE,MAAM,CACxB,OAAO,CAAE,KAAK,CACd,MAAM,CAAE,IAAI,AACb,CAAC,AAED,CAAC,eAAC,CAAC,AACF,eAAe,CAAE,IAAI,CACrB,OAAO,CAAE,GAAG,CAAC,KAAK,CAClB,OAAO,CAAE,KAAK,AACf,CAAC,AAED,CAAC,QAAQ,eAAC,CAAC,AACV,WAAW,CAAE,iBAAiB,CAAC,CAAC,KAAK,CAAC,CAAC,KAAK,CAC5C,SAAS,CAAE,GAAG,CACd,OAAO,CAAE,KAAK,CAAC,KAAK,CAAC,KAAK,CAAC,KAAK,CAChC,KAAK,CAAE,MAAM,AACd,CAAC,AAED,MAAM,AAAC,YAAY,MAAM,CAAC,AAAC,CAAC,AAC3B,CAAC,eAAC,CAAC,AACF,SAAS,CAAE,KAAK,AACjB,CAAC,AAED,CAAC,QAAQ,eAAC,CAAC,AACV,SAAS,CAAE,GAAG,AACf,CAAC,AACF,CAAC,AAED,gBAAC,MAAM,AAAC,CAAC,AACR,KAAK,CAAE,MAAM,AACd,CAAC\"}"
};

const Nav = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { segment } = $$props;

	if ($$props.segment === void 0 && $$bindings.segment && segment !== void 0) $$bindings.segment(segment);

	$$result.css.add(css$a);

	return `





	<nav class="svelte-1whk2u7">
		<ul class="svelte-1whk2u7">
			<li class="svelte-1whk2u7"><a id="letters" href="." class="svelte-1whk2u7">Θ Τ</a></li>
			<li class="svelte-1whk2u7"><a class="${escape(segment === undefined ? "selected" : "")} svelte-1whk2u7" href=".">Home</a></li>
			<li class="svelte-1whk2u7"><a class="${escape(segment === "about" ? "selected" : "")} svelte-1whk2u7" href="about">About</a></li>
			<li class="svelte-1whk2u7"><a class="${escape(segment === "rush" ? "selected" : "")} svelte-1whk2u7" href="rush">Rush</a></li>
			<li class="svelte-1whk2u7"><a class="${escape(segment === "faq" ? "selected" : "")} svelte-1whk2u7" href="faq">FAQ</a></li>
			<li class="svelte-1whk2u7"><a class="${escape(segment === "members" ? "selected" : "")} svelte-1whk2u7" href="members">Members</a></li>
		</ul>
	</nav>`;
});

/* src\components\Footer.svelte generated by Svelte v3.6.2 */

const css$b = {
	code: "footer.svelte-1t0z35o{background-color:#777;margin-top:30px;border-top:5px maroon solid;display:flex;flex-direction:row;align-items:space-between;justify-content:space-evenly;font-size:0.8em}.footer-div.svelte-1t0z35o{padding:0 10px;margin:10px 10px;border-left:1px black dashed;color:white}ul.footer-div.svelte-1t0z35o{list-style-type:none}b.svelte-1t0z35o{color:maroon}",
	map: "{\"version\":3,\"file\":\"Footer.svelte\",\"sources\":[\"Footer.svelte\"],\"sourcesContent\":[\"<!-- A footer that displays on every single page. -->\\r\\n\\r\\n<script>\\r\\n</script>\\r\\n\\r\\n<style>\\r\\n    footer {\\r\\n        background-color: #777;\\r\\n        margin-top: 30px;\\r\\n        border-top: 5px maroon solid;\\r\\n        display: flex;\\r\\n        flex-direction: row;\\r\\n        align-items: space-between;\\r\\n        justify-content: space-evenly;\\r\\n        font-size: 0.8em;\\r\\n    }\\r\\n\\r\\n    .footer-div {\\r\\n        padding: 0 10px;\\r\\n        margin: 10px 10px;\\r\\n        border-left: 1px black dashed;\\r\\n        color: white;\\r\\n    }\\r\\n\\r\\n    ul.footer-div {\\r\\n        list-style-type: none;\\r\\n    }\\r\\n\\r\\n    b {\\r\\n        color: maroon;\\r\\n    }\\r\\n\\r\\n</style>\\r\\n\\r\\n<footer>\\r\\n    <img class=\\\"footer-div\\\" src=\\\"images/hamntongs.png\\\" alt=\\\"our seal\\\" height=\\\"60px\\\">\\r\\n    <ul class=\\\"footer-div\\\">\\r\\n        <b>Contributors:</b><br>\\r\\n        <li><a href=\\\"https://github.com/willxu1234\\\"> Will Xu</a></li>\\r\\n        <li><a href=\\\"https://github.com/clarkphan\\\">Clark Phan</a></li>\\r\\n    </ul>\\r\\n    <p class=\\\"footer-div\\\">\\r\\n        Icons from\\r\\n        <a href=\\\"https://icons8.com/icons\\\">icons8</a>\\r\\n    </p>\\r\\n</footer>\"],\"names\":[],\"mappings\":\"AAMI,MAAM,eAAC,CAAC,AACJ,gBAAgB,CAAE,IAAI,CACtB,UAAU,CAAE,IAAI,CAChB,UAAU,CAAE,GAAG,CAAC,MAAM,CAAC,KAAK,CAC5B,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,GAAG,CACnB,WAAW,CAAE,aAAa,CAC1B,eAAe,CAAE,YAAY,CAC7B,SAAS,CAAE,KAAK,AACpB,CAAC,AAED,WAAW,eAAC,CAAC,AACT,OAAO,CAAE,CAAC,CAAC,IAAI,CACf,MAAM,CAAE,IAAI,CAAC,IAAI,CACjB,WAAW,CAAE,GAAG,CAAC,KAAK,CAAC,MAAM,CAC7B,KAAK,CAAE,KAAK,AAChB,CAAC,AAED,EAAE,WAAW,eAAC,CAAC,AACX,eAAe,CAAE,IAAI,AACzB,CAAC,AAED,CAAC,eAAC,CAAC,AACC,KAAK,CAAE,MAAM,AACjB,CAAC\"}"
};

const Footer = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	$$result.css.add(css$b);

	return `





	<footer class="svelte-1t0z35o">
	    <img class="footer-div svelte-1t0z35o" src="images/hamntongs.png" alt="our seal" height="60px">
	    <ul class="footer-div svelte-1t0z35o">
	        <b class="svelte-1t0z35o">Contributors:</b><br>
	        <li><a href="https://github.com/willxu1234"> Will Xu</a></li>
	        <li><a href="https://github.com/clarkphan">Clark Phan</a></li>
	    </ul>
	    <p class="footer-div svelte-1t0z35o">
	        Icons from
	        <a href="https://icons8.com/icons">icons8</a>
	    </p>
	</footer>`;
});

/* src\routes\_layout.svelte generated by Svelte v3.6.2 */

const css$c = {
	code: "main.svelte-1sm89p5{position:relative;padding:2em;margin:0 auto;box-sizing:border-box;display:flex;flex-direction:column;align-items:center}",
	map: "{\"version\":3,\"file\":\"_layout.svelte\",\"sources\":[\"_layout.svelte\"],\"sourcesContent\":[\"<script>\\r\\n\\timport Nav from '../components/Nav.svelte';\\r\\n\\timport Footer from '../components/Footer.svelte';\\r\\n\\r\\n\\texport let segment;\\r\\n</script>\\r\\n\\r\\n<style>\\r\\n\\tmain {\\r\\n\\t\\tposition: relative;\\r\\n\\t\\tpadding: 2em;\\r\\n\\t\\tmargin: 0 auto;\\r\\n\\t\\tbox-sizing: border-box;\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\tflex-direction: column;\\r\\n\\t\\talign-items: center;\\r\\n\\t}\\r\\n</style>\\r\\n\\r\\n<Nav {segment}/>\\r\\n\\r\\n<main>\\r\\n\\t<slot></slot>\\r\\n</main>\\r\\n\\r\\n<Footer />\"],\"names\":[],\"mappings\":\"AAQC,IAAI,eAAC,CAAC,AACL,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,GAAG,CACZ,MAAM,CAAE,CAAC,CAAC,IAAI,CACd,UAAU,CAAE,UAAU,CACtB,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,MAAM,AACpB,CAAC\"}"
};

const Layout = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	

	let { segment } = $$props;

	if ($$props.segment === void 0 && $$bindings.segment && segment !== void 0) $$bindings.segment(segment);

	$$result.css.add(css$c);

	return `${validate_component(Nav, 'Nav').$$render($$result, { segment: segment }, {}, {})}

	<main class="svelte-1sm89p5">
		${$$slots.default ? $$slots.default() : ``}
	</main>

	${validate_component(Footer, 'Footer').$$render($$result, {}, {}, {})}`;
});

/* src\routes\_error.svelte generated by Svelte v3.6.2 */

const css$d = {
	code: "h1.svelte-13vgy2g,p.svelte-13vgy2g{margin:0 auto}h1.svelte-13vgy2g{font-size:2.8em;font-weight:700;margin:0 0 0.5em 0}p.svelte-13vgy2g{margin:1em auto}@media(min-width: 480px){h1.svelte-13vgy2g{font-size:4em}}",
	map: "{\"version\":3,\"file\":\"_error.svelte\",\"sources\":[\"_error.svelte\"],\"sourcesContent\":[\"<script>\\r\\n\\texport let status;\\r\\n\\texport let error;\\r\\n\\r\\n\\tconst dev = \\\"development\\\" === 'development';\\r\\n</script>\\r\\n\\r\\n<style>\\r\\n\\th1, p {\\r\\n\\t\\tmargin: 0 auto;\\r\\n\\t}\\r\\n\\r\\n\\th1 {\\r\\n\\t\\tfont-size: 2.8em;\\r\\n\\t\\tfont-weight: 700;\\r\\n\\t\\tmargin: 0 0 0.5em 0;\\r\\n\\t}\\r\\n\\r\\n\\tp {\\r\\n\\t\\tmargin: 1em auto;\\r\\n\\t}\\r\\n\\r\\n\\t@media (min-width: 480px) {\\r\\n\\t\\th1 {\\r\\n\\t\\t\\tfont-size: 4em;\\r\\n\\t\\t}\\r\\n\\t}\\r\\n</style>\\r\\n\\r\\n<svelte:head>\\r\\n\\t<title>{status}</title>\\r\\n</svelte:head>\\r\\n\\r\\n<h1>{status}</h1>\\r\\n\\r\\n<p>{error.message}</p>\\r\\n\\r\\n{#if dev && error.stack}\\r\\n\\t<pre>{error.stack}</pre>\\r\\n{/if}\\r\\n\"],\"names\":[],\"mappings\":\"AAQC,iBAAE,CAAE,CAAC,eAAC,CAAC,AACN,MAAM,CAAE,CAAC,CAAC,IAAI,AACf,CAAC,AAED,EAAE,eAAC,CAAC,AACH,SAAS,CAAE,KAAK,CAChB,WAAW,CAAE,GAAG,CAChB,MAAM,CAAE,CAAC,CAAC,CAAC,CAAC,KAAK,CAAC,CAAC,AACpB,CAAC,AAED,CAAC,eAAC,CAAC,AACF,MAAM,CAAE,GAAG,CAAC,IAAI,AACjB,CAAC,AAED,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAC1B,EAAE,eAAC,CAAC,AACH,SAAS,CAAE,GAAG,AACf,CAAC,AACF,CAAC\"}"
};

const Error$1 = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { status, error } = $$props;

	if ($$props.status === void 0 && $$bindings.status && status !== void 0) $$bindings.status(status);
	if ($$props.error === void 0 && $$bindings.error && error !== void 0) $$bindings.error(error);

	$$result.css.add(css$d);

	return `${($$result.head += `<title>${escape(status)}</title>`, "")}

	<h1 class="svelte-13vgy2g">${escape(status)}</h1>

	<p class="svelte-13vgy2g">${escape(error.message)}</p>

	${  error.stack ? `<pre>${escape(error.stack)}</pre>` : `` }`;
});

// This file is generated by Sapper — do not edit it!

const d = decodeURIComponent;

const manifest = {
	server_routes: [
		{
			// blog/index.json.js
			pattern: /^\/blog.json$/,
			handlers: route_0,
			params: () => ({})
		},

		{
			// blog/[slug].json.js
			pattern: /^\/blog\/([^\/]+?).json$/,
			handlers: route_1,
			params: match => ({ slug: d(match[1]) })
		}
	],

	pages: [
		{
			// index.svelte
			pattern: /^\/$/,
			parts: [
				{ name: "index", file: "index.svelte", component: Index }
			]
		},

		{
			// members.svelte
			pattern: /^\/members\/?$/,
			parts: [
				{ name: "members", file: "members.svelte", component: Members }
			]
		},

		{
			// about.svelte
			pattern: /^\/about\/?$/,
			parts: [
				{ name: "about", file: "about.svelte", component: About }
			]
		},

		{
			// blog/index.svelte
			pattern: /^\/blog\/?$/,
			parts: [
				{ name: "blog", file: "blog/index.svelte", component: Index$1, preload: preload }
			]
		},

		{
			// blog/[slug].svelte
			pattern: /^\/blog\/([^\/]+?)\/?$/,
			parts: [
				null,
				{ name: "blog_$slug", file: "blog/[slug].svelte", component: Slug, preload: preload$1, params: match => ({ slug: d(match[1]) }) }
			]
		},

		{
			// rush.svelte
			pattern: /^\/rush\/?$/,
			parts: [
				{ name: "rush", file: "rush.svelte", component: Rush }
			]
		},

		{
			// faq.svelte
			pattern: /^\/faq\/?$/,
			parts: [
				{ name: "faq", file: "faq.svelte", component: Faq }
			]
		}
	],

	root: Layout,
	root_preload: () => {},
	error: Error$1
};

const build_dir = "__sapper__/dev";

const src_dir = "src";

/**
 * Create a `Writable` store that allows both updating and reading by subscription.
 * @param {*=}value initial value
 * @param {StartStopNotifier=}start start and stop notifications for subscriptions
 */
function writable(value, start = noop) {
    let stop;
    const subscribers = [];
    function set(new_value) {
        if (safe_not_equal(value, new_value)) {
            value = new_value;
            if (!stop) {
                return; // not ready
            }
            subscribers.forEach((s) => s[1]());
            subscribers.forEach((s) => s[0](value));
        }
    }
    function update(fn) {
        set(fn(value));
    }
    function subscribe(run, invalidate = noop) {
        const subscriber = [run, invalidate];
        subscribers.push(subscriber);
        if (subscribers.length === 1) {
            stop = start(set) || noop;
        }
        run(value);
        return () => {
            const index = subscribers.indexOf(subscriber);
            if (index !== -1) {
                subscribers.splice(index, 1);
            }
            if (subscribers.length === 0) {
                stop();
                stop = null;
            }
        };
    }
    return { set, update, subscribe };
}

const CONTEXT_KEY = {};

/* src\node_modules\@sapper\internal\App.svelte generated by Svelte v3.6.2 */

const App = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	

	let { stores, error, status, segments, level0, level1 = null } = $$props;

	setContext(CONTEXT_KEY, stores);

	if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0) $$bindings.stores(stores);
	if ($$props.error === void 0 && $$bindings.error && error !== void 0) $$bindings.error(error);
	if ($$props.status === void 0 && $$bindings.status && status !== void 0) $$bindings.status(status);
	if ($$props.segments === void 0 && $$bindings.segments && segments !== void 0) $$bindings.segments(segments);
	if ($$props.level0 === void 0 && $$bindings.level0 && level0 !== void 0) $$bindings.level0(level0);
	if ($$props.level1 === void 0 && $$bindings.level1 && level1 !== void 0) $$bindings.level1(level1);

	return `


	${validate_component(Layout, 'Layout').$$render($$result, Object.assign({ segment: segments[0] }, level0.props), {}, {
		default: () => `
		${ error ? `${validate_component(Error$1, 'Error').$$render($$result, { error: error, status: status }, {}, {})}` : `${validate_component(((level1.component) || missing_component), 'svelte:component').$$render($$result, Object.assign(level1.props), {}, {})}` }
	`
	})}`;
});

function get_server_route_handler(routes) {
	async function handle_route(route, req, res, next) {
		req.params = route.params(route.pattern.exec(req.path));

		const method = req.method.toLowerCase();
		// 'delete' cannot be exported from a module because it is a keyword,
		// so check for 'del' instead
		const method_export = method === 'delete' ? 'del' : method;
		const handle_method = route.handlers[method_export];
		if (handle_method) {
			if (process.env.SAPPER_EXPORT) {
				const { write, end, setHeader } = res;
				const chunks = [];
				const headers = {};

				// intercept data so that it can be exported
				res.write = function(chunk) {
					chunks.push(Buffer.from(chunk));
					write.apply(res, arguments);
				};

				res.setHeader = function(name, value) {
					headers[name.toLowerCase()] = value;
					setHeader.apply(res, arguments);
				};

				res.end = function(chunk) {
					if (chunk) chunks.push(Buffer.from(chunk));
					end.apply(res, arguments);

					process.send({
						__sapper__: true,
						event: 'file',
						url: req.url,
						method: req.method,
						status: res.statusCode,
						type: headers['content-type'],
						body: Buffer.concat(chunks).toString()
					});
				};
			}

			const handle_next = (err) => {
				if (err) {
					res.statusCode = 500;
					res.end(err.message);
				} else {
					process.nextTick(next);
				}
			};

			try {
				await handle_method(req, res, handle_next);
			} catch (err) {
				handle_next(err);
			}
		} else {
			// no matching handler for method
			process.nextTick(next);
		}
	}

	return function find_route(req, res, next) {
		for (const route of routes) {
			if (route.pattern.test(req.path)) {
				handle_route(route, req, res, next);
				return;
			}
		}

		next();
	};
}

/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */

/**
 * Module exports.
 * @public
 */

var parse_1 = parse;
var serialize_1 = serialize;

/**
 * Module variables.
 * @private
 */

var decode = decodeURIComponent;
var encode = encodeURIComponent;
var pairSplitRegExp = /; */;

/**
 * RegExp to match field-content in RFC 7230 sec 3.2
 *
 * field-content = field-vchar [ 1*( SP / HTAB ) field-vchar ]
 * field-vchar   = VCHAR / obs-text
 * obs-text      = %x80-FF
 */

var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;

/**
 * Parse a cookie header.
 *
 * Parse the given cookie header string into an object
 * The object has the various cookies as keys(names) => values
 *
 * @param {string} str
 * @param {object} [options]
 * @return {object}
 * @public
 */

function parse(str, options) {
  if (typeof str !== 'string') {
    throw new TypeError('argument str must be a string');
  }

  var obj = {};
  var opt = options || {};
  var pairs = str.split(pairSplitRegExp);
  var dec = opt.decode || decode;

  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i];
    var eq_idx = pair.indexOf('=');

    // skip things that don't look like key=value
    if (eq_idx < 0) {
      continue;
    }

    var key = pair.substr(0, eq_idx).trim();
    var val = pair.substr(++eq_idx, pair.length).trim();

    // quoted values
    if ('"' == val[0]) {
      val = val.slice(1, -1);
    }

    // only assign once
    if (undefined == obj[key]) {
      obj[key] = tryDecode(val, dec);
    }
  }

  return obj;
}

/**
 * Serialize data into a cookie header.
 *
 * Serialize the a name value pair into a cookie string suitable for
 * http headers. An optional options object specified cookie parameters.
 *
 * serialize('foo', 'bar', { httpOnly: true })
 *   => "foo=bar; httpOnly"
 *
 * @param {string} name
 * @param {string} val
 * @param {object} [options]
 * @return {string}
 * @public
 */

function serialize(name, val, options) {
  var opt = options || {};
  var enc = opt.encode || encode;

  if (typeof enc !== 'function') {
    throw new TypeError('option encode is invalid');
  }

  if (!fieldContentRegExp.test(name)) {
    throw new TypeError('argument name is invalid');
  }

  var value = enc(val);

  if (value && !fieldContentRegExp.test(value)) {
    throw new TypeError('argument val is invalid');
  }

  var str = name + '=' + value;

  if (null != opt.maxAge) {
    var maxAge = opt.maxAge - 0;
    if (isNaN(maxAge)) throw new Error('maxAge should be a Number');
    str += '; Max-Age=' + Math.floor(maxAge);
  }

  if (opt.domain) {
    if (!fieldContentRegExp.test(opt.domain)) {
      throw new TypeError('option domain is invalid');
    }

    str += '; Domain=' + opt.domain;
  }

  if (opt.path) {
    if (!fieldContentRegExp.test(opt.path)) {
      throw new TypeError('option path is invalid');
    }

    str += '; Path=' + opt.path;
  }

  if (opt.expires) {
    if (typeof opt.expires.toUTCString !== 'function') {
      throw new TypeError('option expires is invalid');
    }

    str += '; Expires=' + opt.expires.toUTCString();
  }

  if (opt.httpOnly) {
    str += '; HttpOnly';
  }

  if (opt.secure) {
    str += '; Secure';
  }

  if (opt.sameSite) {
    var sameSite = typeof opt.sameSite === 'string'
      ? opt.sameSite.toLowerCase() : opt.sameSite;

    switch (sameSite) {
      case true:
        str += '; SameSite=Strict';
        break;
      case 'lax':
        str += '; SameSite=Lax';
        break;
      case 'strict':
        str += '; SameSite=Strict';
        break;
      case 'none':
        str += '; SameSite=None';
        break;
      default:
        throw new TypeError('option sameSite is invalid');
    }
  }

  return str;
}

/**
 * Try decoding a string using a decoding function.
 *
 * @param {string} str
 * @param {function} decode
 * @private
 */

function tryDecode(str, decode) {
  try {
    return decode(str);
  } catch (e) {
    return str;
  }
}

var cookie = {
	parse: parse_1,
	serialize: serialize_1
};

var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$';
var unsafeChars = /[<>\b\f\n\r\t\0\u2028\u2029]/g;
var reserved = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
var escaped$1 = {
    '<': '\\u003C',
    '>': '\\u003E',
    '/': '\\u002F',
    '\\': '\\\\',
    '\b': '\\b',
    '\f': '\\f',
    '\n': '\\n',
    '\r': '\\r',
    '\t': '\\t',
    '\0': '\\0',
    '\u2028': '\\u2028',
    '\u2029': '\\u2029'
};
var objectProtoOwnPropertyNames = Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
function devalue(value) {
    var counts = new Map();
    function walk(thing) {
        if (typeof thing === 'function') {
            throw new Error("Cannot stringify a function");
        }
        if (counts.has(thing)) {
            counts.set(thing, counts.get(thing) + 1);
            return;
        }
        counts.set(thing, 1);
        if (!isPrimitive(thing)) {
            var type = getType(thing);
            switch (type) {
                case 'Number':
                case 'String':
                case 'Boolean':
                case 'Date':
                case 'RegExp':
                    return;
                case 'Array':
                    thing.forEach(walk);
                    break;
                case 'Set':
                case 'Map':
                    Array.from(thing).forEach(walk);
                    break;
                default:
                    var proto = Object.getPrototypeOf(thing);
                    if (proto !== Object.prototype &&
                        proto !== null &&
                        Object.getOwnPropertyNames(proto).sort().join('\0') !== objectProtoOwnPropertyNames) {
                        throw new Error("Cannot stringify arbitrary non-POJOs");
                    }
                    if (Object.getOwnPropertySymbols(thing).length > 0) {
                        throw new Error("Cannot stringify POJOs with symbolic keys");
                    }
                    Object.keys(thing).forEach(function (key) { return walk(thing[key]); });
            }
        }
    }
    walk(value);
    var names = new Map();
    Array.from(counts)
        .filter(function (entry) { return entry[1] > 1; })
        .sort(function (a, b) { return b[1] - a[1]; })
        .forEach(function (entry, i) {
        names.set(entry[0], getName(i));
    });
    function stringify(thing) {
        if (names.has(thing)) {
            return names.get(thing);
        }
        if (isPrimitive(thing)) {
            return stringifyPrimitive(thing);
        }
        var type = getType(thing);
        switch (type) {
            case 'Number':
            case 'String':
            case 'Boolean':
                return "Object(" + stringify(thing.valueOf()) + ")";
            case 'RegExp':
                return thing.toString();
            case 'Date':
                return "new Date(" + thing.getTime() + ")";
            case 'Array':
                var members = thing.map(function (v, i) { return i in thing ? stringify(v) : ''; });
                var tail = thing.length === 0 || (thing.length - 1 in thing) ? '' : ',';
                return "[" + members.join(',') + tail + "]";
            case 'Set':
            case 'Map':
                return "new " + type + "([" + Array.from(thing).map(stringify).join(',') + "])";
            default:
                var obj = "{" + Object.keys(thing).map(function (key) { return safeKey(key) + ":" + stringify(thing[key]); }).join(',') + "}";
                var proto = Object.getPrototypeOf(thing);
                if (proto === null) {
                    return Object.keys(thing).length > 0
                        ? "Object.assign(Object.create(null)," + obj + ")"
                        : "Object.create(null)";
                }
                return obj;
        }
    }
    var str = stringify(value);
    if (names.size) {
        var params_1 = [];
        var statements_1 = [];
        var values_1 = [];
        names.forEach(function (name, thing) {
            params_1.push(name);
            if (isPrimitive(thing)) {
                values_1.push(stringifyPrimitive(thing));
                return;
            }
            var type = getType(thing);
            switch (type) {
                case 'Number':
                case 'String':
                case 'Boolean':
                    values_1.push("Object(" + stringify(thing.valueOf()) + ")");
                    break;
                case 'RegExp':
                    values_1.push(thing.toString());
                    break;
                case 'Date':
                    values_1.push("new Date(" + thing.getTime() + ")");
                    break;
                case 'Array':
                    values_1.push("Array(" + thing.length + ")");
                    thing.forEach(function (v, i) {
                        statements_1.push(name + "[" + i + "]=" + stringify(v));
                    });
                    break;
                case 'Set':
                    values_1.push("new Set");
                    statements_1.push(name + "." + Array.from(thing).map(function (v) { return "add(" + stringify(v) + ")"; }).join('.'));
                    break;
                case 'Map':
                    values_1.push("new Map");
                    statements_1.push(name + "." + Array.from(thing).map(function (_a) {
                        var k = _a[0], v = _a[1];
                        return "set(" + stringify(k) + ", " + stringify(v) + ")";
                    }).join('.'));
                    break;
                default:
                    values_1.push(Object.getPrototypeOf(thing) === null ? 'Object.create(null)' : '{}');
                    Object.keys(thing).forEach(function (key) {
                        statements_1.push("" + name + safeProp(key) + "=" + stringify(thing[key]));
                    });
            }
        });
        statements_1.push("return " + str);
        return "(function(" + params_1.join(',') + "){" + statements_1.join(';') + "}(" + values_1.join(',') + "))";
    }
    else {
        return str;
    }
}
function getName(num) {
    var name = '';
    do {
        name = chars[num % chars.length] + name;
        num = ~~(num / chars.length) - 1;
    } while (num >= 0);
    return reserved.test(name) ? name + "_" : name;
}
function isPrimitive(thing) {
    return Object(thing) !== thing;
}
function stringifyPrimitive(thing) {
    if (typeof thing === 'string')
        return stringifyString(thing);
    if (thing === void 0)
        return 'void 0';
    if (thing === 0 && 1 / thing < 0)
        return '-0';
    var str = String(thing);
    if (typeof thing === 'number')
        return str.replace(/^(-)?0\./, '$1.');
    return str;
}
function getType(thing) {
    return Object.prototype.toString.call(thing).slice(8, -1);
}
function escapeUnsafeChar(c) {
    return escaped$1[c] || c;
}
function escapeUnsafeChars(str) {
    return str.replace(unsafeChars, escapeUnsafeChar);
}
function safeKey(key) {
    return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? key : escapeUnsafeChars(JSON.stringify(key));
}
function safeProp(key) {
    return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? "." + key : "[" + escapeUnsafeChars(JSON.stringify(key)) + "]";
}
function stringifyString(str) {
    var result = '"';
    for (var i = 0; i < str.length; i += 1) {
        var char = str.charAt(i);
        var code = char.charCodeAt(0);
        if (char === '"') {
            result += '\\"';
        }
        else if (char in escaped$1) {
            result += escaped$1[char];
        }
        else if (code >= 0xd800 && code <= 0xdfff) {
            var next = str.charCodeAt(i + 1);
            // If this is the beginning of a [high, low] surrogate pair,
            // add the next two characters, otherwise escape
            if (code <= 0xdbff && (next >= 0xdc00 && next <= 0xdfff)) {
                result += char + str[++i];
            }
            else {
                result += "\\u" + code.toString(16).toUpperCase();
            }
        }
        else {
            result += char;
        }
    }
    result += '"';
    return result;
}

// Based on https://github.com/tmpvar/jsdom/blob/aa85b2abf07766ff7bf5c1f6daafb3726f2f2db5/lib/jsdom/living/blob.js

// fix for "Readable" isn't a named export issue
const Readable = Stream.Readable;

const BUFFER = Symbol('buffer');
const TYPE = Symbol('type');

class Blob {
	constructor() {
		this[TYPE] = '';

		const blobParts = arguments[0];
		const options = arguments[1];

		const buffers = [];
		let size = 0;

		if (blobParts) {
			const a = blobParts;
			const length = Number(a.length);
			for (let i = 0; i < length; i++) {
				const element = a[i];
				let buffer;
				if (element instanceof Buffer) {
					buffer = element;
				} else if (ArrayBuffer.isView(element)) {
					buffer = Buffer.from(element.buffer, element.byteOffset, element.byteLength);
				} else if (element instanceof ArrayBuffer) {
					buffer = Buffer.from(element);
				} else if (element instanceof Blob) {
					buffer = element[BUFFER];
				} else {
					buffer = Buffer.from(typeof element === 'string' ? element : String(element));
				}
				size += buffer.length;
				buffers.push(buffer);
			}
		}

		this[BUFFER] = Buffer.concat(buffers);

		let type = options && options.type !== undefined && String(options.type).toLowerCase();
		if (type && !/[^\u0020-\u007E]/.test(type)) {
			this[TYPE] = type;
		}
	}
	get size() {
		return this[BUFFER].length;
	}
	get type() {
		return this[TYPE];
	}
	text() {
		return Promise.resolve(this[BUFFER].toString());
	}
	arrayBuffer() {
		const buf = this[BUFFER];
		const ab = buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
		return Promise.resolve(ab);
	}
	stream() {
		const readable = new Readable();
		readable._read = function () {};
		readable.push(this[BUFFER]);
		readable.push(null);
		return readable;
	}
	toString() {
		return '[object Blob]';
	}
	slice() {
		const size = this.size;

		const start = arguments[0];
		const end = arguments[1];
		let relativeStart, relativeEnd;
		if (start === undefined) {
			relativeStart = 0;
		} else if (start < 0) {
			relativeStart = Math.max(size + start, 0);
		} else {
			relativeStart = Math.min(start, size);
		}
		if (end === undefined) {
			relativeEnd = size;
		} else if (end < 0) {
			relativeEnd = Math.max(size + end, 0);
		} else {
			relativeEnd = Math.min(end, size);
		}
		const span = Math.max(relativeEnd - relativeStart, 0);

		const buffer = this[BUFFER];
		const slicedBuffer = buffer.slice(relativeStart, relativeStart + span);
		const blob = new Blob([], { type: arguments[2] });
		blob[BUFFER] = slicedBuffer;
		return blob;
	}
}

Object.defineProperties(Blob.prototype, {
	size: { enumerable: true },
	type: { enumerable: true },
	slice: { enumerable: true }
});

Object.defineProperty(Blob.prototype, Symbol.toStringTag, {
	value: 'Blob',
	writable: false,
	enumerable: false,
	configurable: true
});

/**
 * fetch-error.js
 *
 * FetchError interface for operational errors
 */

/**
 * Create FetchError instance
 *
 * @param   String      message      Error message for human
 * @param   String      type         Error type for machine
 * @param   String      systemError  For Node.js system error
 * @return  FetchError
 */
function FetchError(message, type, systemError) {
  Error.call(this, message);

  this.message = message;
  this.type = type;

  // when err.type is `system`, err.code contains system error code
  if (systemError) {
    this.code = this.errno = systemError.code;
  }

  // hide custom error implementation details from end-users
  Error.captureStackTrace(this, this.constructor);
}

FetchError.prototype = Object.create(Error.prototype);
FetchError.prototype.constructor = FetchError;
FetchError.prototype.name = 'FetchError';

let convert;
try {
	convert = require('encoding').convert;
} catch (e) {}

const INTERNALS = Symbol('Body internals');

// fix an issue where "PassThrough" isn't a named export for node <10
const PassThrough = Stream.PassThrough;

/**
 * Body mixin
 *
 * Ref: https://fetch.spec.whatwg.org/#body
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */
function Body(body) {
	var _this = this;

	var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	    _ref$size = _ref.size;

	let size = _ref$size === undefined ? 0 : _ref$size;
	var _ref$timeout = _ref.timeout;
	let timeout = _ref$timeout === undefined ? 0 : _ref$timeout;

	if (body == null) {
		// body is undefined or null
		body = null;
	} else if (isURLSearchParams(body)) {
		// body is a URLSearchParams
		body = Buffer.from(body.toString());
	} else if (isBlob(body)) ; else if (Buffer.isBuffer(body)) ; else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') {
		// body is ArrayBuffer
		body = Buffer.from(body);
	} else if (ArrayBuffer.isView(body)) {
		// body is ArrayBufferView
		body = Buffer.from(body.buffer, body.byteOffset, body.byteLength);
	} else if (body instanceof Stream) ; else {
		// none of the above
		// coerce to string then buffer
		body = Buffer.from(String(body));
	}
	this[INTERNALS] = {
		body,
		disturbed: false,
		error: null
	};
	this.size = size;
	this.timeout = timeout;

	if (body instanceof Stream) {
		body.on('error', function (err) {
			const error = err.name === 'AbortError' ? err : new FetchError(`Invalid response body while trying to fetch ${_this.url}: ${err.message}`, 'system', err);
			_this[INTERNALS].error = error;
		});
	}
}

Body.prototype = {
	get body() {
		return this[INTERNALS].body;
	},

	get bodyUsed() {
		return this[INTERNALS].disturbed;
	},

	/**
  * Decode response as ArrayBuffer
  *
  * @return  Promise
  */
	arrayBuffer() {
		return consumeBody.call(this).then(function (buf) {
			return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
		});
	},

	/**
  * Return raw response as Blob
  *
  * @return Promise
  */
	blob() {
		let ct = this.headers && this.headers.get('content-type') || '';
		return consumeBody.call(this).then(function (buf) {
			return Object.assign(
			// Prevent copying
			new Blob([], {
				type: ct.toLowerCase()
			}), {
				[BUFFER]: buf
			});
		});
	},

	/**
  * Decode response as json
  *
  * @return  Promise
  */
	json() {
		var _this2 = this;

		return consumeBody.call(this).then(function (buffer) {
			try {
				return JSON.parse(buffer.toString());
			} catch (err) {
				return Body.Promise.reject(new FetchError(`invalid json response body at ${_this2.url} reason: ${err.message}`, 'invalid-json'));
			}
		});
	},

	/**
  * Decode response as text
  *
  * @return  Promise
  */
	text() {
		return consumeBody.call(this).then(function (buffer) {
			return buffer.toString();
		});
	},

	/**
  * Decode response as buffer (non-spec api)
  *
  * @return  Promise
  */
	buffer() {
		return consumeBody.call(this);
	},

	/**
  * Decode response as text, while automatically detecting the encoding and
  * trying to decode to UTF-8 (non-spec api)
  *
  * @return  Promise
  */
	textConverted() {
		var _this3 = this;

		return consumeBody.call(this).then(function (buffer) {
			return convertBody(buffer, _this3.headers);
		});
	}
};

// In browsers, all properties are enumerable.
Object.defineProperties(Body.prototype, {
	body: { enumerable: true },
	bodyUsed: { enumerable: true },
	arrayBuffer: { enumerable: true },
	blob: { enumerable: true },
	json: { enumerable: true },
	text: { enumerable: true }
});

Body.mixIn = function (proto) {
	for (const name of Object.getOwnPropertyNames(Body.prototype)) {
		// istanbul ignore else: future proof
		if (!(name in proto)) {
			const desc = Object.getOwnPropertyDescriptor(Body.prototype, name);
			Object.defineProperty(proto, name, desc);
		}
	}
};

/**
 * Consume and convert an entire Body to a Buffer.
 *
 * Ref: https://fetch.spec.whatwg.org/#concept-body-consume-body
 *
 * @return  Promise
 */
function consumeBody() {
	var _this4 = this;

	if (this[INTERNALS].disturbed) {
		return Body.Promise.reject(new TypeError(`body used already for: ${this.url}`));
	}

	this[INTERNALS].disturbed = true;

	if (this[INTERNALS].error) {
		return Body.Promise.reject(this[INTERNALS].error);
	}

	let body = this.body;

	// body is null
	if (body === null) {
		return Body.Promise.resolve(Buffer.alloc(0));
	}

	// body is blob
	if (isBlob(body)) {
		body = body.stream();
	}

	// body is buffer
	if (Buffer.isBuffer(body)) {
		return Body.Promise.resolve(body);
	}

	// istanbul ignore if: should never happen
	if (!(body instanceof Stream)) {
		return Body.Promise.resolve(Buffer.alloc(0));
	}

	// body is stream
	// get ready to actually consume the body
	let accum = [];
	let accumBytes = 0;
	let abort = false;

	return new Body.Promise(function (resolve, reject) {
		let resTimeout;

		// allow timeout on slow response body
		if (_this4.timeout) {
			resTimeout = setTimeout(function () {
				abort = true;
				reject(new FetchError(`Response timeout while trying to fetch ${_this4.url} (over ${_this4.timeout}ms)`, 'body-timeout'));
			}, _this4.timeout);
		}

		// handle stream errors
		body.on('error', function (err) {
			if (err.name === 'AbortError') {
				// if the request was aborted, reject with this Error
				abort = true;
				reject(err);
			} else {
				// other errors, such as incorrect content-encoding
				reject(new FetchError(`Invalid response body while trying to fetch ${_this4.url}: ${err.message}`, 'system', err));
			}
		});

		body.on('data', function (chunk) {
			if (abort || chunk === null) {
				return;
			}

			if (_this4.size && accumBytes + chunk.length > _this4.size) {
				abort = true;
				reject(new FetchError(`content size at ${_this4.url} over limit: ${_this4.size}`, 'max-size'));
				return;
			}

			accumBytes += chunk.length;
			accum.push(chunk);
		});

		body.on('end', function () {
			if (abort) {
				return;
			}

			clearTimeout(resTimeout);

			try {
				resolve(Buffer.concat(accum, accumBytes));
			} catch (err) {
				// handle streams that have accumulated too much data (issue #414)
				reject(new FetchError(`Could not create Buffer from response body for ${_this4.url}: ${err.message}`, 'system', err));
			}
		});
	});
}

/**
 * Detect buffer encoding and convert to target encoding
 * ref: http://www.w3.org/TR/2011/WD-html5-20110113/parsing.html#determining-the-character-encoding
 *
 * @param   Buffer  buffer    Incoming buffer
 * @param   String  encoding  Target encoding
 * @return  String
 */
function convertBody(buffer, headers) {
	if (typeof convert !== 'function') {
		throw new Error('The package `encoding` must be installed to use the textConverted() function');
	}

	const ct = headers.get('content-type');
	let charset = 'utf-8';
	let res, str;

	// header
	if (ct) {
		res = /charset=([^;]*)/i.exec(ct);
	}

	// no charset in content type, peek at response body for at most 1024 bytes
	str = buffer.slice(0, 1024).toString();

	// html5
	if (!res && str) {
		res = /<meta.+?charset=(['"])(.+?)\1/i.exec(str);
	}

	// html4
	if (!res && str) {
		res = /<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(str);

		if (res) {
			res = /charset=(.*)/i.exec(res.pop());
		}
	}

	// xml
	if (!res && str) {
		res = /<\?xml.+?encoding=(['"])(.+?)\1/i.exec(str);
	}

	// found charset
	if (res) {
		charset = res.pop();

		// prevent decode issues when sites use incorrect encoding
		// ref: https://hsivonen.fi/encoding-menu/
		if (charset === 'gb2312' || charset === 'gbk') {
			charset = 'gb18030';
		}
	}

	// turn raw buffers into a single utf-8 buffer
	return convert(buffer, 'UTF-8', charset).toString();
}

/**
 * Detect a URLSearchParams object
 * ref: https://github.com/bitinn/node-fetch/issues/296#issuecomment-307598143
 *
 * @param   Object  obj     Object to detect by type or brand
 * @return  String
 */
function isURLSearchParams(obj) {
	// Duck-typing as a necessary condition.
	if (typeof obj !== 'object' || typeof obj.append !== 'function' || typeof obj.delete !== 'function' || typeof obj.get !== 'function' || typeof obj.getAll !== 'function' || typeof obj.has !== 'function' || typeof obj.set !== 'function') {
		return false;
	}

	// Brand-checking and more duck-typing as optional condition.
	return obj.constructor.name === 'URLSearchParams' || Object.prototype.toString.call(obj) === '[object URLSearchParams]' || typeof obj.sort === 'function';
}

/**
 * Check if `obj` is a W3C `Blob` object (which `File` inherits from)
 * @param  {*} obj
 * @return {boolean}
 */
function isBlob(obj) {
	return typeof obj === 'object' && typeof obj.arrayBuffer === 'function' && typeof obj.type === 'string' && typeof obj.stream === 'function' && typeof obj.constructor === 'function' && typeof obj.constructor.name === 'string' && /^(Blob|File)$/.test(obj.constructor.name) && /^(Blob|File)$/.test(obj[Symbol.toStringTag]);
}

/**
 * Clone body given Res/Req instance
 *
 * @param   Mixed  instance  Response or Request instance
 * @return  Mixed
 */
function clone(instance) {
	let p1, p2;
	let body = instance.body;

	// don't allow cloning a used body
	if (instance.bodyUsed) {
		throw new Error('cannot clone body after it is used');
	}

	// check that body is a stream and not form-data object
	// note: we can't clone the form-data object without having it as a dependency
	if (body instanceof Stream && typeof body.getBoundary !== 'function') {
		// tee instance body
		p1 = new PassThrough();
		p2 = new PassThrough();
		body.pipe(p1);
		body.pipe(p2);
		// set instance body to teed body and return the other teed body
		instance[INTERNALS].body = p1;
		body = p2;
	}

	return body;
}

/**
 * Performs the operation "extract a `Content-Type` value from |object|" as
 * specified in the specification:
 * https://fetch.spec.whatwg.org/#concept-bodyinit-extract
 *
 * This function assumes that instance.body is present.
 *
 * @param   Mixed  instance  Any options.body input
 */
function extractContentType(body) {
	if (body === null) {
		// body is null
		return null;
	} else if (typeof body === 'string') {
		// body is string
		return 'text/plain;charset=UTF-8';
	} else if (isURLSearchParams(body)) {
		// body is a URLSearchParams
		return 'application/x-www-form-urlencoded;charset=UTF-8';
	} else if (isBlob(body)) {
		// body is blob
		return body.type || null;
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		return null;
	} else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') {
		// body is ArrayBuffer
		return null;
	} else if (ArrayBuffer.isView(body)) {
		// body is ArrayBufferView
		return null;
	} else if (typeof body.getBoundary === 'function') {
		// detect form data input from form-data module
		return `multipart/form-data;boundary=${body.getBoundary()}`;
	} else if (body instanceof Stream) {
		// body is stream
		// can't really do much about this
		return null;
	} else {
		// Body constructor defaults other things to string
		return 'text/plain;charset=UTF-8';
	}
}

/**
 * The Fetch Standard treats this as if "total bytes" is a property on the body.
 * For us, we have to explicitly get it with a function.
 *
 * ref: https://fetch.spec.whatwg.org/#concept-body-total-bytes
 *
 * @param   Body    instance   Instance of Body
 * @return  Number?            Number of bytes, or null if not possible
 */
function getTotalBytes(instance) {
	const body = instance.body;


	if (body === null) {
		// body is null
		return 0;
	} else if (isBlob(body)) {
		return body.size;
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		return body.length;
	} else if (body && typeof body.getLengthSync === 'function') {
		// detect form data input from form-data module
		if (body._lengthRetrievers && body._lengthRetrievers.length == 0 || // 1.x
		body.hasKnownLength && body.hasKnownLength()) {
			// 2.x
			return body.getLengthSync();
		}
		return null;
	} else {
		// body is stream
		return null;
	}
}

/**
 * Write a Body to a Node.js WritableStream (e.g. http.Request) object.
 *
 * @param   Body    instance   Instance of Body
 * @return  Void
 */
function writeToStream(dest, instance) {
	const body = instance.body;


	if (body === null) {
		// body is null
		dest.end();
	} else if (isBlob(body)) {
		body.stream().pipe(dest);
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		dest.write(body);
		dest.end();
	} else {
		// body is stream
		body.pipe(dest);
	}
}

// expose Promise
Body.Promise = global.Promise;

/**
 * headers.js
 *
 * Headers class offers convenient helpers
 */

const invalidTokenRegex = /[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/;
const invalidHeaderCharRegex = /[^\t\x20-\x7e\x80-\xff]/;

function validateName(name) {
	name = `${name}`;
	if (invalidTokenRegex.test(name) || name === '') {
		throw new TypeError(`${name} is not a legal HTTP header name`);
	}
}

function validateValue(value) {
	value = `${value}`;
	if (invalidHeaderCharRegex.test(value)) {
		throw new TypeError(`${value} is not a legal HTTP header value`);
	}
}

/**
 * Find the key in the map object given a header name.
 *
 * Returns undefined if not found.
 *
 * @param   String  name  Header name
 * @return  String|Undefined
 */
function find(map, name) {
	name = name.toLowerCase();
	for (const key in map) {
		if (key.toLowerCase() === name) {
			return key;
		}
	}
	return undefined;
}

const MAP = Symbol('map');
class Headers {
	/**
  * Headers class
  *
  * @param   Object  headers  Response headers
  * @return  Void
  */
	constructor() {
		let init = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

		this[MAP] = Object.create(null);

		if (init instanceof Headers) {
			const rawHeaders = init.raw();
			const headerNames = Object.keys(rawHeaders);

			for (const headerName of headerNames) {
				for (const value of rawHeaders[headerName]) {
					this.append(headerName, value);
				}
			}

			return;
		}

		// We don't worry about converting prop to ByteString here as append()
		// will handle it.
		if (init == null) ; else if (typeof init === 'object') {
			const method = init[Symbol.iterator];
			if (method != null) {
				if (typeof method !== 'function') {
					throw new TypeError('Header pairs must be iterable');
				}

				// sequence<sequence<ByteString>>
				// Note: per spec we have to first exhaust the lists then process them
				const pairs = [];
				for (const pair of init) {
					if (typeof pair !== 'object' || typeof pair[Symbol.iterator] !== 'function') {
						throw new TypeError('Each header pair must be iterable');
					}
					pairs.push(Array.from(pair));
				}

				for (const pair of pairs) {
					if (pair.length !== 2) {
						throw new TypeError('Each header pair must be a name/value tuple');
					}
					this.append(pair[0], pair[1]);
				}
			} else {
				// record<ByteString, ByteString>
				for (const key of Object.keys(init)) {
					const value = init[key];
					this.append(key, value);
				}
			}
		} else {
			throw new TypeError('Provided initializer must be an object');
		}
	}

	/**
  * Return combined header value given name
  *
  * @param   String  name  Header name
  * @return  Mixed
  */
	get(name) {
		name = `${name}`;
		validateName(name);
		const key = find(this[MAP], name);
		if (key === undefined) {
			return null;
		}

		return this[MAP][key].join(', ');
	}

	/**
  * Iterate over all headers
  *
  * @param   Function  callback  Executed for each item with parameters (value, name, thisArg)
  * @param   Boolean   thisArg   `this` context for callback function
  * @return  Void
  */
	forEach(callback) {
		let thisArg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

		let pairs = getHeaders(this);
		let i = 0;
		while (i < pairs.length) {
			var _pairs$i = pairs[i];
			const name = _pairs$i[0],
			      value = _pairs$i[1];

			callback.call(thisArg, value, name, this);
			pairs = getHeaders(this);
			i++;
		}
	}

	/**
  * Overwrite header values given name
  *
  * @param   String  name   Header name
  * @param   String  value  Header value
  * @return  Void
  */
	set(name, value) {
		name = `${name}`;
		value = `${value}`;
		validateName(name);
		validateValue(value);
		const key = find(this[MAP], name);
		this[MAP][key !== undefined ? key : name] = [value];
	}

	/**
  * Append a value onto existing header
  *
  * @param   String  name   Header name
  * @param   String  value  Header value
  * @return  Void
  */
	append(name, value) {
		name = `${name}`;
		value = `${value}`;
		validateName(name);
		validateValue(value);
		const key = find(this[MAP], name);
		if (key !== undefined) {
			this[MAP][key].push(value);
		} else {
			this[MAP][name] = [value];
		}
	}

	/**
  * Check for header name existence
  *
  * @param   String   name  Header name
  * @return  Boolean
  */
	has(name) {
		name = `${name}`;
		validateName(name);
		return find(this[MAP], name) !== undefined;
	}

	/**
  * Delete all header values given name
  *
  * @param   String  name  Header name
  * @return  Void
  */
	delete(name) {
		name = `${name}`;
		validateName(name);
		const key = find(this[MAP], name);
		if (key !== undefined) {
			delete this[MAP][key];
		}
	}

	/**
  * Return raw headers (non-spec api)
  *
  * @return  Object
  */
	raw() {
		return this[MAP];
	}

	/**
  * Get an iterator on keys.
  *
  * @return  Iterator
  */
	keys() {
		return createHeadersIterator(this, 'key');
	}

	/**
  * Get an iterator on values.
  *
  * @return  Iterator
  */
	values() {
		return createHeadersIterator(this, 'value');
	}

	/**
  * Get an iterator on entries.
  *
  * This is the default iterator of the Headers object.
  *
  * @return  Iterator
  */
	[Symbol.iterator]() {
		return createHeadersIterator(this, 'key+value');
	}
}
Headers.prototype.entries = Headers.prototype[Symbol.iterator];

Object.defineProperty(Headers.prototype, Symbol.toStringTag, {
	value: 'Headers',
	writable: false,
	enumerable: false,
	configurable: true
});

Object.defineProperties(Headers.prototype, {
	get: { enumerable: true },
	forEach: { enumerable: true },
	set: { enumerable: true },
	append: { enumerable: true },
	has: { enumerable: true },
	delete: { enumerable: true },
	keys: { enumerable: true },
	values: { enumerable: true },
	entries: { enumerable: true }
});

function getHeaders(headers) {
	let kind = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'key+value';

	const keys = Object.keys(headers[MAP]).sort();
	return keys.map(kind === 'key' ? function (k) {
		return k.toLowerCase();
	} : kind === 'value' ? function (k) {
		return headers[MAP][k].join(', ');
	} : function (k) {
		return [k.toLowerCase(), headers[MAP][k].join(', ')];
	});
}

const INTERNAL = Symbol('internal');

function createHeadersIterator(target, kind) {
	const iterator = Object.create(HeadersIteratorPrototype);
	iterator[INTERNAL] = {
		target,
		kind,
		index: 0
	};
	return iterator;
}

const HeadersIteratorPrototype = Object.setPrototypeOf({
	next() {
		// istanbul ignore if
		if (!this || Object.getPrototypeOf(this) !== HeadersIteratorPrototype) {
			throw new TypeError('Value of `this` is not a HeadersIterator');
		}

		var _INTERNAL = this[INTERNAL];
		const target = _INTERNAL.target,
		      kind = _INTERNAL.kind,
		      index = _INTERNAL.index;

		const values = getHeaders(target, kind);
		const len = values.length;
		if (index >= len) {
			return {
				value: undefined,
				done: true
			};
		}

		this[INTERNAL].index = index + 1;

		return {
			value: values[index],
			done: false
		};
	}
}, Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())));

Object.defineProperty(HeadersIteratorPrototype, Symbol.toStringTag, {
	value: 'HeadersIterator',
	writable: false,
	enumerable: false,
	configurable: true
});

/**
 * Export the Headers object in a form that Node.js can consume.
 *
 * @param   Headers  headers
 * @return  Object
 */
function exportNodeCompatibleHeaders(headers) {
	const obj = Object.assign({ __proto__: null }, headers[MAP]);

	// http.request() only supports string as Host header. This hack makes
	// specifying custom Host header possible.
	const hostHeaderKey = find(headers[MAP], 'Host');
	if (hostHeaderKey !== undefined) {
		obj[hostHeaderKey] = obj[hostHeaderKey][0];
	}

	return obj;
}

/**
 * Create a Headers object from an object of headers, ignoring those that do
 * not conform to HTTP grammar productions.
 *
 * @param   Object  obj  Object of headers
 * @return  Headers
 */
function createHeadersLenient(obj) {
	const headers = new Headers();
	for (const name of Object.keys(obj)) {
		if (invalidTokenRegex.test(name)) {
			continue;
		}
		if (Array.isArray(obj[name])) {
			for (const val of obj[name]) {
				if (invalidHeaderCharRegex.test(val)) {
					continue;
				}
				if (headers[MAP][name] === undefined) {
					headers[MAP][name] = [val];
				} else {
					headers[MAP][name].push(val);
				}
			}
		} else if (!invalidHeaderCharRegex.test(obj[name])) {
			headers[MAP][name] = [obj[name]];
		}
	}
	return headers;
}

const INTERNALS$1 = Symbol('Response internals');

// fix an issue where "STATUS_CODES" aren't a named export for node <10
const STATUS_CODES = http.STATUS_CODES;

/**
 * Response class
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */
class Response {
	constructor() {
		let body = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
		let opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		Body.call(this, body, opts);

		const status = opts.status || 200;
		const headers = new Headers(opts.headers);

		if (body != null && !headers.has('Content-Type')) {
			const contentType = extractContentType(body);
			if (contentType) {
				headers.append('Content-Type', contentType);
			}
		}

		this[INTERNALS$1] = {
			url: opts.url,
			status,
			statusText: opts.statusText || STATUS_CODES[status],
			headers,
			counter: opts.counter
		};
	}

	get url() {
		return this[INTERNALS$1].url || '';
	}

	get status() {
		return this[INTERNALS$1].status;
	}

	/**
  * Convenience property representing if the request ended normally
  */
	get ok() {
		return this[INTERNALS$1].status >= 200 && this[INTERNALS$1].status < 300;
	}

	get redirected() {
		return this[INTERNALS$1].counter > 0;
	}

	get statusText() {
		return this[INTERNALS$1].statusText;
	}

	get headers() {
		return this[INTERNALS$1].headers;
	}

	/**
  * Clone this response
  *
  * @return  Response
  */
	clone() {
		return new Response(clone(this), {
			url: this.url,
			status: this.status,
			statusText: this.statusText,
			headers: this.headers,
			ok: this.ok,
			redirected: this.redirected
		});
	}
}

Body.mixIn(Response.prototype);

Object.defineProperties(Response.prototype, {
	url: { enumerable: true },
	status: { enumerable: true },
	ok: { enumerable: true },
	redirected: { enumerable: true },
	statusText: { enumerable: true },
	headers: { enumerable: true },
	clone: { enumerable: true }
});

Object.defineProperty(Response.prototype, Symbol.toStringTag, {
	value: 'Response',
	writable: false,
	enumerable: false,
	configurable: true
});

const INTERNALS$2 = Symbol('Request internals');

// fix an issue where "format", "parse" aren't a named export for node <10
const parse_url = Url.parse;
const format_url = Url.format;

const streamDestructionSupported = 'destroy' in Stream.Readable.prototype;

/**
 * Check if a value is an instance of Request.
 *
 * @param   Mixed   input
 * @return  Boolean
 */
function isRequest(input) {
	return typeof input === 'object' && typeof input[INTERNALS$2] === 'object';
}

function isAbortSignal(signal) {
	const proto = signal && typeof signal === 'object' && Object.getPrototypeOf(signal);
	return !!(proto && proto.constructor.name === 'AbortSignal');
}

/**
 * Request class
 *
 * @param   Mixed   input  Url or Request instance
 * @param   Object  init   Custom options
 * @return  Void
 */
class Request {
	constructor(input) {
		let init = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		let parsedURL;

		// normalize input
		if (!isRequest(input)) {
			if (input && input.href) {
				// in order to support Node.js' Url objects; though WHATWG's URL objects
				// will fall into this branch also (since their `toString()` will return
				// `href` property anyway)
				parsedURL = parse_url(input.href);
			} else {
				// coerce input to a string before attempting to parse
				parsedURL = parse_url(`${input}`);
			}
			input = {};
		} else {
			parsedURL = parse_url(input.url);
		}

		let method = init.method || input.method || 'GET';
		method = method.toUpperCase();

		if ((init.body != null || isRequest(input) && input.body !== null) && (method === 'GET' || method === 'HEAD')) {
			throw new TypeError('Request with GET/HEAD method cannot have body');
		}

		let inputBody = init.body != null ? init.body : isRequest(input) && input.body !== null ? clone(input) : null;

		Body.call(this, inputBody, {
			timeout: init.timeout || input.timeout || 0,
			size: init.size || input.size || 0
		});

		const headers = new Headers(init.headers || input.headers || {});

		if (inputBody != null && !headers.has('Content-Type')) {
			const contentType = extractContentType(inputBody);
			if (contentType) {
				headers.append('Content-Type', contentType);
			}
		}

		let signal = isRequest(input) ? input.signal : null;
		if ('signal' in init) signal = init.signal;

		if (signal != null && !isAbortSignal(signal)) {
			throw new TypeError('Expected signal to be an instanceof AbortSignal');
		}

		this[INTERNALS$2] = {
			method,
			redirect: init.redirect || input.redirect || 'follow',
			headers,
			parsedURL,
			signal
		};

		// node-fetch-only options
		this.follow = init.follow !== undefined ? init.follow : input.follow !== undefined ? input.follow : 20;
		this.compress = init.compress !== undefined ? init.compress : input.compress !== undefined ? input.compress : true;
		this.counter = init.counter || input.counter || 0;
		this.agent = init.agent || input.agent;
	}

	get method() {
		return this[INTERNALS$2].method;
	}

	get url() {
		return format_url(this[INTERNALS$2].parsedURL);
	}

	get headers() {
		return this[INTERNALS$2].headers;
	}

	get redirect() {
		return this[INTERNALS$2].redirect;
	}

	get signal() {
		return this[INTERNALS$2].signal;
	}

	/**
  * Clone this request
  *
  * @return  Request
  */
	clone() {
		return new Request(this);
	}
}

Body.mixIn(Request.prototype);

Object.defineProperty(Request.prototype, Symbol.toStringTag, {
	value: 'Request',
	writable: false,
	enumerable: false,
	configurable: true
});

Object.defineProperties(Request.prototype, {
	method: { enumerable: true },
	url: { enumerable: true },
	headers: { enumerable: true },
	redirect: { enumerable: true },
	clone: { enumerable: true },
	signal: { enumerable: true }
});

/**
 * Convert a Request to Node.js http request options.
 *
 * @param   Request  A Request instance
 * @return  Object   The options object to be passed to http.request
 */
function getNodeRequestOptions(request) {
	const parsedURL = request[INTERNALS$2].parsedURL;
	const headers = new Headers(request[INTERNALS$2].headers);

	// fetch step 1.3
	if (!headers.has('Accept')) {
		headers.set('Accept', '*/*');
	}

	// Basic fetch
	if (!parsedURL.protocol || !parsedURL.hostname) {
		throw new TypeError('Only absolute URLs are supported');
	}

	if (!/^https?:$/.test(parsedURL.protocol)) {
		throw new TypeError('Only HTTP(S) protocols are supported');
	}

	if (request.signal && request.body instanceof Stream.Readable && !streamDestructionSupported) {
		throw new Error('Cancellation of streamed requests with AbortSignal is not supported in node < 8');
	}

	// HTTP-network-or-cache fetch steps 2.4-2.7
	let contentLengthValue = null;
	if (request.body == null && /^(POST|PUT)$/i.test(request.method)) {
		contentLengthValue = '0';
	}
	if (request.body != null) {
		const totalBytes = getTotalBytes(request);
		if (typeof totalBytes === 'number') {
			contentLengthValue = String(totalBytes);
		}
	}
	if (contentLengthValue) {
		headers.set('Content-Length', contentLengthValue);
	}

	// HTTP-network-or-cache fetch step 2.11
	if (!headers.has('User-Agent')) {
		headers.set('User-Agent', 'node-fetch/1.0 (+https://github.com/bitinn/node-fetch)');
	}

	// HTTP-network-or-cache fetch step 2.15
	if (request.compress && !headers.has('Accept-Encoding')) {
		headers.set('Accept-Encoding', 'gzip,deflate');
	}

	let agent = request.agent;
	if (typeof agent === 'function') {
		agent = agent(parsedURL);
	}

	if (!headers.has('Connection') && !agent) {
		headers.set('Connection', 'close');
	}

	// HTTP-network fetch step 4.2
	// chunked encoding is handled by Node.js

	return Object.assign({}, parsedURL, {
		method: request.method,
		headers: exportNodeCompatibleHeaders(headers),
		agent
	});
}

/**
 * abort-error.js
 *
 * AbortError interface for cancelled requests
 */

/**
 * Create AbortError instance
 *
 * @param   String      message      Error message for human
 * @return  AbortError
 */
function AbortError(message) {
  Error.call(this, message);

  this.type = 'aborted';
  this.message = message;

  // hide custom error implementation details from end-users
  Error.captureStackTrace(this, this.constructor);
}

AbortError.prototype = Object.create(Error.prototype);
AbortError.prototype.constructor = AbortError;
AbortError.prototype.name = 'AbortError';

// fix an issue where "PassThrough", "resolve" aren't a named export for node <10
const PassThrough$1 = Stream.PassThrough;
const resolve_url = Url.resolve;

/**
 * Fetch function
 *
 * @param   Mixed    url   Absolute url or Request instance
 * @param   Object   opts  Fetch options
 * @return  Promise
 */
function fetch(url, opts) {

	// allow custom promise
	if (!fetch.Promise) {
		throw new Error('native promise missing, set fetch.Promise to your favorite alternative');
	}

	Body.Promise = fetch.Promise;

	// wrap http.request into fetch
	return new fetch.Promise(function (resolve, reject) {
		// build request object
		const request = new Request(url, opts);
		const options = getNodeRequestOptions(request);

		const send = (options.protocol === 'https:' ? https : http).request;
		const signal = request.signal;

		let response = null;

		const abort = function abort() {
			let error = new AbortError('The user aborted a request.');
			reject(error);
			if (request.body && request.body instanceof Stream.Readable) {
				request.body.destroy(error);
			}
			if (!response || !response.body) return;
			response.body.emit('error', error);
		};

		if (signal && signal.aborted) {
			abort();
			return;
		}

		const abortAndFinalize = function abortAndFinalize() {
			abort();
			finalize();
		};

		// send request
		const req = send(options);
		let reqTimeout;

		if (signal) {
			signal.addEventListener('abort', abortAndFinalize);
		}

		function finalize() {
			req.abort();
			if (signal) signal.removeEventListener('abort', abortAndFinalize);
			clearTimeout(reqTimeout);
		}

		if (request.timeout) {
			req.once('socket', function (socket) {
				reqTimeout = setTimeout(function () {
					reject(new FetchError(`network timeout at: ${request.url}`, 'request-timeout'));
					finalize();
				}, request.timeout);
			});
		}

		req.on('error', function (err) {
			reject(new FetchError(`request to ${request.url} failed, reason: ${err.message}`, 'system', err));
			finalize();
		});

		req.on('response', function (res) {
			clearTimeout(reqTimeout);

			const headers = createHeadersLenient(res.headers);

			// HTTP fetch step 5
			if (fetch.isRedirect(res.statusCode)) {
				// HTTP fetch step 5.2
				const location = headers.get('Location');

				// HTTP fetch step 5.3
				const locationURL = location === null ? null : resolve_url(request.url, location);

				// HTTP fetch step 5.5
				switch (request.redirect) {
					case 'error':
						reject(new FetchError(`redirect mode is set to error: ${request.url}`, 'no-redirect'));
						finalize();
						return;
					case 'manual':
						// node-fetch-specific step: make manual redirect a bit easier to use by setting the Location header value to the resolved URL.
						if (locationURL !== null) {
							// handle corrupted header
							try {
								headers.set('Location', locationURL);
							} catch (err) {
								// istanbul ignore next: nodejs server prevent invalid response headers, we can't test this through normal request
								reject(err);
							}
						}
						break;
					case 'follow':
						// HTTP-redirect fetch step 2
						if (locationURL === null) {
							break;
						}

						// HTTP-redirect fetch step 5
						if (request.counter >= request.follow) {
							reject(new FetchError(`maximum redirect reached at: ${request.url}`, 'max-redirect'));
							finalize();
							return;
						}

						// HTTP-redirect fetch step 6 (counter increment)
						// Create a new Request object.
						const requestOpts = {
							headers: new Headers(request.headers),
							follow: request.follow,
							counter: request.counter + 1,
							agent: request.agent,
							compress: request.compress,
							method: request.method,
							body: request.body,
							signal: request.signal,
							timeout: request.timeout
						};

						// HTTP-redirect fetch step 9
						if (res.statusCode !== 303 && request.body && getTotalBytes(request) === null) {
							reject(new FetchError('Cannot follow redirect with body being a readable stream', 'unsupported-redirect'));
							finalize();
							return;
						}

						// HTTP-redirect fetch step 11
						if (res.statusCode === 303 || (res.statusCode === 301 || res.statusCode === 302) && request.method === 'POST') {
							requestOpts.method = 'GET';
							requestOpts.body = undefined;
							requestOpts.headers.delete('content-length');
						}

						// HTTP-redirect fetch step 15
						resolve(fetch(new Request(locationURL, requestOpts)));
						finalize();
						return;
				}
			}

			// prepare response
			res.once('end', function () {
				if (signal) signal.removeEventListener('abort', abortAndFinalize);
			});
			let body = res.pipe(new PassThrough$1());

			const response_options = {
				url: request.url,
				status: res.statusCode,
				statusText: res.statusMessage,
				headers: headers,
				size: request.size,
				timeout: request.timeout,
				counter: request.counter
			};

			// HTTP-network fetch step 12.1.1.3
			const codings = headers.get('Content-Encoding');

			// HTTP-network fetch step 12.1.1.4: handle content codings

			// in following scenarios we ignore compression support
			// 1. compression support is disabled
			// 2. HEAD request
			// 3. no Content-Encoding header
			// 4. no content response (204)
			// 5. content not modified response (304)
			if (!request.compress || request.method === 'HEAD' || codings === null || res.statusCode === 204 || res.statusCode === 304) {
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// For Node v6+
			// Be less strict when decoding compressed responses, since sometimes
			// servers send slightly invalid responses that are still accepted
			// by common browsers.
			// Always using Z_SYNC_FLUSH is what cURL does.
			const zlibOptions = {
				flush: zlib.Z_SYNC_FLUSH,
				finishFlush: zlib.Z_SYNC_FLUSH
			};

			// for gzip
			if (codings == 'gzip' || codings == 'x-gzip') {
				body = body.pipe(zlib.createGunzip(zlibOptions));
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// for deflate
			if (codings == 'deflate' || codings == 'x-deflate') {
				// handle the infamous raw deflate response from old servers
				// a hack for old IIS and Apache servers
				const raw = res.pipe(new PassThrough$1());
				raw.once('data', function (chunk) {
					// see http://stackoverflow.com/questions/37519828
					if ((chunk[0] & 0x0F) === 0x08) {
						body = body.pipe(zlib.createInflate());
					} else {
						body = body.pipe(zlib.createInflateRaw());
					}
					response = new Response(body, response_options);
					resolve(response);
				});
				return;
			}

			// for br
			if (codings == 'br' && typeof zlib.createBrotliDecompress === 'function') {
				body = body.pipe(zlib.createBrotliDecompress());
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// otherwise, use response as-is
			response = new Response(body, response_options);
			resolve(response);
		});

		writeToStream(req, request);
	});
}
/**
 * Redirect code matching
 *
 * @param   Number   code  Status code
 * @return  Boolean
 */
fetch.isRedirect = function (code) {
	return code === 301 || code === 302 || code === 303 || code === 307 || code === 308;
};

// expose Promise
fetch.Promise = global.Promise;

function get_page_handler(
	manifest,
	session_getter
) {
	const get_build_info =  () => JSON.parse(fs.readFileSync(path.join(build_dir, 'build.json'), 'utf-8'))
		;

	const template =  () => read_template(src_dir)
		;

	const has_service_worker = fs.existsSync(path.join(build_dir, 'service-worker.js'));

	const { server_routes, pages } = manifest;
	const error_route = manifest.error;

	function bail(req, res, err) {
		console.error(err);

		const message =  escape_html(err.message) ;

		res.statusCode = 500;
		res.end(`<pre>${message}</pre>`);
	}

	function handle_error(req, res, statusCode, error) {
		handle_page({
			pattern: null,
			parts: [
				{ name: null, component: error_route }
			]
		}, req, res, statusCode, error || new Error('Unknown error in preload function'));
	}

	async function handle_page(page, req, res, status = 200, error = null) {
		const is_service_worker_index = req.path === '/service-worker-index.html';
		const build_info




 = get_build_info();

		res.setHeader('Content-Type', 'text/html');
		res.setHeader('Cache-Control',  'no-cache' );

		// preload main.js and current route
		// TODO detect other stuff we can preload? images, CSS, fonts?
		let preloaded_chunks = Array.isArray(build_info.assets.main) ? build_info.assets.main : [build_info.assets.main];
		if (!error && !is_service_worker_index) {
			page.parts.forEach(part => {
				if (!part) return;

				// using concat because it could be a string or an array. thanks webpack!
				preloaded_chunks = preloaded_chunks.concat(build_info.assets[part.name]);
			});
		}

		if (build_info.bundler === 'rollup') {
			// TODO add dependencies and CSS
			const link = preloaded_chunks
				.filter(file => file && !file.match(/\.map$/))
				.map(file => `<${req.baseUrl}/client/${file}>;rel="modulepreload"`)
				.join(', ');

			res.setHeader('Link', link);
		} else {
			const link = preloaded_chunks
				.filter(file => file && !file.match(/\.map$/))
				.map((file) => {
					const as = /\.css$/.test(file) ? 'style' : 'script';
					return `<${req.baseUrl}/client/${file}>;rel="preload";as="${as}"`;
				})
				.join(', ');

			res.setHeader('Link', link);
		}

		const session = session_getter(req, res);

		let redirect;
		let preload_error;

		const preload_context = {
			redirect: (statusCode, location) => {
				if (redirect && (redirect.statusCode !== statusCode || redirect.location !== location)) {
					throw new Error(`Conflicting redirects`);
				}
				location = location.replace(/^\//g, ''); // leading slash (only)
				redirect = { statusCode, location };
			},
			error: (statusCode, message) => {
				preload_error = { statusCode, message };
			},
			fetch: (url, opts) => {
				const parsed = new Url.URL(url, `http://127.0.0.1:${process.env.PORT}${req.baseUrl ? req.baseUrl + '/' :''}`);

				if (opts) {
					opts = Object.assign({}, opts);

					const include_cookies = (
						opts.credentials === 'include' ||
						opts.credentials === 'same-origin' && parsed.origin === `http://127.0.0.1:${process.env.PORT}`
					);

					if (include_cookies) {
						opts.headers = Object.assign({}, opts.headers);

						const cookies = Object.assign(
							{},
							cookie.parse(req.headers.cookie || ''),
							cookie.parse(opts.headers.cookie || '')
						);

						const set_cookie = res.getHeader('Set-Cookie');
						(Array.isArray(set_cookie) ? set_cookie : [set_cookie]).forEach(str => {
							const match = /([^=]+)=([^;]+)/.exec(str);
							if (match) cookies[match[1]] = match[2];
						});

						const str = Object.keys(cookies)
							.map(key => `${key}=${cookies[key]}`)
							.join('; ');

						opts.headers.cookie = str;
					}
				}

				return fetch(parsed.href, opts);
			}
		};

		let preloaded;
		let match;
		let params;

		try {
			const root_preloaded = manifest.root_preload
				? manifest.root_preload.call(preload_context, {
					path: req.path,
					query: req.query,
					params: {}
				}, session)
				: {};

			match = error ? null : page.pattern.exec(req.path);


			let toPreload = [root_preloaded];
			if (!is_service_worker_index) {
				toPreload = toPreload.concat(page.parts.map(part => {
					if (!part) return null;

					// the deepest level is used below, to initialise the store
					params = part.params ? part.params(match) : {};

					return part.preload
						? part.preload.call(preload_context, {
							path: req.path,
							query: req.query,
							params
						}, session)
						: {};
				}));
			}

			preloaded = await Promise.all(toPreload);
		} catch (err) {
			if (error) {
				return bail(req, res, err)
			}

			preload_error = { statusCode: 500, message: err };
			preloaded = []; // appease TypeScript
		}

		try {
			if (redirect) {
				const location = Url.resolve((req.baseUrl || '') + '/', redirect.location);

				res.statusCode = redirect.statusCode;
				res.setHeader('Location', location);
				res.end();

				return;
			}

			if (preload_error) {
				handle_error(req, res, preload_error.statusCode, preload_error.message);
				return;
			}

			const segments = req.path.split('/').filter(Boolean);

			// TODO make this less confusing
			const layout_segments = [segments[0]];
			let l = 1;

			page.parts.forEach((part, i) => {
				layout_segments[l] = segments[i + 1];
				if (!part) return null;
				l++;
			});

			const props = {
				stores: {
					page: {
						subscribe: writable({
							path: req.path,
							query: req.query,
							params
						}).subscribe
					},
					preloading: {
						subscribe: writable(null).subscribe
					},
					session: writable(session)
				},
				segments: layout_segments,
				status: error ? status : 200,
				error: error ? error instanceof Error ? error : { message: error } : null,
				level0: {
					props: preloaded[0]
				},
				level1: {
					segment: segments[0],
					props: {}
				}
			};

			if (!is_service_worker_index) {
				let l = 1;
				for (let i = 0; i < page.parts.length; i += 1) {
					const part = page.parts[i];
					if (!part) continue;

					props[`level${l++}`] = {
						component: part.component,
						props: preloaded[i + 1] || {},
						segment: segments[i]
					};
				}
			}

			const { html, head, css } = App.render(props);

			const serialized = {
				preloaded: `[${preloaded.map(data => try_serialize(data)).join(',')}]`,
				session: session && try_serialize(session, err => {
					throw new Error(`Failed to serialize session data: ${err.message}`);
				}),
				error: error && try_serialize(props.error)
			};

			let script = `__SAPPER__={${[
				error && `error:${serialized.error},status:${status}`,
				`baseUrl:"${req.baseUrl}"`,
				serialized.preloaded && `preloaded:${serialized.preloaded}`,
				serialized.session && `session:${serialized.session}`
			].filter(Boolean).join(',')}};`;

			if (has_service_worker) {
				script += `if('serviceWorker' in navigator)navigator.serviceWorker.register('${req.baseUrl}/service-worker.js');`;
			}

			const file = [].concat(build_info.assets.main).filter(file => file && /\.js$/.test(file))[0];
			const main = `${req.baseUrl}/client/${file}`;

			if (build_info.bundler === 'rollup') {
				if (build_info.legacy_assets) {
					const legacy_main = `${req.baseUrl}/client/legacy/${build_info.legacy_assets.main}`;
					script += `(function(){try{eval("async function x(){}");var main="${main}"}catch(e){main="${legacy_main}"};var s=document.createElement("script");try{new Function("if(0)import('')")();s.src=main;s.type="module";s.crossOrigin="use-credentials";}catch(e){s.src="${req.baseUrl}/client/shimport@${build_info.shimport}.js";s.setAttribute("data-main",main);}document.head.appendChild(s);}());`;
				} else {
					script += `var s=document.createElement("script");try{new Function("if(0)import('')")();s.src="${main}";s.type="module";s.crossOrigin="use-credentials";}catch(e){s.src="${req.baseUrl}/client/shimport@${build_info.shimport}.js";s.setAttribute("data-main","${main}")}document.head.appendChild(s)`;
				}
			} else {
				script += `</script><script src="${main}">`;
			}

			let styles;

			// TODO make this consistent across apps
			// TODO embed build_info in placeholder.ts
			if (build_info.css && build_info.css.main) {
				const css_chunks = new Set();
				if (build_info.css.main) css_chunks.add(build_info.css.main);
				page.parts.forEach(part => {
					if (!part) return;
					const css_chunks_for_part = build_info.css.chunks[part.file];

					if (css_chunks_for_part) {
						css_chunks_for_part.forEach(file => {
							css_chunks.add(file);
						});
					}
				});

				styles = Array.from(css_chunks)
					.map(href => `<link rel="stylesheet" href="client/${href}">`)
					.join('');
			} else {
				styles = (css && css.code ? `<style>${css.code}</style>` : '');
			}

			// users can set a CSP nonce using res.locals.nonce
			const nonce_attr = (res.locals && res.locals.nonce) ? ` nonce="${res.locals.nonce}"` : '';

			const body = template()
				.replace('%sapper.base%', () => `<base href="${req.baseUrl}/">`)
				.replace('%sapper.scripts%', () => `<script${nonce_attr}>${script}</script>`)
				.replace('%sapper.html%', () => html)
				.replace('%sapper.head%', () => `<noscript id='sapper-head-start'></noscript>${head}<noscript id='sapper-head-end'></noscript>`)
				.replace('%sapper.styles%', () => styles);

			res.statusCode = status;
			res.end(body);
		} catch(err) {
			if (error) {
				bail(req, res, err);
			} else {
				handle_error(req, res, 500, err);
			}
		}
	}

	return function find_route(req, res, next) {
		if (req.path === '/service-worker-index.html') {
			const homePage = pages.find(page => page.pattern.test('/'));
			handle_page(homePage, req, res);
			return;
		}

		for (const page of pages) {
			if (page.pattern.test(req.path)) {
				handle_page(page, req, res);
				return;
			}
		}

		handle_error(req, res, 404, 'Not found');
	};
}

function read_template(dir = build_dir) {
	return fs.readFileSync(`${dir}/template.html`, 'utf-8');
}

function try_serialize(data, fail) {
	try {
		return devalue(data);
	} catch (err) {
		if (fail) fail(err);
		return null;
	}
}

function escape_html(html) {
	const chars = {
		'"' : 'quot',
		"'": '#39',
		'&': 'amp',
		'<' : 'lt',
		'>' : 'gt'
	};

	return html.replace(/["'&<>]/g, c => `&${chars[c]};`);
}

var mime_raw = "application/andrew-inset\t\t\tez\napplication/applixware\t\t\t\taw\napplication/atom+xml\t\t\t\tatom\napplication/atomcat+xml\t\t\t\tatomcat\napplication/atomsvc+xml\t\t\t\tatomsvc\napplication/ccxml+xml\t\t\t\tccxml\napplication/cdmi-capability\t\t\tcdmia\napplication/cdmi-container\t\t\tcdmic\napplication/cdmi-domain\t\t\t\tcdmid\napplication/cdmi-object\t\t\t\tcdmio\napplication/cdmi-queue\t\t\t\tcdmiq\napplication/cu-seeme\t\t\t\tcu\napplication/davmount+xml\t\t\tdavmount\napplication/docbook+xml\t\t\t\tdbk\napplication/dssc+der\t\t\t\tdssc\napplication/dssc+xml\t\t\t\txdssc\napplication/ecmascript\t\t\t\tecma\napplication/emma+xml\t\t\t\temma\napplication/epub+zip\t\t\t\tepub\napplication/exi\t\t\t\t\texi\napplication/font-tdpfr\t\t\t\tpfr\napplication/gml+xml\t\t\t\tgml\napplication/gpx+xml\t\t\t\tgpx\napplication/gxf\t\t\t\t\tgxf\napplication/hyperstudio\t\t\t\tstk\napplication/inkml+xml\t\t\t\tink inkml\napplication/ipfix\t\t\t\tipfix\napplication/java-archive\t\t\tjar\napplication/java-serialized-object\t\tser\napplication/java-vm\t\t\t\tclass\napplication/javascript\t\t\t\tjs\napplication/json\t\t\t\tjson map\napplication/jsonml+json\t\t\t\tjsonml\napplication/lost+xml\t\t\t\tlostxml\napplication/mac-binhex40\t\t\thqx\napplication/mac-compactpro\t\t\tcpt\napplication/mads+xml\t\t\t\tmads\napplication/marc\t\t\t\tmrc\napplication/marcxml+xml\t\t\t\tmrcx\napplication/mathematica\t\t\t\tma nb mb\napplication/mathml+xml\t\t\t\tmathml\napplication/mbox\t\t\t\tmbox\napplication/mediaservercontrol+xml\t\tmscml\napplication/metalink+xml\t\t\tmetalink\napplication/metalink4+xml\t\t\tmeta4\napplication/mets+xml\t\t\t\tmets\napplication/mods+xml\t\t\t\tmods\napplication/mp21\t\t\t\tm21 mp21\napplication/mp4\t\t\t\t\tmp4s\napplication/msword\t\t\t\tdoc dot\napplication/mxf\t\t\t\t\tmxf\napplication/octet-stream\tbin dms lrf mar so dist distz pkg bpk dump elc deploy\napplication/oda\t\t\t\t\toda\napplication/oebps-package+xml\t\t\topf\napplication/ogg\t\t\t\t\togx\napplication/omdoc+xml\t\t\t\tomdoc\napplication/onenote\t\t\t\tonetoc onetoc2 onetmp onepkg\napplication/oxps\t\t\t\toxps\napplication/patch-ops-error+xml\t\t\txer\napplication/pdf\t\t\t\t\tpdf\napplication/pgp-encrypted\t\t\tpgp\napplication/pgp-signature\t\t\tasc sig\napplication/pics-rules\t\t\t\tprf\napplication/pkcs10\t\t\t\tp10\napplication/pkcs7-mime\t\t\t\tp7m p7c\napplication/pkcs7-signature\t\t\tp7s\napplication/pkcs8\t\t\t\tp8\napplication/pkix-attr-cert\t\t\tac\napplication/pkix-cert\t\t\t\tcer\napplication/pkix-crl\t\t\t\tcrl\napplication/pkix-pkipath\t\t\tpkipath\napplication/pkixcmp\t\t\t\tpki\napplication/pls+xml\t\t\t\tpls\napplication/postscript\t\t\t\tai eps ps\napplication/prs.cww\t\t\t\tcww\napplication/pskc+xml\t\t\t\tpskcxml\napplication/rdf+xml\t\t\t\trdf\napplication/reginfo+xml\t\t\t\trif\napplication/relax-ng-compact-syntax\t\trnc\napplication/resource-lists+xml\t\t\trl\napplication/resource-lists-diff+xml\t\trld\napplication/rls-services+xml\t\t\trs\napplication/rpki-ghostbusters\t\t\tgbr\napplication/rpki-manifest\t\t\tmft\napplication/rpki-roa\t\t\t\troa\napplication/rsd+xml\t\t\t\trsd\napplication/rss+xml\t\t\t\trss\napplication/rtf\t\t\t\t\trtf\napplication/sbml+xml\t\t\t\tsbml\napplication/scvp-cv-request\t\t\tscq\napplication/scvp-cv-response\t\t\tscs\napplication/scvp-vp-request\t\t\tspq\napplication/scvp-vp-response\t\t\tspp\napplication/sdp\t\t\t\t\tsdp\napplication/set-payment-initiation\t\tsetpay\napplication/set-registration-initiation\t\tsetreg\napplication/shf+xml\t\t\t\tshf\napplication/smil+xml\t\t\t\tsmi smil\napplication/sparql-query\t\t\trq\napplication/sparql-results+xml\t\t\tsrx\napplication/srgs\t\t\t\tgram\napplication/srgs+xml\t\t\t\tgrxml\napplication/sru+xml\t\t\t\tsru\napplication/ssdl+xml\t\t\t\tssdl\napplication/ssml+xml\t\t\t\tssml\napplication/tei+xml\t\t\t\ttei teicorpus\napplication/thraud+xml\t\t\t\ttfi\napplication/timestamped-data\t\t\ttsd\napplication/vnd.3gpp.pic-bw-large\t\tplb\napplication/vnd.3gpp.pic-bw-small\t\tpsb\napplication/vnd.3gpp.pic-bw-var\t\t\tpvb\napplication/vnd.3gpp2.tcap\t\t\ttcap\napplication/vnd.3m.post-it-notes\t\tpwn\napplication/vnd.accpac.simply.aso\t\taso\napplication/vnd.accpac.simply.imp\t\timp\napplication/vnd.acucobol\t\t\tacu\napplication/vnd.acucorp\t\t\t\tatc acutc\napplication/vnd.adobe.air-application-installer-package+zip\tair\napplication/vnd.adobe.formscentral.fcdt\t\tfcdt\napplication/vnd.adobe.fxp\t\t\tfxp fxpl\napplication/vnd.adobe.xdp+xml\t\t\txdp\napplication/vnd.adobe.xfdf\t\t\txfdf\napplication/vnd.ahead.space\t\t\tahead\napplication/vnd.airzip.filesecure.azf\t\tazf\napplication/vnd.airzip.filesecure.azs\t\tazs\napplication/vnd.amazon.ebook\t\t\tazw\napplication/vnd.americandynamics.acc\t\tacc\napplication/vnd.amiga.ami\t\t\tami\napplication/vnd.android.package-archive\t\tapk\napplication/vnd.anser-web-certificate-issue-initiation\tcii\napplication/vnd.anser-web-funds-transfer-initiation\tfti\napplication/vnd.antix.game-component\t\tatx\napplication/vnd.apple.installer+xml\t\tmpkg\napplication/vnd.apple.mpegurl\t\t\tm3u8\napplication/vnd.aristanetworks.swi\t\tswi\napplication/vnd.astraea-software.iota\t\tiota\napplication/vnd.audiograph\t\t\taep\napplication/vnd.blueice.multipass\t\tmpm\napplication/vnd.bmi\t\t\t\tbmi\napplication/vnd.businessobjects\t\t\trep\napplication/vnd.chemdraw+xml\t\t\tcdxml\napplication/vnd.chipnuts.karaoke-mmd\t\tmmd\napplication/vnd.cinderella\t\t\tcdy\napplication/vnd.claymore\t\t\tcla\napplication/vnd.cloanto.rp9\t\t\trp9\napplication/vnd.clonk.c4group\t\t\tc4g c4d c4f c4p c4u\napplication/vnd.cluetrust.cartomobile-config\t\tc11amc\napplication/vnd.cluetrust.cartomobile-config-pkg\tc11amz\napplication/vnd.commonspace\t\t\tcsp\napplication/vnd.contact.cmsg\t\t\tcdbcmsg\napplication/vnd.cosmocaller\t\t\tcmc\napplication/vnd.crick.clicker\t\t\tclkx\napplication/vnd.crick.clicker.keyboard\t\tclkk\napplication/vnd.crick.clicker.palette\t\tclkp\napplication/vnd.crick.clicker.template\t\tclkt\napplication/vnd.crick.clicker.wordbank\t\tclkw\napplication/vnd.criticaltools.wbs+xml\t\twbs\napplication/vnd.ctc-posml\t\t\tpml\napplication/vnd.cups-ppd\t\t\tppd\napplication/vnd.curl.car\t\t\tcar\napplication/vnd.curl.pcurl\t\t\tpcurl\napplication/vnd.dart\t\t\t\tdart\napplication/vnd.data-vision.rdz\t\t\trdz\napplication/vnd.dece.data\t\t\tuvf uvvf uvd uvvd\napplication/vnd.dece.ttml+xml\t\t\tuvt uvvt\napplication/vnd.dece.unspecified\t\tuvx uvvx\napplication/vnd.dece.zip\t\t\tuvz uvvz\napplication/vnd.denovo.fcselayout-link\t\tfe_launch\napplication/vnd.dna\t\t\t\tdna\napplication/vnd.dolby.mlp\t\t\tmlp\napplication/vnd.dpgraph\t\t\t\tdpg\napplication/vnd.dreamfactory\t\t\tdfac\napplication/vnd.ds-keypoint\t\t\tkpxx\napplication/vnd.dvb.ait\t\t\t\tait\napplication/vnd.dvb.service\t\t\tsvc\napplication/vnd.dynageo\t\t\t\tgeo\napplication/vnd.ecowin.chart\t\t\tmag\napplication/vnd.enliven\t\t\t\tnml\napplication/vnd.epson.esf\t\t\tesf\napplication/vnd.epson.msf\t\t\tmsf\napplication/vnd.epson.quickanime\t\tqam\napplication/vnd.epson.salt\t\t\tslt\napplication/vnd.epson.ssf\t\t\tssf\napplication/vnd.eszigno3+xml\t\t\tes3 et3\napplication/vnd.ezpix-album\t\t\tez2\napplication/vnd.ezpix-package\t\t\tez3\napplication/vnd.fdf\t\t\t\tfdf\napplication/vnd.fdsn.mseed\t\t\tmseed\napplication/vnd.fdsn.seed\t\t\tseed dataless\napplication/vnd.flographit\t\t\tgph\napplication/vnd.fluxtime.clip\t\t\tftc\napplication/vnd.framemaker\t\t\tfm frame maker book\napplication/vnd.frogans.fnc\t\t\tfnc\napplication/vnd.frogans.ltf\t\t\tltf\napplication/vnd.fsc.weblaunch\t\t\tfsc\napplication/vnd.fujitsu.oasys\t\t\toas\napplication/vnd.fujitsu.oasys2\t\t\toa2\napplication/vnd.fujitsu.oasys3\t\t\toa3\napplication/vnd.fujitsu.oasysgp\t\t\tfg5\napplication/vnd.fujitsu.oasysprs\t\tbh2\napplication/vnd.fujixerox.ddd\t\t\tddd\napplication/vnd.fujixerox.docuworks\t\txdw\napplication/vnd.fujixerox.docuworks.binder\txbd\napplication/vnd.fuzzysheet\t\t\tfzs\napplication/vnd.genomatix.tuxedo\t\ttxd\napplication/vnd.geogebra.file\t\t\tggb\napplication/vnd.geogebra.tool\t\t\tggt\napplication/vnd.geometry-explorer\t\tgex gre\napplication/vnd.geonext\t\t\t\tgxt\napplication/vnd.geoplan\t\t\t\tg2w\napplication/vnd.geospace\t\t\tg3w\napplication/vnd.gmx\t\t\t\tgmx\napplication/vnd.google-earth.kml+xml\t\tkml\napplication/vnd.google-earth.kmz\t\tkmz\napplication/vnd.grafeq\t\t\t\tgqf gqs\napplication/vnd.groove-account\t\t\tgac\napplication/vnd.groove-help\t\t\tghf\napplication/vnd.groove-identity-message\t\tgim\napplication/vnd.groove-injector\t\t\tgrv\napplication/vnd.groove-tool-message\t\tgtm\napplication/vnd.groove-tool-template\t\ttpl\napplication/vnd.groove-vcard\t\t\tvcg\napplication/vnd.hal+xml\t\t\t\thal\napplication/vnd.handheld-entertainment+xml\tzmm\napplication/vnd.hbci\t\t\t\thbci\napplication/vnd.hhe.lesson-player\t\tles\napplication/vnd.hp-hpgl\t\t\t\thpgl\napplication/vnd.hp-hpid\t\t\t\thpid\napplication/vnd.hp-hps\t\t\t\thps\napplication/vnd.hp-jlyt\t\t\t\tjlt\napplication/vnd.hp-pcl\t\t\t\tpcl\napplication/vnd.hp-pclxl\t\t\tpclxl\napplication/vnd.hydrostatix.sof-data\t\tsfd-hdstx\napplication/vnd.ibm.minipay\t\t\tmpy\napplication/vnd.ibm.modcap\t\t\tafp listafp list3820\napplication/vnd.ibm.rights-management\t\tirm\napplication/vnd.ibm.secure-container\t\tsc\napplication/vnd.iccprofile\t\t\ticc icm\napplication/vnd.igloader\t\t\tigl\napplication/vnd.immervision-ivp\t\t\tivp\napplication/vnd.immervision-ivu\t\t\tivu\napplication/vnd.insors.igm\t\t\tigm\napplication/vnd.intercon.formnet\t\txpw xpx\napplication/vnd.intergeo\t\t\ti2g\napplication/vnd.intu.qbo\t\t\tqbo\napplication/vnd.intu.qfx\t\t\tqfx\napplication/vnd.ipunplugged.rcprofile\t\trcprofile\napplication/vnd.irepository.package+xml\t\tirp\napplication/vnd.is-xpr\t\t\t\txpr\napplication/vnd.isac.fcs\t\t\tfcs\napplication/vnd.jam\t\t\t\tjam\napplication/vnd.jcp.javame.midlet-rms\t\trms\napplication/vnd.jisp\t\t\t\tjisp\napplication/vnd.joost.joda-archive\t\tjoda\napplication/vnd.kahootz\t\t\t\tktz ktr\napplication/vnd.kde.karbon\t\t\tkarbon\napplication/vnd.kde.kchart\t\t\tchrt\napplication/vnd.kde.kformula\t\t\tkfo\napplication/vnd.kde.kivio\t\t\tflw\napplication/vnd.kde.kontour\t\t\tkon\napplication/vnd.kde.kpresenter\t\t\tkpr kpt\napplication/vnd.kde.kspread\t\t\tksp\napplication/vnd.kde.kword\t\t\tkwd kwt\napplication/vnd.kenameaapp\t\t\thtke\napplication/vnd.kidspiration\t\t\tkia\napplication/vnd.kinar\t\t\t\tkne knp\napplication/vnd.koan\t\t\t\tskp skd skt skm\napplication/vnd.kodak-descriptor\t\tsse\napplication/vnd.las.las+xml\t\t\tlasxml\napplication/vnd.llamagraphics.life-balance.desktop\tlbd\napplication/vnd.llamagraphics.life-balance.exchange+xml\tlbe\napplication/vnd.lotus-1-2-3\t\t\t123\napplication/vnd.lotus-approach\t\t\tapr\napplication/vnd.lotus-freelance\t\t\tpre\napplication/vnd.lotus-notes\t\t\tnsf\napplication/vnd.lotus-organizer\t\t\torg\napplication/vnd.lotus-screencam\t\t\tscm\napplication/vnd.lotus-wordpro\t\t\tlwp\napplication/vnd.macports.portpkg\t\tportpkg\napplication/vnd.mcd\t\t\t\tmcd\napplication/vnd.medcalcdata\t\t\tmc1\napplication/vnd.mediastation.cdkey\t\tcdkey\napplication/vnd.mfer\t\t\t\tmwf\napplication/vnd.mfmp\t\t\t\tmfm\napplication/vnd.micrografx.flo\t\t\tflo\napplication/vnd.micrografx.igx\t\t\tigx\napplication/vnd.mif\t\t\t\tmif\napplication/vnd.mobius.daf\t\t\tdaf\napplication/vnd.mobius.dis\t\t\tdis\napplication/vnd.mobius.mbk\t\t\tmbk\napplication/vnd.mobius.mqy\t\t\tmqy\napplication/vnd.mobius.msl\t\t\tmsl\napplication/vnd.mobius.plc\t\t\tplc\napplication/vnd.mobius.txf\t\t\ttxf\napplication/vnd.mophun.application\t\tmpn\napplication/vnd.mophun.certificate\t\tmpc\napplication/vnd.mozilla.xul+xml\t\t\txul\napplication/vnd.ms-artgalry\t\t\tcil\napplication/vnd.ms-cab-compressed\t\tcab\napplication/vnd.ms-excel\t\t\txls xlm xla xlc xlt xlw\napplication/vnd.ms-excel.addin.macroenabled.12\t\txlam\napplication/vnd.ms-excel.sheet.binary.macroenabled.12\txlsb\napplication/vnd.ms-excel.sheet.macroenabled.12\t\txlsm\napplication/vnd.ms-excel.template.macroenabled.12\txltm\napplication/vnd.ms-fontobject\t\t\teot\napplication/vnd.ms-htmlhelp\t\t\tchm\napplication/vnd.ms-ims\t\t\t\tims\napplication/vnd.ms-lrm\t\t\t\tlrm\napplication/vnd.ms-officetheme\t\t\tthmx\napplication/vnd.ms-pki.seccat\t\t\tcat\napplication/vnd.ms-pki.stl\t\t\tstl\napplication/vnd.ms-powerpoint\t\t\tppt pps pot\napplication/vnd.ms-powerpoint.addin.macroenabled.12\t\tppam\napplication/vnd.ms-powerpoint.presentation.macroenabled.12\tpptm\napplication/vnd.ms-powerpoint.slide.macroenabled.12\t\tsldm\napplication/vnd.ms-powerpoint.slideshow.macroenabled.12\t\tppsm\napplication/vnd.ms-powerpoint.template.macroenabled.12\t\tpotm\napplication/vnd.ms-project\t\t\tmpp mpt\napplication/vnd.ms-word.document.macroenabled.12\tdocm\napplication/vnd.ms-word.template.macroenabled.12\tdotm\napplication/vnd.ms-works\t\t\twps wks wcm wdb\napplication/vnd.ms-wpl\t\t\t\twpl\napplication/vnd.ms-xpsdocument\t\t\txps\napplication/vnd.mseq\t\t\t\tmseq\napplication/vnd.musician\t\t\tmus\napplication/vnd.muvee.style\t\t\tmsty\napplication/vnd.mynfc\t\t\t\ttaglet\napplication/vnd.neurolanguage.nlu\t\tnlu\napplication/vnd.nitf\t\t\t\tntf nitf\napplication/vnd.noblenet-directory\t\tnnd\napplication/vnd.noblenet-sealer\t\t\tnns\napplication/vnd.noblenet-web\t\t\tnnw\napplication/vnd.nokia.n-gage.data\t\tngdat\napplication/vnd.nokia.n-gage.symbian.install\tn-gage\napplication/vnd.nokia.radio-preset\t\trpst\napplication/vnd.nokia.radio-presets\t\trpss\napplication/vnd.novadigm.edm\t\t\tedm\napplication/vnd.novadigm.edx\t\t\tedx\napplication/vnd.novadigm.ext\t\t\text\napplication/vnd.oasis.opendocument.chart\t\todc\napplication/vnd.oasis.opendocument.chart-template\totc\napplication/vnd.oasis.opendocument.database\t\todb\napplication/vnd.oasis.opendocument.formula\t\todf\napplication/vnd.oasis.opendocument.formula-template\todft\napplication/vnd.oasis.opendocument.graphics\t\todg\napplication/vnd.oasis.opendocument.graphics-template\totg\napplication/vnd.oasis.opendocument.image\t\todi\napplication/vnd.oasis.opendocument.image-template\toti\napplication/vnd.oasis.opendocument.presentation\t\todp\napplication/vnd.oasis.opendocument.presentation-template\totp\napplication/vnd.oasis.opendocument.spreadsheet\t\tods\napplication/vnd.oasis.opendocument.spreadsheet-template\tots\napplication/vnd.oasis.opendocument.text\t\t\todt\napplication/vnd.oasis.opendocument.text-master\t\todm\napplication/vnd.oasis.opendocument.text-template\tott\napplication/vnd.oasis.opendocument.text-web\t\toth\napplication/vnd.olpc-sugar\t\t\txo\napplication/vnd.oma.dd2+xml\t\t\tdd2\napplication/vnd.openofficeorg.extension\t\toxt\napplication/vnd.openxmlformats-officedocument.presentationml.presentation\tpptx\napplication/vnd.openxmlformats-officedocument.presentationml.slide\tsldx\napplication/vnd.openxmlformats-officedocument.presentationml.slideshow\tppsx\napplication/vnd.openxmlformats-officedocument.presentationml.template\tpotx\napplication/vnd.openxmlformats-officedocument.spreadsheetml.sheet\txlsx\napplication/vnd.openxmlformats-officedocument.spreadsheetml.template\txltx\napplication/vnd.openxmlformats-officedocument.wordprocessingml.document\tdocx\napplication/vnd.openxmlformats-officedocument.wordprocessingml.template\tdotx\napplication/vnd.osgeo.mapguide.package\t\tmgp\napplication/vnd.osgi.dp\t\t\t\tdp\napplication/vnd.osgi.subsystem\t\t\tesa\napplication/vnd.palm\t\t\t\tpdb pqa oprc\napplication/vnd.pawaafile\t\t\tpaw\napplication/vnd.pg.format\t\t\tstr\napplication/vnd.pg.osasli\t\t\tei6\napplication/vnd.picsel\t\t\t\tefif\napplication/vnd.pmi.widget\t\t\twg\napplication/vnd.pocketlearn\t\t\tplf\napplication/vnd.powerbuilder6\t\t\tpbd\napplication/vnd.previewsystems.box\t\tbox\napplication/vnd.proteus.magazine\t\tmgz\napplication/vnd.publishare-delta-tree\t\tqps\napplication/vnd.pvi.ptid1\t\t\tptid\napplication/vnd.quark.quarkxpress\t\tqxd qxt qwd qwt qxl qxb\napplication/vnd.realvnc.bed\t\t\tbed\napplication/vnd.recordare.musicxml\t\tmxl\napplication/vnd.recordare.musicxml+xml\t\tmusicxml\napplication/vnd.rig.cryptonote\t\t\tcryptonote\napplication/vnd.rim.cod\t\t\t\tcod\napplication/vnd.rn-realmedia\t\t\trm\napplication/vnd.rn-realmedia-vbr\t\trmvb\napplication/vnd.route66.link66+xml\t\tlink66\napplication/vnd.sailingtracker.track\t\tst\napplication/vnd.seemail\t\t\t\tsee\napplication/vnd.sema\t\t\t\tsema\napplication/vnd.semd\t\t\t\tsemd\napplication/vnd.semf\t\t\t\tsemf\napplication/vnd.shana.informed.formdata\t\tifm\napplication/vnd.shana.informed.formtemplate\titp\napplication/vnd.shana.informed.interchange\tiif\napplication/vnd.shana.informed.package\t\tipk\napplication/vnd.simtech-mindmapper\t\ttwd twds\napplication/vnd.smaf\t\t\t\tmmf\napplication/vnd.smart.teacher\t\t\tteacher\napplication/vnd.solent.sdkm+xml\t\t\tsdkm sdkd\napplication/vnd.spotfire.dxp\t\t\tdxp\napplication/vnd.spotfire.sfs\t\t\tsfs\napplication/vnd.stardivision.calc\t\tsdc\napplication/vnd.stardivision.draw\t\tsda\napplication/vnd.stardivision.impress\t\tsdd\napplication/vnd.stardivision.math\t\tsmf\napplication/vnd.stardivision.writer\t\tsdw vor\napplication/vnd.stardivision.writer-global\tsgl\napplication/vnd.stepmania.package\t\tsmzip\napplication/vnd.stepmania.stepchart\t\tsm\napplication/vnd.sun.xml.calc\t\t\tsxc\napplication/vnd.sun.xml.calc.template\t\tstc\napplication/vnd.sun.xml.draw\t\t\tsxd\napplication/vnd.sun.xml.draw.template\t\tstd\napplication/vnd.sun.xml.impress\t\t\tsxi\napplication/vnd.sun.xml.impress.template\tsti\napplication/vnd.sun.xml.math\t\t\tsxm\napplication/vnd.sun.xml.writer\t\t\tsxw\napplication/vnd.sun.xml.writer.global\t\tsxg\napplication/vnd.sun.xml.writer.template\t\tstw\napplication/vnd.sus-calendar\t\t\tsus susp\napplication/vnd.svd\t\t\t\tsvd\napplication/vnd.symbian.install\t\t\tsis sisx\napplication/vnd.syncml+xml\t\t\txsm\napplication/vnd.syncml.dm+wbxml\t\t\tbdm\napplication/vnd.syncml.dm+xml\t\t\txdm\napplication/vnd.tao.intent-module-archive\ttao\napplication/vnd.tcpdump.pcap\t\t\tpcap cap dmp\napplication/vnd.tmobile-livetv\t\t\ttmo\napplication/vnd.trid.tpt\t\t\ttpt\napplication/vnd.triscape.mxs\t\t\tmxs\napplication/vnd.trueapp\t\t\t\ttra\napplication/vnd.ufdl\t\t\t\tufd ufdl\napplication/vnd.uiq.theme\t\t\tutz\napplication/vnd.umajin\t\t\t\tumj\napplication/vnd.unity\t\t\t\tunityweb\napplication/vnd.uoml+xml\t\t\tuoml\napplication/vnd.vcx\t\t\t\tvcx\napplication/vnd.visio\t\t\t\tvsd vst vss vsw\napplication/vnd.visionary\t\t\tvis\napplication/vnd.vsf\t\t\t\tvsf\napplication/vnd.wap.wbxml\t\t\twbxml\napplication/vnd.wap.wmlc\t\t\twmlc\napplication/vnd.wap.wmlscriptc\t\t\twmlsc\napplication/vnd.webturbo\t\t\twtb\napplication/vnd.wolfram.player\t\t\tnbp\napplication/vnd.wordperfect\t\t\twpd\napplication/vnd.wqd\t\t\t\twqd\napplication/vnd.wt.stf\t\t\t\tstf\napplication/vnd.xara\t\t\t\txar\napplication/vnd.xfdl\t\t\t\txfdl\napplication/vnd.yamaha.hv-dic\t\t\thvd\napplication/vnd.yamaha.hv-script\t\thvs\napplication/vnd.yamaha.hv-voice\t\t\thvp\napplication/vnd.yamaha.openscoreformat\t\t\tosf\napplication/vnd.yamaha.openscoreformat.osfpvg+xml\tosfpvg\napplication/vnd.yamaha.smaf-audio\t\tsaf\napplication/vnd.yamaha.smaf-phrase\t\tspf\napplication/vnd.yellowriver-custom-menu\t\tcmp\napplication/vnd.zul\t\t\t\tzir zirz\napplication/vnd.zzazz.deck+xml\t\t\tzaz\napplication/voicexml+xml\t\t\tvxml\napplication/widget\t\t\t\twgt\napplication/winhlp\t\t\t\thlp\napplication/wsdl+xml\t\t\t\twsdl\napplication/wspolicy+xml\t\t\twspolicy\napplication/x-7z-compressed\t\t\t7z\napplication/x-abiword\t\t\t\tabw\napplication/x-ace-compressed\t\t\tace\napplication/x-apple-diskimage\t\t\tdmg\napplication/x-authorware-bin\t\t\taab x32 u32 vox\napplication/x-authorware-map\t\t\taam\napplication/x-authorware-seg\t\t\taas\napplication/x-bcpio\t\t\t\tbcpio\napplication/x-bittorrent\t\t\ttorrent\napplication/x-blorb\t\t\t\tblb blorb\napplication/x-bzip\t\t\t\tbz\napplication/x-bzip2\t\t\t\tbz2 boz\napplication/x-cbr\t\t\t\tcbr cba cbt cbz cb7\napplication/x-cdlink\t\t\t\tvcd\napplication/x-cfs-compressed\t\t\tcfs\napplication/x-chat\t\t\t\tchat\napplication/x-chess-pgn\t\t\t\tpgn\napplication/x-conference\t\t\tnsc\napplication/x-cpio\t\t\t\tcpio\napplication/x-csh\t\t\t\tcsh\napplication/x-debian-package\t\t\tdeb udeb\napplication/x-dgc-compressed\t\t\tdgc\napplication/x-director\t\t\tdir dcr dxr cst cct cxt w3d fgd swa\napplication/x-doom\t\t\t\twad\napplication/x-dtbncx+xml\t\t\tncx\napplication/x-dtbook+xml\t\t\tdtb\napplication/x-dtbresource+xml\t\t\tres\napplication/x-dvi\t\t\t\tdvi\napplication/x-envoy\t\t\t\tevy\napplication/x-eva\t\t\t\teva\napplication/x-font-bdf\t\t\t\tbdf\napplication/x-font-ghostscript\t\t\tgsf\napplication/x-font-linux-psf\t\t\tpsf\napplication/x-font-pcf\t\t\t\tpcf\napplication/x-font-snf\t\t\t\tsnf\napplication/x-font-type1\t\t\tpfa pfb pfm afm\napplication/x-freearc\t\t\t\tarc\napplication/x-futuresplash\t\t\tspl\napplication/x-gca-compressed\t\t\tgca\napplication/x-glulx\t\t\t\tulx\napplication/x-gnumeric\t\t\t\tgnumeric\napplication/x-gramps-xml\t\t\tgramps\napplication/x-gtar\t\t\t\tgtar\napplication/x-hdf\t\t\t\thdf\napplication/x-install-instructions\t\tinstall\napplication/x-iso9660-image\t\t\tiso\napplication/x-java-jnlp-file\t\t\tjnlp\napplication/x-latex\t\t\t\tlatex\napplication/x-lzh-compressed\t\t\tlzh lha\napplication/x-mie\t\t\t\tmie\napplication/x-mobipocket-ebook\t\t\tprc mobi\napplication/x-ms-application\t\t\tapplication\napplication/x-ms-shortcut\t\t\tlnk\napplication/x-ms-wmd\t\t\t\twmd\napplication/x-ms-wmz\t\t\t\twmz\napplication/x-ms-xbap\t\t\t\txbap\napplication/x-msaccess\t\t\t\tmdb\napplication/x-msbinder\t\t\t\tobd\napplication/x-mscardfile\t\t\tcrd\napplication/x-msclip\t\t\t\tclp\napplication/x-msdownload\t\t\texe dll com bat msi\napplication/x-msmediaview\t\t\tmvb m13 m14\napplication/x-msmetafile\t\t\twmf wmz emf emz\napplication/x-msmoney\t\t\t\tmny\napplication/x-mspublisher\t\t\tpub\napplication/x-msschedule\t\t\tscd\napplication/x-msterminal\t\t\ttrm\napplication/x-mswrite\t\t\t\twri\napplication/x-netcdf\t\t\t\tnc cdf\napplication/x-nzb\t\t\t\tnzb\napplication/x-pkcs12\t\t\t\tp12 pfx\napplication/x-pkcs7-certificates\t\tp7b spc\napplication/x-pkcs7-certreqresp\t\t\tp7r\napplication/x-rar-compressed\t\t\trar\napplication/x-research-info-systems\t\tris\napplication/x-sh\t\t\t\tsh\napplication/x-shar\t\t\t\tshar\napplication/x-shockwave-flash\t\t\tswf\napplication/x-silverlight-app\t\t\txap\napplication/x-sql\t\t\t\tsql\napplication/x-stuffit\t\t\t\tsit\napplication/x-stuffitx\t\t\t\tsitx\napplication/x-subrip\t\t\t\tsrt\napplication/x-sv4cpio\t\t\t\tsv4cpio\napplication/x-sv4crc\t\t\t\tsv4crc\napplication/x-t3vm-image\t\t\tt3\napplication/x-tads\t\t\t\tgam\napplication/x-tar\t\t\t\ttar\napplication/x-tcl\t\t\t\ttcl\napplication/x-tex\t\t\t\ttex\napplication/x-tex-tfm\t\t\t\ttfm\napplication/x-texinfo\t\t\t\ttexinfo texi\napplication/x-tgif\t\t\t\tobj\napplication/x-ustar\t\t\t\tustar\napplication/x-wais-source\t\t\tsrc\napplication/x-x509-ca-cert\t\t\tder crt\napplication/x-xfig\t\t\t\tfig\napplication/x-xliff+xml\t\t\t\txlf\napplication/x-xpinstall\t\t\t\txpi\napplication/x-xz\t\t\t\txz\napplication/x-zmachine\t\t\t\tz1 z2 z3 z4 z5 z6 z7 z8\napplication/xaml+xml\t\t\t\txaml\napplication/xcap-diff+xml\t\t\txdf\napplication/xenc+xml\t\t\t\txenc\napplication/xhtml+xml\t\t\t\txhtml xht\napplication/xml\t\t\t\t\txml xsl\napplication/xml-dtd\t\t\t\tdtd\napplication/xop+xml\t\t\t\txop\napplication/xproc+xml\t\t\t\txpl\napplication/xslt+xml\t\t\t\txslt\napplication/xspf+xml\t\t\t\txspf\napplication/xv+xml\t\t\t\tmxml xhvml xvml xvm\napplication/yang\t\t\t\tyang\napplication/yin+xml\t\t\t\tyin\napplication/zip\t\t\t\t\tzip\naudio/adpcm\t\t\t\t\tadp\naudio/basic\t\t\t\t\tau snd\naudio/midi\t\t\t\t\tmid midi kar rmi\naudio/mp4\t\t\t\t\tm4a mp4a\naudio/mpeg\t\t\t\t\tmpga mp2 mp2a mp3 m2a m3a\naudio/ogg\t\t\t\t\toga ogg spx\naudio/s3m\t\t\t\t\ts3m\naudio/silk\t\t\t\t\tsil\naudio/vnd.dece.audio\t\t\t\tuva uvva\naudio/vnd.digital-winds\t\t\t\teol\naudio/vnd.dra\t\t\t\t\tdra\naudio/vnd.dts\t\t\t\t\tdts\naudio/vnd.dts.hd\t\t\t\tdtshd\naudio/vnd.lucent.voice\t\t\t\tlvp\naudio/vnd.ms-playready.media.pya\t\tpya\naudio/vnd.nuera.ecelp4800\t\t\tecelp4800\naudio/vnd.nuera.ecelp7470\t\t\tecelp7470\naudio/vnd.nuera.ecelp9600\t\t\tecelp9600\naudio/vnd.rip\t\t\t\t\trip\naudio/webm\t\t\t\t\tweba\naudio/x-aac\t\t\t\t\taac\naudio/x-aiff\t\t\t\t\taif aiff aifc\naudio/x-caf\t\t\t\t\tcaf\naudio/x-flac\t\t\t\t\tflac\naudio/x-matroska\t\t\t\tmka\naudio/x-mpegurl\t\t\t\t\tm3u\naudio/x-ms-wax\t\t\t\t\twax\naudio/x-ms-wma\t\t\t\t\twma\naudio/x-pn-realaudio\t\t\t\tram ra\naudio/x-pn-realaudio-plugin\t\t\trmp\naudio/x-wav\t\t\t\t\twav\naudio/xm\t\t\t\t\txm\nchemical/x-cdx\t\t\t\t\tcdx\nchemical/x-cif\t\t\t\t\tcif\nchemical/x-cmdf\t\t\t\t\tcmdf\nchemical/x-cml\t\t\t\t\tcml\nchemical/x-csml\t\t\t\t\tcsml\nchemical/x-xyz\t\t\t\t\txyz\nfont/collection\t\t\t\t\tttc\nfont/otf\t\t\t\t\totf\nfont/ttf\t\t\t\t\tttf\nfont/woff\t\t\t\t\twoff\nfont/woff2\t\t\t\t\twoff2\nimage/bmp\t\t\t\t\tbmp\nimage/cgm\t\t\t\t\tcgm\nimage/g3fax\t\t\t\t\tg3\nimage/gif\t\t\t\t\tgif\nimage/ief\t\t\t\t\tief\nimage/jpeg\t\t\t\t\tjpeg jpg jpe\nimage/ktx\t\t\t\t\tktx\nimage/png\t\t\t\t\tpng\nimage/prs.btif\t\t\t\t\tbtif\nimage/sgi\t\t\t\t\tsgi\nimage/svg+xml\t\t\t\t\tsvg svgz\nimage/tiff\t\t\t\t\ttiff tif\nimage/vnd.adobe.photoshop\t\t\tpsd\nimage/vnd.dece.graphic\t\t\t\tuvi uvvi uvg uvvg\nimage/vnd.djvu\t\t\t\t\tdjvu djv\nimage/vnd.dvb.subtitle\t\t\t\tsub\nimage/vnd.dwg\t\t\t\t\tdwg\nimage/vnd.dxf\t\t\t\t\tdxf\nimage/vnd.fastbidsheet\t\t\t\tfbs\nimage/vnd.fpx\t\t\t\t\tfpx\nimage/vnd.fst\t\t\t\t\tfst\nimage/vnd.fujixerox.edmics-mmr\t\t\tmmr\nimage/vnd.fujixerox.edmics-rlc\t\t\trlc\nimage/vnd.ms-modi\t\t\t\tmdi\nimage/vnd.ms-photo\t\t\t\twdp\nimage/vnd.net-fpx\t\t\t\tnpx\nimage/vnd.wap.wbmp\t\t\t\twbmp\nimage/vnd.xiff\t\t\t\t\txif\nimage/webp\t\t\t\t\twebp\nimage/x-3ds\t\t\t\t\t3ds\nimage/x-cmu-raster\t\t\t\tras\nimage/x-cmx\t\t\t\t\tcmx\nimage/x-freehand\t\t\t\tfh fhc fh4 fh5 fh7\nimage/x-icon\t\t\t\t\tico\nimage/x-mrsid-image\t\t\t\tsid\nimage/x-pcx\t\t\t\t\tpcx\nimage/x-pict\t\t\t\t\tpic pct\nimage/x-portable-anymap\t\t\t\tpnm\nimage/x-portable-bitmap\t\t\t\tpbm\nimage/x-portable-graymap\t\t\tpgm\nimage/x-portable-pixmap\t\t\t\tppm\nimage/x-rgb\t\t\t\t\trgb\nimage/x-tga\t\t\t\t\ttga\nimage/x-xbitmap\t\t\t\t\txbm\nimage/x-xpixmap\t\t\t\t\txpm\nimage/x-xwindowdump\t\t\t\txwd\nmessage/rfc822\t\t\t\t\teml mime\nmodel/iges\t\t\t\t\tigs iges\nmodel/mesh\t\t\t\t\tmsh mesh silo\nmodel/vnd.collada+xml\t\t\t\tdae\nmodel/vnd.dwf\t\t\t\t\tdwf\nmodel/vnd.gdl\t\t\t\t\tgdl\nmodel/vnd.gtw\t\t\t\t\tgtw\nmodel/vnd.mts\t\t\t\t\tmts\nmodel/vnd.vtu\t\t\t\t\tvtu\nmodel/vrml\t\t\t\t\twrl vrml\nmodel/x3d+binary\t\t\t\tx3db x3dbz\nmodel/x3d+vrml\t\t\t\t\tx3dv x3dvz\nmodel/x3d+xml\t\t\t\t\tx3d x3dz\ntext/cache-manifest\t\t\t\tappcache\ntext/calendar\t\t\t\t\tics ifb\ntext/css\t\t\t\t\tcss\ntext/csv\t\t\t\t\tcsv\ntext/html\t\t\t\t\thtml htm\ntext/n3\t\t\t\t\t\tn3\ntext/plain\t\t\t\t\ttxt text conf def list log in\ntext/prs.lines.tag\t\t\t\tdsc\ntext/richtext\t\t\t\t\trtx\ntext/sgml\t\t\t\t\tsgml sgm\ntext/tab-separated-values\t\t\ttsv\ntext/troff\t\t\t\t\tt tr roff man me ms\ntext/turtle\t\t\t\t\tttl\ntext/uri-list\t\t\t\t\turi uris urls\ntext/vcard\t\t\t\t\tvcard\ntext/vnd.curl\t\t\t\t\tcurl\ntext/vnd.curl.dcurl\t\t\t\tdcurl\ntext/vnd.curl.mcurl\t\t\t\tmcurl\ntext/vnd.curl.scurl\t\t\t\tscurl\ntext/vnd.dvb.subtitle\t\t\t\tsub\ntext/vnd.fly\t\t\t\t\tfly\ntext/vnd.fmi.flexstor\t\t\t\tflx\ntext/vnd.graphviz\t\t\t\tgv\ntext/vnd.in3d.3dml\t\t\t\t3dml\ntext/vnd.in3d.spot\t\t\t\tspot\ntext/vnd.sun.j2me.app-descriptor\t\tjad\ntext/vnd.wap.wml\t\t\t\twml\ntext/vnd.wap.wmlscript\t\t\t\twmls\ntext/x-asm\t\t\t\t\ts asm\ntext/x-c\t\t\t\t\tc cc cxx cpp h hh dic\ntext/x-fortran\t\t\t\t\tf for f77 f90\ntext/x-java-source\t\t\t\tjava\ntext/x-nfo\t\t\t\t\tnfo\ntext/x-opml\t\t\t\t\topml\ntext/x-pascal\t\t\t\t\tp pas\ntext/x-setext\t\t\t\t\tetx\ntext/x-sfv\t\t\t\t\tsfv\ntext/x-uuencode\t\t\t\t\tuu\ntext/x-vcalendar\t\t\t\tvcs\ntext/x-vcard\t\t\t\t\tvcf\nvideo/3gpp\t\t\t\t\t3gp\nvideo/3gpp2\t\t\t\t\t3g2\nvideo/h261\t\t\t\t\th261\nvideo/h263\t\t\t\t\th263\nvideo/h264\t\t\t\t\th264\nvideo/jpeg\t\t\t\t\tjpgv\nvideo/jpm\t\t\t\t\tjpm jpgm\nvideo/mj2\t\t\t\t\tmj2 mjp2\nvideo/mp4\t\t\t\t\tmp4 mp4v mpg4\nvideo/mpeg\t\t\t\t\tmpeg mpg mpe m1v m2v\nvideo/ogg\t\t\t\t\togv\nvideo/quicktime\t\t\t\t\tqt mov\nvideo/vnd.dece.hd\t\t\t\tuvh uvvh\nvideo/vnd.dece.mobile\t\t\t\tuvm uvvm\nvideo/vnd.dece.pd\t\t\t\tuvp uvvp\nvideo/vnd.dece.sd\t\t\t\tuvs uvvs\nvideo/vnd.dece.video\t\t\t\tuvv uvvv\nvideo/vnd.dvb.file\t\t\t\tdvb\nvideo/vnd.fvt\t\t\t\t\tfvt\nvideo/vnd.mpegurl\t\t\t\tmxu m4u\nvideo/vnd.ms-playready.media.pyv\t\tpyv\nvideo/vnd.uvvu.mp4\t\t\t\tuvu uvvu\nvideo/vnd.vivo\t\t\t\t\tviv\nvideo/webm\t\t\t\t\twebm\nvideo/x-f4v\t\t\t\t\tf4v\nvideo/x-fli\t\t\t\t\tfli\nvideo/x-flv\t\t\t\t\tflv\nvideo/x-m4v\t\t\t\t\tm4v\nvideo/x-matroska\t\t\t\tmkv mk3d mks\nvideo/x-mng\t\t\t\t\tmng\nvideo/x-ms-asf\t\t\t\t\tasf asx\nvideo/x-ms-vob\t\t\t\t\tvob\nvideo/x-ms-wm\t\t\t\t\twm\nvideo/x-ms-wmv\t\t\t\t\twmv\nvideo/x-ms-wmx\t\t\t\t\twmx\nvideo/x-ms-wvx\t\t\t\t\twvx\nvideo/x-msvideo\t\t\t\t\tavi\nvideo/x-sgi-movie\t\t\t\tmovie\nvideo/x-smv\t\t\t\t\tsmv\nx-conference/x-cooltalk\t\t\t\tice\n";

const map = new Map();

mime_raw.split('\n').forEach((row) => {
	const match = /(.+?)\t+(.+)/.exec(row);
	if (!match) return;

	const type = match[1];
	const extensions = match[2].split(' ');

	extensions.forEach(ext => {
		map.set(ext, type);
	});
});

function lookup$1(file) {
	const match = /\.([^\.]+)$/.exec(file);
	return match && map.get(match[1]);
}

function middleware(opts


 = {}) {
	const { session, ignore } = opts;

	let emitted_basepath = false;

	return compose_handlers(ignore, [
		(req, res, next) => {
			if (req.baseUrl === undefined) {
				let { originalUrl } = req;
				if (req.url === '/' && originalUrl[originalUrl.length - 1] !== '/') {
					originalUrl += '/';
				}

				req.baseUrl = originalUrl
					? originalUrl.slice(0, -req.url.length)
					: '';
			}

			if (!emitted_basepath && process.send) {
				process.send({
					__sapper__: true,
					event: 'basepath',
					basepath: req.baseUrl
				});

				emitted_basepath = true;
			}

			if (req.path === undefined) {
				req.path = req.url.replace(/\?.*/, '');
			}

			next();
		},

		fs.existsSync(path.join(build_dir, 'service-worker.js')) && serve({
			pathname: '/service-worker.js',
			cache_control: 'no-cache, no-store, must-revalidate'
		}),

		fs.existsSync(path.join(build_dir, 'service-worker.js.map')) && serve({
			pathname: '/service-worker.js.map',
			cache_control: 'no-cache, no-store, must-revalidate'
		}),

		serve({
			prefix: '/client/',
			cache_control:  'no-cache' 
		}),

		get_server_route_handler(manifest.server_routes),

		get_page_handler(manifest, session || noop$1)
	].filter(Boolean));
}

function compose_handlers(ignore, handlers) {
	const total = handlers.length;

	function nth_handler(n, req, res, next) {
		if (n >= total) {
			return next();
		}

		handlers[n](req, res, () => nth_handler(n+1, req, res, next));
	}

	return !ignore
		? (req, res, next) => nth_handler(0, req, res, next)
		: (req, res, next) => {
			if (should_ignore(req.path, ignore)) {
				next();
			} else {
				nth_handler(0, req, res, next);
			}
		};
}

function should_ignore(uri, val) {
	if (Array.isArray(val)) return val.some(x => should_ignore(uri, x));
	if (val instanceof RegExp) return val.test(uri);
	if (typeof val === 'function') return val(uri);
	return uri.startsWith(val.charCodeAt(0) === 47 ? val : `/${val}`);
}

function serve({ prefix, pathname, cache_control }



) {
	const filter = pathname
		? (req) => req.path === pathname
		: (req) => req.path.startsWith(prefix);

	const read =  (file) => fs.readFileSync(path.resolve(build_dir, file))
		;

	return (req, res, next) => {
		if (filter(req)) {
			const type = lookup$1(req.path);

			try {
				const file = decodeURIComponent(req.path.slice(1));
				const data = read(file);

				res.setHeader('Content-Type', type);
				res.setHeader('Cache-Control', cache_control);
				res.end(data);
			} catch (err) {
				res.statusCode = 404;
				res.end('not found');
			}
		} else {
			next();
		}
	};
}

function noop$1(){}

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

polka() // You can also use Express
	.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		middleware()
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});
