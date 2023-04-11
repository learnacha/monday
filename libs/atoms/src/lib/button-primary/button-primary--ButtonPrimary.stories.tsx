import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ButtonPrimary } from './button-primary';

export default {
  title: 'ButtonPrimary',
  component: ButtonPrimary,
} as ComponentMeta<typeof ButtonPrimary>;

const Template: ComponentStory<typeof ButtonPrimary> = (args) => (
  <ButtonPrimary {...args} />
);

export const Default = Template.bind({});
Default.args = {
  text: 'Next',
  isLoading: false,
  onHandleSubmit: () => {
    console.log('OnHandleSubmit clicked');
  },
};

export const Loading = Template.bind({});
Loading.args = {
  text: 'Next',
  isLoading: true,
  onHandleSubmit: () => {
    console.log('OnHandleSubmit clicked');
  },
};
