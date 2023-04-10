import { render } from '@testing-library/react';
import { SignupHero } from './signup-hero';

describe('SignupHero', () => {
  it('renders the background image correctly', () => {
    const { container } = render(<SignupHero />);
    const backgroundImage =
      container.querySelector('.bg-cover').style.backgroundImage;
    expect(backgroundImage).toEqual(
      'url(https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/new-signup-right-side-assets/welcome-to-monday.png)'
    );
  });
});
