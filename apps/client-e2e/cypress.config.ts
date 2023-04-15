import { defineConfig } from 'cypress';
import { nxE2EPreset } from '@nrwl/cypress/plugins/cypress-preset';

export default defineConfig({
  e2e: nxE2EPreset(__dirname),
  env: {
    signinUrl: '/auth/signin',
    signupUrl: '/auth/signup',
    dashboard: '/dashboard',
  },
});
