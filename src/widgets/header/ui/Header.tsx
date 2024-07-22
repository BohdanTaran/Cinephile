import { Button } from '../../../shared/ui/Button';
import { Logo } from '../../../shared/ui/Logo';
import { Navbar } from '../../Navbar/ui/Navbar';

export const Header = () => {
  return (
    <header className="bg-cp-2 h-24 text-cp-5 font-medium font-roboto">
      <div className="h-full flex justify-center">
        <div
          className="xs:w-11/12
          lg:w-4/6 h-full grid grid-rows-2
          xl:w-8/12
          2xl:w-8/12"
        >
          <div className="w-full flex justify-between items-center mt-4">
            <Logo />
            <div>
              <Button style="primary">Login</Button>
            </div>
          </div>
          <Navbar />
        </div>
      </div>
    </header>
  );
};
