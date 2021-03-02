// Variables

const aConstVariable = 'A variable defined as a const';
const aLetVariable = 'A variable defined as a let';

var exampleObject = {
  destructuringExample1: 'A value for Destructuring assignment example',
  nested: {
    destructuringExample2: 'A nested value for Destructuring assignment example'
  },
};

const { destructuringExample1 } = exampleObject;

const { nested: destructuringExample2 } = exampleObject;

console.log(aConstVariable);
console.log(aLetVariable);
console.log(destructuringExample1);
console.log(destructuringExample2);

// Functions

function vanillaFunc () {
  console.log('This is a vanilla JS function');
};

var variableAssignedFunction = function () {
  console.log('This is a vanilla JS function assigned to a variable');
};

const arrowfunction = () => console.log('This is an arrow function assigned to a variable');

console.log(vanillaFunc());
console.log(variableAssignedFunction());
console.log(arrowfunction());


// Methods

const animals = ['giraffe', 'dog', 'zebra', 'possum', 'raccoon', 'tiger'];

for (let i = 0; i < animals.length; i++) {
  console.log('vanilla JS for loop:', animals[i]);
}

animals.forEach(function (animal) {
  console.log('.forEach() prototype method:', animal);
});

animals.map(animal => console.log('.map() prototype method:', animal));

console.log('zebra is at index', animals.findIndex(value => value === 'zebra'));

// Async

Promise.resolve(() => console.log('resolved Promise'));

// Misc. examples 

// Spread operator doesn't exist in old browsers
const objectUsingSpreadOperator = {
  ...exampleObject,
  nested: {
    override: 'Example of using the spread operator',
  },
};

console.log(objectUsingSpreadOperator);

// instanceof behaves differently in different browsers so to be consistent in older browsers it needs to be polyfilled with a babel plugin
console.log(1 instanceof Number);

// Symbols don't exist in older browsers
let sym1 = Symbol();
console.log(sym1);

