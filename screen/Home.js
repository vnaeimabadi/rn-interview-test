import React, {useRef} from 'react';
import {View, Animated} from 'react-native';
import {COLORS, SIZES} from '../constant';
import {CustomPlaceHolder} from '../components';

const Home = () => {
  const scrollY = useRef(new Animated.Value(0)).current;

  const renderSingleContent = () => {
    return (
      <View
        style={{
          marginLeft: 32,
          marginRight: 30,
          marginBottom: 22,
          flexDirection: 'row',
        }}>
        <View
          style={{
            flex: 1,
            backgroundColor: COLORS.rectangleDark,
            height: 51,

            borderRadius: 4,
          }}
        />
        <View
          style={{
            flex: 1,
            backgroundColor: COLORS.rectangleDark,
            marginLeft: 21,
            height: 51,
            borderRadius: 4,
          }}
        />
      </View>
    );
  };
  return (
    <View style={{flex: 1}}>
      <Animated.View
        style={{
          backgroundColor: COLORS.white,
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 10,
          height: 138,
          elevation: 8,
          transform: [
            {
              translateY: scrollY.interpolate({
                inputRange: [0, 560],
                outputRange: [-138, 138],
                extrapolate: 'clamp',
              }),
            },
          ],
        }}>
        <CustomPlaceHolder title="PlaceHolder" />
      </Animated.View>
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
              height: SIZES.height * 0.82,
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
                  marginTop: 10,
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
              <View
                style={{
                  backgroundColor: COLORS.rectangleDark,
                  height: 51,
                  marginTop: 36,
                  marginLeft: 32,
                  marginRight: 30,
                  marginBottom: 22,
                  borderRadius: 4,
                }}
              />
              {renderSingleContent()}
              {renderSingleContent()}
            </View>
          </View>
        )}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}
      />
    </View>
  );
};

export default Home;
