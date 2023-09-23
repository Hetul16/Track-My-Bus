import React, { useState, useEffect, useRef } from "react";
import {
  View,
  ScrollView,
  Text,
  SafeAreaView,
  Button,
  StyleSheet,
  TextInput,
} from "react-native";
import socketIOClient from "socket.io-client";
import * as Location from "expo-location";
import Login from "./Login";
import { useRoute } from '@react-navigation/native';

const Home = () => {
  const route = useRoute();
  const [locationData, setLocationData] = useState(null);
  const [joinCode, setJoinCode] = useState("");
  const [joined, setJoined] = useState(false); // Track whether user has joined
  const socketRef = useRef(null);
  const [numberPlate, setNumberPlate] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  useEffect(() => {
    if (route.params) {
      const { numberPlate, phoneNumber } = route.params;
      
      // Set the state variables with the values received from navigation parameters
      setNumberPlate(numberPlate);
      setPhoneNumber(phoneNumber);
    }
  
    // ... rest of your useEffect code
  }, [route.params]);
 
  const handleJoinButtonPress = () => {
    socketRef.current = socketIOClient("http://localhost:4000");

    socketRef.current.emit("joinRoom", joinCode);

    socketRef.current.on("locationUpdate", (data) => {
      setLocationData(JSON.parse(data));
    });

    setJoined(true);
  };

  const sendLocationData = async () => {
    try {
      if (!joined) {
        console.log("User has not joined the room yet");
        return;
      }

      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }

      const location = await Location.getCurrentPositionAsync();
      const { latitude, longitude } = location.coords;

      const locationData = {
        latitude: latitude,
        longitude: longitude,
      };

      socketRef.current.emit(
        "locationUpdate",
        joinCode,
        JSON.stringify(locationData)
      );
    } catch (error) {
      console.error("Error fetching or sending location:", error);
    }
  };

  useEffect(() => {
    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
      }
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        
        <View style={styles.infoContainer}>
            <Text style={styles.infoText}>Number Plate: {numberPlate}</Text>
            <Text style={styles.infoText}>Phone Number: {phoneNumber}</Text>
        </View>

        <View style={styles.buttonContainer}>
          <Button title="Get My Location" onPress={sendLocationData} />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter Join Code"
            value={joinCode}
            onChangeText={setJoinCode}
          />
          <Button title="Join" onPress={handleJoinButtonPress} />
        </View>
        <Text style={styles.locationText}>
          Location:{" "}
          {locationData
            ? `Latitude: ${locationData.latitude}, Longitude: ${locationData.longitude}`
            : "Waiting for location data..."}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
    justifyContent: "center",
  },
  buttonContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  inputContainer: {
    alignItems: "center",
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  locationText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
  },
  infoContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  infoText: {
    fontSize: 16,
  },
});

export default Home;
