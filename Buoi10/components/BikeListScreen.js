import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';

const bikes = [
  { id: '1', name: 'Pinarello', price: 1800, image: require("../assets/bifour_-removebg-preview.png"), description: "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc." },
  { id: '2', name: 'Pina Mountai', price: 1700, image: require("../assets/bione-removebg-preview.png"), description: "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc." },
  { id: '3', name: 'Pina Bike', price: 1500, image: require("../assets/bithree_removebg-preview.png"), description: "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc." },
  { id: '4', name: 'Pinarello', price: 1900, image: require("../assets/bithree_removebg-preview-1.png"), description: "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc." },
  { id: '5', name: 'Pinarello', price: 2700, image: require("../assets/bifour_-removebg-preview.png"), description: "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc." },
  { id: '6', name: 'Pinarello', price: 1350, image: require("../assets/bifour_-removebg-preview.png"), description: "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc." },
];

const BikeListScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('BikeDetail', { bike: item })}>
      <TouchableOpacity style={styles.favoriteIcon}>
        <Text>❤️</Text>
      </TouchableOpacity>
      <Image source={ item.image } style={styles.image} />
      <Text style={styles.bikeName}>{item.name}</Text>
      <Text style={styles.price}>${item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>The world’s Best Bike</Text>
      <View style={styles.filterContainer}>
        <TouchableOpacity style={[styles.filterButton, styles.activeFilter]}>
          <Text style={styles.filterText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>Roadbike</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>Mountain</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={bikes}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 10,
    paddingTop: 40,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ff5252',
    textAlign: 'left',
    marginBottom: 10,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  filterButton: {
    borderWidth: 1,
    borderColor: '#ff5252',
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginHorizontal: 5,
  },
  activeFilter: {
    backgroundColor: '#ff5252',
  },
  filterText: {
    color: '#ff5252',
  },
  card: {
    flex: 1,
    backgroundColor: '#fbe9e7',
    borderRadius: 10,
    margin: 5,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },
  favoriteIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  bikeName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  price: {
    fontSize: 14,
    color: '#ff8a65',
  },
  row: {
    justifyContent: 'space-between',
  },
});

export default BikeListScreen;
