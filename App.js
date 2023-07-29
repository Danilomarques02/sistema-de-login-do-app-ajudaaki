import React from "react";
import UserContextProvider from './src/contexts/UserContext'
import { NavigationContainer } from '@react-navigation/native';



import MainStack from "./src/stacks/MainStack"
export default() =>{
  return(
    <UserContextProvider >
        <NavigationContainer>

        <MainStack />
        </NavigationContainer>
</UserContextProvider>
  );
}