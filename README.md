# UCSD Theta Tau Website v2
 A new site written in [Svelte3]((https://svelte.dev/)) to be deployed on Netlify to increase performance and make the site modern and sexier.

 [https://thetatau-ucsd.netlify.com](https://thetatau-ucsd.netlify.com)

## Getting Started
1. Install with `npm install`
2. Build with `npm run build`
3. Run development server with `npm run dev`
4. Go to the link specified by the output of 3.

## Making Changes 
You can run the script in tools/deploy.sh to immeidately add/commit/deploy/push your changes. Feel free to run any of the commands in there one by one if you want more fine-tuned control.

### Making Changes to the Active Data
You can find the active data split into three files:
1. `static/data/epsilon_delta_roster.csv`  
   This file contains data drawn from the Epsilon Delta roster on the Theta Tau One Stop. The first row contains the various headers, and the following rows contain the active data that we have. An empty entry means that active doesn't have that data recorded.
2. `static/data/epsilon_delta_roster.json`
   A JSON file used to parse in Python. This file is read by the Python scripts in the tools folder, and can be used as a primary "single-truth" to reference.
3. `src/scripts/epsilon_delta_roster.js`
   Basically, a copy of 2. but with `export default` so it is available to JavaScript. The data in this file is passed to the `PledgeClass` component from `members.svelte`.

To change the data, modify the CSV directly and run `python[3] tools/convertCSVtoJSON.py`. This will merge the changes from the CSV into both the JSON and JS files for each member individually, allowing you to maintain data that is unchanged (i.e. pixel data) for the actives.

To set pixel locations, run `python[3] tools/addPixelsToJSON.py [...pledgeClasses]`. Pixel locations are where each active's face is located in their respective class photos. This data is only added to the JSON and JS files. Put the names of the pledge classes you wish to modify as arguments.

## Contributing Guidelines:
To contribute, please create a separate branch named `<your initials>/<what you did>`. For example, a change I would make
would be `wx/readme`. Then, commit with a commit message that follows that should follow the phrase "this commit shoud... ". For example, `add readme file`. Export your project and create a pull request when your code is ready. Finally, await a 
passing review and your code will be merged and deployed.

### IMPORTANT:
If you want to make sure your changes were deployed, run `git diff` and see if there are a lot of files that have not
been committed. If this is the case, run `git add -A` and then follow the normal pipeline.

## Todo's:
- Document *ALL* existing code
- Protect the master branch
- Integrate a linter and a styler
- Add style checks
- ~~Complete Index~~
- Finalize Index by adding final style changes and any extra features
- ~~Create About page~~
- Fix Carousel to work with mobile
- Add more information to the about page
- Create Rush page
- ~~Create FAQ page~~
- ~~Create members page~~
- Add pixel data for all classes
- Make a mobile rendition of members page
- Update all major data in active data
- Final style check and design approval
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
`blog` is currently an example for folders as routes, which we have not implemented yet but will for `members` to use prefetching. `index.svelte` component for the website entry point.

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
Essentially our `dist` or `public` folder. This is contained in `__sapper__/export`.

#### `package.json`
A configuration of our Node project.

#### `README.md`
This file.

## But I don't know Svelte!
You should definitely try it out. It's super simple compared to most other web frameworks and filters out a lot of boilerplate so the code is a lot more intuitive and quicker to write. Plus the tutorials make it so you can learn it in like a day.

If you need more convincing, [watch Rich Harris's talk on reactivity](https://www.youtube.com/watch?v=AdNJ3fydeao).
