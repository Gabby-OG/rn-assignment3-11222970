import React from 'react';
import { View, Text, TextInput, Image, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const App = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hello, Devs</Text>
          <Text style={styles.subtitle}>14 tasks today</Text>
        </View>
        {/* <Icon name="person-circle" size={40} color="#f59e0b" /> */}
        <Image
            source={require('./assets/person.png')}
            style={styles.userImage}
          />
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <Icon name="search" size={20} color="#000" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
          />
        </View>
        <Icon name="filter" size={24} color="#fff" style={styles.filterIcon} />
      </View>


    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'lato',
    backgroundColor: '#F7F0E8',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    // color: 'gray',
  },
  userImage:{
    backgroundColor: '#fff',
    borderRadius: '50%'
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
   
    borderRadius: 14,
    padding: 8,
    marginBottom: 16,
    
  },
  searchIcon:{
    padding: 5
  },
  searchBox: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 8,
    height: 49
    
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
  },
  filterIcon: {
    marginLeft: 20,
    backgroundColor: '#F0522F',
    padding: 8,
    borderRadius: 14,
    height: 48, 
    width: 50,
    paddingTop: 12,
    paddingLeft: 13
  },

});

export default App;