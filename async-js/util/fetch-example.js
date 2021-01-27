// on the server

const fetch = require('node-fetch');

const getData = async (url) => {
  return fetch(url)
    .then((response) => {
      console.log(response.url + 'in the first .then() function');      
      return response;

    })
    .then((response) => {
      console.log(response.url + 'in the second .then() function');
      if (response.status === 200) {
        return {url: response.url, status: 'Status OK'};
      }
      return Error('Non 200 status');
    })
    .catch((error) => {
      throw error;
    });
};

module.exports = getData;
