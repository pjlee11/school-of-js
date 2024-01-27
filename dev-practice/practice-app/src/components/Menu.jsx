import {useEffect, useState} from 'react';
import MenuItems from './MenuItems';

import ('./global.css');

const Menu = () => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const getData = async () => {
      const resp = await fetch('https://api.sampleapis.com/coffee/hot');
      const json = await resp.json();
      setData(json);
      setTimeout(() => setLoading(false), 1000);
    }

    getData();
  }, [setLoading]);

  if (loading) {
    return (
      <>
        <div className="loader" />
        <h2>Loading...</h2>
      </>
    );
  }

  return (
    <pre>
      <h1>Coffee Menu</h1>
      <MenuItems data={data}/>
      {JSON.stringify(data, null, 2)}
    </pre>
  );
};

export default Menu;
