import React from 'react';
import {StatusBar} from 'react-native';
import Nav from './src/Navigator/Nav';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';

function App(): JSX.Element {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#F6F9FF',
    },
  };

  return (
    <React.Fragment>
      <StatusBar
      //  backgroundColor="#fff"
      />
      <NavigationContainer theme={MyTheme}>
        <Nav />
      </NavigationContainer>
    </React.Fragment>
  );
}

export default App;
