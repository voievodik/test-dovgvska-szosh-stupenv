import { AiOutlinePlusSquare, AiOutlineMinusSquare } from 'react-icons/ai';
import classnames from 'classnames';

type Props = {
  showInfo: string;
  onShowInfo: (value: string) => void;
  children: React.ReactNode;
  infoTitle: string;
}

export const InfoText: React.FC<Props> = ({
  showInfo,
  onShowInfo,
  children,
  infoTitle,
}) => {
  const handleClick = () => {
    if (showInfo === infoTitle) {
      onShowInfo('');

      return;
    }

    onShowInfo(infoTitle);
  };

  return (
    <div className='info__text'> 
      <span 
        className='info__text-title'
        onClick={handleClick}
      > 
        {infoTitle}
        {showInfo !== infoTitle
          ? <AiOutlinePlusSquare /> 
          : <AiOutlineMinusSquare />
        }
      </span>

      <span 
        className={classnames('info__text-inner', {
          'is-active-more': showInfo === infoTitle,
        })}
      >
        {children}
      </span>
  </div>
  )
}
