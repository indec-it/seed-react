import {getByText} from '@testing-library/react';

import Maintenance from './Maintenance';

describe('<Maintenance>', () => {
  const getComponent = () => render(Maintenance);

  it('should display some messages', () => {
    const {container} = getComponent();
    expect(getByText(container, 'Sistema en mantenimiento')).toBeInTheDocument();
    expect(
      getByText(container, 'Nos encontramos en un breve mantenimiento, por favor vuelva en unos minutos.')
    ).toBeInTheDocument();
    expect(getByText(container, 'Muchas gracias.')).toBeInTheDocument();
  });
});
