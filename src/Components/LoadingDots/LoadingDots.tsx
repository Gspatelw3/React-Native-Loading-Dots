import React, {useRef} from 'react';
import {Animated, Easing, View} from 'react-native';

const AnimationDot = ({
  timing = 0,
  size,
  color,
}: {
  timing?: number;
  size?: number;
  color?: string;
}) => {
  const fadeAnim = useRef(new Animated.Value(5)).current;

  setTimeout(() => {
    setInterval(() => {
      setTimeout(() => {
        Animated.timing(fadeAnim, {
          toValue: 0,
          easing: Easing.linear,
          duration: 500,
          useNativeDriver: true,
        }).start();
      }, 500);
      setTimeout(() => {
        Animated.timing(fadeAnim, {
          toValue: 5,
          duration: 500,
          useNativeDriver: true,
        }).start();
      }, 1000);
    }, 2000);
  }, timing);
  return (
    <>
      <Animated.View
        style={[
          {
            width: size,
            height: size,
            borderRadius: 50,
            backgroundColor: color ? color : '#000',
            transform: [{translateY: fadeAnim}],
          },
        ]}></Animated.View>
    </>
  );
};

const LoadingDots = ({size = 5, color}: {size?: number; color?: string}) => {
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          transform: [{translateY: -3}],
        }}>
        <AnimationDot size={size} color={color} />
        <View style={{marginHorizontal: 3}}>
          <AnimationDot timing={300} size={size} color={color} />
        </View>
        <AnimationDot timing={500} size={size} color={color} />
      </View>
    </>
  );
};
export default LoadingDots;
