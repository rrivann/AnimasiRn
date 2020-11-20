import React from 'react';
import {StyleSheet, View} from 'react-native';
import {List} from '../../Components';

const index = ({navigation}) => {
  return (
    <View style={styles.page}>
      <List
        onPress={() => navigation.navigate('Anim1')}
        text="Animasi ke 1 kue ulang tahun"
      />
      <List
        onPress={() => navigation.navigate('Anim2')}
        text="Animasi ke 2 jam"
      />
      <List
        onPress={() => navigation.navigate('Anim3')}
        text="Animasi ke 3 dot invertion"
      />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
});
