import { institutions } from '../../utils/constants';
import './footer.scss';


export const Footer = () => {
  return (
    <footer className='footer'>
        <div className="container">
          <div className="footer__inner">
            <h2 className='footer__title'>Наші контакти</h2>

            <ul className='footer__contacts contacts'>
              <li className=''>
                <h6 className='contacts__title'>Адреса:</h6>
                <address className='contacts__description'>
                  Україна, Львівська область, Стрийський район, с.Довге, вул. Франка І., 13
                </address>
              </li>

              <li>
                <h6 className='contacts__title'> Пошта:</h6>
                <a  className='contacts__description'href="mailto:48624@ukr.net">48624@ukr.net</a>
              </li>
            </ul>

            <iframe 
              className='footer__map'
              src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d10433.050793750635!2d23.863493451905562!3d49.176601545899125!3m2!1i1024!2i768!4f13.1!5e0!3m2!1suk!2sua!4v1695388767070!5m2!1suk!2sua" 
              width="800" 
              height="450" 
              style={{ border: "0",  }} 
              allowFullScreen={false}
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade" 
            />

            <ul className='footer__institutions'>
              {institutions.map(institution => {
                const { id, imgSrc, link, alt, width} = institution;
                
                return (
                  <li key={id}>
                    <a 
                      href={link}
                      target="_blank" 
                      rel="noreferrer"
                    >
                      <img 
                        src={imgSrc} 
                        alt={alt}
                        width={width}
                      />
                    </a>
                  </li>
                )}
              )}
            </ul>

            <div className="footer__right-reserved">
              Офіційний сайт початкової школи з дошкільним відділенням
              села Довге Моршинської міської ради © Copyright 2023. Всі права захищені.
            </div>
          </div>
        </div>
    </footer>
  )
}
