import './NotFound.scss';
import { Link } from "react-router-dom";

const NotFound = () => {
  return <div className='not_found'>
    <p className="not_found__text">404 - Страница не найдена</p>
    <Link to='/' className="not_found__home_link">Вернуться на главную</Link>
  </div>;
};

export default NotFound;
