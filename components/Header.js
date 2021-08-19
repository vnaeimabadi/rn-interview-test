import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {images, FONTS, COLORS, icons} from '../constant';

const Header = ({title, subTitle, showBackButton, onPress}) => {
  return (
    <View>
      {showBackButton && (
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: 30,
            left: 14,
            padding: 10
          }}
          onPress={onPress}>
          <Image
            source={icons.back}
            style={{
              width: 10,
              height: 16,
            }}
          />
        </TouchableOpacity>
      )}
      <Image
        source={images.appLogo}
        style={{position: 'absolute', top: 37, left: 56, width: 39, height: 27}}
      />
      <Text
        style={{
          ...FONTS.h1,
          position: 'absolute',
          top: 98,
          left: 70,
          color: COLORS.textColor,
          fontWeight: 'bold',
        }}>
        {title}
      </Text>
      <Text
        style={{
          ...FONTS.body3,
          position: 'absolute',
          top: 140,
          left: 70,
          color: COLORS.textColorSUb,
        }}>
        {subTitle}
      </Text>
    </View>
  );
};

export default Header;
