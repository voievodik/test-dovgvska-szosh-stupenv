type Props = {
  showDetails: number;
  onShowDetails: (value: number) => void;
  detailId: number;
}

export const InfoButton: React.FC<Props> = ({
  showDetails,
  onShowDetails,
  detailId,
}) => {
  const handleClick = () => {
    if (showDetails === detailId) {
      onShowDetails(0);

      return;
    }

    onShowDetails(detailId);
  };

  return (
    <button 
      className='info__button'
      onClick={handleClick}
    >
      {showDetails !== detailId 
        ? 'Детальніше'
        : 'Сховати'
      }
    </button>
  )
}
