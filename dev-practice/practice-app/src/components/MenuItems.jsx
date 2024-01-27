import { Link } from "react-router-dom";

import ('./global.css');

const MenuItems = ({ data }) => {
  if (!data) {
    return;
  }

  return (
    <div className='menu'>
      {data.map(item => {
        return (
          <li key={item.id}>
            <Link to={`drink/${item.id}`}>
              <div className='drink'>
                <h2>{item.title}</h2>
                <img src={item.image} aria-hidden={true} alt='' />
              </div>
              </Link >
            </li>
        );
      })}
    </div>
  );
};

export default MenuItems;
