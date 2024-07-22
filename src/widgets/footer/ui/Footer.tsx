import { Logo } from '../../../shared/ui/Logo';

export const Footer = () => {
  return (
    <footer className="bottom-0 w-full bg-cp-2 h-28 text-cp-5 font-medium font-roboto">
      <div className="h-full flex justify-center">
        <div
          className="sm:w-11/12 ml-2 mr-2
        lg:w-4/6 h-full flex justify-between items-center
        xl:w-8/12
        2xl:w-8/12"
        >
          <Logo />
          <h1>Social Links:</h1>
        </div>
      </div>
    </footer>
  );
};
