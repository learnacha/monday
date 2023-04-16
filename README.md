# Application Screenshots

## Login

![Alt text](./screenshots/login.png 'Login')

## Signup

![Alt text](./screenshots/signup.png 'Login')

## Dashboard

![Alt text](./screenshots/dashboard.png 'Login')

# Testing

## Unit Testing

![Alt text](./screenshots/ut-client.jpg 'Login')
![Alt text](./screenshots/ut-designs.jpg 'Login')

## End to end testing -- Playwright

![Alt text](./screenshots/e2e.jpg 'Login')

# Installation Steps

1. Download the project `https://github.com/learnacha/monday.git`
2. `npm install`
3. `npm run start`
4. launch url at `https://localhost:4200`
   <br ><br >

# Steps to test

1. Navigate to `https://localhost:4200`
2. The page redirects to Login page
3. enter valid email, the page notifies the user not registered
4. click sign up
5. register the email id, on submit, the page redirects to login page
6. enter the email id on sign in page
7. view dashboard
   <br ><br >

# The following additional scripts can be run

1. Unit tests -- `npm run test`
2. End to end tests -- `npm run e2e`
3. Storybook -- `npm run storybook`
4. lint -- `npm run lint`
5. test coverage -- `npm run test:coverage`
   <br >
   prerequisites -- `npm install`
   <br ><br >

# Static Analysis

The following static analysis implemented in code:

1. Typescript
2. eslint
3. prettier
4. husky (precommits hooks are implemented)
5. lint-staged
   <br ><br >

# Whats not implemented

1. Features like responsiveness and accessibility etc are not implemented
2. NextJS Link and Images are not implemented as they were not rendered as expected when read from nx design library
3. The mock APIs are called to simulate real life API implementation however the code does not make use of it
4. The project uses various button components on its own, this could have been improved by creating a reusable component with additional props, however the same is not implemented
   <br ><br >

# Whats implemented

1. The project use nx mono repo with below structure <br >
   repo<br >
   -- app<br >
   -- app -- client (auth application)<br >
   -- libs<br >
   -- libs -- designs (package.json publishable and reused in app)<br >
   package.json<br >
2. The component follows close to Atomic design pattern <br >
   atoms and molecules are referred as smaller components under design library <br >
   organism referred as combination of multiple elements along with atoms and molecules <br >
3. The code also implements patterns like compound pattern, gaurd pattern etc. of react
4. The unit test written in Given, When and Then standard to describe the test scenarios
5. The project follows `tailwind` for styling and hence inline styling maintained in the project, the alternate approach would have been to use `styled components` along wth `tailwind`
6. The cypress testing also implemented, the same is in `cypress` branch
7. Last but not least, the below requirements are implemented
   <br ><br >

# Requirements

## Login page of monday.com

- Create a next.js project from scratch
- Implement Login and Signup feature similar to monday.com (Google integration not required)
- Provide basic form validations (mandatory/email, etc)
- After successful login, navigate to a basic dashboard page (can be a blank page with user name displayed)
- Follow the monday.com design system
- Mock the login and sign up APIs
- Implement successful signup and login scenarios using mock
- Implement failure login scenario using mock
- Write unit and integration (e2e using mocks) tests
- Push the code to your github account and share us the link

## Technology Stack

- Use latest stable versions of React and Next.js
- Use Typescript
- Use any design libraries (MUI/Tailwind CSS/Fluent Design System/Ant Design, etc)
- Use Redux Toolkit for state management
- Use any mock implementations (local or cloud based)

## Design System

- Follow monday.com design system Design System https://www.figma.com/community/file/1196675084194276928/Vibe-Desi gn-system-Ul-kit-(Community)
- Create the components that are necessary for the login and signup pages (No need to implement all the components as in the design system)
- Implement design system using Storybook as a separate reusable library
- Create Storybook tests for component testing
- Integrate design system into main project using any mono repo tools

## Testing

Create unit tests for components, screens, state, API codes

- Use any unit testing frameworks
- Create integration tests for login screen rendering, validations, API responses and navigation
- For integration testing, use https://playwright.dev/docs/writing-tests Testing

## Evaluation

### Completeness

It should be a working which closely matches the design provided

### Approach and Design

The code should be modular, readable and clean and follow the best practices around ES6/TypeScript/React

### Performance

Build smooth, hight performance UI with effective usage of shared state variable
