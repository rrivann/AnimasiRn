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
