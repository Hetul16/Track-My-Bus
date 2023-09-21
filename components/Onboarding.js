import React, { useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native'; // Import Dimensions
import slides from '../slides';
import Onboardingitem from './Onboardingitem';
import { useNavigation } from '@react-navigation/native';

const Onboarding = () => {
  const navigation = useNavigation();

  // Use useEffect to navigate after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Login'); // Redirect to the Login screen after 3 seconds
    }, 3000); // 3000 milliseconds = 3 seconds

    // Clear the timer when the component unmounts
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <FlatList
        data={slides}
        renderItem={({ item }) => <Onboardingitem item={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        style={styles.flatList} // Apply styles to the FlatList
      />
    </View>
  );
}

const windowWidth = Dimensions.get('window').width; // Get the screen width

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // paddingHorizontal: 2,
    marginTop: 1,
  },
  flatList: {
    paddingTop:0,
    width: windowWidth, // Set the width of the FlatList to the screen width
  },
});

export default Onboarding;
