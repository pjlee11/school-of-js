module.exports = function (api) {
  api.cache(true);

  /* Presets: this defines what browsers your code needs to target so babel knows what to transpile and polyfill! Read more here - https://babeljs.io/docs/en/babel-preset-env */
  const presets = [];
  
  /* uncomment the presets below out to start transpiling with different target browsers */

  /* Use the browserlist configuration, in this example it's setup in .browserlistrc */
  presets.push(["@babel/preset-env", { "useBuiltIns": "entry" }]);
  
  /* Plugins */
  const plugins = [];

  /* uncomment the plugins below out to start transpiling them, for an inclusive list see - https://babeljs.io/docs/en/plugins */
  
  /* Arrow function syntax */
  // plugins.push("@babel/plugin-transform-arrow-functions);
  
  /* Variable destructuring syntax */
  // plugins.push("@babel/plugin-transform-destructuring");

  /* Spread operator */
  // plugins.push("@babel/plugin-transform-spread");

  /* Instance of polyfill */
  // plugins.push("@babel/plugin-transform-instanceof");

  return {
    presets,
    plugins
  };
}
