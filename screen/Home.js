import React, {useRef} from 'react';
import {View, Animated, ScrollView, FlatList} from 'react-native';
import {COLORS} from '../constant';
import {CustomPlaceHolder, BottomSheet} from '../components';

const Home = () => {
  const scrollY = useRef(new Animated.Value(0)).current;

  const renderSingleContent = (firstItem, totalItems, parentIndex) => {
    return (
      <View
        key={`parent-${parentIndex}`}
        style={{
          marginLeft: 32,
          marginRight: 30,
          marginTop: firstItem ? 36 : 0,
          marginBottom: 22,
          flexDirection: 'row',
        }}>
        {[...Array(totalItems).keys()].map((item, index) => {
          return (
            <View
              key={`child-${index}`}
              style={{
                flex: 1,
                backgroundColor: COLORS.rectangleDark,
                marginLeft: index === 0 ? 0 : 21,
                height: 51,
                borderRadius: 4,
              }}
            />
          );
        })}
      </View>
    );
  };

  const renderHeader = () => {
    return (
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
    );
  };
  return (
    <View style={{flex: 1}}>
      {renderHeader()}
      <BottomSheet scrollY={scrollY}>
        {renderSingleContent(true, 1, -1)}
        <ScrollView nestedScrollEnabled>
          {[...Array(3).keys()].map((item, index) => {
            return renderSingleContent(false, 2, index);
          })}
        </ScrollView>
      </BottomSheet>
    </View>
  );
};

export default Home;
