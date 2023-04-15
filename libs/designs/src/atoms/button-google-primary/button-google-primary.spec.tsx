import { render, screen } from '@testing-library/react';
import { ButtonGooglePrimary } from './button-google-primary';

describe('ButtonGooglePrimary component', () => {
  test('renders button with text "Continue with Google"', () => {
    render(<ButtonGooglePrimary />);
    const buttonText = screen.getByText('Continue with Google');
    expect(buttonText).toBeInTheDocument();
  });

  test('renders button with Google logo', () => {
    render(<ButtonGooglePrimary />);
    const googleLogo = screen.getByAltText('Continue with Google');
    expect(googleLogo).toBeInTheDocument();
    expect(googleLogo).toHaveAttribute('src', 'https://cdn.monday.com/images/google-icon.svg');
  });
});
