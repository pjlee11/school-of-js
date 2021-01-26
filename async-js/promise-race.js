const getData = require('./util/fetch-example');

(async () => {
    console.log('before await');
  
    const data = await Promise.race([getData('https://www.google.com'), getData("https://www.bing.com")]);
  
    // code here won't execute until data has a value
  
    console.log('after await');
  
    console.log('This url won the race:', data.url);
  })();