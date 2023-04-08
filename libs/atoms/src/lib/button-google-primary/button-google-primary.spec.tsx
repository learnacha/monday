import { render } from '@testing-library/react';

import ButtonGooglePrimary from './button-google-primary';

describe('ButtonGooglePrimary', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ButtonGooglePrimary />);
    expect(baseElement).toBeTruthy();
  });
});
