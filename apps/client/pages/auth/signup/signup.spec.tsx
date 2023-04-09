import { useRouter } from 'next/router';
import { fireEvent, screen } from '@testing-library/react';

// We're using our own custom render function and not RTL's render.
import { renderWithProviders } from '../../../test/test-utils';
import { appServer } from '../../../test/server';
import Signup from './index';

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

describe('Given Signup Page', () => {
  // Enable API mocking before tests.
  beforeAll(() => server.listen());

  // Reset any runtime request handlers we may add during the tests.
  afterEach(() => server.resetHandlers());

  // Disable API mocking after the tests are done.
  afterAll(() => server.close());

  it('WHEN signup page is visited THEN load expected controls in it', async () => {
    renderWithProviders(<Signup />);

    expect(
      screen.getByRole('heading', { name: /welcome to monday.com/i })
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText('name@company.com')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Continue' })
    ).toBeInTheDocument();
    expect(screen.getByText('Log in')).toBeInTheDocument();
  });

  it('WHEN invalid email entered THEN display relevant error notification', async () => {
    renderWithProviders(<Signup />);

    const emailInput = screen.getByPlaceholderText('name@company.com');
    const signupButton = screen.getByRole('button', { name: 'Continue' });

    expect(emailInput).toBeInTheDocument();
    expect(signupButton).toBeInTheDocument();

    fireEvent.change(emailInput, { target: { value: 'abc' } });
    fireEvent.click(signupButton);

    // Invalid email format, kindly enter the valid email address
    const alertText = screen.getByText('Please enter a valid email address');
    expect(alertText).toBeInTheDocument();
  });

  it('WHEN valid email entered THEN register and redirect to login page', async () => {
    renderWithProviders(<Signup />);

    const emailInput = screen.getByPlaceholderText('name@company.com');
    const signupButton = screen.getByRole('button', { name: 'Continue' });

    expect(emailInput).toBeInTheDocument();
    expect(signupButton).toBeInTheDocument();

    fireEvent.change(emailInput, { target: { value: 'abc@gmail.com' } });
    fireEvent.click(signupButton);

    expect(useRouter().push).toBeCalledWith('/auth/signin');
  });
});
