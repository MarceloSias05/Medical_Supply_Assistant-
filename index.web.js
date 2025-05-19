// filepath: c:\projects\reactnative\SupplyCare\SupplyCareFront\index.web.js
import { AppRegistry } from 'react-native';
import App from './App';

AppRegistry.registerComponent('SupplyCareFront', () => App);
AppRegistry.runApplication('SupplyCareFront', {
  initialProps: {},
  rootTag: document.getElementById('root'),
});