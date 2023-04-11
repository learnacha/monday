import { useAppSelector, useAppDispatch } from '../../redux/app.hooks';
import {
  addUser,
  selectUser,
  clearSignUpSuccess,
} from '../../redux/slices/userSlice';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import {
  InputEmail,
  ButtonGooglePrimary,
  LineTextLine,
  ButtonSecondary,
} from '@monday/atoms';
import { TextLink } from '@monday/molecules';
import { isValidEmail } from '../../utils';

const hoverBlackClass =
  'hover:outline-none hover:border-[#323338] hover:ring-0 hover:ring-[#323338]';
const focusBorderClass = 'outline-none border-[#0071ea] ring-0 ring-[#0071ea]';
const errorBorderClass = 'outline-none border-[#d83a52] ring-0 ring-[#d83a52]';

export default function SignupForm() {
  const [emailError, setEmailError] = useState(false);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { isSignupSuccess } = useAppSelector(selectUser);
  const [email, setEmail] = useState('');

  const onFormSubmit = (email: string) => {
    dispatch(addUser(email) as any);
  };

  const onEmailChange = (inputEmail: string) => {
    setEmail(inputEmail);
  };

  const onHandleSubmit = () => {
    if (!isValidEmail(email)) {
      setEmailError(true);
    } else {
      onFormSubmit(email);
    }
  };

  const renderSignupForm = () => (
    <div className="w-[400px] mt-4">
      <form>
        <InputEmail
          placeholderText="name@company.com"
          onEmailChange={onEmailChange}
          showErrorEmail={emailError}
          onFocusCSS={`${hoverBlackClass}
            ${emailError ? errorBorderClass : focusBorderClass}`}
          additionalCSS={emailError ? errorBorderClass : hoverBlackClass}
        />
        <ButtonSecondary onHandleSubmit={onHandleSubmit} />
      </form>
    </div>
  );

  useEffect(() => {
    if (isSignupSuccess) {
      dispatch(clearSignUpSuccess());
      router.push('/auth/signin');
    }
  }, [dispatch, isSignupSuccess, router]);

  return (
    <div className="flex flex-col items-center self-center flex-1 py-12 px-14">
      <div className="flex flex-col items-center w-full">
        <h1 className="min-w-0 px-4 mt-[4px] mb-2 ml-0 mr-0 text-[32px] antialiased font-Poppins font-medium leading-[52px] tracking-[-0.2px] text-center text-gray-700 ">
          Welcome to monday.com
        </h1>
        <h5 className="min-w-0 px-1 m-0 antialiased font-normal text-center text-gray-700 border border-transparent rounded-md">
          {`Get started - it's free. No credit card needed.`}
        </h5>
      </div>
      <ButtonGooglePrimary />
      <div className="mt-[14px]">
        <LineTextLine thinBorder />
      </div>
      {renderSignupForm()}
      <div className="flex justify-center mt-8 w-[400px]">
        <TextLink
          text={`Already have an account?`}
          linkText="Log in"
          linkUrl="/auth/signin"
        />
      </div>
    </div>
  );
}
