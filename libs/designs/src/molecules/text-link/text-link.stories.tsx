import { Story, Meta } from '@storybook/react';
import { TextLink, TextLinkProps } from './text-link';

export default {
  title: 'Molecules/TextLink',
  component: TextLink,
  argTypes: {
    text: {
      control: 'text',
      defaultValue: 'Visit our website',
    },
    linkText: {
      control: 'text',
      defaultValue: 'Example Link',
    },
    linkUrl: {
      control: 'text',
      defaultValue: 'https://www.example.com',
    },
    isLight: {
      control: 'boolean',
      defaultValue: false,
    },
  },
} as Meta;

const Template: Story<TextLinkProps> = args => <TextLink {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Light = Template.bind({});
Light.args = {
  isLight: true,
};
