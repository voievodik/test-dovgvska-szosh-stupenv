import { Link } from "react-router-dom";
import { PostType } from "../../type/PostType";

const normalizeDescription = (str: string) => {
  return `${str.split('.')[0]}. `;
}

type Props = {
  newsItem: PostType;
}

export const NewsItem: React.FC<Props> = ({ newsItem }) => {
  const {
    id,
    mainImg,
    title,
    description,
    date,
  } = newsItem;

  return (
    <li 
      key={id} 
      className='posts__item'
    >
      <div className="posts__main-picture">
        <img 
          src={mainImg} 
          alt={title} 
          className='posts__main-img'
        />
      </div>
      <h4 className='posts__title'>
        {title}
      </h4>
      {description && (
        <p className='posts__description'>
          {normalizeDescription(description)}
          <Link to={`/news/${id}`} className='posts__read-more'>
            Читати більше...
          </Link>
        </p>
      )}
      <div className="posts__date">
        {date}
      </div>
    </li>
  );
};
