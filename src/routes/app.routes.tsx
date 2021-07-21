import React from 'react';
import {Text} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';

import messagesView from '../screens/messages';
import WriteButton from '../components/WriteButton';

const App = createBottomTabNavigator();

interface IIconItem {
  lib: any;
  name: string;
}

interface IIconObject {
  [key: string]: IIconItem;
}

const icons: IIconObject = {
  Messages: {
    lib: Feather,
    name: 'message-circle',
  },
  Calls: {
    lib: Feather,
    name: 'phone',
  },
  Contacts: {
    lib: Feather,
    name: 'user',
  },
  Settings: {
    lib: Feather,
    name: 'settings',
  },
};

const AppRoute: React.FC = () => {
  return (
    <App.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          if (route.name === 'Write') {
            return (
              <WriteButton
              // onPress={() => navigation.navigate('Pay')}
              // focused={focused}
              />
            );
          }

          const {lib: Icon, name} = icons[route.name];
          return <Icon name={name} size={size} color={color} />;
        },
        tabBarLabel: ({color}) => {
          if (route.name === 'Write') {
            return null;
          }

          return (
            <Text
              style={{
                color: color,
                marginBottom: 0,
                fontSize: 11,
                bottom: 13,
                fontFamily: 'VarelaRound-Regular',
              }}>
              {route.name}
            </Text>
          );
        },
      })}
      tabBarOptions={{
        style: {
          backgroundColor: '#FAFCFE',
          height: 80,
          justifyContent: 'center',
          borderTopColor: 'rgba(255, 255, 255, 0.2)',
        },
        activeTintColor: '#486EF8',
        inactiveTintColor: '#C0C3CC',
      }}>
      <App.Screen name="Messages" component={messagesView} />
      <App.Screen name="Calls" component={messagesView} />
      <App.Screen
        name="Write"
        component={messagesView}
        options={{
          title: '',
        }}
      />
      <App.Screen name="Contacts" component={messagesView} />
      <App.Screen name="Settings" component={messagesView} />
    </App.Navigator>
  );
};

export default AppRoute;
