import React from 'react';
import {View, Text} from 'react-native';
import {COLORS, FONTS} from '../constant';

const CustomPlaceHolder = ({title}) => {
  return (
    <View
      style={{
        paddingLeft: 32,
        backgroundColor: COLORS.white,
        paddingRight: 30,
        height: 138,
        justifyContent: 'center',
        alignItems: 'flex-start',
      }}>
      <Text style={{...FONTS.h3,marginBottom:12,fontWeight:"bold"}}>{title}</Text>
      <View style={{height: 51, width: '100%', backgroundColor: COLORS.rectangle,borderRadius:4}} />
    </View>
  );
};

export default CustomPlaceHolder;
