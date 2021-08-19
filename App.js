import React,{useEffect} from 'react';
import { SafeAreaView,Text } from 'react-native';
import SplashScreen from 'react-native-splash-screen'

const App=() => {

  useEffect(()=>{
    SplashScreen.hide();
  },[])

  return (
    <SafeAreaView>
      <Text>this is home page</Text>
    </SafeAreaView>
  );
};

export default App;
