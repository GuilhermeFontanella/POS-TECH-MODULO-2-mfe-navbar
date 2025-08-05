const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'mfeRemote',
  filename: 'remoteEntry.js',
  exposes: {
    './NavbarComponent': './src/app/navbar/navbar.component.ts',
    './LateralMenuComponent': './src/app/lateral-menu/lateral-menu.component.ts'
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  }
});

