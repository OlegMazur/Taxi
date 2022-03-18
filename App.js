import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import EatsDescription from './components/EatsDescription';
import EatsScreen from './screens/EatsScreen';
import HomeScreen from './screens/HomeScreen';
import ItemScreen from './screens/ItemScreen';
import MapScreen from './screens/MapScreen';
import { store } from './store';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator >
            <Stack.Screen name="HomeScreen" 
            component={HomeScreen} 
            options={{headerShown:false}}/>
            <Stack.Screen name="MapScreen" component={MapScreen}  options={{headerShown:false}}/>
            <Stack.Screen name="EatsScreen" component={EatsScreen}  options={{headerShown:false}}/>
            <Stack.Screen name="ItemScreen" component={ItemScreen}  options={{headerShown:false}}/>
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>

    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
