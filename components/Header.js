import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {images, FONTS, COLORS, icons} from '../constant';

const Header = ({showBackButton, onPress}) => {
  return (
    <View style={{position:"absolute",backgroundColor:COLORS.white,zIndex:10,width:"100%",height:86}}>
      {showBackButton && (
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: 30,
            left: 14,
            padding: 10,
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
      
    </View>
  );
};

export default Header;
