import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const NotFoundPage = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, []);

  return (
    <div className="not-found">
      <h1>Ops...</h1>
      <h2>Page not found</h2>
      <p>
        Go to <Link href="/">main page</Link>
      </p>
    </div>
  );
};

export default NotFoundPage;
