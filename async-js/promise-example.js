const getData = require('./util/fetch-example');

console.log('before async function');

(async () => {
  console.log('before await');

  const data = await getData('https://www.trainline.com');

  // code here won't execute until data has a value

  console.log('after await');

  console.log('data: ', data);
})();

// code here will execute while we await data
console.log('after async function');