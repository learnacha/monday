import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ButtonPrimary } from './button-primary';

export default {
  component: ButtonPrimary,
  title: 'ButtonPrimary',
} as ComponentMeta<typeof ButtonPrimary>;

const Template: ComponentStory<typeof ButtonPrimary> = (args) => (
  <ButtonPrimary {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
