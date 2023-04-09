import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ButtonGoogleSecondary } from './button-google-secondary';

export default {
  component: ButtonGoogleSecondary,
  title: 'ButtonGoogleSecondary',
} as ComponentMeta<typeof ButtonGoogleSecondary>;

const Template: ComponentStory<typeof ButtonGoogleSecondary> = (args) => (
  <ButtonGoogleSecondary {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
