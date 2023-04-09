import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ErrorToast } from './error-toast';

export default {
  component: ErrorToast,
  title: 'ErrorToast',
} as ComponentMeta<typeof ErrorToast>;

const Template: ComponentStory<typeof ErrorToast> = (args) => (
  <ErrorToast {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
