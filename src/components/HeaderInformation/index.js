import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IconUserDefault, IconJadwal, IconStadion} from '../../assets';

const HeaderInformation = () => {
  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <IconUserDefault />
        <View style={styles.textWraper}>
          <Text style={styles.hello}>Hello Bro,</Text>
          <Text style={styles.username}>Budi Aman</Text>
        </View>
      </View>
      <View style={styles.jadwalInfo}>
        <View style={styles.textWaktu}>
          <Text style={styles.jam}>19:00 WIB</Text>
          <Text style={styles.tanggal}>Sabtu, 12-09-2020</Text>
        </View>
        <View style={styles.iconJadwal}>
          <IconStadion />
          <Text style={styles.labelNext}>Next Jadwal</Text>
        </View>
      </View>
    </View>
  );
};

export default HeaderInformation;

const styles = StyleSheet.create({
  container: {flexDirection: 'row', justifyContent: 'space-between'},
  userInfo: {flexDirection: 'row'},
  jadwalInfo: {flexDirection: 'row'},
  hello: {fontSize: 13, fontFamily: 'Poppins-Light'},
  username: {fontSize: 13, fontFamily: 'Poppins-Bold'},
  textWraper: {marginLeft: 9},
  textWaktu: {},
  jam: {textAlign: 'right', fontSize: 11, fontFamily: 'Poppins-Bold'},
  tanggal: {textAlign: 'right', fontSize: 11, fontFamily: 'Poppins-Light'},
  iconJadwal: {alignItems: 'center'},
  labelNext: {fontFamily: 'Poppins-Light', fontSize: 11},
});
