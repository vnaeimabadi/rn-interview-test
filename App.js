import React, {useEffect} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {RouteNames} from './constant';
import {SignIn, Register} from './screen';

const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <View style={{display: 'flex', flex: 1}}>
      {/* <Text>aaaaaaaaa</Text> */}
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={RouteNames.SignIn}>
          <Stack.Screen name={RouteNames.SignIn} component={SignIn} />
          <Stack.Screen name={RouteNames.Register} component={Register} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default App;
