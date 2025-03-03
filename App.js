import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.name}>Hello 👋</Text>
          <Text style={styles.userName}>Christie Doe </Text>
        </View>
        <Image 
          source={require('./assets/anh1.png')} 
          style={styles.profilePic} 
        /> 
      </View>
      <Text style={styles.insights}> Your insights </Text>
      <View style={styles.insights}>
        <View style={styles.card}><Image source={require('./assets/Scanview.png')}></Image> <Text>Scan new{"\n"}Scanned 483 </Text></View>
        <View style={styles.card}><Image source={require('./assets/counterfeits.png')}></Image> <Text>Counterfeits{"\n"}Counterfeited</Text></View>
        <View style={styles.card}><Image source={require('./assets/success.png')}></Image> <Text>Success{"\n"}Checkouts 8</Text></View>
        <View style={styles.card}><Image source={require('./assets/Directory.png')}></Image> <Text>Directory{"\n"}History 26</Text></View>
      </View>
      <Button title="Scan Barcode" onPress={() => navigation.navigate('Product')} />
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Product" component={ProductScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const ProductScreen = () => {
  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: 'https://via.placeholder.com/150' }} 
        style={styles.productImage} 
      />
      <Text style={styles.productName}>Lauren's Orange Juice</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,

  },
  name: {
    fontSize: 24,
  },
  userName: {
    fontSize: 18,
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 30,
    marginVertical: 10,
  },
  insights: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    width: '49%',
    marginBottom: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  productImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  productName: {
    fontSize: 24,
    marginTop: 10,
  },
});