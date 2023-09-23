import React, { useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native'; 
import slides from '../slides';
import Onboardingitem from './Onboardingitem';
import { useNavigation } from '@react-navigation/native';

const Onboarding = () => {
  const navigation = useNavigation();

 
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Login'); 
    }, 3000); 

    
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
        style={styles.flatList}
      />
    </View>
  );
}

const windowWidth = Dimensions.get('window').width; 

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
    width: windowWidth, 
  },
});

export default Onboarding;
