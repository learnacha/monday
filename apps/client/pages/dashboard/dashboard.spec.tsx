import { useRouter } from 'next/router';
import { fireEvent, screen } from '@testing-library/react';

// We're using our own custom render function and not RTL's render.
import { renderWithProviders } from '../../test/test-utils';
import { appServer } from '../../test/server';
import type { RootState } from '../../redux/store/store';
import Dashboard from './index';

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

describe('Given Dashboard Page', () => {
  // Enable API mocking before tests.
  beforeAll(() => server.listen());

  // Reset any runtime request handlers we may add during the tests.
  afterEach(() => server.resetHandlers());

  // Disable API mocking after the tests are done.
  afterAll(() => server.close());

  it('WHEN user is not logged in THEN redirect to login page', async () => {
    const preloadedState: RootState = {
      user: {
        users: [''],
        isSigninSuccess: false,
        loggedInUser: '',
        isError: false,
        isLoading: false,
        isSignupSuccess: false,
      },
    };
    renderWithProviders(<Dashboard />, { preloadedState });
    expect(useRouter().push).toBeCalledWith('/auth/signin');
  });

  it('WHEN user is logged in THEN display dashboard controls', async () => {
    const preloadedState: RootState = {
      user: {
        users: ['johndoe@gmail.com'],
        isSigninSuccess: false,
        loggedInUser: 'johndoe@gmail.com',
        isError: false,
        isLoading: false,
        isSignupSuccess: false,
      },
    };
    renderWithProviders(<Dashboard />, { preloadedState });

    const logoImage = screen.getByRole('img', { name: 'Monday logo' });
    const username = screen.getByText('Hello johndoe@gmail.com');
    const logoutButton = screen.getByRole('button', { name: /logout/i });

    expect(logoImage).toBeInTheDocument();
    expect(username).toBeInTheDocument();
    expect(logoutButton).toBeInTheDocument();
  });

  it('WHEN user click log out THEN the page is redirected to login page', async () => {
    const preloadedState: RootState = {
      user: {
        users: ['johndoe@gmail.com'],
        isSigninSuccess: false,
        loggedInUser: 'johndoe@gmail.com',
        isError: false,
        isLoading: false,
        isSignupSuccess: false,
      },
    };
    renderWithProviders(<Dashboard />, { preloadedState });

    const logoutButton = screen.getByRole('button', { name: /logout/i });

    fireEvent.click(logoutButton);

    expect(useRouter().push).toBeCalledWith('/auth/signin');
  });
});
