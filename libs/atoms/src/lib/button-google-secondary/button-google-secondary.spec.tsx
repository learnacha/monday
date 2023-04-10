import { render, screen } from '@testing-library/react';
import { ButtonGoogleSecondary } from './button-google-secondary';

describe('ButtonGoogleSecondary', () => {
  test('renders button with Google text', () => {
    render(<ButtonGoogleSecondary />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent('Google');
  });

  test('renders Google logo', () => {
    render(<ButtonGoogleSecondary />);
    const logoElement = screen.getByAltText('Google logo');
    expect(logoElement).toBeInTheDocument();
  });
});
