const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'mfeRemote',
  filename: 'remoteEntry.js',
  exposes: {
    './TestComponent': './src/app/test/test.component.ts',
    //'./OutroTesteComponent': './src/app/outro-teste/outro-teste.component.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
