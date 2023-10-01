import { FaFilePdf } from 'react-icons/fa6';

type Props = {
  link: string;
  title: string;
}

export const InfoLink: React.FC<Props> = ({ link, title }) => {

  return (
    <a 
      className='info__link'
      href={link} 
      target="_blank" 
      rel="noopener noreferrer"
    >
      {title}
      <FaFilePdf />
    </a>
  );
};
