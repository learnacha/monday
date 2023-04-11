import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { SignupHero, SignupLoader } from '@monday/atoms';
import { selectIsSignupSuccess } from '../../../redux/slices/userSlice';
import { useEffect, useState } from 'react';
import SignupForm from '../../../components/signup-form/signup-form';

const SignUp = () => {
  const router = useRouter();
  const isSignupSuccess = useSelector(selectIsSignupSuccess);
  const [displayLoader, setDisplayLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setDisplayLoader(false);
    }, 500);
  }, []);

  useEffect(() => {
    if (isSignupSuccess) {
      router.push('/auth/signin');
    }
  }, [isSignupSuccess, router]);

  return (
    <>
      <div className="flex h-screen overflow-hidden">
        {displayLoader ? (
          <SignupLoader />
        ) : (
          <>
            <SignupForm />
            <SignupHero />
          </>
        )}
      </div>
    </>
  );
};

export default SignUp;
