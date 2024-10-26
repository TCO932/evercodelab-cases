import './Front.scss';

const Front = ({nextId}) => {
  
  const scrollToNext = () => {
    const nextElem = document.getElementById(nextId);
    if (nextElem) {
      nextElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className='front cases'>
      <div className='container'>
        <div className='front__wrapper full-height'>
          <div className='front__info'>
            <div className='front__title'>
              <h1 className='front__title-text'>
                Наша <br className='breaker' />
                экспертиза
              </h1>
            </div>
            <p className='front__description'>
              Разрабатываем микросервисы, мобильные и веб-приложения для бизнеса
              и стартапов
            </p>
            <a className='front__call front__call--inner' onClick={scrollToNext}>
              <div className='front__call_logo' />
              <div className='front__call_text'>далее</div>
            </a>
          </div>
          <div className='front__image front__image--cases' />
          <a className='front__call front__call__outer' onClick={scrollToNext}>
            <div className='front__call_logo' />
            <div className='front__call_text'>далее</div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Front;
