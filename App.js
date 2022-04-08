import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';

import Navigation from './src/Navigation'

export default function App() {

  const [loaded]=useFonts({
    Black: require('./src/Assets/Fonts/Inter-Black.ttf'),
    Bold: require('./src/Assets/Fonts/Inter-Bold.ttf'),
    ExtraBold: require('./src/Assets/Fonts/Inter-ExtraBold.ttf'),
    ExtraLight: require('./src/Assets/Fonts/Inter-ExtraLight.ttf'),
    Light: require('./src/Assets/Fonts/Inter-Light.ttf'),
    Medium: require('./src/Assets/Fonts/Inter-Medium.ttf'),
    Regular: require('./src/Assets/Fonts/Inter-Regular.ttf'),
    SemiBold: require('./src/Assets/Fonts/Inter-SemiBold.ttf'),
    Thin: require('./src/Assets/Fonts/Inter-Thin.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Navigation/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
