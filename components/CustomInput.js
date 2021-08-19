import React from 'react';
import {View, Text, TextInput, Image} from 'react-native';
import {COLORS, FONTS} from '../constant';

const CustomInput = ({
  title,
  placeHolder,
  icon,
  keyboardType,
  value,
  onChangeText,
  contentContainerStyle,
  inputContainerStyle,
  secureTextEntry = false,
  showPassword,
}) => {
  return (
    <View style={{...contentContainerStyle}}>
      <Text
        style={{
          ...FONTS.h4,
          fontWeight: 'bold',
          marginBottom: 3,
          color: COLORS.textColor,
          marginLeft: 9,
        }}>
        {title}
      </Text>
      <View>
        <TextInput
          keyboardType={keyboardType}
          style={{
            // borderBottomColor: error ? COLORS.red : COLORS.darkBlue,
            borderColor: COLORS.borderColor,
            borderRadius: 12,
            borderWidth: 1,
            height: 42,
            color: COLORS.black,
            ...FONTS.body3,
            paddingLeft: 51,
            ...inputContainerStyle,
          }}
          secureTextEntry={secureTextEntry}
          placeholder={placeHolder}
          value={value}
          onChangeText={text => onChangeText(text)}
        />
        <Image
          style={{position: 'absolute', left: 12, top: 12}}
          source={icon}
        />
      </View>
    </View>
  );
};

export default CustomInput;
