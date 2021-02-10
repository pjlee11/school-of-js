import React, { Fragment, useState } from 'react';

const apiUrl = 'https://api.github.com/users/pjlee11';

const App = () => {
  // set the name as unknown before component mounts
  const defaultData = { name: 'unknown user' };

  // using state we can set a default and let react re-render when state is changed by useEffect
  const [data, setData] = useState(defaultData);

  const fetchData = () => 
    fetch(apiUrl)
    .then((response) => response.json())
    .then((response) => setData(response));
  
  if (data === defaultData) {
    // simulate a slow data fetch
    setTimeout(fetchData, 2000);
  }

  return (
    <Fragment>
    <div className="App">
      <header className="App-header">
        <h1>Github details</h1>
        <p>Name: {data.name}</p>
        <p>Bio: {data.bio}</p>
        <p>Username: {data.login}</p>
      </header>
    </div>
    </Fragment>
  );
};

export default App;
