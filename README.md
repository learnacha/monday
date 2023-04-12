# Installation Steps

1. Download the project
2. npm install
3. npm run start
4. launch url at https://localhost:4200

# Steps to test

1. Navigate to https://localhost:4200
2. The page redirects to Login page
3. enter valid email, the page notifies the user not registered
4. click sign up
5. register the email id, on submit, the page redirects to login page
6. enter the email id on sign in page
7. view dashboard

# Whats implemented and not implemented

1. The implementation focused on the matching requirement
2. Additional features are not implemented like responsiveness and accessibility etc
3. The mock API are called to simulate real life api implementation however the code does not make use of it
4. NextJS Link and Images are not implemented as they were not rendered as expected when read from component library
5. The component follows close to Atomic design pattern
6. The code also implements patterns like compound pattern, gaurd pattern etc.
7. The unit test cases are written in Given, When and Then format
8. Last but not least, the below requirements are implemented except e2e tests

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
- Write unit and integration (e2e using mocks) tests -- in progress
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
- Create Storybook tests for component testing -- in progress
- Integrate design system into main project using any mono repo tools

## Testing

Create unit tests for components, screens, state, API codes

- Use any unit testing frameworks
- Create integration tests for login screen rendering, validations, API responses and navigation
- For integration testing, use https://playwright.dev/docs/writing-tests Testing -- pending

## Evaluation

### Completeness

It should be a working which closely matches the design provided

### Approach and Design

The code should be modular, readable and clean and follow the best practices around ES6/TypeScript/React

### Performance

Build smooth, hight performance UI with effective usage of shared state variable
