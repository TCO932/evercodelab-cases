import './Header.scss';
import LogoImage from '../../assets/icons/logo-header.svg';
import { useState } from 'react';

const products = [
  {
    name: 'Everchain White Label Wallet',
    link: 'https://wallet.evercodelab.com/',
  },
  { name: 'Evervault', link: '/ru/products/evervault' },
  { name: 'EverCourse', link: '/ru/products/evercourse' },
  { name: 'Evercode Online Medic', link: '/ru/products/evercode-online-medic' },
  { name: 'Marketplace Evermarket', link: '/ru/products/evermarket' },
  { name: 'Everchain SDK', link: '/ru/products/everchain-sdk' },
];

const cases = [
  { name: 'CRM решения', link: '/ru/cases/cadfem-version-2' },
  { name: 'Системы мониторинга', link: '/ru/cases/escar' },
  { name: 'Электронная коммерция', link: '/ru/cases/foodfox' },
  { name: 'Медицина', link: '/ru/cases/ondoc' },
  { name: 'Образование', link: '/ru/cases/ball' },
];

const menuItems = [
  { name: 'Продукты', link: '/products', subMenu: products },
  { name: 'Кейсы', link: '/cases', subMenu: cases },
  { name: 'Карьера', link: '/career' },
  { name: 'Блок', link: '/blog' },
  { name: 'Контакты', link: '/contacts' },
];

const mobileMenuItems = [
  { name: 'Домой', link: '/ru/' },
  { name: 'Продукты', link: '/ru/products/' },
  { name: 'Кейсы', link: '/ru/cases/' },
  { name: 'Карьера', link: '/ru/career/' },
  { name: 'Блог', link: 'https://evercodelab.com/blog/ru', hasIcon: true },
  { name: 'Контакты', link: '/ru/contacts' },
];

export default function Header() {
  const [menuShown, setMenuShown] = useState(false);

  function menuClickHandler(e) {
    setMenuShown(!menuShown);
  }

  return (
    <header className='header'>
      <nav className='header__wrapper container'>
        <a href='/' className='header__logo'>
          <img src={LogoImage} alt='Evercode Lab' />
        </a>
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
              <a className='header__menu-link' href={item.link}>
                <span>{item.name}</span>
              </a>
              {item.subMenu && (
                <ul className='header__popup-menu'>
                  {item.subMenu.map((subItem, subIndex) => (
                    <li key={subIndex} className='popup-menu__item'>
                      <a href={subItem.link}>{subItem.name}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
