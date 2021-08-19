import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {COLORS, FONTS} from '../constant';

const CustomButton = ({
  title,
  haveIcon = true,
  icon,
  onPress,
  contentContainerStyle,
}) => {
  return (
    <View style={{...contentContainerStyle}}>
      <View>
        <TouchableOpacity
          onPress={onPress}
          style={{
            // borderBottomColor: error ? COLORS.red : COLORS.darkBlue,
            backgroundColor: COLORS.textColor,
            borderRadius: 12,
            height: 48,
            color: COLORS.white,
            ...FONTS.body3,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: COLORS.white}}>{title}</Text>
        </TouchableOpacity>
        {haveIcon && (
          <Image
            style={{position: 'absolute', right: 22, top: 16}}
            source={icon}
          />
        )}
      </View>
    </View>
  );
};

export default CustomButton;
