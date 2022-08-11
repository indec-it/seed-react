# Seed React BackOffice 🚀

https://indec-it.github.io/react-seed/

## Glossary

1. [Set up](#setup)
1. [Structure](#structure)
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
$ npm start
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
  theme/
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

You'll find three files: `[stateName]Slice.js`, `sagas.js` and `index.js`.

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

Internally `createSlice` uses `createReducer`, so you may also use [Immer](https://immerjs.github.io/immer/) to write "mutating" immutable updates. For this reason is not necessary to spread state and merge the new value. Like this:

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

## Dependencies

These are the core dependencies you'll need to get acquainted yourself with:

- [React](https://reactjs.org) 
- [Redux Toolkit](https://redux-toolkit.js.org/) (handles state management)
- [redux-saga](https://redux-saga.js.org) (handles side-effects in Redux, such as API calls)
- [React Router](https://reacttraining.com/react-router) (route management)
- [Chakra](https://chakra-ui.com) (component library our UI is built upon)
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

It will create a `dist` folder in the root with the code bundled and minified. Then you have to serve the `index.html` file located in the `dist` folder. To do this you have some packages like [http-server](https://github.com/http-party/http-server) or [servor](https://github.com/lukejacksonn/servor). If you need something more custom, you can create your own server using [express](https://expressjs.com/) or another web framework.

## Tests 

To run the tests you must run the following command:

```sh
$ npm run test
$ npm run test:watch # Run in watch mode
```

When writing tests, make sure to use the following format to keep the tests clean and consistent:

```jsx
import {getByText} from "@testing-library/react";

import Button from "./Button";

describe("<Button>", () => {
  let props;
  const getComponent = () => render(Button, props);

  beforeEach(() => {
    props = {
      children: "Label"
    };
  });
  afterEach(tearDown);

  it("should render `props.children`", () => {
    const {container} = getComponent();
    expect(getByText(container, props.children)).toBeInTheDocument();
  });

  describe("when `props.plus` is `true`", () => {
    beforeEach(() => {
      props.plus = true;
    });

    it("should render a plus character", () => {
      const {container} = getComponent();
      expect(getByText(container, `+ ${props.children}`)).toBeInTheDocument();
    });
  });
});
```

Lint the code and run tests:

```sh
$ npm run validate
```