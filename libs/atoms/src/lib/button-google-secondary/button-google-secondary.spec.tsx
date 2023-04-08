import { render } from '@testing-library/react';

import ButtonGoogleSecondary from './button-google-secondary';

describe('ButtonGoogleSecondary', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ButtonGoogleSecondary />);
    expect(baseElement).toBeTruthy();
  });
});
