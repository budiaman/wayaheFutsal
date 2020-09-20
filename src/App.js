import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routers from './routers';

function App() {
  return (
    <NavigationContainer>
      <Routers />
    </NavigationContainer>
  );
}

export default App;
