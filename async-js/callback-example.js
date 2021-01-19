const func = (foo, callback) => {
  console.log('inside func before if');
  if (foo === 'shouldCallback') {
    setTimeout(callback, 3000);
  } else {
    console.log('should not callback()');
  }
  console.log('inside func after if');
};

func('shouldCallback', () => console.log('execute callback'));

// func('shouldNotCallback', () => console.log('execute callback'));

// const func = (foo, callback) => {
//   console.log('inside func before Promise');
//   return new Promise((resolve) => {
//     if (foo !== 'shouldCallback') {
//       rejects(() => console.log('should not callback()'));
//     }
//     setTimeout(() => resolve(callback), 3000);
//   }
// };

// func('shouldCallback', () => console.log('execute callback'));




// TO DO
// ADD info about "callback hell" and "inverted pyramid"

