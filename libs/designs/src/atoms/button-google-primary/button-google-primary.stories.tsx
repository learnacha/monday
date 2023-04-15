import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ButtonGooglePrimary } from './button-google-primary';

export default {
  component: ButtonGooglePrimary,
  title: 'Atoms/ButtonGooglePrimary',
} as ComponentMeta<typeof ButtonGooglePrimary>;

const Template: ComponentStory<typeof ButtonGooglePrimary> = args => <ButtonGooglePrimary />;

export const Primary = Template.bind({});
Primary.args = {};
