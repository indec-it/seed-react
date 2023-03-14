/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {render} from '@testing-library/react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {MemoryRouter} from 'react-router-dom';
import {Formik} from 'formik';

import theme from '@/styles/theme';

global.React = React;
global.configureStore = configureStore;

global.render = (Component, props = {}, options = {}) => {
  let component = (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...props} />
    </ThemeProvider>
  );
  if (options.router) {
    component = <MemoryRouter {...options.router}>{component}</MemoryRouter>;
  }
  if (options.formik) {
    component = <Formik onSubmit={() => ({})} initialValues={options.formik.initialValues}>{component}</Formik>;
  }
  if (options.store) {
    component = <Provider store={options.store}>{component}</Provider>;
  }
  return render(component);
};
