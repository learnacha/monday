import { render, fireEvent } from '@testing-library/react';
import { ButtonPrimary } from './button-primary';

describe('ButtonPrimary', () => {
  it('should render the button with text', () => {
    const onHandleSubmit = jest.fn();
    const { getByText } = render(<ButtonPrimary onHandleSubmit={onHandleSubmit} />);
    expect(getByText('Next')).toBeInTheDocument();
  });

  it('should render the button with custom text', () => {
    const onHandleSubmit = jest.fn();
    const { getByText } = render(<ButtonPrimary onHandleSubmit={onHandleSubmit} text="Custom Text" />);
    expect(getByText('Custom Text')).toBeInTheDocument();
  });

  it('should call onHandleSubmit when the button is clicked', () => {
    const onHandleSubmit = jest.fn();
    const { getByRole } = render(<ButtonPrimary onHandleSubmit={onHandleSubmit} />);
    const button = getByRole('button');
    fireEvent.click(button);
    expect(onHandleSubmit).toHaveBeenCalled();
  });

  it('should render the button with the loading spinner', () => {
    const onHandleSubmit = jest.fn();
    const { getByRole } = render(<ButtonPrimary onHandleSubmit={onHandleSubmit} isLoading />);
    const button = getByRole('button');
    expect(button).toContainHTML('loading');
  });
});
