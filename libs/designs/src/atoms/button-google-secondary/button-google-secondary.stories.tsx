import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ButtonGoogleSecondary } from './button-google-secondary';

export default {
  component: ButtonGoogleSecondary,
  title: 'Atoms/ButtonGoogleSecondary',
} as ComponentMeta<typeof ButtonGoogleSecondary>;

const Template: ComponentStory<typeof ButtonGoogleSecondary> = args => <ButtonGoogleSecondary />;

export const Primary = Template.bind({});
Primary.args = {};
