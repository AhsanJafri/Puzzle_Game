import * as React from 'react';
import {View, Text, TouchableOpacity, Image, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

export default function Result({navigation}) {
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
        <View
          style={{
            height: '65%',
            borderWidth: 1,
            justifyContent: 'space-between',
          }}>
          <Image
            source={require('../assests/images/puzz.png')}
            style={{
              width: '80%',
              height: '70%',
              margin: 10,
              alignSelf: 'center',
            }}
            resizeMode="stretch"
          />
          <View style={{width: '100%', alignItems: 'center'}}>
            <Text style={{color: '#ffff', fontSize: 30, fontWeight: 'bold'}}>
              RESULT
            </Text>
            <Text style={{color: '#ffff', fontSize: 25}}>
              YOU CAN DO MORE BETTER :)
            </Text>
          </View>
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
              navigation.navigate('Feed');
            }}>
            <Text
              style={{
                padding: 15,
                textAlign: 'center',
                fontSize: 22,
                color: 'rgb(255,255,255)',
                fontFamily: 'serif',
              }}>
              PLAY AGAIN
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
