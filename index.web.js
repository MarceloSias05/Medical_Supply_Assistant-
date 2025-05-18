// filepath: c:\projects\reactnative\SupplyCare\SupplyCareFront\index.web.js
import { AppRegistry } from 'react-native';
import App from './App';
import appName from './app.json'; // Cambiado de { name as appName } a appName

AppRegistry.registerComponent(appName, () => App);
AppRegistry.runApplication(appName, {
  initialProps: {},
  rootTag: document.getElementById('root'),
});