import { useRouter } from 'next/router';
import { fireEvent, screen, waitFor } from '@testing-library/react';

import SignupForm from './signup-form';
import { renderWithProviders } from '../../test/test-utils';
import { appServer } from '../../test/server';

const server = appServer();

jest.mock('next/router', () => {
  const router = {
    push: jest.fn(),
    pathname: '/',
    route: '',
    asPath: '',
    query: {},
    events: {
      on: jest.fn(),
      off: jest.fn(),
      emit: jest.fn(),
    },
  };
  return {
    useRouter: jest.fn().mockReturnValue(router),
  };
});

describe('Given Signin Form', () => {
  // Enable API mocking before tests.
  beforeAll(() => server.listen());

  // Reset any runtime request handlers we may add during the tests.
  afterEach(() => server.resetHandlers());

  // Disable API mocking after the tests are done.
  afterAll(() => server.close());
  it('WHEN SigninForm requested THEN the relevant controls rendered successfully', () => {
    renderWithProviders(<SignupForm />);

    expect(
      screen.getByRole('heading', { name: /welcome to monday.com/i })
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText('name@company.com')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Continue' })
    ).toBeInTheDocument();
  });

  it('WHEN invalid email entered THEN display relevant error notification', async () => {
    renderWithProviders(<SignupForm />);

    const emailInput = screen.getByPlaceholderText('name@company.com');
    const signupButton = screen.getByRole('button', { name: 'Continue' });

    expect(emailInput).toBeInTheDocument();
    expect(signupButton).toBeInTheDocument();

    fireEvent.change(emailInput, { target: { value: 'abc' } });
    fireEvent.click(signupButton);

    const alertText = screen.getByText('Please enter a valid email address');
    expect(alertText).toBeInTheDocument();
  });

  it('WHEN valid email entered THEN register and redirect to login page', async () => {
    renderWithProviders(<SignupForm />);

    const emailInput = screen.getByPlaceholderText('name@company.com');
    const signupButton = screen.getByRole('button', { name: 'Continue' });

    expect(emailInput).toBeInTheDocument();
    expect(signupButton).toBeInTheDocument();

    fireEvent.change(emailInput, { target: { value: 'abc@gmail.com' } });
    fireEvent.click(signupButton);

    await waitFor(() =>
      expect(useRouter().push).toBeCalledWith('/auth/signin')
    );
  });
});
