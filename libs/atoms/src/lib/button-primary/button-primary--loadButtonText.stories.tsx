import { ComponentStory, ComponentMeta } from '@storybook/react';
import { loadButtonText } from './button-primary';

export default {
  component: loadButtonText,
  title: 'loadButtonText',
} as ComponentMeta<typeof loadButtonText>;

const Template: ComponentStory<typeof loadButtonText> = (args) => (
  <loadButtonText {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
