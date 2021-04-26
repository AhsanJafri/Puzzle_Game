import React,{useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
 StatusBar,
  Image,
  
} from 'react-native';

const Splash=  (props) => {
    useEffect(()=>{
        setTimeout(() => {
            props.navigation.navigate("one")
        }, 4000);
    })
    return (
      <>

           
          <View style={styles.container}>
          <View style={{justifyContent:'center',flexDirection:'row', marginTop:60}}>
          <Image source={require('../assests/images/puzz.png')}  
           style={{width:200,height:200,borderRadius:20,borderColor:'black',borderWidth:3,padding:5}}/>
          </View>
          {/* <View>
              <Text style={{color:'white',fontSize:50,}}>Puzzle</Text>
          </View> */}

    
</View>

    {/* </ScrollView>
  </SafeAreaView> */}
</>
);
};

const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: 'yellow',


},

});
export default Splash;