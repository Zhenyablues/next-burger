import Link from 'next/link';
import { SiBurgerking } from 'react-icons/si';

const Header = () => {
  return (
    <header>
      <div>
        <SiBurgerking />
      </div>
      <Link href="/">Main</Link>
      <Link href="/about">About</Link>
      <Link href="/reviews">Reviews</Link>
      <Link href="/burgers">Burgers</Link>
    </header>
  );
};

export default Header;
