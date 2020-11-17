import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';

const {width} = Dimensions.get('screen');
const SIZE = width * 0.9;

const index = () => {
  const rotateSeconds = '25deg';
  const transformSecond = {
    transform: [{rotate: rotateSeconds}],
  };
  const rotateMinutes = '125deg';
  const transformMinutes = {
    transform: [{rotate: rotateMinutes}],
  };
  const rotateHours = '65deg';
  const transformHours = {
    transform: [{rotate: rotateHours}],
  };
  return (
    <View style={styles.page}>
      <View style={styles.bigQuadran} />
      <View style={styles.mediumQuadran} />
      <View style={styles.smallQuadran} />
      <View style={[styles.mover, transformHours]}>
        <View style={styles.hours}></View>
      </View>
      <View style={[styles.mover, transformMinutes]}>
        <View style={styles.minutes}></View>
      </View>
      <View style={[styles.mover, transformSecond]}>
        <View style={styles.seconds}></View>
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mover: {
    position: 'absolute',
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  hours: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    height: '35%',
    marginTop: '15%',
    width: 4,
    borderRadius: 4,
  },
  minutes: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    height: '45%',
    marginTop: '5%',
    width: 3,
    borderRadius: 3,
  },
  seconds: {
    position: 'absolute',
    backgroundColor: 'rgba(227, 71, 134, 1)',
    height: '50%',
    width: 2,
    borderRadius: 2,
  },
  bigQuadran: {
    width: SIZE * 0.8,
    height: SIZE * 0.8,
    borderRadius: SIZE * 0.4,
    backgroundColor: 'rgba(200, 200, 200, 0.2)',
    position: 'absolute',
  },
  mediumQuadran: {
    width: SIZE * 0.5,
    height: SIZE * 0.5,
    borderRadius: SIZE * 0.25,
    backgroundColor: 'rgba(200, 200, 200, 0.4)',
    position: 'absolute',
  },
  smallQuadran: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(227, 71, 134, 1)',
    position: 'absolute',
  },
});
