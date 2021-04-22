import { signIn, signOut, useSession } from 'next-auth/client';

const ProfilePage: React.FC = () => {
  const [session, loading] = useSession();

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <div>
        <h1>Profile Page</h1>
        {!session && (
          <>
            <p>Not signed in</p>
            <button
              onClick={() =>
                signIn('google', { callbackUrl: `https://www.exurban.io` })
              }
            >
              Sign In
            </button>
          </>
        )}
        {session && (
          <>
            <p>Signed in as {session.user?.email}</p>
            <button onClick={() => signOut()}>Sign Out</button>
          </>
        )}
      </div>
    </>
  );
};

export default ProfilePage;
