import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Colors from '../constant/Colors';
import Font from '../constant/Font';

const Signup = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [term_condition, setterm_condition] = useState(false);

  const handleLoginPress = () => {
    navigation.navigate('Login');
  };

  const handleSignupPress = () => {
    // Handle the signup logic here
    // You can replace this with your actual signup code
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.reg}>Hellooo, Captain!!</Text>

        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor="#4f5763"
          value={name}
          onChangeText={(text) => setName(text)}
        />

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
          style={styles.input}
          placeholder="Mobile Number"
          placeholderTextColor="#4f5763"
          value={mobileNumber}
          onChangeText={(text) => setMobileNumber(text)}
        />

        <View style={styles.row}>
          <View style={styles.checkboxContainer}>
            <TouchableOpacity
              style={[styles.checkbox, term_condition && styles.checked]}
              onPress={() => setterm_condition(!term_condition)}
            />
            <Text style={styles.terms}>I accept all terms & condition</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.btn} onPress={handleSignupPress}>
          <Text style={styles.btnText}>SignUp</Text>
        </TouchableOpacity>

        {/* <Text style={styles.forgot}>Already have an account?</Text> */}

        <View style={styles.registerContainer}>
          <Text style={styles.registerText}>Already have an account?</Text>
          <TouchableOpacity onPress={handleLoginPress}>
            <Text style={styles.linkText}>Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    // paddingBottom:20,
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  reg: {
    fontFamily: Font['poppins-semiBold'],
    fontSize: 30,
    paddingBottom:40,
    color: "#493d8a",
    textAlign: 'center',
    marginTop: 30,
  },
  input: {
    fontFamily: Font['poppins-regular'],
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
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
  forgot: {
    fontFamily: Font['poppins-semiBold'],
    color: Colors.primary,
    alignSelf: 'center',
    marginTop: 20,
    marginLeft: 0,
    
  },
  registerContainer: {
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  registerText: {
    paddingLeft:30,
    fontFamily: Font['poppins-semiBold'],
    color: Colors.primary,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
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
  terms: {
    fontFamily: Font['poppins-semiBold'],
    color: '#493d8a',
  },
  linkText: {
    fontFamily: Font['poppins-semiBold'],
    color: Colors.primary,
    width:100,
    textDecorationLine: 'underline',
  },
});

export default Signup;
