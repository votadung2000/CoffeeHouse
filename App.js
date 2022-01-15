import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import 'react-native-gesture-handler';

import {Text} from './src/components';
import {Layout} from './src/views';

import HomeScreen from './src/modules/home/HomeScreen';
import {scale} from './src/utils/resolutions';
import {colors} from './src/constant';

console.reportErrorsAsExceptions = false;
console.disableYellowBox = true;

const styles = StyleSheet.create({
  label: {
    textAlign: 'center',
    fontSize: scale(12),
    paddingBottom: scale(4),
  },
  fcText: {
    color: colors.orange,
  },
});

const Label = ({children, focused}) => {
  return (
    <Text
      bold={focused ? true : false}
      color={focused ? colors.orange : colors.brown}
      style={[styles.label, focused && styles.fcText]}>
      {children}
    </Text>
  );
};

const Tab = createBottomTabNavigator();

const TabApp = () => {
  return (
    <Tab.Navigator
      initialRouteName={HomeScreen}
      backBehavior="initialRoute"
      screenOptions={({route}) => ({
        headerShown: false,
        gestureEnabled: false,
        tabBarIcon: ({focused}) => {
          if (route.name === 'HomeScreen') {
            return (
              <Ionicons
                name="home"
                size={22}
                color={focused ? 'orange' : 'gray'}
              />
            );
          }
        },
      })}>
      <Tab.Screen
        name={'HomeScreen'}
        component={HomeScreen}
        options={{
          tabBarLabel: ({focused}) => <Label {...{focused}}>{'Home'}</Label>,
        }}
      />
    </Tab.Navigator>
  );
};

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Layout>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            gestureEnabled: false,
            animation: 'slide_from_right',
          }}>
          <Stack.Screen name={'TabApp'} component={TabApp} />
        </Stack.Navigator>
      </NavigationContainer>
    </Layout>
  );
};

export default App;
