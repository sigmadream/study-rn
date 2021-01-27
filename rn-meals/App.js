import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import MealsNavigator from './navigation/MealsNavigator';

export default function App() {
  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      // <View style={styles.container}>
      //   <Text style={{ fontFamily: 'open-sans-bold', fontSize: 40 }}>
      //     Open up App.js to start working on your app!
      //   </Text>
      //   <StatusBar style="auto" />
      // </View>
      <MealsNavigator />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
