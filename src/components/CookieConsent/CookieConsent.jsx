import { useState, useEffect } from 'react';
import './CookieConsent.scss';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const hasCookieConsent = localStorage.getItem('cookieConsent');
    if (!hasCookieConsent) {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowBanner(false);
  };

  return (
    <>
      {showBanner && (
        <div className='cookie_banner_wrapper'>
          <div className='cookie_banner'>
            <p className='cookie_banner__text'>
              Для улучшения работы сайта и его взаимодействия с пользователем мы
              используем файлы cookie. Продолжая работу с сайтом, Вы разрешаете
              использование cookie-файлов.
            </p>
            <button
              className='cookie_banner__button'
              onClick={handleAcceptCookies}
            >
              ОК
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsent;
