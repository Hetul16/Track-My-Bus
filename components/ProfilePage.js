import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ProfilePage = () => {
  

  const user = {
    name: 'Your Name',
    phoneNumber: '123-456-7890',
    aadharCardVerified: true,
    licenseVerified: true,
   
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={require('../assets/Project_images/user.png')}
          style={styles.profileImage}
        />
        <Text style={styles.name}>{user.name}</Text>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Phone Number:</Text>
          <Text style={styles.infoText}>{user.phoneNumber}</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Aadhar Card Verified:</Text>
          <Text style={styles.infoText}>{user.aadharCardVerified ? 'Yes' : 'No'}</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>License Verified:</Text>
          <Text style={styles.infoText}>{user.licenseVerified ? 'Yes' : 'No'}</Text>
        </View>
        {/* Add more user information items here */}
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
  profileContainer: {
    alignItems: 'center',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  infoContainer: {
    marginTop: 20,
    width: '80%',
  },
  infoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoText: {
    fontSize: 16,
  },
});

export default ProfilePage;
