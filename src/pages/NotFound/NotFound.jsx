import './NotFound.scss';
import { Link } from "react-router-dom";

const NotFound = () => {
  return <div className='not_found'>
    <h1 className="not_found__text">404 - Страница не найдена</h1>
    <Link to='/' className="not_found__home_link">Вернуться на главную</Link>
  </div>;
};

export default NotFound;
