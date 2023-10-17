import {View, Text, TouchableOpacity, useWindowDimensions} from 'react-native';
import React from 'react';
import Animated, {
  useSharedValue,
  interpolate,
  useAnimatedStyle,
  withSpring,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import {useFocusEffect} from '@react-navigation/native';

const Home = ({navigation}: any) => {
  const height = useWindowDimensions().height;
  const slidefrombtm = useSharedValue(0);
  const animateslide = useAnimatedStyle((): any => {
    // const slidebtm = interpolate(slidefrombtm.value,[0,1],[-height,0])

    return {
      transform: [{translateY: slidefrombtm.value}],
    };
  });

  useFocusEffect(
    React.useCallback(() => {
      console.log('focus this screen');
      slidefrombtm.value = withSequence(
        // Slide down
        withTiming(0, {duration: 1000}), // Slide up
      );
      return () => {
        console.log('not focusing in this screen');
        slidefrombtm.value = withSequence(
          // Slide down
          withTiming(500, {duration: 500}), // Slide up
        );
      };
    }, []),
  );
  return (
    <View style={{flex:1,backgroundColor:'black'}}>
      <Animated.View style={[{backgroundColor: 'red', flex: 1}, animateslide]}>
        <Text>Home</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <Text>to settings</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default Home;
