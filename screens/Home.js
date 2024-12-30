import React, { useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { create } from 'zustand';

// Zustand state management
const useStore = create((set) => ({
  clickCount: 0,
  increment: () => set((state) => ({ clickCount: state.clickCount + 1 })),
}));

const Home = ({ route }) => {
  const username = route.params?.username || "Guest"; // Safeguard username
  const [data, setData] = useState([
    {
      id: '1',
      name: 'Bus 101',
      status: 'Available',
      description: 'Route 101 connecting downtown to suburbs.',
      imageUrl: require('./assets/bus1.jpg'), // Local image path
    },
    {
      id: '2',
      name: 'Train 2500',
      status: 'Delayed',
      description: 'Train 2500 is running 15 minutes late.',
      imageUrl: require('./assets/train1.jpg'), // Local image path
    },
    {
      id: '3',
      name: 'Taxi 47',
      status: 'Available',
      description: 'Available for rides across the city.',
      imageUrl: require('./assets/taxi1.jpg'), // Local image path
    },
    {
      id: '4',
      name: 'Bus 25',
      status: 'Available',
      description: 'Route 205 connecting the city center with the airport.',
      imageUrl: require('./assets/bus2.jpg'), // Local image path
    },
    {
      id: '5',
      name: 'Train 108',
      status: 'On Time',
      description: 'Train 108 heading to the city center.',
      imageUrl: require('./assets/train2.jpg'), // Local image path
    },
    {
      id: '6',
      name: 'Taxi 101',
      status: 'Available',
      description: 'Taxi 101 is at your service, available for rides anywhere.',
      imageUrl: require('./assets/taxi2.jpg'), // Local image path
    },
    {
      id: '7',
      name: 'Bus 303',
      status: 'Unavailable',
      description: 'Bus 303 is currently out of service.',
      imageUrl: require('./assets/bus3.jpg'), // Local image path
    },
    {
      id: '8',
      name: 'Train 16',
      status: 'Delayed',
      description: 'Train 156 is delayed due to maintenance.',
      imageUrl: require('./assets/train3.jpg'), // Local image path
    },
    {
      id: '9',
      name: 'Taxi 55',
      status: 'Available',
      description: 'Taxi 55 is available for your next ride.',
      imageUrl: require('./assets/taxi3.jpg'), // Local image path
    },
    {
      id: '10',
      name: 'Bus 404',
      status: 'Available',
      description: 'Bus 404 offers services to the new neighborhood.',
      imageUrl: require('./assets/bus4.jpg'), // Local image path
    },
  ]);
  const { clickCount, increment } = useStore(); // Zustand store access

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={increment}>
      {item.imageUrl && <Image source={item.imageUrl} style={styles.image} />}
      <View style={styles.cardContent}>
        <Text style={styles.title}>{item.name || "Unknown"}</Text>
        <Text style={styles.status}>Status: {item.status || "Unknown"}</Text>
        <Text style={styles.description}>{item.description || "No description available."}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome, {username}!</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.floatingButton}>
        <Text style={styles.floatingText}>{clickCount}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#001f3f' },
  header: { fontSize: 20, fontWeight: 'bold', color: '#fff', marginBottom: 10 },
  card: { flexDirection: 'row', marginBottom: 10, backgroundColor: '#f9f9f9', padding: 10, borderRadius: 8 },
  image: { width: 80, height: 80, borderRadius: 8, marginRight: 10 },
  cardContent: { flex: 1 },
  title: { fontSize: 16, fontWeight: 'bold', color: '#001f3f' },
  status: { fontSize: 14, color: 'green', marginVertical: 5 },
  description: { fontSize: 14, color: '#444' },
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#001f3f',
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  floatingText: { color: '#fff', fontWeight: 'bold', fontSize: 18 },
});

export default Home;
