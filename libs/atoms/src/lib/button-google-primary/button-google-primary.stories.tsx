import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ButtonGooglePrimary } from './button-google-primary';

export default {
  component: ButtonGooglePrimary,
  title: 'ButtonGooglePrimary',
} as ComponentMeta<typeof ButtonGooglePrimary>;

const Template: ComponentStory<typeof ButtonGooglePrimary> = (args) => (
  <ButtonGooglePrimary {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
