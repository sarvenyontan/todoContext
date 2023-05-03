import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MainTabNavigator from './src/navigations/MainTabNavigator';
import { colors } from './src/style/colorsheet/colors';
import { View } from "react-native"
import { TodoProvider } from './src/contexts/TodoContext';


export default function App() {


  return (
    <TodoProvider>
      <View style={{ flex: 0.1, backgroundColor: colors.main }} />
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <MainTabNavigator />
        </NavigationContainer>
      </SafeAreaView>
    </TodoProvider>
  );
}

