import React, {useState} from 'react';
import {PicturePuzzle, PuzzlePieces} from 'react-native-picture-puzzle';
import {ActivityIndicator, TouchableOpacity, View, Text} from 'react-native';
const Images = [
  {
    id: 1,
    img: 'https://1tb.favim.com/preview/6/697/6975/69759/6975908.jpg',
  },

  {
    id: 2,
    img: 'https://1tb.favim.com/preview/6/660/6603/66032/6603207.jpg',
  },

  {
    id: 3,
    img: 'https://1tb.favim.com/preview/6/635/6355/63551/6355103.png',
  },
  {
    id: 4,
    img: 'https://1tb.favim.com/preview/7/729/7294/72941/7294149.jpg',
  },

  {
    id: 5,
    img: 'https://1tb.favim.com/preview/7/729/7298/72989/7298962.jpg',
  },
];

let temp = [0, 1, 2, 3, 4, 5, 6, 7, 8];
export default function GameScreen1({navigation}) {
  const [hidden, setHidden] = React.useState(0); // piece to obscure
  const [pieces, setPieces] = React.useState([4, 1, 0, 2, 3, 5, 7, 6, 8]);
  const [imagelist, setImagelist] = useState(3);
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
          LEVEL 3
        </Text>
      </View>
      <View style={{height: '65%', backgroundColor: 'black'}}>
        <PicturePuzzle
          size={410}
          pieces={pieces}
          hidden={hidden}
          onChange={onChange}
          source={{uri: Images[imagelist].img}}
          style={{resizeMode: 'center', marginVertical: 30}}
          renderLoading={renderLoading}
        />
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
            navigation.navigate('gameScreen3')
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
