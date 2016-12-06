## high priority

- [x] rework listing components
 - [x] add a <movy-grid> component in <movy-list> to display movies
 - [x] rename <movy-list-item> to <movy-grid-item> and move inside <movy-grid>
 - [x] pass <movy-grid>   data as inputs from <movy-list>
 - [x] pass <movy-filter> data as inputs from <movy-list>
 - [x] pass <movy-pager>  data as inputs from <movy-list>
 - [x] rename <movy-filter-sort-control> as <movy-sort-control>
 - [x] pass <movy-sort-control> data as inputs from <movy-list>

- [ ] introduce Action modules
 - [x] add a MovieAction to update store on add/fetch/remove
 - [ ] add a FilterAction to update store on filter/sort
 - [ ] add a PagerAction to update store on prev/next
 - [ ] add Store helpers to modify state, DO NOT modify store properties
 directly from Actions

- [ ] reset filter when Adding a movie with default sorting
- [x] do not send query if 'text' is empty

- [x] add alerts when list/search result empty
- [x] add "Loading..." in search result when request was sent
- [x] add a clear button in <movy-search>

- [x] add a 'x' button to remove movies from store

- [x] add a <movy-list-filter> component
 - [x] filter by *title*
 - [x] sort by title/year
 - [x] allow to reverse sort order
- [x] add a <movy-list-pager>  component to paginate

- [ ] add favorite flags
- [ ] filter checkbox favorite/watched

## medium priority

- [x] move CSS to SASS
- [x] setup gulp build:sass & watch:sass tasks
- [x] cleanup & organize style definitions
- [ ] improve look & feel
- [ ] handle route errors
- [ ] handle Store queries errors
- [ ] add 'title' attr on movie title/release date/controls,poster

## low priority

- [ ] make sure all attributes/components/bindigns are prefixed
- [ ] load .min scripts in 'production' environment
- [ ] dump initial movie list in HTML to save request & round-trip
