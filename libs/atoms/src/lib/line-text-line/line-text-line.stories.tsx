import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LineTextLine } from './line-text-line';

export default {
  component: LineTextLine,
  title: 'LineTextLine',
} as ComponentMeta<typeof LineTextLine>;

const Template: ComponentStory<typeof LineTextLine> = (args) => (
  <LineTextLine {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
