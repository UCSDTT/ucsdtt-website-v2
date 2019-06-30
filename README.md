# UCSD Theta Tau Website v2
 A new site written in [Svelte3]((https://svelte.dev/)) to be deployed on Netlify to increase performance and make the site modern and sexier.

 [https://thetatau-ucsd.netlify.com](https://thetatau-ucsd.netlify.com)

## Getting Started
1. Install with `npm install`
2. Build with `npm build`
3. Run development server with `npm run dev`
4. Write static site to `__sapper__/export` with `npm run export` (more on this later)

## Making Changes 
You can run the script in tools/deploy.sh to immeidately add/commit/deploy/push your changes. Feel free to run any of the commands in there one by one if you want more fine-tuned control.

## Todo's:
- Document existing code.
- Protect the master branch
- Add style checks
- Add tests to Cypress
- Complete Index
- Create About page
- Create Rush page
- Create FAQ page
- Create members page
- Transfer domains

## Project Structure:
This project is laid out using [Sapper](https://sapper.svelte.dev/). Sapper makes it really easy to export industry-grade static websites built in Svelte.

### Important Directories
These are the directories that are the most important for adding components/views

#### `src`
All the source code goes in here. We don't use a `public` directory because Sapper puts all our assets into `__sapper__`

##### `components`
Contains all the Svelte components to reuse across different pages, and even within other components. Learn more in the [Svelte tutorial](https://svelte.dev/tutorial/nested-components).

##### `routes`
Contains the routes. If the file name is `x.svelte`, then you will be able to access that component with `[base url]/x`. If you add an underscore in front of the name, it won't be served as a a route.  
`blog` is currently an example for folders as routes, which we have not implemented yet but will for `members` to use prefetching.

##### `scripts`
Any JS files you want to include that don't really fit any other descriptions.

##### `template.html`
The base template for every page on the Theta Tau website. Includes a navbar and some styling.

#### `static`
Includes all static files, separated by category. To access a static file anywhere in your code, just leave the `static/` part out, as Sapper will already route and serve all the static pages for your convenience.  

e.g. `/static/icons/garnett.svg` will be acquired in any source file using `/icons/garnett.svg`.

There's also a global css file, which describes our core design principles. Discussion about our theme is encouraged.

#### `tools`
Contains tools and scripts to run in order to expedite menial processes.

#### `cypress`
Contains tests. Not really sure how this works yet.

#### `__sapper__`
Essentially our `dist` or `public` folder. We only need to o

#### `package.json`
A configuration of our Node project.

#### `README.md`
This file.

## But I don't know Svelte!
You should definitely try it out. It's super simple compared to most other web frameworks and filters out a lot of boilerplate so the code is a lot more intuitive and quicker to write. Plus the tutorials make it so you can learn it in like a day.

If you need more convincing, [watch Rich Harris's talk on reactivity](https://www.youtube.com/watch?v=AdNJ3fydeao).
