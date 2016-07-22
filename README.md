## Website Performance Optimization Implementation
This is a implementation of website performance optimization strategies for Project 4 of the Udacity Frontend Nanodegree.

The optimizations target 2 areas:

* __PageSpeed score__, load time and critical rendering path of index.html

* __User experience and site responsiveness__ for a pizza ordering demo site

### Getting started
__To view the site:__

[ls895.github.io/web-opt-project/](http://ls895.github.io/web-opt-project/) hosts a post-runner running version of the site on the `gh-pages` branch on the `dist` directory.

__To build the production/ post-runner site:__

* Fork and clone the repo.

* Install the `npm` package manager according to instructions for your operating system.

* After installing `npm`, in terminal run the following commands:

`npm install -g grunt-cli` to install the Grunt command line interface.

* `Cd` to the repository directory, ensure `package.json` and `Gruntfile.js` exist:

`npm install` to install all the dependencies required for the task runner.

* These packages are installed:
 * `grunt`
 * `grunt-contrib-cssmin`
 * `grunt-contrib-htmlmin`
 * `grunt-contrib-imagemin`
 * `grunt-contrib-uglify`
 * `grunt-processhtml`
 * `grunt-responsive-images`

After installing the packages, run `grunt default` to build the site into the output directory `dist`. Source files are in `src`.

### Optimizations

#### PageSpeed score of `dist/index.html`

* File Size
 * All HTML, CSS and JS files are minified to reduce size (Grunt packages: htmlmin, cssmin, uglify, processhtml).

 * All images optimized for screen and file size (Grunt packages: responsive-images, imagemin).

* Network Request
 * `css/style.min.css` is inlined in `index.html` post-runner to save network request.

* Parser Blocking
 * Google analytics script are deferred.

 * Performance measuring script is loaded asynchronously.

* Render Blocking
 * Google font CSS loading is replaced with asynchronous loading using Google's web font loader.

 * Print CSS given `media="print"` to prevent unnecessary render blocking.

#### Responsiveness of `dist/views/pizza.html`

`dist/views/js/main.js` is modified for the following objective:

* 60fps rendering
 * Forced Synchronous Layout/ Layout Thrashing: CSS property like `document.body.scrollTop` taken out of loops to prevent unnecessary successive layouts tasking the browser.

 * Expensive CSS property: `left` is replaced by `translateX` to eliminate painting cost to the browser while achieving the same visual effect.

 * Browser optimization: replace the traditional scroll event listener with `requestAnimationFrame` for better browser coordination in scheduling frame painting.


* Response time
 * Object creation: remove unnecessary function definition inside `resizePizzas` event handler function to prevent object creation at each event call.

 * Forced Synchronous Layout/ Layout Thrashing: Unnecessary query of CSS property like `offsetWidth ` removed in loops.

 * Refactoring: 
    * Most DOM object selectors are placed outside of `resizePizzas` as references can be made at script first execution and not at event call time.

    * Assign new width values to target elements directly to avoid unnecessary calculation of width difference and query of `offsetWidth`.

`dist/views/css/style.css` is modified for the following objective:

* 60fps rendering
 * Element transformation and layering: `will-change: transform` added to assist layering of moving elements.

 * Style calculation: `z-index` property given to the parent element of moving elements instead of individual moving elements to save style recalculation cost.
 