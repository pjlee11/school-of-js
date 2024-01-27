import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import ('./global.css');

const DrinkPage = () => {
  const { drinkId: id } = useParams();
  const [data, setData] = useState("");
  
  useEffect(() => {
    const getData = async () => {
      const resp = await fetch(`https://api.sampleapis.com/coffee/hot/${id}`);
      const json = await resp.json();
      setData(json);
    }
    getData();
  }, [id, setData]);

  if (!data) {
    return;
  }

  return (
    <>
      <h2>{data.title}</h2>
      <img src={data.image} aria-hidden={true} alt='' />
      <p>Ingredients: {data.ingredients.join(', ')}</p>
      <br/>
      <Link to={'/'}>
        <button>Back to menu</button>
      </Link>
      <br/>
      <br/>
      <br/>
      <br/>
      <pre style={{color: '#fff' }}>
        {JSON.stringify(data, null, 2)}
      </pre>
    </>
  );
};

export default DrinkPage;
