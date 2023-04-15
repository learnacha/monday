import { useState } from 'react';
import { InputEmail, ButtonPrimary } from '@monday/designs';
import { isValidEmail } from '../../utils';

type SigninFormProps = {
  onFormSubmit: (hasValidForm: boolean, email: string) => void;
  isLoading: boolean;
};

export default function SigninForm({ onFormSubmit, isLoading }: SigninFormProps) {
  const [email, setEmail] = useState('');

  const emailChange = (inputEmail: string) => {
    setEmail(inputEmail);
  };

  const handleSubmit = () => {
    const hasValidEmail = isValidEmail(email);
    onFormSubmit(hasValidEmail, email);
  };

  return (
    <div className="flex flex-col justify-center items-center mt-[40px] mb-4 w-full text-center">
      <h1 className="font-Figtree text-[40px] font-light mb-4 leading-[38px]">Log in to your account</h1>
      <form className="w-[360px] mb-8 mt-[6px]">
        <label htmlFor="user_email" className="inline-block mb-2 font-medium leading-4 mt-[16px]">
          Enter your work email address
        </label>

        <InputEmail placeholderText="Example@company.com" onEmailChange={emailChange} />
        <div className="w-full h-12 mt-[20px]">
          <ButtonPrimary isLoading={isLoading} onHandleSubmit={handleSubmit} />
        </div>
      </form>
    </div>
  );
}
