import { useEffect } from 'react';
import { useLocation, useParams } from "react-router-dom";
import { news } from "../../utils/constants";
import './singleNews.scss';

export const SingleNews = () => {
  const { newsId } = useParams();

  const normalizedNewsId = newsId ? +newsId : 0;

  const currentNews = news.find(({ id }) => id === normalizedNewsId);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <section className="single-news">
      <div className="container">
        <h3 className="single-news__title">
          {currentNews?.title}
        </h3>

        <p className="single-news__description">
          {currentNews?.description}
        </p>

        <div className="single-news__date">
          {currentNews?.date}
        </div>

        <ul className="single-news__img-list">
          {currentNews?.newsImg.map(imgItem => (
            <div className="single-news__img-item">
              <img 
                src={imgItem} 
                alt={currentNews.title} 
                className="single-news__img" 
              />
            </div>
          ))}
        </ul>

        {currentNews?.facebookPost && (
          <a 
            className="single-news__facebook-link" 
            href={currentNews?.facebookPost}
            target='_blank'
          >
            Переглянути пост у фейсбуці
          </a>
        )}
      </div>
    </section>
  );
};
