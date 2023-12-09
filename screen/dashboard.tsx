import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/logo.png')} />
        <View style={styles.locationContainer}>
          <Image
            style={styles.locationIcon}
            source={require('../assets/location.png')}
          />
          <Text style={styles.locationText}>Kapashera, New Delhi</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ScanWindow')}
          style={styles.button}>
          <Image
            style={styles.image}
            source={require('../assets/inventory.png')}
          />
          <Text style={styles.buttonText}>Add to Inventory</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('SearchWindow')}
          style={styles.button}>
          <Image
            style={styles.image}
            source={require('../assets/search.png')}
          />
          <Text style={styles.buttonText}>Search Item</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('StockingWindow')}
          style={styles.button}>
          <Image
            style={styles.image}
            source={require('../assets/stocking.png')}
          />
          <Text style={styles.buttonText}>Stocking</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image
            style={styles.image}
            source={require('../assets/dispatch.png')}
          />
          <Text style={styles.buttonText}>Dispatch</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  logo: {
    width: 200,
    height: 80,
    resizeMode: 'contain',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    backgroundColor: '#ccc',
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  locationIcon: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
    marginRight: 5,
  },
  locationText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#444',
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  button: {
    backgroundColor: '#52919E',
    padding: 10,
    borderRadius: 10,
    width: 120,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 30,
    borderWidth: 2,
    borderColor: 'black',
    shadowColor: 'black',
    shadowOffset: {
      width: 5,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
    backgroundGradient: {
      colors: ['#FFFFFF', '#E6E6E6'],
      start: {x: 0, y: 0},
      end: {x: 1, y: 1},
    },
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
    fontSize: 16,
    textShadowColor: '#000',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 2,
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginBottom: 10,
  },
});

export default HomeScreen;
