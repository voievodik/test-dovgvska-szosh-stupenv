import './header.scss';

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__details">
          <h1 className='header__title'>
            <p className='header__description'>Львівська область</p>
            Раді вітати Вас на сайті початкової школи <br />
            з дошкільним відділенням <br />
            села <span style={{ color: '#FFC436'}}>Довге</span> Моршинської міської ради
          </h1>

            <a href='mailto:48624@ukr.net' className='header__button-contact'>
              Зв&apos;язатись з нами
            </a>
          </div>
        </div>
    </header>
  );
};
