import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ButtonSecondary } from './button-secondary';

export default {
  component: ButtonSecondary,
  title: 'Atoms/ButtonSecondary',
} as ComponentMeta<typeof ButtonSecondary>;

const Template: ComponentStory<typeof ButtonSecondary> = args => <ButtonSecondary {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
