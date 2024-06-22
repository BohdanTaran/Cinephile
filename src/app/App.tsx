import { NowPlaying } from '../pages/NowPlaying/ui/NowPlaying';
import { Footer } from '../widgets/footer/ui/Footer';
import { Header } from '../widgets/header/ui/Header';

export const App = () => {
  return (
    <>
      <Header />
      <NowPlaying />
      <Footer />
    </>
  );
};
