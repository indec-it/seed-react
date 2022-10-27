import {fireEvent, getByTestId, getByText} from '@testing-library/react';

import Home from './Home';

describe('<Home>', () => {
  let props;
  const getComponent = () => render(Home, props);
  beforeEach(() => {
    props = {
      onClick: jest.fn()
    };
  });

  it('should display `Welcome to React Seed`', () => {
    const {container} = getComponent();
    expect(getByText(container, 'Welcome to React Seed')).toBeInTheDocument();
  });

  it('should render a button with `Go to login page`', () => {
    const {container} = getComponent();
    expect(getByText(container, 'Go to login page')).toBeInTheDocument();
  });

  describe('when the button is pressed', () => {
    beforeEach(() => {
      const {container} = getComponent();
      fireEvent.click(getByTestId(container, 'redirect-button'));
    });

    it('should fire `props.onClick`', () => {
      expect(props.onClick).toHaveBeenCalled();
    });
  });
});
