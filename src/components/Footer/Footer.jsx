import './Footer.scss';
import LogoImage from '../../assets/icons/logo-footer.svg';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const socialLinks = [
  {
    label: 'medium',
    href: 'https://medium.com/evercodelab',
    className: 'social-icon social-icon--medium',
  },
  {
    label: 'github',
    href: 'https://github.com/evercodelab',
    className: 'social-icon social-icon--gh',
  },
  {
    label: 'twitter',
    href: 'https://twitter.com/evercodelab',
    className: 'social-icon social-icon--tweet',
  },
  {
    label: 'facebook',
    href: 'https://www.facebook.com/evercodelab',
    className: 'social-icon social-icon--fb',
  },
  {
    label: 'linkedin',
    href: 'https://www.linkedin.com/company/evercode-lab/',
    className: 'social-icon social-icon--in',
  },
];

const menuItems = [
  { name: 'Продукты', link: 'products/' },
  { name: 'Кейсы', link: 'cases/' },
  { name: 'Карьера', link: 'career/' },
  { name: 'Блог', link: 'https://evercodelab.com/blog/ru' },
  { name: 'Контакты', link: 'contacts' },
];

const contactInfo = [
  { name: 'sales@evercodelab.com', link: 'mailto:sales@evercodelab.com' },
  { name: 'job@evercodelab.com', link: 'mailto:job@evercodelab.com' },
];

const addressInfo = [
  '191186, Россия',
  'Санкт-Петербург',
  'ул Степана Разина, д. 8а,',
  'литера А, помещ. 13-Н',
];

const Footer = () => {
  const [menuShown, setMenuShown] = useState(false);
  const [menuHeight, setMenuHeight] = useState(0);
  const menuRef = useRef(null);

  function menuClickHandler(e) {
    setMenuShown(prevMenuShown => {
      const newMenuShown = !prevMenuShown;
      setMenuHeight(newMenuShown ? menuRef.current.scrollHeight : 0);
      return newMenuShown;
    });
  }

  return (
    <footer className='footer'>
      <div className='container footer__wrapper'>
        <section className='footer__socials'>
          <h2 className='footer__socials_title'>Связь</h2>
          <ul className='footer__socials_icons items-list'>
            {socialLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={link.className}
                  aria-label={link.label}
                ></a>
              </li>
            ))}
          </ul>
        </section>
        <section
          className={
            'footer__menu-wrapper nst-component' +
            (menuShown ? ' nst-is-expanded' : ' nst-is-collapsed')
          }
        >
          <div
            onClick={menuClickHandler}
            className='footer__menu_handler nst-toggle'
          >
            <h2 className='footer__handler_title'>Показать меню</h2>
            <div className='footer__handler_btn'>+</div>
          </div>
          <ul
            className='footer__popup-menu nst-content items-list'
            style={{ maxHeight: menuHeight }}
            ref={menuRef}
          >
            {menuItems.map((item, index) => (
              <li key={index} className='footer__popup-menu-item'>
                <Link to={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </section>
        <section className='footer__menu'>
          <div>
            <h2 className='footer__menu_title'>Меню</h2>
            <ul className='footer__menu_item items-list'>
              {menuItems.map((item, index) => (
                <li key={index} className='footer__menu__link'>
                  <Link to={item.link}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <address className='footer__menu_item'>
              <h2 className='footer__menu_title'>Контакты</h2>
              {contactInfo.map((contact, index) => (
                <p key={index} className='footer__menu__link'>
                  <a href={contact.link}>{contact.name}</a>
                </p>
              ))}
              {addressInfo.map((line, index) => (
                <p key={index} className='footer__menu__link'>
                  {line}
                </p>
              ))}
            </address>
          </div>
        </section>
        <section className='footer__info'>
          <Link
            href='/'
            className='footer__logo'
            aria-label='Перейти на главную страницу Evercode Labs'
          >
            <img src={LogoImage} alt='Evercode labs' />
          </Link>
          <div className='footer__info_item'>
            <a
              href='/Privacy/Privacy.pdf'
              target='_blank'
              rel='noopener noreferrer'
            >
              Политика конфиденциальности
            </a>
          </div>
          <div className='footer__info_item'>
            <a
              href='/Termsofuse/TermsofUse.pdf'
              target='_blank'
              rel='noopener noreferrer'
            >
              Правила использования сайта
            </a>
          </div>
          <div className='footer__info_item'>
            ©{' '}
            <span>
              2013 - <span id='yearLabel'>2024</span>
            </span>{' '}
            Evercode Lab
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
