import React, { useEffect, useState } from 'react';
import { View, Text, Button, Image, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';

const UserProfileScreen = ({ navigation }) => {
  const [userData, setUserData] = useState(null);
  const [userIndex, setUserIndex] = useState(0);

  const fetchUserData = async (index) => {
    try {
      const response = await axios.get(`https://random-data-api.com/api/users/random_user?size=80`);
      setUserData(response.data[index]);
    } catch (error) {
      console.error('Error fetching user data', error);
    }
  };

  useEffect(() => {
    fetchUserData(userIndex);
  }, [userIndex]);

  const handleNext = () => {
    if (userIndex < 79) setUserIndex(userIndex + 1);
  };

  const handlePrevious = () => {
    if (userIndex > 0) setUserIndex(userIndex - 1);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {userData && (
        <>
          <Text style={styles.title}>User Information</Text>
          <Image source={{ uri: userData.avatar }} style={styles.avatar} />
          <Text>ID: {userData.id}</Text>
          <Text>UID: {userData.uid}</Text>
          <Text>Password: {userData.password}</Text>
          <Text>First Name: {userData.first_name}</Text>
          <Text>Last Name: {userData.last_name}</Text>
          <Text>Username: {userData.username}</Text>
          <Text>Email: {userData.email}</Text>

          <View style={styles.buttonsContainer}>
            <Button title="Previous" onPress={handlePrevious} />
            <Button title="Next" onPress={handleNext} />
          </View>
        </>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});

export default UserProfileScreen;
