module.exports = function (api) {
  api.cache(true);

  const presets = [ 
    "@babel/preset-env"
  ];
  
  const plugins = [
    "@babel/plugin-transform-async-to-generator",
    "@babel/plugin-transform-regenerator",
    ["@babel/plugin-transform-runtime", {
        "helpers": true,
        "regenerator": true
    }]
  ];

  return {
    presets,
    plugins
  };
}