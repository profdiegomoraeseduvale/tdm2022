import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/pages/login';
import Home from './src/pages/home';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
     <NavigationContainer>
       <Stack.Navigator>
         <Stack.Screen 
           name='login'
           component={Login}
         />
         <Stack.Screen 
           name='home'
           component={Home}
         />
       </Stack.Navigator>
     </NavigationContainer>
  );
}


