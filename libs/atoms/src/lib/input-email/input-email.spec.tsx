import { render } from '@testing-library/react';

import InputEmail from './input-email';

describe('InputEmail', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<InputEmail />);
    expect(baseElement).toBeTruthy();
  });
});
