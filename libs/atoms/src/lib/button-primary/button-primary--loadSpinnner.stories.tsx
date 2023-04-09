import { ComponentStory, ComponentMeta } from '@storybook/react';
import { loadSpinnner } from './button-primary';

export default {
  component: loadSpinnner,
  title: 'loadSpinnner',
} as ComponentMeta<typeof loadSpinnner>;

const Template: ComponentStory<typeof loadSpinnner> = (args) => (
  <loadSpinnner {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
