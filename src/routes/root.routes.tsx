import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import appRoutes from './app.routes';

const App = createStackNavigator();

const AppRoute: React.FC = () => {
  return (
    <App.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: '#ffffff'},
      }}>
      <App.Screen name="AppBottom" component={appRoutes} />
    </App.Navigator>
  );
};

export default AppRoute;
