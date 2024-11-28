import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
// import MainNav from './MainNav';
import Onboard from 'screens/Onboard';
import CreateAccount from 'screens/CreateAccount';
import SelectFleet from 'screens/SelectFleet';
import CreateFleet from 'screens/CreateFleet';
import SelectShip from 'screens/SelectShip';
import CreateShip from 'screens/CreateShip';
import SelectTitle from 'screens/SelectTitle';
import SelectInterest from 'screens/SelectInterest';
import BottomNavigator from './BottomNavigator';

export type StackNavigatorParamList = {
  Onboard: undefined;
  MainNav: undefined;
  CreateAccount: undefined;
  SelectFleet: undefined;
  CreateFleet: undefined;
  SelectShip: undefined;
  CreateShip: undefined;
  SelectTitle: undefined;
  SelectInterest: undefined;
  BottomNavigator: undefined;
};

const Stack = createStackNavigator<StackNavigatorParamList>();

function Nav(): JSX.Element {
  return (
    <Stack.Navigator
      initialRouteName="Onboard"
      screenOptions={{gestureEnabled: false, headerShown: true}}>
      <Stack.Screen
        name="Onboard"
        component={Onboard}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CreateAccount"
        component={CreateAccount}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SelectFleet"
        component={SelectFleet}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CreateFleet"
        component={CreateFleet}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SelectShip"
        component={SelectShip}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CreateShip"
        component={CreateShip}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SelectTitle"
        component={SelectTitle}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SelectInterest"
        component={SelectInterest}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BottomNavigator"
        component={BottomNavigator}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
export default Nav;
