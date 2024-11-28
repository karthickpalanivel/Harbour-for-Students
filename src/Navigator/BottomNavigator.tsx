/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unstable-nested-components */
import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  Image,
  View,
  TouchableOpacity,
  ImageURISource,
  Text,
  StyleSheet,
} from 'react-native';
import {IMAGE} from 'images';
import Home from 'screens/Home';
// import Explore from '../Screen/Explore';
// import Marketplace from '../Screen/Marketplace';
// import Profile from '../Screen/Profile';

export type BottomNavigatorParamList = {
  Home: undefined;
  Explore: undefined;
  Camera: {isActive: boolean};
  Profile: undefined;
};

export const Explore = () => {
  return (
    <View>
      <Text>Explore</Text>
    </View>
  );
};

export const Marketplace = () => {
  return (
    <View>
      <Text>Marketplace</Text>
    </View>
  );
};

export const Profile = () => {
  return (
    <View>
      <Text>Profile</Text>
    </View>
  );
};

export const Add = () => {
  return (
    <View>
      <Text>ADD</Text>
    </View>
  );
};

const Bottom = createBottomTabNavigator();

export function Camera(): JSX.Element {
  return <View>{/* <Text>Camera</Text> */}</View>;
}

function BottomNavigator({navigation}: {navigation: any}): JSX.Element {
  const [image, setImage] = useState<null | string>(null);
  const [showHiddenScreen, setShowHiddenScreen] = useState(true);
  const screenOptions = {
    showIcon: true,
    showLabel: false,
    headerShown: false,
    tabBarShowLabel: false,
    tabBarStyle: {
      backgroundColor: '#FFFFFF',
      borderRadius: 20,
      height: 64,
      marginHorizontal: 16,
      marginBottom: 16,
    },
  };
  return (
    <Bottom.Navigator screenOptions={screenOptions}>
      <Bottom.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Image source={focused ? IMAGE.Button1 : IMAGE.Button1} />
          ),
        }}
      />

      <Bottom.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarIcon: ({focused}) => (
            <Image source={focused ? IMAGE.Button2 : IMAGE.Button2} />
          ),
        }}
      />
      <Bottom.Screen
        name="Add"
        component={Add}
        options={{
          tabBarIcon: ({focused}) => (
            <Image source={focused ? IMAGE.add : IMAGE.add} />
          ),
        }}
      />

      <Bottom.Screen
        name="Marketplace"
        component={Marketplace}
        options={{
          tabBarIcon: ({focused}) => (
            <Image source={focused ? IMAGE.Button3 : IMAGE.Button3} />
          ),
          tabBarIconStyle: {
            backgroundColor: '#FFFFFF',
          },
        }}
      />
      <Bottom.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <Image source={focused ? IMAGE.Button4 : IMAGE.Button4} />
          ),
        }}
      />
    </Bottom.Navigator>
  );
}

export default BottomNavigator;

const styles = StyleSheet.create({
  iconbg: {
    backgroundColor: '#FFFFFF',
    width: 40,
    height: 40,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
