# Anime Drop - Latest Anime Season

Uses React, Redux, React Router and Meteor. Flow is used for Static type checking and Jest for unit tests.

##Installation Frontend

```bash
$ cd frontend
$ npm install
```

##Installation Backend

```bash
$ cd meteor
$ npm install
```

##Running the Application

You will need to run two terminal windows. One needs to run the frontend and the other for the backend.


###1st Window:
```bash
$ cd frontend
$ npm start
```
###2nd Window:
```bash
$ cd meteor
$ npm start
```


##Testing

Tests are run with Jest. Jest will pick up any files marked `.test.js`.

Run frontend tests:
```bash
$ cd frontend
$ npm test
```

Run backend tests:
```bash
$ cd meteor
$ npm test
```

If there's any problems, just clear the cache:

```bash
$ npm test -- --no-cache
```

##Todo
- [ ] - Remove double call of API token
- [ ] - Add Sort - Score, Alphabetical

##Todo - AnimeDetails Page

- [ ] - Add Prequel/Sequel if they have one
- [ ] - Add video trailer embed
- [x] - Add Genres
- [ ] - Add links ( Official, Crunchyroll, Hulu, twitter) to AnimeDetails. Don't show if doesn't exist.
- [x] - Add Airing state
- [x] - Add Total Episodes
