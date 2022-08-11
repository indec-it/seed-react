import {render, within} from '@testing-library/react';

import Login from './Login';

describe('<Login>', () => {
  it('should display `Login`', () => {
    const {getByTestId} = render(<Login login={jest.fn()} isLoggingIn={false} hasError={false} />);
    const {getByText} = within(getByTestId('title'));
    expect(getByText('Login')).toBeInTheDocument();
  });

  it('should render a button with `Login` text', () => {
    const {getByTestId} = render(<Login login={jest.fn()} isLoggingIn={false} hasError={false} />);
    const {getByText} = within(getByTestId('login-button'));
    expect(getByText('Login')).toBeInTheDocument();
  });

  it('should display `Username` as placeholder', () => {
    const {getByPlaceholderText} = render(<Login login={jest.fn()} isLoggingIn={false} hasError={false} />);
    expect(getByPlaceholderText('Username')).toBeInTheDocument();
  });

  it('should display `Password` as placeholder', () => {
    const {getByPlaceholderText} = render(<Login login={jest.fn()} isLoggingIn={false} hasError={false} />);
    expect(getByPlaceholderText('Password')).toBeInTheDocument();
  });

  it('should be disabled login button if there is not username or password', () => {
    const {getByTestId} = render(<Login login={jest.fn()} isLoggingIn={false} hasError={false} />);
    expect(getByTestId('login-button')).toBeDisabled();
  });

  describe('when `props.hasError` is `true`', () => {
    it('should display `Login failed`', () => {
      const {getByText} = render(<Login login={jest.fn()} isLoggingIn={false} hasError />);
      expect(getByText('Login failed')).toBeInTheDocument();
    });
  });
});
