import {useEffect, useState} from 'react';
import MenuItems from './MenuItems';

import ('./global.css');

const Menu = () => {
  const [data, setData] = useState("");
  
  useEffect(() => {
    const getData = async () => {
      const resp = await fetch('https://api.sampleapis.com/coffee/hot');
      const json = await resp.json();
      setData(json);
    }

    getData();
  }, []);

  return (
    <pre>
      <h1>Coffee Menu</h1>
      <MenuItems data={data}/>
      {JSON.stringify(data, null, 2)}
    </pre>
  );
};

export default Menu;
