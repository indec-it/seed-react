import {
  getByTestId, getByPlaceholderText, getByText, queryByText
} from '@testing-library/react';

import Login from './Login';

describe('<Login>', () => {
  let props;
  const getComponent = () => render(Login, props);
  beforeEach(() => {
    props = {
      login: jest.fn(),
      isLoggingIn: false,
      hasError: false
    };
  });

  it('should display `Login`', () => {
    const {container} = getComponent();
    const loginTitle = getByTestId(container, 'title');
    expect(getByText(loginTitle, 'Login')).toBeInTheDocument();
  });

  it('should render a button with `Login` text', () => {
    const {container} = getComponent();
    const button = getByTestId(container, 'login-button');
    expect(getByText(button, 'Login')).toBeInTheDocument();
  });

  it('should display `Username` as placeholder', () => {
    const {container} = getComponent();
    expect(getByPlaceholderText(container, 'Username')).toBeInTheDocument();
  });

  it('should display `Password` as placeholder', () => {
    const {container} = getComponent();
    expect(getByPlaceholderText(container, 'Password')).toBeInTheDocument();
  });

  it('should be disabled login button if there is not username or password', () => {
    const {container} = getComponent();
    expect(getByTestId(container, 'login-button')).toBeDisabled();
  });

  describe('when `props.hasError` is `true`', () => {
    beforeEach(() => {
      props.hasError = true;
    });

    it('should display `Login failed`', () => {
      const {container} = getComponent();
      expect(getByText(container, 'Login failed')).toBeInTheDocument();
    });
  });

  describe('when `props.hasError` is `false`', () => {
    beforeEach(() => {
      props.hasError = false;
    });

    it('should not display `Login failed`', () => {
      const {container} = getComponent();
      expect(queryByText(container, 'Login failed')).toBeNull();
    });
  });
});
