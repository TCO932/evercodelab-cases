import CRMImage from '../../assets/cases-front/CRM/CRM.png';
import CRMImageSet from '../../assets/cases-front/CRM/CRM.svg';
import MonitoringImage from '../../assets/cases-front/Monitoring/Monitoring.png';
import MonitoringImageSet from '../../assets/cases-front/Monitoring/Monitoring.svg';
import ECommerceImage from '../../assets/cases-front/E-commerce/E-Commerce.png';
import ECommerceImageSet from '../../assets/cases-front/E-commerce/E-Commerce.svg';
import MedicineImage from '../../assets/cases-front/Medicine/Medicine.png';
import MedicineImageSet from '../../assets/cases-front/Medicine/Medicine.svg';
import EducationImage from '../../assets/cases-front/Education/Education.png';
import EducationImageSet from '../../assets/cases-front/Education/Education.svg';
import './Cases.scss';
import ContactUs from '../../components/ContactUs';
import Front from '../../components/Front/Front';

const Cases = () => {
  const casesData = [
    {
      href: 'cadfem-version-2',
      imageSrc: CRMImage,
      imageSrcSet: CRMImageSet,
      name: 'CRM решения',
      text: 'Создаем и внедряем системы автоматизации бизнес-процессов, интегрируем их с внешними и внутренними сервисами компании.',
    },
    {
      href: 'escar',
      imageSrc: MonitoringImage,
      imageSrcSet: MonitoringImageSet,
      name: 'Системы мониторинга',
      text: 'Разрабатываем системы сбора, обработки и визуализации данных с устройств мониторинга.',
    },
    {
      href: 'foodfox',
      imageSrc: ECommerceImage,
      imageSrcSet: ECommerceImageSet,
      name: 'Электронная коммерция',
      text: 'Разрабатываем маркетплейсы для сферы электронной коммерции – создаем системы для управления заказами, коммуникации с клиентами и визуализации процессов.',
    },
    {
      href: 'ondoc',
      imageSrc: MedicineImage,
      imageSrcSet: MedicineImageSet,
      name: 'Медицина',
      text: 'Создаем решения в области медицины, которые позволяют ускорить и упростить доступ к медицинcким услугам и повысить эффективность лечения.',
    },
    {
      href: 'ball',
      imageSrc: EducationImage,
      imageSrcSet: EducationImageSet,
      name: 'Образование',
      text: 'Разрабатываем IT-решения для образовательной сферы с целью повышения качества учебного процесса.',
    },
  ];

  return (
    <>
      <Front nextId={'contact-section'}></Front>

      <section className='cases-list' id='contact-section'>
        <div className='container'>
          <div className='cases-list__title'>Области Разработки</div>
          <div className='cases-list__slider'>
            <div
              className='swiper-container cases-swiper swiper-container-initialized swiper-container-horizontal swiper-container-android'
              id='cases-slider'
              style={{ overflow: 'initial' }}
            >
              <div
                className='swiper-wrapper'
                style={{ justifyContent: 'space-between', flexWrap: 'wrap' }}
              >
                {casesData.map((caseItem, index) => (
                  <a
                    key={index}
                    href={caseItem.href}
                    className='cases-card swiper-slide'
                  >
                    <div className='cases-card__wrapper'>
                      <picture>
                        <source
                          type='image/svg+xml'
                          media='(-webkit-min-device-pixel-ratio: 2)'
                          srcSet={caseItem.imageSrcSet}
                        />
                        <img
                          src={caseItem.imageSrc}
                          alt='Evercode Lab'
                          className='cases-card__image'
                        />
                      </picture>
                      <div className='cases-card__name'>{caseItem.name}</div>
                      <div className='cases-pagination' />
                      <div className='cases-card__text'>{caseItem.text}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            <div className='slider__controls' style={{ display: 'none' }}>
              <div className='slider__control cases-list__control--left slider__control--left'>
                <div className='slider__control-image' />
              </div>
              <div className='slider__control cases-list__control--right slider__control--right'>
                <div className='slider__control-image' />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactUs id={'contact-section'}></ContactUs>
    </>
  );
};

export default Cases;
