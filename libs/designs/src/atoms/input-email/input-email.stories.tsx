import { Meta, Story } from '@storybook/react';
import { useState } from 'react';
import { InputEmail, InputEmailProps } from './input-email';

export default {
  title: 'Atoms/InputEmail',
  component: InputEmail,
} as Meta;

const Template: Story<InputEmailProps> = args => {
  const [email, setEmail] = useState('');
  return (
    <div className="w-full max-w-md">
      <InputEmail {...args} onEmailChange={setEmail} />
      <p className="mt-2">Entered email: {email}</p>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  placeholderText: 'Enter your email',
};

export const WithCustomCSS = Template.bind({});
WithCustomCSS.args = {
  placeholderText: 'Enter your email',
  additionalCSS: 'bg-gray-100',
};

export const WithCustomFocusCSS = Template.bind({});
WithCustomFocusCSS.args = {
  placeholderText: 'Enter your email',
  onFocusCSS: 'border-2 border-blue-500',
};

export const WithError = Template.bind({});
WithError.args = {
  placeholderText: 'Enter your email',
  showErrorEmail: true,
};
