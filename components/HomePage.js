import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MapView, { Marker, Polyline } from 'react-native-maps';

const HomePage = () => {
  const navigation = useNavigation();
  const [menuOpen, setMenuOpen] = useState(false); // State to track menu open/close
  const [markerCoordinates, setMarkerCoordinates] = useState({
    latitude: 51.505,
    longitude: -0.09,
  }); // Initial marker coordinates
  const [newLatitude, setNewLatitude] = useState(''); 
  const [newLongitude, setNewLongitude] = useState(''); 
  const [sourceCoordinates, setSourceCoordinates] = useState(null); 
  const [destinationCoordinates, setDestinationCoordinates] = useState(null); 
  const [busCoordinates, setBusCoordinates] = useState(null); 

  useEffect(() => {
    if (newLatitude && newLongitude) {
      setMarkerCoordinates({
        latitude: parseFloat(newLatitude),
        longitude: parseFloat(newLongitude),
      });
    }
  }, [newLatitude, newLongitude]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => setMenuOpen(!menuOpen)}
          style={styles.burgerIcon}
        >
          <Image
            source={require('../assets/Project_images/Burger.png')}
            style={{ width: 30, height: 30 }}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Welcome </Text>
      </View>
      {menuOpen && (
        <View style={styles.menu}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ProfilePage');
            }}
          >
            <Image
              source={require('../assets/Project_images/user.png')}
              style={styles.profileImage}
            />
          </TouchableOpacity>
          <Text style={styles.name}>Your Name</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('AssignedBusScreen');
            }}
            style={styles.menuItem}
          >
            <Text>Assigned Bus Information</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              
              navigation.navigate('CommunicationCenterScreen');
            }}
            style={styles.menuItem}
          >
            <Text>Communication Center</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('EmergencyFeaturesScreen');
            }}
            style={styles.menuItem}
          >
            <Text>Emergency Features</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Login');
            }}
            style={styles.menuItem}
          >
            <Text>Logout</Text>
          </TouchableOpacity>
        </View>
      )}

      <View style={styles.container}>
        <MapView
          style={styles.map}
          region={{
            latitude: markerCoordinates.latitude,
            longitude: markerCoordinates.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          {sourceCoordinates && (
            <Marker
              coordinate={sourceCoordinates}
              title="Source"
              description="Source Location"
              pinColor="blue"
            />
          )}
          {destinationCoordinates && (
            <Marker
              coordinate={destinationCoordinates}
              title="Destination"
              description="Destination Location"
              pinColor="red"
            />
          )}
          {busCoordinates && (
            <Marker
              coordinate={busCoordinates}
              title="Bus"
              description="Bus Location"
            >
              <Image
                source={require('../assets/Project_images/buss.png')}
                style={{ width: 40, height: 40 }}
              />
            </Marker>
          )}
          {sourceCoordinates && destinationCoordinates && (
            <Polyline
              coordinates={[sourceCoordinates, destinationCoordinates]}
              strokeWidth={4}
              strokeColor="green"
            />
          )}
        </MapView>
        <TextInput
          style={styles.input}
          placeholder="Latitude"
          placeholderTextColor="#4f5763"
          value={newLatitude}
          onChangeText={setNewLatitude}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Longitude"
          placeholderTextColor="#4f5763"
          value={newLongitude}
          onChangeText={setNewLongitude}
          keyboardType="numeric"
        />
        <Button
          title="Change Marker Coordinates"
          onPress={() => {}}
        />
        <Button
          title="Set Source"
          onPress={() => {
            setSourceCoordinates(markerCoordinates);
          }}
        />
        <Button
          title="Set Destination"
          onPress={() => {
            setDestinationCoordinates(markerCoordinates);
          }}
        />
        <Button
          title="Set Bus Location"
          onPress={() => {
            if (sourceCoordinates) {
              setBusCoordinates(sourceCoordinates);
            }
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  burgerIcon: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  menu: {
    backgroundColor: '#fff',
    padding: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
  },
  name: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 10,
  },
  menuItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  map: {
    flex: 1,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    paddingLeft: 10,
  },
});

export default HomePage;
