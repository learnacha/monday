import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAppSelector, useAppDispatch } from '../../redux/app.hooks';
import { selectUser, logoutUser } from '../../redux/slices/userSlice';
import { ButtonPrimary, Header } from '@monday/designs';

export default function Dashboard() {
  const router = useRouter();
  const { loggedInUser } = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };
  useEffect(() => {
    if (!loggedInUser) {
      router.push('/auth/signin');
    }
  }, [loggedInUser, router]);

  return (
    loggedInUser && (
      <div>
        <Header />
        <h1 className="mt-8 text-3xl font-bold text-center">Hello {loggedInUser}</h1>
        <div className="h-12 mx-auto mt-16 w-96">
          <ButtonPrimary onHandleSubmit={handleLogout} text="Logout" />
        </div>
      </div>
    )
  );
}
