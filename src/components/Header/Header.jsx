import './Header.scss';
import LogoImage from '../../assets/icons/logo-header.svg';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const products = [
  {
    name: 'Everchain White Label Wallet',
    link: 'https://wallet.evercodelab.com/',
  },
  { name: 'Evervault', link: '/products/evervault' },
  { name: 'EverCourse', link: '/products/evercourse' },
  { name: 'Evercode Online Medic', link: '/products/evercode-online-medic' },
  { name: 'Marketplace Evermarket', link: '/products/evermarket' },
  { name: 'Everchain SDK', link: '/products/everchain-sdk' },
];

const cases = [
  { name: 'CRM решения', link: '/cases/cadfem-version-2' },
  { name: 'Системы мониторинга', link: '/cases/escar' },
  { name: 'Электронная коммерция', link: '/cases/foodfox' },
  { name: 'Медицина', link: '/cases/ondoc' },
  { name: 'Образование', link: '/cases/ball' },
];

const menuItems = [
  { name: 'Продукты', link: '/products', subMenu: products },
  { name: 'Кейсы', link: '/cases', subMenu: cases },
  { name: 'Карьера', link: '/career' },
  { name: 'Блог', link: 'https://evercodelab.com/blog/ru/' },
  { name: 'Контакты', link: '/contacts' },
];

const mobileMenuItems = [
  { name: 'Домой', link: '/' },
  { name: 'Продукты', link: '/products/' },
  { name: 'Кейсы', link: '/cases/' },
  { name: 'Карьера', link: '/career/' },
  { name: 'Блог', link: 'https://evercodelab.com/blog/ru', hasIcon: true },
  { name: 'Контакты', link: '/contacts' },
];

export default function Header() {
  const [menuShown, setMenuShown] = useState(false);

  function menuClickHandler() {
    setMenuShown((prevMenuShown) => {
      const newMenuShown = !prevMenuShown;

      if (newMenuShown) {
        document.body.classList.add('body-fixed');
      } else {
        document.body.classList.remove('body-fixed');
      }

      return newMenuShown;
    });
  }

  return (
    <header className='header'>
      <nav className='header__wrapper container'>
        <Link to='/' className='header__logo'>
          <img src={LogoImage} alt='Evercode Lab' />
        </Link>
        <button
          onClick={menuClickHandler}
          className={'header__menubar' + (menuShown ? ' burger-close' : '')}
          type='button'
        ></button>
        <ul className='header__menu'>
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={
                'header__menu_item' +
                (item.subMenu ? ' header__menu_relative' : '')
              }
            >
              <Link className='header__menu-link' to={item.link}>
                <span>{item.name}</span>
              </Link>
              {item.subMenu && (
                <ul className='header__popup-menu'>
                  {item.subMenu.map((subItem, subIndex) => (
                    <li key={subIndex} className='popup-menu__item'>
                      <Link to={subItem.link}>{subItem.name}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>

      <ul className={'popup-mobile items-list' + (menuShown ? ' visible' : '')}>
        {mobileMenuItems.map((item, index) => (
          <li className='popup-mobile__item' key={index}>
            <Link to={item.link}>{item.name}</Link>
            {item.hasIcon && <span class='header__menu_item-icon'></span>}
          </li>
        ))}
      </ul>
    </header>
  );
}
