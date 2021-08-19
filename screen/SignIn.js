import React from 'react';
import {View, Image, Text, ScrollView, TouchableOpacity} from 'react-native';
import {Header, CustomInput, CustomButton} from '../components';
import {COLORS, FONTS, icons, images, RouteNames, SIZES} from '../constant';

const SignIn = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <Image
        style={{position: 'absolute', bottom: 0, left: 0}}
        source={images.bigLogo}
      />
      <ScrollView contentContainerStyle={{minHeight: SIZES.height - 50}}>
        {/* header */}
        <Header title="Sign In" subTitle="Enter login credentials" />

        {/* content */}
        <View style={{paddingLeft: 70, paddingRight: 51, marginTop: 207}}>
          <CustomInput
            title="Username / Email address"
            placeHolder="sam.doe@gmail.com"
            keyboardType="email-address"
            onChangeText={() => {}}
            secureTextEntry={false}
            icon={icons.email}
          />
          <CustomInput
            title="Password"
            placeHolder="secure password"
            keyboardType="default"
            onChangeText={() => {}}
            secureTextEntry={true}
            icon={icons.password}
            contentContainerStyle={{marginTop: 15}}
          />
          <CustomButton
            title="LOG IN"
            icon={icons.rightArrow}
            onPress={() => {}}
            contentContainerStyle={{marginTop: 46}}
          />

          <View
            style={{
              width: 132,
              marginTop: 48,
              height: 1,
              backgroundColor: COLORS.borderColor,
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 34,
              marginBottom: 50,
            }}>
            <Text style={{...FONTS.h5, color: COLORS.textColorSUb}}>
              Dont’ have an account?{' '}
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.push(RouteNames.Register);
              }}>
              <Text
                style={{
                  ...FONTS.h3,
                  color: COLORS.textColor,
                  fontWeight: 'bold',
                }}>
                Create Account
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SignIn;
