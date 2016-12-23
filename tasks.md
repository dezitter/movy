## high priority

- [x] add user support { login, hash, movie_ids }
 - [x] add a user store

- [x] [user] set username as unique
- [x] [user/signup] flash error message if username taken
- [x] [user] hash password
- [x] [user] add a link to singup page on login.pug
- [x] [user] add login/signup/logout styling
- [x] [user] show flash messages as alerts
- [ ] move to https

- [ ] move to MongoDB/mongoose
- [ ] share Movie objects between user
  (BUT will need a 3rd MovieState obj for watched/favorite linking User<->Movie)
- [ ] update README with install instructions
- [ ] [user/signup] ensure min username length
- [ ] [user/signup] ensure min password length & complexity
- [ ] [user/login] reset password
- [ ] provide scripts to pre-populate user & movies for dev

- [ ] save images locally
 - [ ] update poster urls once saved

- [ ] add cache policies
 - [ ] revv js & css

- [ ] fix: when looking at a movie & going back to list, current page is lost

## medium priority

- [x] [api/add] fetch full movie after send partial response

- [ ] enable full width view of list, vertical scroll search section
- [x] improve look & feel

- [ ] add youtube widget in details to show trailer
- [ ] add support for collection of related movies
- [ ] add table list view

## low priority

- [ ] use exiftool or similar tool to extract runtime/file size/mime type
- [ ] blur images ?

- [ ] add a Suggestions page

- [ ] make sure all attributes/components/bindigns are prefixed
- [ ] load .min css in 'production' environment
