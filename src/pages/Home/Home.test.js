import {fireEvent, getByTestId, getByText} from '@testing-library/react';

import Home from './Home';

describe('<Home>', () => {
  let props;
  const getComponent = () => render(Home, props);
  beforeEach(() => {
    props = {
      logout: jest.fn()
    };
  });

  it('should display `Welcome to React Seed`', () => {
    const {container} = getComponent();
    expect(getByText(container, 'Welcome to React Seed')).toBeInTheDocument();
  });

  it('should render a button with `Cerrar sesion`', () => {
    const {container} = getComponent();
    expect(getByText(container, 'Cerrar sesion')).toBeInTheDocument();
  });

  describe('when the button is pressed', () => {
    beforeEach(() => {
      const {container} = getComponent();
      fireEvent.click(getByTestId(container, 'close-session-button'));
    });

    it('should fire `props.logout`', () => {
      expect(props.logout).toHaveBeenCalled();
    });
  });
});
