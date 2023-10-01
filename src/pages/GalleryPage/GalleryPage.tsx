import { Gallery } from '../../components/Gallery';
import { gallery } from '../../utils/constants';
import './galleryPage.scss';

export const GalleryPage = () => {
  return (
    <section className='gallery-page'>
      <Gallery visibleGallery={gallery} />
    </section>
  );
};
