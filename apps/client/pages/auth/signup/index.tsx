import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { SignupHero } from '@monday/atoms';
import { selectIsSignupSuccess } from '../../../redux/slices/userSlice';
import { useEffect } from 'react';
import SignupForm from '../../../components/signup-form/signup-form';

const SignUp = () => {
  const router = useRouter();
  const isSignupSuccess = useSelector(selectIsSignupSuccess);

  useEffect(() => {
    if (isSignupSuccess) {
      router.push('/auth/signin');
    }
  }, [isSignupSuccess, router]);

  return (
    <>
      <div className="flex h-screen overflow-hidden">
        <SignupForm />
        <SignupHero />
      </div>
    </>
  );
};

export default SignUp;
