import { useState } from 'react';
import './ContactUs.scss';

const ContactUs = () => {
  const [popUpShown, setPopUpShown] = useState(false);

  function showPopUp(e) {
    setPopUpShown(true);
  }

  function hidePopUp(e) {
    setPopUpShown(false);
  }

  return (
    <section className='contact-section'>
      <div className='container'>
        <div className='contact-section__wrapper'>
          <div className='contact-section__title cases__section-title'>
            Расскажите нам о своих идеях, и мы предложим лучшие решения!
          </div>
          <button
            className='contact-btn contact-section__button'
            type='button'
            onClick={showPopUp}
          >
            Связаться с нами
          </button>
        </div>
      </div>
      <div
        className='pop-up-contact'
        style={{ display: popUpShown ? 'block' : 'none' }}
        onClick={hidePopUp}
      >
        <div className='pop-up-contact__box' onClick={(e) => e.stopPropagation()}>
          <button
            className='pop-up-contact__close-btn'
            type='button'
            onClick={hidePopUp}
          />
          <div className='pop-up-contact__title'>Напишите нам</div>
          <form id='pop-up-contact-form'>
            <input
              className='pop-up-contact__input popup-sendback__name'
              type='text'
              name='name'
              placeholder='Имя'
              required=''
            />
            <label className='popup-sendback__box'>
              <input
                className='pop-up-contact__input popup-sendback__email'
                type='email'
                name='email'
                placeholder='Email'
                required=''
              />
              <span>Обязательное поле</span>
            </label>
            <input
              className='pop-up-contact__input popup-sendback__phone'
              type='tel'
              name='phoneNumber'
              placeholder='Телефон (необязательно)'
            />
            <label className='popup-sendback__box'>
              <textarea
                className='pop-up-contact__textarea popup-sendback__text'
                type='text'
                name='message'
                placeholder='Текст сообщения (необязательно)'
                defaultValue={''}
              />
              <span>Обязательное поле</span>
            </label>
            <div className='checkboxWrapper'>
              <input type='checkbox' className='checkbox' required='' />
              <p className='checkboxText'>
                Я прочитал(а) и ознакомлен(а) с
                <a
                  className='checkboxLink'
                  target='_blank'
                  rel='noreferrer'
                  href='/ru/Privacy/Privacy.pdf'
                >
                  Политикой конфидециальности
                </a>
                и
                <a
                  className='checkboxLink'
                  target='_blank'
                  rel='noreferrer'
                  href='/ru/Termsofuse/TermsofUse.pdf'
                >
                  Правилами использования сайта
                </a>
                .
              </p>
            </div>
            <div id='google-captcha'>
              <div style={{ width: 304, height: 78 }}>
                <div>
                  <iframe
                    title='reCAPTCHA'
                    width={304}
                    height={78}
                    role='presentation'
                    name='a-1rzv67itf6c1'
                    frameBorder={0}
                    scrolling='no'
                    sandbox='allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation'
                    src='https://www.google.com/recaptcha/api2/anchor?ar=2&k=6LdoTFoaAAAAALb7RnzOC5-aZ4amR7JoTAqmDZ_8&co=aHR0cHM6Ly9ldmVyY29kZWxhYi5jb206NDQz&hl=ru&v=lqsTZ5beIbCkK4uGEGv9JmUR&size=normal&cb=xx6h9igqyepc'
                  />
                </div>
                <textarea
                  id='g-recaptcha-response'
                  name='g-recaptcha-response'
                  className='g-recaptcha-response'
                  style={{
                    width: 250,
                    height: 40,
                    border: '1px solid rgb(193, 193, 193)',
                    margin: '10px 25px',
                    padding: 0,
                    resize: 'none',
                    display: 'none',
                  }}
                  defaultValue={''}
                />
              </div>
              <iframe style={{ display: 'none' }} />
            </div>
            <button
              className='pop-up-contact__send-btn contact-btn'
              type='submit'
              disabled=''
            >
              Отправить
            </button>
          </form>
          <div className='pop-up-success'>
            <img
              className='pop-up-success__check'
              src='/ru/img/icons/popup-check.svg'
              alt='Evercode labs'
            />
            <p className='pop-up-success__text'>
              Ваше сообщение было успешно отправлено.
            </p>
            <p className='pop-up-success__title'>Спасибо!</p>
            <p className='pop-up-success__text'>
              Mы свяжемся с Вами в ближайшее время!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
