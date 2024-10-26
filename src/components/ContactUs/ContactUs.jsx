import { useState } from 'react';
import './ContactUs.scss';
import PopUpCheckSvg from '../../assets/icons/popup-check.svg';

const ContactUs = ({ id }) => {
  const [popUpShown, setPopUpShown] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    message: '',
    consent: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name) newErrors.name = 'Имя обязательно';
    if (!formData.email) {
      newErrors.email = 'Email обязателен';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Введите корректный email';
    }
    if (!formData.consent) newErrors.consent = 'Необходимо согласие';
    console.log(newErrors);
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log('Данные формы:', formData);

      setFormData({
        name: '',
        email: '',
        phoneNumber: '',
        message: '',
        consent: false,
      });
      setErrors({});

      setFormSuccess(true);
      setTimeout(() => {
        setFormSuccess(false);
        hidePopUp();
      }, 5000);
    }
  };

  function showPopUp(e) {
    setPopUpShown(true);
  }

  function hidePopUp(e) {
    setPopUpShown(false);
  }

  return (
    <section id={id} className='contact-section'>
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
        <div
          className='pop-up-contact__box'
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className='pop-up-contact__close-btn'
            type='button'
            onClick={hidePopUp}
            aria-label='Закрыть форму'
          />
          <div className='pop-up-contact__title'>Напишите нам</div>
          <form
            id='pop-up-contact-form'
            className={formSuccess ? 'pop-up-contact-form--submit' : ''}
            onSubmit={handleSubmit}
          >
            <label
              className={
                'popup-sendback__box' +
                (errors.name ? ' popup-input-warning' : '')
              }
            >
              <input
                className='pop-up-contact__input popup-sendback__name'
                type='text'
                name='name'
                placeholder='Имя'
                value={formData.name}
                onChange={handleChange}
                required
              />
              {errors.name && <span className='error'>{errors.name}</span>}
            </label>

            <label
              className={
                'popup-sendback__box' +
                (errors.email ? ' popup-input-warning' : '')
              }
            >
              <input
                className='pop-up-contact__input popup-sendback__email'
                type='email'
                name='email'
                placeholder='Email'
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && <span className='error'>{errors.email}</span>}
            </label>

            <label className='popup-sendback__box'>
              <input
                className='pop-up-contact__input popup-sendback__phone'
                type='tel'
                name='phoneNumber'
                placeholder='Телефон (необязательно)'
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </label>

            <label className='popup-sendback__box'>
              <textarea
                className='pop-up-contact__textarea popup-sendback__text'
                name='message'
                placeholder='Текст сообщения (необязательно)'
                value={formData.message}
                onChange={handleChange}
              />
            </label>

            <div className='checkboxWrapper'>
              <input
                type='checkbox'
                className='checkbox'
                name='consent'
                checked={formData.consent}
                onChange={handleChange}
                required
                aria-labelledby='checkboxText'
              />
              <span id='checkboxText' className='checkboxText'>
                Я прочитал(а) и ознакомлен(а) с
                <a
                  className='checkboxLink'
                  target='_blank'
                  rel='noreferrer'
                  href='/Privacy/Privacy.pdf'
                >
                  {' Политикой конфиденциальности '}
                </a>
                и
                <a
                  className='checkboxLink'
                  target='_blank'
                  rel='noreferrer'
                  href='/Termsofuse/TermsofUse.pdf'
                >
                  {' Правилами использования сайта'}
                </a>
                .
              </span>
              {errors.consent && (
                <span className='error'>{errors.consent}</span>
              )}
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
            >
              Отправить
            </button>
          </form>
          <div
            className='pop-up-success'
            style={{ display: formSuccess ? 'block' : 'none' }}
          >
            <img
              className='pop-up-success__check'
              src={PopUpCheckSvg}
              alt='Успех'
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
