import * as React from 'react';
import {View, Text, TouchableOpacity, Image, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import one from './Screen';
import second from './Ashiq';
import gameScreen1 from './gameScreen1';
import gameScreen2 from './gameScreen2';
import gameScreen3 from './gameScreen3';
import gameScreen4 from './gameScreen4';
import Result from './Result';
// import second from './Ashiq';

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';

function Feed({navigation}) {
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor="black" />
      <View style={{flex: 1, backgroundColor: 'black'}}>
        <View style={{backgroundColor: 'black', height: '13%', width: '100%'}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: 30,
            }}>
            <Text style={{color: '#ffff', fontSize: 30, fontWeight: 'bold'}}>
              PUZZLEISH
            </Text>
          </View>
        </View>
        <View style={{borderWidth: 1, height: '65%'}}>
          <Image
            source={require('../assests/images/puzz.png')}
            style={{width: '93%', height: '100%', margin: 10}}
          />
        </View>

        <View style={{marginTop: 20}}>
          <TouchableOpacity
            style={{
              backgroundColor: 'rgba(255,20,50,0.7)',
              marginTop: '5%',
              width: '90%',
              alignSelf: 'center',
              borderRadius: 30,
            }}
            onPress={() => {
              navigation.navigate('second');
            }}>
            <Text
              style={{
                padding: 15,
                textAlign: 'center',
                fontSize: 22,
                color: 'rgb(255,255,255)',
                fontFamily: 'serif',
              }}>
              START NOW
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

function CustomDrawerContent(props) {
  return (
    <View style={{backgroundColor: '#FFFF', height: '100%', width: '100%'}}>
      <View
        style={{
          height: '20%',
          backgroundColor: '#065e54',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 25, color: '#FFFF'}}>Puzzleish</Text>
      </View>
      <DrawerContentScrollView>
        <View style={{marginTop: 15}}>
          <TouchableOpacity
            style={{flexDirection: 'row'}}
            onPress={() => props.navigation.navigate('one')}>
            <Image
              source={require('../assests/images/person-24px.png')}
              tintColor="#065e54"
              style={{width: 30, height: 30, marginLeft: 10, marginTop: 2}}
            />
            <Text
              style={{
                fontSize: 17,
                paddingLeft: 10,
                marginTop: 4,
                fontWeight: 'bold',
                color: '#065e54',
              }}>
              My Profile
            </Text>
            <DrawerItem label="" />
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 15}}>
          <TouchableOpacity
            style={{flexDirection: 'row'}}
            onPress={() => props.navigation.navigate('one')}>
            <Image
              source={require('../assests/images/file.png')}
              tintColor="#065e54"
              style={{width: 20, height: 22, marginLeft: 15, marginTop: 2}}
            />
            {/* <Text
              style={{
                fontSize: 17,
                paddingLeft: 15,
                marginTop: 4,
                fontWeight: 'bold',
                color:"#065e54"
               
              }}>
              About
            </Text> */}
            <DrawerItem label="" />
          </TouchableOpacity>
        </View>
      </DrawerContentScrollView>
    </View>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="one" component={one} />
      <Drawer.Screen name="second" component={second} />
      <Drawer.Screen name="gameScreen1" component={gameScreen1} />
      <Drawer.Screen name="gameScreen2" component={gameScreen2} />
      <Drawer.Screen name="gameScreen3" component={gameScreen3} />
      <Drawer.Screen name="gameScreen4" component={gameScreen4} />
      <Drawer.Screen name="Result" component={Result} />
    </Drawer.Navigator>
  );
}

export default function Screen() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
