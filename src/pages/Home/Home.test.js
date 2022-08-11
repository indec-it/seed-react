import {fireEvent, render} from '@testing-library/react';

import Home from './Home';

describe('<Home>', () => {
  it('should display `Welcome to React Seed`', () => {
    const {getByText} = render(<Home onClick={jest.fn()} />);
    expect(getByText('Welcome to React Seed')).toBeInTheDocument();
  });

  it('should render a button with `Go to login page`', () => {
    const {getByText} = render(<Home onClick={jest.fn()} />);
    expect(getByText('Go to login page')).toBeInTheDocument();
  });

  describe('when the button is pressed', () => {
    const click = jest.fn();
    beforeEach(() => {
      const {getByTestId} = render(<Home onClick={click} />);
      fireEvent.click(getByTestId('redirect-button'));
    });

    it('should call the onClick callback', () => {
      expect(click).toHaveBeenCalled();
    });
  });
});
