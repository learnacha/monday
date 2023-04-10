import { fireEvent, screen } from '@testing-library/react';
import { render } from '@testing-library/react';

import SigninForm from './signin-form';

const renderComponent = (onFormSubmit = jest.fn(), isLoading = false) => {
  return render(
    <SigninForm onFormSubmit={onFormSubmit} isLoading={isLoading} />
  );
};

describe('Given Signin Form', () => {
  it('WHEN SigninForm requested THEN the relevant controls rendered successfully', () => {
    renderComponent();

    // heading
    expect(
      screen.getByRole('heading', { name: /log in to your account/i })
    ).toBeInTheDocument();
    expect(
      screen.getByText('Enter your work email address')
    ).toBeInTheDocument();

    // login email textbox
    expect(
      screen.getByPlaceholderText('Example@company.com')
    ).toBeInTheDocument();

    // login button
    expect(screen.getByRole('button', { name: /next/i })).toBeInTheDocument();
  });

  it('WHEN invalid email entered THEN notify parent component with invalid email and validation status', async () => {
    const mockOnFormSubmit = jest.fn();
    renderComponent(mockOnFormSubmit);

    const emailInput = screen.getByPlaceholderText('Example@company.com');
    const signinButton = screen.getByRole('button', { name: /next/i });

    expect(emailInput).toBeInTheDocument();
    expect(signinButton).toBeInTheDocument();

    fireEvent.change(emailInput, { target: { value: 'abc' } });
    fireEvent.click(signinButton);

    expect(mockOnFormSubmit).toHaveBeenCalledWith(false, 'abc');

    fireEvent.change(emailInput, { target: { value: 'abc@gmail.com' } });
    fireEvent.click(signinButton);
    expect(mockOnFormSubmit).toHaveBeenCalledWith(true, 'abc@gmail.com');
  });

  it('WHEN valid email entered THEN notify parent component with valid email and validation status', async () => {
    const mockOnFormSubmit = jest.fn();
    renderComponent(mockOnFormSubmit);

    const emailInput = screen.getByPlaceholderText('Example@company.com');
    const signinButton = screen.getByRole('button', { name: /next/i });

    expect(emailInput).toBeInTheDocument();
    expect(signinButton).toBeInTheDocument();

    fireEvent.change(emailInput, { target: { value: 'abc@gmail.com' } });
    fireEvent.click(signinButton);

    expect(mockOnFormSubmit).toHaveBeenCalledWith(true, 'abc@gmail.com');
  });
});
