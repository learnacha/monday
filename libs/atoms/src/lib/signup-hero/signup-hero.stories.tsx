import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SignupHero } from './signup-hero';

export default {
  component: SignupHero,
  title: 'SignupHero',
} as ComponentMeta<typeof SignupHero>;

const Template: ComponentStory<typeof SignupHero> = (args) => (
  <SignupHero {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
