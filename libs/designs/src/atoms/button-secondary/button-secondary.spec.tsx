import { render, fireEvent } from '@testing-library/react';
import { ButtonSecondary } from './button-secondary';

describe('ButtonSecondary', () => {
  const mockHandleSubmit = jest.fn();

  it('calls onHandleSubmit prop on click', () => {
    const { getByText } = render(<ButtonSecondary onHandleSubmit={mockHandleSubmit} />);
    fireEvent.click(getByText('Continue'));
    expect(mockHandleSubmit).toHaveBeenCalledTimes(1);
  });

  it('renders the correct text and CSS classes', () => {
    const { getByText } = render(<ButtonSecondary onHandleSubmit={mockHandleSubmit} />);
    const buttonElement = getByText('Continue');
    expect(buttonElement).toBeInTheDocument();
  });
});
