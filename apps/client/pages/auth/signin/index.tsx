import { useRouter } from 'next/router';
import { ButtonGoogleSecondary, ErrorToast, Header, LineTextLine } from '@monday/atoms';
import { useAppSelector, useAppDispatch } from '../../../redux/app.hooks';
import { useEffect, useState } from 'react';
import SigninForm from '../../../components/signin-form/signin-form';
import { TextLink } from '@monday/molecules';
import { selectUser, getUser } from '../../../redux/slices/userSlice';

const errorMessages = {
  INVALID_EMAIL: 'Invalid email format, kindly enter the valid email address',
  ID_NOT_FOUND: 'Email ID not found, kindly sign up to proceed',
};

const Signin = () => {
  const [showErrorMsg, setShowErrorMsg] = useState<'INVALID_EMAIL' | 'ID_NOT_FOUND' | undefined>(undefined);
  const router = useRouter();
  const { isSigninSuccess, isLoading, isError: hasUserError } = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setShowErrorMsg(hasUserError ? 'ID_NOT_FOUND' : undefined);
    return () => {
      setShowErrorMsg(undefined);
    };
  }, [hasUserError]);

  useEffect(() => {
    if (isSigninSuccess) {
      router.push('/dashboard');
    }
  }, [isSigninSuccess, router]);

  const onFormSubmit = (isValidForm: boolean, email: string) => {
    if (!isValidForm) {
      setShowErrorMsg('INVALID_EMAIL');
    } else {
      setShowErrorMsg(undefined);
      dispatch(getUser(email));
    }
  };

  const renderErrorNotification = () => {
    if (showErrorMsg) return <ErrorToast msg={errorMessages[showErrorMsg]} />;
    return null;
  };

  const renderLinks = () => (
    <div className="mx-8 my-7">
      <TextLink isLight text="Don't have an account yet?" linkText="Sign up" linkUrl="/auth/signup" />
      <TextLink
        isLight
        text={`Can't log in?`}
        linkText=" Visit our help center"
        linkUrl="https://support.monday.com/hc/en-us/articles/360001942240-I-can-t-log-in-to-my-account"
      />
    </div>
  );
  const renderLoginBody = () => (
    <>
      {renderErrorNotification()}
      <div className="p-[40px] flex flex-col items-center text-[#333333] font-Figtree">
        <SigninForm onFormSubmit={onFormSubmit} isLoading={isLoading} />
        <div className="mt-[-12px] mb-8">
          <LineTextLine separatorText="Or Sign in with" />
        </div>
        <ButtonGoogleSecondary />
        {renderLinks()}
      </div>
    </>
  );

  return (
    <>
      <Header />
      {renderLoginBody()}
    </>
  );
};

export default Signin;
