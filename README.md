# kanso-angular-seed — the seed for AngularJS CouchApps

This project is an application skeleton for a typical [AngularJS](http://angularjs.org/) CouchApp using [kanso](http://kan.so/).
You can use it to quickly bootstrap your angular webapp projects and dev environment for these
projects.

The seed contains AngularJS libraries, test libraries, kanso configuration and a bunch of scripts all preconfigured for
instant web development gratification. Just clone the repo (or download the zip/tarball), start up
CouchDB and push to your database and you are ready to develop and test your application.

The seed app doesn't do much, just shows how to wire two controllers and views together. You can
check it out by opening index.html in your browser (might need to push it to the database first).

_Note: We recommend running a CouchDB instance locally during development to avoid issues with 
security restrictions like running a Admin Party CouchDB instance.

## Here be dragons

This is a mixture between [angular-seed](https://github.com/angular/angular-seed) and [nolith/kanso-angular-seed](https://github.com/nolith/kanso-angular-seed). If you want a 
bare bone kanso-angular-seed seed that just works use [nolith/kanso-angular-seed](https://github.com/nolith/kanso-angular-seed)
for now.

## How to use kanso-angular-seed

Clone the kanso-angular-seed repository and start hacking...


### Running the app during development

You will need to do a initial `kenso install` and then a `kenso push` to your database.

### Running the app in production

This really depends on how complex is your app and the overall infrastructure of your system, kanso.json is configured 
to use sane defaults, but you will need to review it, before going live.

### Running unit tests

We recommend using [jasmine](http://pivotal.github.com/jasmine/) and
[Karma](http://karma-runner.github.io) for your unit tests/specs, but you are free
to use whatever works for you.

Requires [node.js](http://nodejs.org/), Karma (`sudo npm install -g karma`) and a local
or remote browser.

* start `scripts/test.sh` (on windows: `scripts\test.bat`)
  * a browser will start and connect to the Karma server (Chrome is default browser, others can be captured by loading the same url as the one in Chrome or by changing the `config/karma.conf.js` file)
* to run or re-run tests just change any of your source or test javascript files

### Receiving updates from upstream

When we upgrade the kanso-angular-seed repo with newer angular or testing library code, you can just
fetch the changes and merge them into your project with git.

## Directory Layout

    index.html                --> app layout file (the main html template file of the app)
    js/                       --> javascript files uploaded by kenso modules
      angular/
        app.js                --> application
        controllers.js        --> application controllers
        directives.js         --> application directives
        filters.js            --> custom angular filters
        services.js           --> custom angular services
    lib/                      --> 3rd party javascript libraries uploaded by kenso modules
      CornerCouch/
      angular-cornercouch.js  -->
    static/                   --> all of the static files to be used
      css/                    --> css files
        app.css               --> default stylesheet
      partials/               --> angular view partials (partial html templates)
        partial1.html
        partial2.html

    config/karma.conf.js        --> config file for running unit tests with Karma

    scripts/            --> handy shell/js/ruby scripts
      test.bat          --> autotests unit tests with Karma (windows)
      test.sh           --> autotests unit tests with Karma (*nix)
      watchr.rb

    test/                       --> test source files and libraries
      lib/
        angular/                --> angular testing libraries
          angular-mocks.js      --> mocks that replace certain angular services in tests
          angular-scenario.js   --> angular's scenario (end-to-end) test runner library
          version.txt           --> version file
      unit/                     --> unit level specs/tests
        controllersSpec.js      --> specs for controllers
        directivessSpec.js      --> specs for directives
        filtersSpec.js          --> specs for filters
        servicesSpec.js         --> specs for services

## Contact

For more information please check out http://couchdb.apache.org/, http://angularjs.org/ and http://kan.so/.
