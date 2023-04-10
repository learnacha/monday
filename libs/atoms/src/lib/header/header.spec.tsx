import { render } from '@testing-library/react';
import { Header } from './Header';

describe('Header', () => {
  it('renders the logo correctly', () => {
    const { getByAltText } = render(<Header />);
    expect(getByAltText('Monday logo')).toBeInTheDocument();
  });

  it('renders the correct logo source', () => {
    const { getByAltText } = render(<Header />);
    expect(getByAltText('Monday logo').getAttribute('src')).toEqual(
      'https://cdn.monday.com/images/logos/monday_logo_short.png'
    );
  });
});
