import { news } from '../../utils/constants';
import { NewsItem } from './NewsItem';
import './news.scss';

export const News = () => {
  return (
    <section className='news'>
      <div className="container">
        <h2 className='news__title'>Останні новини нашої школи</h2>
        <ul className='posts__list'>
          {news.slice(0, 6).map(newsItem => (
              <NewsItem 
                newsItem={newsItem}
              />
            )
          )}
        </ul>
      </div>
    </section>
  );
};
