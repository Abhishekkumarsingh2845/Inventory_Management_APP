import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';

const scannerIcon = require('../assets/scannerB.png');
const logo = require('../assets/slogo.png');

const Form = ({navigation}) => {
  const [scanCode, setScanCode] = useState('');
  const [altCode, setAltCode] = useState('');
  const [serialNumber, setSerialNumber] = useState('');

  const handleScannerIconPress = () => {
    // Code to handle scanner icon press goes here
  };

  const handleEnterButtonPress = () => {
    // Code to handle enter button press goes here
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputHeading}>Scan code</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setScanCode(text)}
          value={scanCode}
          placeholder=""
        />
        <TouchableOpacity
          style={styles.scannerIconContainer}
          onPress={handleScannerIconPress}>
          <Image source={scannerIcon} style={styles.scannerIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputHeading}>Alternate code</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setAltCode(text)}
          value={altCode}
          placeholder=""
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputHeading}>Serial number</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setSerialNumber(text)}
          value={serialNumber}
          placeholder=""
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('SuccessWindow')}>
          <Text style={styles.buttonText}>Enter</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 0,
  },

  logoContainer: {
    position: 'absolute',

    height: 50,

    width: '100%',
    padding: 20,
  },

  logo: {
    position: 'absolute',

    height: 40,

    resizeMode: 'contain',
    top: 0,
    left: 0,
    backgroundColor: 'black',
  },
  inputContainer: {
    position: 'relative',
    width: '80%',
    marginBottom: 10,
    bottom: 80,
  },
  inputHeading: {
    fontWeight: 'bold',
    marginBottom: 50,
    top: 180,
    fontSize: 24,
    color: 'black',
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    top: 130,
  },
  scannerIconContainer: {
    position: 'absolute',
    top: 223,
    right: 10,
    width: 20,
    height: 10,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'contain',
  },
  scannerIcon: {
    width: 20,
    height: 20,
  },
  buttonContainer: {
    top: 60,
    marginTop: 20,
    backgroundColor: '#52919E',
    borderRadius: 15,
    padding: 7,
    width: 100,
    borderWidth: 2,
    borderColor: 'black',
    shadowColor: 'black',
    shadowOffset: {
      width: 5,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  button: {
    width: '100%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#52919E',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default Form;
