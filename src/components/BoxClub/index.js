import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {
  LogoAnnahl,
  LogoVamos,
  LogoVefc,
  LogoAwanglongfa,
  LogoVictorycome,
} from '../../assets';
import {SmallButton} from '..';

const BoxClub = ({club, statistic}) => {
  const Logo = () => {
    if (club === 'An-Nahl FA')
      return <Image source={LogoAnnahl} style={styles.logo} />;
    if (club === 'Vamos FC')
      return <Image source={LogoVamos} style={styles.logo} />;
    if (club === 'VE FC')
      return <Image source={LogoVefc} style={styles.logo} />;
    if (club === 'Awang Long FA')
      return <Image source={LogoAwanglongfa} style={styles.logo} />;
    if (club === 'Arsyl FC')
      return <Image source={LogoVictorycome} style={styles.logo} />;

    return <Image source={LogoVictorycome} style={styles.logo} />;
  };
  return (
    <TouchableOpacity style={styles.container}>
      <Logo />
      <Text style={styles.text}>{club}</Text>
      <View style={styles.statistic}>
        <SmallButton text={statistic} />
      </View>
    </TouchableOpacity>
  );
};

export default BoxClub;

const styles = StyleSheet.create({
  logo: {width: 52, height: 52},
  container: {
    backgroundColor: '#FFFFFF',
    marginRight: 10,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    textShadowRadius: 3.84,
    elevation: 5,
    marginBottom: 10,
  },
  text: {fontSize: 10, fontFamily: 'Poppins-Bold'},
  statistic: {position: 'absolute', bottom: -10},
});
