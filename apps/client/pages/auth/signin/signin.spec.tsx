import { useRouter } from 'next/router';
import { fireEvent, screen } from '@testing-library/react';

// We're using our own custom render function and not RTL's render.
import { renderWithProviders } from '../../../test/test-utils';
import { appServer } from '../../../test/server';
import type { RootState } from '../../../redux/store/store';
import Signin from './index';

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

describe('Given Signin Page', () => {
  // Enable API mocking before tests.
  beforeAll(() => server.listen());

  // Reset any runtime request handlers we may add during the tests.
  afterEach(() => server.resetHandlers());

  // Disable API mocking after the tests are done.
  afterAll(() => server.close());

  it('WHEN login page is visited THEN load expected controls in it', async () => {
    renderWithProviders(<Signin />);

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

    // signup link
    expect(screen.getByText('Sign up')).toBeInTheDocument();
  });

  it('WHEN invalid email entered THEN display relevant error notification', async () => {
    renderWithProviders(<Signin />);

    const emailInput = screen.getByPlaceholderText('Example@company.com');
    const signinButton = screen.getByRole('button', { name: /next/i });

    expect(emailInput).toBeInTheDocument();
    expect(signinButton).toBeInTheDocument();

    fireEvent.change(emailInput, { target: { value: 'abc' } });
    fireEvent.click(signinButton);

    // Invalid email format, kindly enter the valid email address
    const alertText = screen.getByText(
      'Invalid email format, kindly enter the valid email address'
    );
    expect(alertText).toBeInTheDocument();
  });

  it('WHEN entered email was not registered THEN display relevant error notification', async () => {
    renderWithProviders(<Signin />);

    const emailInput = screen.getByPlaceholderText('Example@company.com');
    const signinButton = screen.getByRole('button', { name: /next/i });

    expect(emailInput).toBeInTheDocument();
    expect(signinButton).toBeInTheDocument();

    fireEvent.change(emailInput, { target: { value: 'abc@gmail.com' } });
    fireEvent.click(signinButton);

    // Invalid email format, kindly enter the valid email address
    const alertText = screen.getByText(
      'Email ID not found, kindly sign up to proceed'
    );
    expect(alertText).toBeInTheDocument();
  });

  test('WHEN entered email was registered THEN validate and redirect to dashboard', async () => {
    const preloadedState: RootState = {
      user: {
        users: ['abc@gmail.com'],
        isSigninSuccess: false,
        loggedInUser: '',
        isError: false,
        isLoading: false,
        isSignupSuccess: false,
      },
    };
    renderWithProviders(<Signin />, { preloadedState });

    const emailInput = screen.getByPlaceholderText('Example@company.com');
    const signinButton = screen.getByRole('button', { name: /next/i });

    expect(emailInput).toBeInTheDocument();
    expect(signinButton).toBeInTheDocument();

    fireEvent.change(emailInput, { target: { value: 'abc@gmail.com' } });
    fireEvent.click(signinButton);

    expect(useRouter().push).toBeCalledWith('/dashboard');
  });
});
