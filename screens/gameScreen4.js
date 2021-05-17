import React, {useState} from 'react';
import {PicturePuzzle, PuzzlePieces} from 'react-native-picture-puzzle';
import {ActivityIndicator, TouchableOpacity, View, Text} from 'react-native';
const Images = [
  {
    id: 1,
    img: 'https://wallpapercave.com/wp/wp1981940.jpg',
  },

  {
    id: 2,
    img: 'https://wallpapercave.com/wp/wp2155652.jpg',
  },

  {
    id: 3,
    img: 'https://wallpapercave.com/wp/wp3294537.jpg',
  },
  {
    id: 4,
    img: 'https://wallpapercave.com/wp/wp2521772.jpg',
  },

  {
    id: 5,
    img: 'https://wallpapercave.com/wp/wp3294573.jpg',
  },
];
let temp = [0, 1, 2, 3, 4, 5, 6, 7, 8];
export default function GameScreen3({navigation}) {
  const [hidden, setHidden] = React.useState(0); // piece to obscure
  const [pieces, setPieces] = React.useState([4, 8, 7, 5, 3, 2, 6, 0, 1]);
  const [imagelist, setImagelist] = useState(0);
  const [showBtn, setShowBtn] = useState(false);
  const renderLoading = React.useCallback(<ActivityIndicator />, []);
  const onChange = React.useCallback(
    (nextPieces, nextHidden) => {
      if (JSON.stringify(nextPieces) === JSON.stringify(temp)) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
      setPieces(nextPieces);
      setHidden(nextHidden);
    },
    [setPieces, setHidden],
  );
  return (
    <View style={{backgroundColor: 'black', height: '100%'}}>
      <View style={{width: '100%', height: '15%'}}>
        <Text
          style={{
            fontSize: 22,
            fontWeight: 'bold',
            color: 'white',
            alignSelf: 'center',
            marginVertical: 15,
          }}>
          LEVEL 5
        </Text>
      </View>

      <View
        style={{
          height: '65%',
          backgroundColor: 'black',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <PicturePuzzle
          size={410}
          pieces={pieces}
          hidden={hidden}
          onChange={onChange}
          source={{uri: Images[imagelist].img}}
          style={{resizeMode: 'center', marginVertical: 30}}
          renderLoading={renderLoading}
        />
        {showBtn ? (
          <Text
            style={{
              padding: 15,
              textAlign: 'center',
              fontSize: 32,
              color: 'rgb(255,255,255)',
              fontFamily: 'serif',
              position: 'absolute',
              fontWeight: 'bold',
            }}>
            Level Completed
          </Text>
        ) : null}
      </View>
      {showBtn ? (
        <TouchableOpacity
          style={{
            backgroundColor: 'rgba(255,20,50,0.7)',
            marginTop: '5%',
            width: '90%',
            alignSelf: 'center',
            borderRadius: 30,
          }}
          onPress={() =>
            // setImagelist((prevState) => {
            //   if (prevState === 4) {
            //     return 1;
            //   }
            //   return prevState + 1;
            // })
            navigation.navigate('Result')
          }>
          <Text
            style={{
              padding: 15,
              textAlign: 'center',
              fontSize: 22,
              color: 'rgb(255,255,255)',
              fontFamily: 'serif',
            }}>
            Next Round
          </Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
}
