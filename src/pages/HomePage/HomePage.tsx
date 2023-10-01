import { Gallery } from '../../components/Gallery';
import { Header } from '../../components/Header';
import { News } from '../../components/News';
import { gallery } from '../../utils/constants';

const visibleGallery = gallery.slice(0, 6);

export const HomePage = () => {
  return (
    <section>
      <Header />
      <News />
      <Gallery visibleGallery={visibleGallery}  />
    </section>
  );
};
