import { render } from '@testing-library/react';
import { ErrorToast } from './error-toast';

describe('ErrorToast', () => {
  const errorMsg = 'Something went wrong. Please try again later.';

  it('renders the error message correctly', () => {
    const { getByText } = render(<ErrorToast msg={errorMsg} />);
    expect(getByText(errorMsg)).toBeInTheDocument();
  });

  it('renders the correct CSS classes', () => {
    const msg = 'hello world';
    const { getByText } = render(<ErrorToast msg={msg} />);
    expect(getByText(msg)).toBeInTheDocument();
  });
});
