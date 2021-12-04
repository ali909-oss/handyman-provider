import React  from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import Appstack from './navigation/Appstack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './screens/LoginScreen';
import ProviderStack from './navigation/ProviderStack';



import Tabs from "./navigation/tabs"; 

const Stack = createStackNavigator();







const App = () => {
    return (
        <NavigationContainer  >
           
<ProviderStack/>
        </NavigationContainer>
        
          
       
    )
}

export default App;