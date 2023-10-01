import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import classnames from 'classnames';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { logo } from '../../utils/images';
import './menu.scss';
import { menu } from '../../utils/constants';

export const getLinkClass = ({ isActive }: { isActive: boolean }) => {
  return classnames('menu__link', {
    'is-active': isActive,
  });
};

export const Menu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="menu">
      <div className="container">
        <div className="menu__inner">
          <div className="menu__left">
            <Link to='/' className='menu__logo-link'>
              <img src={logo} alt="logo" className='menu__logo-img' />
              <span className='menu__logo-title'>Початкова школа з ДВ с.Довге</span>
            </Link>
          </div>

          <div className="menu__right">
          {!isMobileMenuOpen ? (
            <div className="menu__icon-open" onClick={() => setIsMobileMenuOpen(prev => !prev)}>
              <MenuIcon />
            </div>
          ) : (
            <div className="menu__icon-close" onClick={() => setIsMobileMenuOpen(prev => !prev)}>
              <CloseIcon />
            </div>
          )}

            <ul
              className={classnames('menu__list', {
                'is-open': isMobileMenuOpen,
              })}
            >
              {menu.map(item => (
                <li 
                  key={item.id} 
                  className='menu__item' 
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <NavLink to={`${item.link}`} className={getLinkClass}>
                    {item.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
