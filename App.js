import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Splash from './screens/Splash';
import Screen from './screens/Screen';
import Ashiq from './screens/Ashiq';


const AppNavigator = createStackNavigator({
  Splash: {
    screen: Splash,
  },one :{
    screen:Screen
  },second:{
    screen:Ashiq
  },
  

},{
  
  headerMode:'none'
});
const AppContainer = createAppContainer(AppNavigator);

class App extends React.Component {
  render() {
    return (
<AppContainer />
    );
    }
}
export default App;
      
      
    