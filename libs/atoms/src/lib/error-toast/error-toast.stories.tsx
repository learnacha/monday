import { ComponentMeta, Story } from '@storybook/react';
import { ErrorToast, ErrorToastProps } from './error-toast';

export default {
  component: ErrorToast,
  title: 'ErrorToast',
} as ComponentMeta<typeof ErrorToast>;

const Template: Story<ErrorToastProps> = args => <ErrorToast {...args} />;

export const Default = Template.bind({});
Default.args = {
  msg: 'Error! Something went wrong.',
};
