import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const SuccessScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/success.png')} style={styles.image} />
      <Text style={styles.text}>Success!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 20,
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default SuccessScreen;
