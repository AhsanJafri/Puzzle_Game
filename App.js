import React from 'react';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Splash from './screens/Splash';
import Screen from './screens/Screen';
import Ashiq from './screens/Ashiq';
import gameScreen1 from './screens/gameScreen1';
import gameScreen2 from './screens/gameScreen2';
import gameScreen3 from './screens/gameScreen3';
import gameScreen4 from './screens/gameScreen4';
import Result from './screens/Result';

const AppNavigator = createStackNavigator(
  {
    Splash: {
      screen: Splash,
    },
    one: {
      screen: Screen,
    },
    second: {
      screen: Ashiq,
    },
    gameScreen1: {
      screen: gameScreen1,
    },
    gameScreen2: {
      screen: gameScreen2,
    },
    gameScreen3: {
      screen: gameScreen3,
    },
    gameScreen4: {
      screen: gameScreen4,
    },
    Result: {
      screen: Result,
    },
  },
  {
    headerMode: 'none',
  },
);
const AppContainer = createAppContainer(AppNavigator);

class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
export default App;
