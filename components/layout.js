import Header from './header';
import Fotter from './footer';

const Layout = ({ children }) => {
  return (
    <div className="content">
      <Header />
      {children}
      <Fotter />
    </div>
  );
};

export default Layout;
