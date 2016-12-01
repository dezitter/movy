## high priority

* [x] setup express server
* [x] move APP_PORT to .env file
* [x] add README#Install instructions
* [x] add npm run start script
* [x] update README#run instructions
* [x] setup nodemon
* [x] setup angular app with browserify
* [x] setup browser sync watcher
* [x] setup watchify watcher
* [x] refactor watch:js & build:js tasks
* [x] use move HTML template to PUG using pugify browserify transform
* [x] movy-list.component
 - [x] render a hardcoded list of movies
 - [x] move hardcoded list to api backend '/api/movies'
* [ ] add a Movie resource
 - replace $http call in movy-list with Movie call
* [ ] add a Store service
 - initialize Store from within Store itself
* [ ] create a movy-search.component
 - [ ] contains movy-search-form component
  - [ ] send text query to backend
  - [ ] return hardcoded response
 - [ ] movy-search-result component
  - [ ] render results

## medium priority

* [x] setup gulp
* [x] add gulp-nodemon watcher
* [x] add gulp build:js task
* [x] add gulp watchify watcher
* [x] add gulp browsersync watcher

## low priority

* [ ] load .min scripts in 'production' environment
* [ ] dump initial movie list in HTML to save request & round-trip
