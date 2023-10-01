import { news } from '../../utils/constants';
import './newsPage.scss';
import { NewsItem } from '../../components/News/NewsItem';


export const NewsPage = () => {
  return (
    <section className='news'>
      <div className="container">
        <h2 className='news__title'>Шкільні новини</h2>

        <p className='news__description'>
          Тут Ви можете дізнатись всі новини нашої школи.
        </p>

        <div className="news__posts posts">
          <ul className='posts__list'>
            {news.map(newsItem =>(
              <NewsItem 
                newsItem={newsItem}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
