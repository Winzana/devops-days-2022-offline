const babelWebpackConfig = require('@nrwl/react/plugins/webpack');

module.exports = (config) => {
  config.resolve.alias = {
    'react-native$': require.resolve('react-native-web'),
  };
  config.module.rules.unshift({
    test: /\.js$/,
    exclude: /node_modules[/\\](?!react-native-vector-icons)/,
    use: {
      loader: 'babel-loader',
      options: {
        // Disable reading babel configuration
        babelrc: false,
        configFile: false,

        // The configuration for compilation
        presets: ['module:metro-react-native-babel-preset'],

        // presets: [
        //   ["@babel/preset-env", {useBuiltIns: "usage"}],
        //   ["@babel/preset-react", {
        //     "runtime": "automatic"
        //   }],
        //   "@babel/preset-flow",
        //   "@babel/preset-typescript"
        // ],
        plugins: ['react-native-web'],
        // plugins: [
        //   "@babel/plugin-proposal-class-properties",
        //   "@babel/plugin-proposal-object-rest-spread"
        // ]
      },
    },
  });
  config.module.rules.unshift({
    test: /\.(jpg|png|woff|woff2|eot|ttf|svg)$/,
    loader: 'file-loader',
    options: {
      esModule: false,
    },
  });
  return babelWebpackConfig(config);
};
