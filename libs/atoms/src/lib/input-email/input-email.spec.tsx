import { render, fireEvent } from '@testing-library/react';
import { InputEmail } from './input-email';

describe('Given InputEmail', () => {
  const defaultProps = {
    additionalCSS: '',
    onEmailChange: jest.fn(),
    onFocusCSS: '',
    placeholderText: 'Enter your email address',
    showErrorEmail: false,
  };

  it('WHEN InputEmail component is called THEN should render email component with default props', () => {
    const { getByPlaceholderText } = render(<InputEmail {...defaultProps} />);
    expect(
      getByPlaceholderText('Enter your email address')
    ).toBeInTheDocument();
  });

  it('WHEN email value is changed THEN call onEmailChange prop', () => {
    const { getByPlaceholderText } = render(<InputEmail {...defaultProps} />);
    const input = getByPlaceholderText('Enter your email address');
    fireEvent.change(input, { target: { value: 'test@test.com' } });
    expect(defaultProps.onEmailChange).toHaveBeenCalledWith('test@test.com');

    fireEvent.focus(input);
    expect(input).not.toHaveClass('bg-blue-500');
  });

  it('WHEN additional css received as props THEN it must be applied to the textbox', () => {
    const { getByPlaceholderText } = render(
      <InputEmail {...defaultProps} additionalCSS="bg-red-500" />
    );
    const input = getByPlaceholderText('Enter your email address');
    expect(input).toHaveClass('bg-red-500');
  });

  it('WHEN custom onFocusCSS props received THEN the same needs to be rendered', () => {
    const { getByPlaceholderText } = render(
      <InputEmail {...defaultProps} onFocusCSS="bg-blue-500" />
    );
    const input = getByPlaceholderText('Enter your email address');
    fireEvent.focus(input);
    expect(input).toHaveClass('bg-blue-500');
  });

  it('WHEN showErrorEmail prop is true THEN display inline error message must be displayed', () => {
    const { getByText } = render(
      <InputEmail {...defaultProps} showErrorEmail={true} />
    );
    expect(getByText('Please enter a valid email address')).toBeInTheDocument();
  });

  it('WHEN an input loses focus THEN should render with default CSS with additional CSS if any', () => {
    const { getByPlaceholderText } = render(
      <InputEmail {...defaultProps} additionalCSS="bg-red-500" />
    );
    const input = getByPlaceholderText('Enter your email address');
    fireEvent.blur(input);
    expect(input).toHaveClass('bg-red-500');
  });
});
