import React from 'react';
import {View, Animated} from 'react-native';
import {COLORS, SIZES} from '../constant';

const BottomSheet = ({scrollY, children}) => {
  return (
    <Animated.FlatList
      style={{backgroundColor: COLORS.rectangleDark}}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={
        <>
          <Animated.View
            style={{
              backgroundColor: COLORS.rectangleDark,
              height: SIZES.height / 2,
              overflow: 'hidden',
            }}
          />
        </>
      }
      ListFooterComponent={() => (
        <View
          style={{
            backgroundColor: COLORS.rectangleDark,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            height: SIZES.height * 0.85,
            width: '100%',
          }}>
          <View
            style={{
              backgroundColor: COLORS.white,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              height: '100%',
            }}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 20,
              }}>
              <View
                style={{
                  backgroundColor: COLORS.rectangleDark,
                  height: 4,
                  width: 71,
                  borderRadius: 4,
                }}
              />
            </View>
            {children}
          </View>
        </View>
      )}
      scrollEventThrottle={16}
      onScroll={Animated.event([{nativeEvent: {contentOffset: {y: scrollY}}}], {
        useNativeDriver: true,
      })}
    />
  );
};

export default BottomSheet;
