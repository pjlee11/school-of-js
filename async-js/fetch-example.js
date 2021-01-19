// on the server

const fetch = require('node-fetch');

const getData = async (url) => {
  return fetch(url)
    .then((response) => {
      console.log('in the first .then() function');
      return response.status;
    })
    .then((status) => {
      console.log('in the second .then() function');
      if (status === 200) {
        return 'Status OK';
      }
      return Error('Non 200 status');
    })
    .catch((error) => {
      throw error;
    });
};

console.log('before async function');

(async () => {
  console.log('before await');

  const data = await getData('https://www.thetrainline.com');

  // code here won't execute until data has a value

  console.log('after await');

  console.log('data: ', data);
})();

// code here will execute while we await data
console.log('after async function');
