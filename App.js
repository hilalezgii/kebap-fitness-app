import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './pages/WelcomeScreen';
import MemberSign from './pages/MemberSign';
import MemberResult from './pages/MemberResult';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown:false,
      }}>
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen} />
      <Stack.Screen name="MemberSignScreen"  component={MemberSign} />
      <Stack.Screen name="MemberResultScreen"  component={MemberResult} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

