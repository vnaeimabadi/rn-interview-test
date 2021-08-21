import React from 'react';
import {View, Image, Text, ScrollView, TouchableOpacity} from 'react-native';
import {Header, CustomInput, CustomButton, CustomPageHeader} from '../components';
import {COLORS, FONTS, icons, images, RouteNames, SIZES} from '../constant';

const Register = ({navigation}) => {
  const renderPasswordValidation = (title, active, contentContainerStyle) => {
    return (
      <View style={{flexDirection: 'row', ...contentContainerStyle}}>
        <View>
          <View
            style={{
              width: 18,
              height: 18,
              marginRight: 11,
              borderRadius: 9,
              backgroundColor: active
                ? COLORS.circleActive
                : COLORS.circleDeActive,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image source={active ? icons.check : icons.checkDeActive} />
          </View>
        </View>
        <Text>{title}</Text>
      </View>
    );
  };

  return (
    <View style={{flex: 1,backgroundColor:COLORS.white,}}>
      <Image
        style={{position: 'absolute', bottom: 0, left: 0}}
        source={images.bigLogo}
      />
       {/* header */}
       <Header
          
          showBackButton={true}
          onPress={() => {
            navigation.goBack();
          }}
        />
        
      <ScrollView contentContainerStyle={{minHeight: SIZES.height - 50}}>
      <CustomPageHeader title="Create Account"
          subTitle="One step away from your desires"/>

        {/* content */}
        <View style={{paddingLeft: 70, paddingRight: 51, marginTop: 200}}>
          <CustomInput
            title="Fullname"
            placeHolder="Johnson Walker"
            keyboardType="default"
            onChangeText={() => {}}
            secureTextEntry={false}
            icon={icons.person}
          />
          <CustomInput
            title="Username / Email address"
            placeHolder="sam.doe@gmail.com"
            keyboardType="email-address"
            onChangeText={() => {}}
            secureTextEntry={false}
            icon={icons.email}
            contentContainerStyle={{marginTop: 15}}
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

          <View>
            <Text style={{...FONTS.body5, marginTop: 16, marginLeft: 9}}>
              Your Password must contain:
            </Text>
            {renderPasswordValidation('At least 6 characters', true, {
              marginTop: 10,
              marginBottom: 10,
              marginLeft: 12,
            })}
            {renderPasswordValidation('Contains a number', false, {
              marginLeft: 12,
            })}
          </View>

          <CustomButton
            title="REGISTER"
            haveIcon={false}
            icon={icons.rightArrow}
            onPress={() => {
              navigation.replace(RouteNames.Home);
            }}
            contentContainerStyle={{marginTop: 46,marginBottom:20}}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Register;
