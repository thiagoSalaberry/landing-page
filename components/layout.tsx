import { Header } from './header';
import { Footer } from './footer';

export const Layout: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children }) => {
  return (
    <div>
      <Header />
      <>{children}</>
      <Footer />
    </div>
  );
};
