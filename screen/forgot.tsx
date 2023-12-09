import React, {useState} from 'react';
import {StyleSheet, View, TextInput, Button} from 'react-native';

const ForgotPasswordScreen = ({navigation}) => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (value: React.SetStateAction<string>) => {
    setEmail(value);
  };

  const handleResetPassword = () => {
    // TODO: Send a password reset email to the user's email address.
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter your email address"
        value={email}
        onChangeText={handleEmailChange}
      />
      <Button title="Reset Password" onPress={handleResetPassword} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    margin: 10,
    width: '80%',
  },
});

export default ForgotPasswordScreen;
