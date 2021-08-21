import React from 'react'
import { View, Text } from 'react-native'
import {FONTS, COLORS} from '../constant';

const CustomPageHeader = ({title, subTitle, }) => {
    return (
        <View style={{position: 'absolute', top: 98, left: 70}}>
        <Text
          style={{
            ...FONTS.body1,
            color: COLORS.textColor,
            fontWeight: '700',
          }}>
          {title}
        </Text>
        <Text
          style={{
            ...FONTS.body4,
            color: COLORS.textColorSUb,
            fontWeight: '400',
          }}>
          {subTitle}
        </Text>
      </View>
    )
}

export default CustomPageHeader
