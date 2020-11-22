import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {List} from '../../Components';

const index = ({navigation}) => {
  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
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
        <List
          onPress={() => navigation.navigate('Anim4')}
          text="Animasi ke 4 According menu"
        />
        <List
          onPress={() => navigation.navigate('Anim5')}
          text="Animasi ke 5 Flatlist carousel animation"
        />
      </View>
    </ScrollView>
  );
};

export default index;

const styles = StyleSheet.create({
  page: {
    alignItems: 'center',
  },
});
