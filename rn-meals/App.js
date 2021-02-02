import React from 'react';
import AppLoading from 'expo-app-loading';
import {useFonts} from 'expo-font';
import MealsNavigator from './navigation/MealsNavigator';

export default function App() {
  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading/>;
  } else {
    return (
      <MealsNavigator/>
    );
  }
}

