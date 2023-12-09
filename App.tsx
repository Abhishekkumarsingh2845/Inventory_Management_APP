import * as React from "react";
//import { useNavigation } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from './screen/login';
import Form from './screen/code';
import HomeScreen from './screen/dashboard';
import SearchScreen from "./screen/search";
import SuccessScreen from "./screen/success";
import ForgotPasswordScreen from "./screen/forgot";
import Stocking from "./screen/stocking";

const Stack = createNativeStackNavigator();
const App = ()=>{
return(<NavigationContainer>

<Stack.Navigator> 
< Stack.Screen name='Login' component={LoginScreen}  />
< Stack.Screen name='Dashboard' component={HomeScreen}  />
< Stack.Screen name='ScanWindow' component={Form}  />
< Stack.Screen name='SearchWindow' component={SearchScreen}  />
< Stack.Screen name='SuccessWindow' component={SuccessScreen}  />
< Stack.Screen name='ForgotWindow' component={ForgotPasswordScreen}  />
< Stack.Screen name='StockingWindow' component={Stocking}  />


</Stack.Navigator>


</NavigationContainer>

);


};


export default App;