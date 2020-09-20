import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {
  LogoAnnahl,
  LogoVamos,
  LogoVefc,
  LogoAwanglongfa,
  LogoBogor,
  LogoVictorycome,
} from '../../assets';
import {WARNA_UTAMA} from '../../utils/constants';

const UpdateScore = ({club1, club2, score1, score2, data}) => {
  const Logo = (club) => {
    if (club.club === 'An-Nahl FA')
      return <Image source={LogoAnnahl} style={styles.logo} />;
    if (club.club === 'Vamos FC')
      return <Image source={LogoVamos} style={styles.logo} />;
    if (club.club === 'VE FC')
      return <Image source={LogoVefc} style={styles.logo} />;
    if (club.club === 'Awang Long FA')
      return <Image source={LogoAwanglongfa} style={styles.logo} />;
    if (club.club === 'Arsyil FC')
      return <Image source={LogoVictorycome} style={styles.logo} />;

    return <Image source={LogoBogor} style={styles.logo} />;
  };

  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.match}>
        <View style={styles.box}>
          <Logo club={club1} />
          <Text style={styles.text}>{club1}</Text>
        </View>
        <View style={styles.score}>
          <Text style={styles.textScore}>
            {score1}:{score2}
          </Text>
        </View>
        <View style={styles.box}>
          <Logo club={club2} />
          <Text style={styles.text}>{club2}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default UpdateScore;

const styles = StyleSheet.create({
  container: {alignItems: 'center', marginRight: 10},
  logo: {width: 52, height: 52},
  text: {fontSize: 10, fontFamily: 'Poppins-Bold', color: '#000'},
  match: {flexDirection: 'row'},
  box: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 1,
    marginBottom: 10,
  },
  score: {
    height: 21,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 5,
    paddingHorizontal: 6,
    paddingVertical: 3,
    position: 'relative',
    zIndex: 1,
    marginHorizontal: -15,
  },
  textScore: {fontSize: 10, fontFamily: 'Poppins-Bold', color: WARNA_UTAMA},
});
