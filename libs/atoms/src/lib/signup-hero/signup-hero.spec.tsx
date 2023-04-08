import { render } from '@testing-library/react';

import SignupHero from './signup-hero';

describe('SignupHero', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SignupHero />);
    expect(baseElement).toBeTruthy();
  });
});
