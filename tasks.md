## high priority

- [x] movy-search-result component
 - [x] render search results

- [x] show small posters in search result
- [x] add '+' button in search result

- [x] add a data store
- [x] insert new movie in data store
- [x] retrieve list of movie from data store

- [x] remove useless .type('json'), express will handle it itself (http://expressjs.com/en/4x/api.html#res.send)

- [ ] add a 'x' button to remove movies from store
- [x] show posters in movie list

- [x] add a default poster if no poster path

- [x] send search query to tmdb
- [ ] do not send query if 'text' is empty
- [ ] add alerts when list/search result empty
- [ ] add "Loading..." in search result when request sent

## medium priority

* [x] add purecss for basic styling
* [ ] move CSS to SASS
* [ ] handle route errors
* [ ] handle Store queries errors

## low priority

* [ ] load .min scripts in 'production' environment
* [ ] dump initial movie list in HTML to save request & round-trip
