import { render } from '@testing-library/react';

import ErrorToast from './error-toast';

describe('ErrorToast', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ErrorToast />);
    expect(baseElement).toBeTruthy();
  });
});
