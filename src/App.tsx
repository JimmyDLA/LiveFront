import { StatusBar, useColorScheme } from 'react-native';
import { AppNavigator } from './navigation/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <AppNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>

  );
}

export default App;
