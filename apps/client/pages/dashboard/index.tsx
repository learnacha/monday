import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoggedInUser, logoutUser } from '../../redux/slices/userSlice';
import { ButtonPrimary, Header } from '@monday/atoms';

export default function Dashboard() {
  const router = useRouter();
  const loggedInUser = useSelector(selectLoggedInUser);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  if (loggedInUser === '') router.push('/auth/signin');

  return (
    <div>
      <Header />
      <h1 className="mt-8 text-3xl font-bold text-center">
        Hello {loggedInUser}
      </h1>
      <div className="h-12 mx-auto mt-16 w-96">
        <ButtonPrimary onHandleSubmit={handleLogout} text="Logout" />
      </div>
    </div>
  );
}
