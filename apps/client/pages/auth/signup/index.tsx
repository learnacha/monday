import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { SignupHero } from '@monday/atoms';
import {
  addUser,
  addUserAsync,
  selectIsLoading,
  selectHasUserError,
  clearError,
  selectIsSignupSuccess,
} from '../../../redux/slices/userSlice';
import { useEffect, useState } from 'react';
import SignupForm from '../../../components/signup-form/signup-form';

const SignUp = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const hasUserError = useSelector(selectHasUserError);
  const isSignupSuccess = useSelector(selectIsSignupSuccess);
  const [displaySuccess, setDisplaySuccess] = useState(false);

  useEffect(() => {
    if (hasUserError) setTimeout(() => dispatch(clearError()), 2000);
  }, [hasUserError, dispatch]);

  useEffect(() => {
    if (isSignupSuccess) {
      setDisplaySuccess(true);
      router.push('/auth/signin');
    }
  }, [isSignupSuccess, router]);

  /**
   * It dispatches the addUser action and then dispatches the addUserAsync action.
   * @param {string} email - string - the email address of the user
   */
  const handleSubmit = async (email: string) => {
    dispatch(addUser(email));
    dispatch(addUserAsync(email) as any);
  };

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
