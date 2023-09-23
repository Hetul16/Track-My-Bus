import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Colors from '../constant/Colors';
import Font from '../constant/Font';

const Login = () => {
  const navigation = useNavigation();
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [NumberPlate, setNumberPlate] = useState('');
  const [phonenumber, setphonenumber] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isValid, setIsValid] = useState(true);   
  const [isValidNP, setIsValidNP] = useState(true);  
  const [state, setState] = useState('');
  const [district, setDistrict] = useState('');
  const [characters, setCharacters] = useState('');
  const [numbers, setNumbers] = useState('');   

  const handleSignupPress = () => {
    navigation.navigate('signup');
  };

  const handleHomePress = () => {

    const input = NumberPlate.trim(); 
    const state = input.substring(0, 2); 
    const district = input.substring(2, 4); 
    const characters = input.substring(4, 6);
    const numbers = input.substring(6); 

    setState(state);
    setDistrict(district);
    setCharacters(characters);
    setNumbers(numbers);

    navigation.navigate('Home', {
      numberPlate: NumberPlate,
      phoneNumber: phonenumber,
    });
  };

  const handlePhoneNumberChange = (text) => {
    setphonenumber(text);
    if (/^\d{10}$/.test(text)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  const handleNumberPlateChange = (text) => {
    setNumberPlate(text);
    const regex = /^HP\d{2}[A-Z]{1,2}\d{4}$/; // Define the regular expression for the format

    if (regex.test(text)) {
      // If the input matches the format, mark it as valid
      setIsValidNP(true);
    } else {
      // If it doesn't match the format, mark it as invalid
      setIsValidNP(false);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.login}>Welcome Back, Captain!</Text>

        <TextInput
          style={styles.input}
          placeholder="ID"
          placeholderTextColor="#4f5763"
          value={id}
          onChangeText={(text) => setId(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#4f5763"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

      <TextInput
        style={[
          styles.input,
          !isValidNP && styles.invalidInput, // Add the invalidInput style conditionally
        ]}
        placeholder="Number Plate"
        placeholderTextColor="#4f5763"
        value={NumberPlate}
        onChangeText={handleNumberPlateChange}
        maxLength={10}
      />
      {!isValidNP && (
        <Text style={styles.errorText}>
          Number plate must be in the format "HP-12-AB-1234"
        </Text>
      )}

      <TextInput
        style={[styles.input, !isValid && styles.invalidInput]}
        placeholder="Phone Number"
        placeholderTextColor="#4f5763"
        value={phonenumber}
        onChangeText={handlePhoneNumberChange}
        maxLength={10} // Set maximum length to 10 digits
      />
      {!isValid && (
        <Text style={styles.errorText}>Phone number must be exactly 10 digits</Text>
      )}

        <View style={styles.row}>
          <View style={styles.checkboxContainer}>
            <TouchableOpacity
              style={[styles.checkbox, rememberMe && styles.checked]}
              onPress={() => setRememberMe(!rememberMe)}
            />
            <Text style={styles.rememberMeText}>Remember Me</Text>
          </View>
          <TouchableOpacity style={styles.forgot} >
            <Text>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.btn} onPress={handleHomePress}>
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>

        <View style={styles.registerContainer}>
          <Text style={styles.registerText}>Don't have an account?{' '}</Text>
          <TouchableOpacity onPress={handleSignupPress}>
            <Text style={styles.linkText}>SignUp</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  login: {
    fontFamily: Font['poppins-semiBold'],
    fontSize: 30,
    color: "#493d8a",
    textAlign: 'center',
    marginBottom: 40,
  },
  input: {
    fontFamily: Font['poppins-regular'],
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: '#f1f4ff',
  },
  btn: {
    padding: 10,
    backgroundColor: "#493d8a",
    borderRadius: 5,
  },
  btnText: {
    fontFamily: Font['poppins-bold'],
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  invalidInput: {
    borderColor: 'red', 
  },
  
  errorText: {
    color: 'red',
    fontSize: 10,
    marginTop:0,
  },
 
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: Colors.primary,
    marginRight: 10,
  },
  checked: {
    backgroundColor: "#493d8a",
  },
  rememberMeText: {
    fontFamily: Font['poppins-semiBold'],
    color: '#493d8a',
  },
  forgot: {
    fontFamily: Font['poppins-semiBold'],
    color: Colors.primary,
  },
  registerContainer: {
    paddingTop:10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  registerText: {
    fontFamily: Font['poppins-semiBold'],
    color: Colors.primary,
  },
  linkText: {
    fontFamily: Font['poppins-semiBold'],
    color: Colors.primary,
    textDecorationLine: 'underline',
  },
});

export default Login;
