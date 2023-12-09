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
const logo = require('../assets/logo.png');

const Stocking = ({navigation}) => {
  const [productCode, setProductCode] = useState('');
  const [shelveNo, setShelveNo] = useState('');
  const [rowNo, setRowNo] = useState('');
  const [columnNo, setColumnNo] = useState('');

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
        <Text style={styles.inputHeading}>PRODUCT CODE</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setProductCode(text)}
          value={productCode}
          placeholder=""
        />
        <TouchableOpacity style={styles.scannerIconContainer}>
          <Image source={scannerIcon} style={styles.scannerIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputHeading}>SHELVE CODE</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setShelveNo(text)}
          value={shelveNo}
          placeholder=""
        />
        <TouchableOpacity
          style={styles.scannerIconContainer}
          onPress={handleScannerIconPress}>
          <Image source={scannerIcon} style={styles.scannerIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputHeading}>ROW NO</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setRowNo(text)}
          value={rowNo}
          placeholder=""
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputHeading}>COLUMN NO</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setColumnNo(text)}
          value={columnNo}
          placeholder=""
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={handleEnterButtonPress}>
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
    paddingTop: 50,
    bottom: 80,
  },
  logoContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 800,
    height: 70,
    resizeMode: 'contain',
    top: 130,
    right: 80,
  },
  inputContainer: {
    position: 'relative',
    width: '80%',
    marginBottom: -20,
    top: 20,
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
    top: 180,
    marginTop: 20,
    backgroundColor: '#3BA6F5',
    borderRadius: 15,
    padding: 7,
    right: 120,
  },
  button: {
    width: '100%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3BA6F5',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#E4F53B',
  },
});

export default Stocking;
