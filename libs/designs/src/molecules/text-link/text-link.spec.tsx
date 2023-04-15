import { render, screen } from '@testing-library/react';
import { TextLink } from './text-link';

describe('TextLink', () => {
  const text = 'Some text';
  const linkText = 'Link text';
  const linkUrl = 'https://example.com';
  const isLight = true;

  it('renders text and a link with the provided props', () => {
    render(<TextLink text={text} linkText={linkText} linkUrl={linkUrl} isLight={isLight} />);
    expect(screen.getByText(text)).toBeInTheDocument();
    expect(screen.getByText(linkText)).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', linkUrl);
  });

  it('applies light styles if isLight prop is true', () => {
    render(<TextLink text={text} linkText={linkText} linkUrl={linkUrl} isLight={isLight} />);
    expect(screen.getByTestId('font-light')).toBeInTheDocument();
    expect(screen.getByTestId('light-blue')).toBeInTheDocument();
  });

  it('applies normal styles if isLight prop is false', () => {
    render(<TextLink text={text} linkText={linkText} linkUrl={linkUrl} isLight={false} />);
    expect(screen.getByTestId('font-normal')).toBeInTheDocument();
    expect(screen.getByTestId('dark-blue')).toBeInTheDocument();
  });
});
