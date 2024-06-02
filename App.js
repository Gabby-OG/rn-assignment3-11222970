import React from 'react';
import { View, Text, TextInput, Image, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const App = () => {
  return (
    <ScrollView style={styles.container}>
      
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hello, Devs</Text>
          <Text style={styles.subtitle}>14 tasks today</Text>
        </View>
        
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
   
 <Text style={styles.sectionTitle}>Categories</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.categories}>
        <View style={styles.categoryCard}>
          
          <Text style={styles.categoryText}>Exercise</Text>
          <Text style={styles.taskCount}>12 Tasks</Text>
          <Image
            source={require('./assets/young woman working online.png')}
            style={styles.categoryImg}
          />
        </View>
        <View style={styles.categoryCard}>
          
          <Text style={styles.categoryText}>Study</Text>
          <Text style={styles.taskCount}>12 Tasks</Text>
          <Image
            source={require('./assets/young woman working at desk.png')}
            style={styles.categoryImg}
          />
        </View>
        <View style={styles.categoryCard}>
          
          <Text style={styles.categoryText}>cook</Text>
          <Text style={styles.taskCount}>12 Tasks</Text>
          <Image
            source={require('./assets/cook.jpg')}
            style={styles.categoryImg}
          />
        </View>
        <View style={styles.categoryCard}>
          
          <Text style={styles.categoryText}>Design</Text>
          <Text style={styles.taskCount}>12 Tasks</Text>
          <Image
            source={require('./assets/design.jpg')}
            style={styles.categoryImg}
          />
        </View>
        <View style={styles.categoryCard}>
          
          <Text style={styles.categoryText}>Performance</Text>
          <Text style={styles.taskCount}>12 Tasks</Text>
          <Image
            source={require('./assets/Perf.jpg')}
            style={styles.categoryImg}
          />
        </View>
        <View style={styles.categoryCard}>
          
          <Text style={styles.categoryText}>Code</Text>
          <Text style={styles.taskCount}>12 Tasks</Text>
          <Image
            source={require('./assets/code.jpg')}
            style={styles.categoryImg}
          />
        </View>
        <View style={styles.categoryCard}>
          
          <Text style={styles.categoryText}>security</Text>
          <Text style={styles.taskCount}>12 Tasks</Text>
          <Image
            source={require('./assets/secure.jpg')}
            style={styles.categoryImg}
          />
        </View>
        <View style={styles.categoryCard}>
          
          <Text style={styles.categoryText}>Test</Text>
          <Text style={styles.taskCount}>12 Tasks</Text>
          <Image
            source={require('./assets/test.jpg')}
            style={styles.categoryImg}
          />
        </View>
      </ScrollView>
      <Text style={styles.sectionTitle}>Ongoing Task</Text>
      <View style={styles.taskCard}>
        <Text style={styles.taskText}>Mobile App Development</Text>
      </View>
      <View style={styles.taskCard}>
        <Text style={styles.taskText}>Web Development</Text>
      </View>
      <View style={styles.taskCard}>
        <Text style={styles.taskText}>Push Ups</Text>
      </View>
      <View style={styles.taskCard}>
        <Text style={styles.taskText}>User Interface Design</Text>
      </View>
      <View style={styles.taskCard}>
        <Text style={styles.taskText}>Development </Text>
      </View>
      <View style={styles.taskCard}>
        <Text style={styles.taskText}>Bug fixing</Text>
      </View>
      <View style={styles.taskCard}>
        <Text style={styles.taskText}>Code Review</Text>
      </View>
      <View style={styles.taskCard}>
        <Text style={styles.taskText}>Performance Optimization</Text>
      </View>
      <View style={styles.taskCard}>
        <Text style={styles.taskText}>API integration</Text>
      </View>
      <View style={styles.taskCard}>
        <Text style={styles.taskText}>Deployment and integration</Text>
      </View>
      <View style={styles.taskCard}>
        <Text style={styles.taskText}>App security</Text>
      </View>
      <View style={styles.taskCard}>
        <Text style={styles.taskText}>Localization and internationalization</Text>
      </View>
      <View style={styles.taskCard}>
        <Text style={styles.taskText}>App submission</Text>
      </View>
      <View style={styles.taskCard}>
        <Text style={styles.taskText}>User Feedbacks</Text>
      </View>
      <View style={styles.taskCard}>
        <Text style={styles.taskText}>Maintenance and updates </Text>
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
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    marginLeft: 16,
  },
  categories: {
    flexDirection: 'row',
    marginBottom: 26,
    paddingLeft: 16,
  },
  categoryCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 6,
    width: 186,
    height: 192,
    marginRight:24,
  },
  categoryImg: {
    width: 145,
    height: 138,
    alignSelf:'center',
  },
  categoryText: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingLeft: 10
  },
  taskCount: {
    fontSize: 14,
    paddingLeft: 10
  },
  taskCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    paddingTop: 45,
    paddingBottom: 45,
    paddingLeft: 15,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#E8D1BA',
    marginLeft: 16,
    marginRight: 16,
  },
  taskText: {
    fontSize: 16,
    fontWeight: 'bold'
  },

});

export default App;