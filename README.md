# Bic

It's a...

-  framework to build websites
- thin wrapper around a bunch of Gulp tasks, a big bunch defaults configurations and webpack
- work in progress

Still reading...

Supported features are...

- CLI, env & project specific defaults and overrides config using [nconf](https://github.com/indexzero/nconf)
- Build task sequencing using [gulp](https://github.com/gulpjs) & [gulp-sequence](https://github.com/teambition/gulp-sequence)
- [LiveReload](http://www.browsersync.io/docs/gulp/#gulp-reload) + [BrowserSync](http://www.browsersync.io/) & [Express](http://expressjs.com/) + [Nodemon](http://nodemon.io/) server
- JS & CSS code splitting for multiple entry points/pages using [webpack](https://github.com/webpack/webpack)
- Custom Modernizr using  [customizr](https://github.com/doctyper/customizr)
- Dead CSS removal using [uncss](https://github.com/giakki/uncss)
- Image optimization
- SVG sprite generation
- HTML, CSS, JS & JSON minification
- HTML, CSS, JS, JSON & Color linting
- JS & SASS style validation & formatting
- Inlined files
- Gzip compression
- Favicon generation
- Deployment to AWS S3 + CloudFront
- Asset fingerprinting/versioning for browser cache busting
- Convert root relative paths to relative for deployment to sub-directories
- Automatic generation of project TODO/FIXME list

Supported demo features are...

- Package formatting using [fixpack](https://github.com/henrikjoreteg/fixpack)
- Package versioning using [bump-cli](https://github.com/rstacruz/bump-cli)
- Async unit testing using [blue-tape](https://github.com/spion/blue-tape)

Future supported features may be...

- Deep add & override configs (E.g. add loaders to webpack)
- Project boilerplate generators Yeoman & Slush
- Browser unit test running support using
- Unit testing using Jasmine / Mocha, Chai, Sinon
- Test running with webpack support using Karma
- Test coverage reporting using Istambul
- Release management using [ghooks](https://github.com/gtramontina/ghooks), [semantic-release](https://github.com/semantic-release/semantic-release), [commitizen](https://github.com/commitizen), [greenkeeper](http://greenkeeper.io/), etc.

Things that won't happen are...

- More template engine support - The demo uses Jade. JSX is another option.