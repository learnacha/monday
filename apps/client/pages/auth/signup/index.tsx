import { useRouter } from 'next/router';
import { SignupHero, SignupLoader } from '@monday/designs';
import { selectUser } from '../../../redux/slices/userSlice';
import { useEffect, useState } from 'react';
import SignupForm from '../../../organisms/signup-form/signup-form';
import { useAppSelector } from '../../../redux/app.hooks';

const SignUp = () => {
  const router = useRouter();
  const { isSignupSuccess, isLoading } = useAppSelector(selectUser);
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
    <div className="flex h-screen overflow-hidden">
      {displayLoader || isLoading ? (
        <SignupLoader />
      ) : (
        <>
          <SignupForm />
          <SignupHero />
        </>
      )}
    </div>
  );
};

export default SignUp;
