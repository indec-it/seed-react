# Seed React BackOffice 🚀

## Table of Contents

1. [Set up](#setup)
1. [Structure](#structure)
1. [Routes](#routes)
    * App routes [3.1](#routes--app)
    * Api routes [3.2](#routes--api)
1. [Dependencies](#dependencies)
1. [Deployment](#deployment)
1. [Tests](#tests)

## Setup

Set up your environment variables for development:

```sh
cp _develop.env .env
```

First you have to install dependencies and then start the project.

To install dependencies execute the following command:

```sh
$ npm install
```

To run the project execute the following command:

```sh
$ npm run dev
```

It will open a page in your default browser at [http://localhost:6000](http://localhost:6000).

## Structure

The project is split into the following directories. When writing code, use the following guidelines to determine where it should be placed. You can also take a look at the code yourself for in-depth examples.

```
src/
  app/
  components/
  constants/
  hooks/
  pages/
  routes/
  services/
  state/
  styles/
  utils/
```

`src/app`

Redux configuration.

`src/components`

Components to be share for the whole application.

`src/constants`

Constants to be share for the whole application.

`src/hooks`

Here you must write your custom hooks.

`src/pages`

Application pages.

`src/routes`

Here you must import application pages and add application routes.

`src/services`

Http requests.

`src/state`

You'll find four files: `[stateName]Slice.js`, `sagas.js`, `selectors.js` and `index.js`.

For this project we use [Redux Toolkit](https://redux-toolkit.js.org/) instead of redux, it is easier to configure and reduces too much boilerplate code.

Using redux toolkit you don't need to create actions, types and reducer anymore. You only need to use `createSlice` function from `redux-toolkit` and it'll create actions for you. Here's an example of what it looks like:

```js
import {createSlice} from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    increment: state => {state.value += 1;},
    decrement: state => {state.value -= 1;}
  }
});

export const {increment, decrement} = counterSlice.actions;

export default counterSlice.reducer;
```

Then you should import the actions `increment` and `decrement` from our `counterSlice` in your component and use it throw `dispatch`. To dispatch an action you can use `useDispatch` hook from `react-redux` or you can use the `connect` function also from `react-redux`. I prefer to use `connect` because is easier to test the component and it's clearer.

Internally `createSlice` uses `createReducer`, so you may use [Immer](https://immerjs.github.io/immer/) to write "mutating" logic and it doesn't actually mutate the state. For this reason is not necessary to spread state and merge the new value. Like this:

```js
export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    increment: state => ({...state, value: state.value +=1 }),
    decrement: state => ({...state, value: state.value -=1 }),
  }
});
```

If you want to create actions, you can use `createAction` function from `redux-toolkit`. Then you should put the action inside `extraReducers` into the `slice`.

```js
import {createSlice, createAction} from '@reduxjs/toolkit';

export const increment = createAction('increment');

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    decrement: state => {state.value -= 1;}
  },
  extraReducers: builder => {
    builder.addCase(increment, (state, action) => {
        return state.value + action.payload;
    })
  }
});

export const {decrement} = counterSlice.actions;

export default counterSlice.reducer;
```

If you choose the above option you should move the actions to a new file.

`src/theme`

Custom theme for components and application.


`src/utils`

Functions to be shared for the whole application.

## Routes

<a name="routes--app"></a><a name="3.1"></a>
- [3.1](#routes--app) **App routes usage**

To create a new application route, you have to add your new route into `src/routes` folder, if the new route is when the user is not logged, you have to add the route into `offline` file; otherwise you have to add the route into `online` file. Don't forget to add the route into `src/constants/routes` to make future changes easier.

<a name="routes--api"></a><a name="3.1"></a>
- [3.2](#routes--api) **Api routes usage**

To make a request to the API you must do this from `sagas`. In `development` mode you have to add your route in `src/constants/apiRoutes.js` file, but for `production` we don't expose the backend url, so you need to add the API route in `server.js` file.

## Dependencies

These are the core dependencies you'll need to get acquainted yourself with:

- [React](https://reactjs.org) 
- [Redux Toolkit](https://redux-toolkit.js.org/) (handles state management)
- [redux-saga](https://redux-saga.js.org) (handles side-effects in Redux, such as API calls)
- [React Router](https://reacttraining.com/react-router) (route management)
- [Redux-first-history](https://github.com/salvoravida/redux-first-history) (redux binding for React Router)
- [Material ui](https://mui.com/) (component library our UI is built upon)
- [Formik](https://jaredpalmer.com/formik/docs/api/formik#validationschema-schema-gt-schema) (to make it easier to write forms with React)
- [Yup](https://github.com/jquense/yup) (handles form validation)
- [Storybook](https://storybook.js.org) (component library)
- [Jest](https://jestjs.io) (testing framework)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) (DOM interface for testing)
- [EsLint](https://eslint.org) (used to lint code)

Tweaking the build config requires an understanding of the following. This isn't something we'll need to tweak often:

- [Babel](https://babeljs.io) (JavaScript compiler so we can write next-gen JS)
- [Webpack](https://webpack.js.org) (module bundler)

## Deployment

To deploy don't forget to change the environment variables for production. Then you must run the following command:

```sh
$ npm run build
```

It will create a `dist` folder in the root with the code bundled and minified. Then you have to serve the `index.html` file located in the `dist` folder running the following command in the `dist` folder:

```sh
$ node server.js
```

If you use `pm2` you should run this command

```sh
$ pm2 start server.js --name <app-name>
```

## Tests 

To run the tests you must run the following command:

```sh
$ npm run test
$ npm run test:watch # Run in watch mode
```

When writing tests, make sure to use the following format to keep the tests clean and consistent:

```jsx
import {render} from "@testing-library/react";

import Button from "./Button";

describe("<Button>", () => {
  it("should render `props.children`", () => {
    const {getByText} = render(<Button children="Label"/>)
    expect(getByText('Label')).toBeInTheDocument();
  });

  describe("when `props.plus` is `true`", () => {
    it("should render a plus character", () => {
      const {getByText} = render(<Button children="Label" plus/>)
      expect(getByText(`+ ${props.children}`)).toBeInTheDocument();
    });
  });
});
```

Lint the code and run tests:

```sh
$ npm run validate
```