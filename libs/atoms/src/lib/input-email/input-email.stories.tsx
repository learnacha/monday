import { ComponentStory, ComponentMeta } from '@storybook/react';
import { InputEmail } from './input-email';

export default {
  component: InputEmail,
  title: 'InputEmail',
} as ComponentMeta<typeof InputEmail>;

const Template: ComponentStory<typeof InputEmail> = (args) => (
  <InputEmail {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
