# Hipo Unsplash Client

The task given by Hipo Team aims to replicate a Figma design with full functionality in React.

See live:
https://hipo-unsplash-client.web.app/

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Nothing! Everything is included in `package.json` :)

### Installing

First copy the repository to your local machine. 
```
git clone https://github.com/iremlaya/hipo-unsplash-client.git
```
Then you can install dependencies with:

```
npm install
```

or

```
yarn add
```
### Running

Run `npm run start` or `yarn start` to run the project. It should navigate you to `http://localhost:3000/`, where app is running on local.

Run `eslint .` or `npm lint` to run the linter.

## Deploying

Run `npm run build` to create the build directory. Afterwards, follow the specific steps for deployment services. I used firebase: `firebase deploy`

## Built With
##### Note: I listed the main packages. Please look at `package.json` to see everything.
* [Unsplash](https://unsplash.com/developers) - Official API for Unsplash, used for data
* [React.js](https://reactjs.org/) - JavaScript library
* [Redux.js](https://redux.js.org/) - The state container
* [Axios](https://github.com/axios/axios) - HHTP client used for API calls to Unsplash
* [Redux Thunk](https://github.com/reduxjs/redux-thunk) - Redux Middleware to handle asynchronous requests in reducers.
* [Reselect](https://github.com/reduxjs/reselect) - Selectors for fetched data, also used as a caching mechanism with LRU Mapping Cache.
* [Masonry](https://github.com/paulcollett/react-masonry-css) - Responsive Masonry Grid for React. I have used some parts of it to beautify the styling.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Thanks to the open source community, to everyone I listed above and also all dependencies that I forgot to mention!
* Cute ghost icon is from [flaticon](https://www.flaticon.com/free-icon/ghost_1234845?term=ghost&page=1&position=67) :)

## Code style
Airbnb styling is used for linting.

#### Notes
* I had only 4 days to build the app, so unfortunately it's not as good as I've liked it to be! A big issue is css. Almost every styling needs to be refactored to be responsive.
* Caching function can be found in `redux/selectors`. It caches the input query. But that means API call won't be made with the same query but different collection. I've tried to solve it by combining `keySelectors`, but I didn't have much time to look into it. If you'd like to see how it works, replace code in `redux/action/fetchActions.js` as such:
```
// remove this:
  service.searchPhotosByCollections(input, collectionIds, page) ...

// replace it with:
  cacheFetch(input, collectionIds, page) ...
```
* Another thing is file and component structure. I tried to be as concise as possible with files, but of course it needs a re-check. Some component structures such as `SearchBar`: It needs to be divided into smaller components. And `MasonryGrid`: I make API calls here. But doing them in a more general component, like `Home`, and letting Masonry Grid to only show the photos would be a better use of seperating the concerns and loose coupling.