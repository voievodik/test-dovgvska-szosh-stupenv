import classNames from "classnames";
import CloseIcon from '@mui/icons-material/Close';
import './gallery.scss';
import { useState } from "react";
import { GalleryType } from "../../type/GalleryType";

type Props = {
  visibleGallery: GalleryType[];
}

export const Gallery: React.FC<Props> = ({ visibleGallery }) => {
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState('');

  const getImg = (imgSrc: string) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  }

  return (
    <section className="section">
      <div className="container">
        <h2 className="gallery__title">Фотогалерея школи</h2>
        <div className={classNames('model', {
            open: model,
        })}>
          <img src={tempImgSrc} className="" />
          <CloseIcon onClick={() => setModel(false)} />
        </div>

        <ul className="gallery__list">
          {visibleGallery.map(image => (
            <li className="gallery__item" onClick={() => getImg(image.imgUrl)}>
              <img src={image.imgUrl} className="gallery__img" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
