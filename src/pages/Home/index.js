import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import {
  HeaderInformation,
  Layanan,
  SmallButton,
  BoxClub,
  UpdateScore,
} from '../../components';
import {ImageBanner} from '../../assets';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {layanan: 'booking'};
  }

  clickLayanan(value) {
    this.setState({
      layanan: value,
    });
  }

  render() {
    return (
      <View style={styles.page}>
        <ScrollView vertical showsVerticalScrollIndicator={false}>
          <View style={styles.wraperHeader}>
            <HeaderInformation />
            <Image source={ImageBanner} style={styles.banner} />
          </View>
          <View style={styles.wraperLabel}>
            <Text style={styles.label}>
              Ayo <Text style={styles.textBold}>Wayahe Futsal</Text>
            </Text>
          </View>
          <View style={styles.layanan}>
            <Layanan
              title="Paket Langganan"
              onPress={() => this.clickLayanan('paket')}
              active={this.state.layanan === 'paket' ? true : false}
            />
            <Layanan
              title="Booking Lapangan"
              onPress={() => this.clickLayanan('booking')}
              active={this.state.layanan === 'booking' ? true : false}
            />
            <Layanan
              title="Join Team"
              onPress={() => this.clickLayanan('join')}
              active={this.state.layanan === 'join' ? true : false}
            />
          </View>
          <View style={styles.labelSparing}>
            <Text style={styles.label}>
              Pilih Tim <Text style={styles.textBold}>Sparing</Text> Kamu
            </Text>
            <View>
              <SmallButton text="Lihat semua" />
            </View>
          </View>
          <View style={styles.wraperScoll}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.club}>
                <BoxClub club="An-Nahl FA" statistic="WDDD" />
                <BoxClub club="Vamos FC" statistic="WWDD" />
                <BoxClub club="VE FC" statistic="DDWW" />
                <BoxClub club="Arsyl FC" statistic="WDWD" />
                <BoxClub club="Awang Long FA" statistic="DWDW" />
              </View>
            </ScrollView>
          </View>
          <View style={styles.labelSparing}>
            <Text style={styles.label}>Update Score</Text>
            <View>
              <SmallButton text="Lihat semua" />
            </View>
          </View>
          <View style={styles.wraperScoll}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.club}>
                <UpdateScore
                  club1="An-Nahl FA"
                  club2="Vamos FC"
                  score1="5"
                  score2="2"
                  date="Rabu, 1 Juli 2020 19.00 WIB"
                />
                <UpdateScore
                  club1="VE FC"
                  club2="Arsyil FC"
                  score1="7"
                  score2="6"
                  date="Kamis, 2 Juli 2020 19.00 WIB"
                />
                <UpdateScore
                  club1="Bogor FC"
                  club2="Awang Long FA"
                  score1="1"
                  score2="6"
                  date="Kamis, 2 Juli 2020 19.00 WIB"
                />
              </View>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Home;

/**Untuk setting agar reponsive sesuai dengan ukuran layarnya */
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  wraperHeader: {
    paddingHorizontal: 30,
    paddingTop: 30,
  },
  banner: {
    width: '100%',
    height: windowHeight * 0.16,
    marginTop: windowHeight * 0.016,
  },
  label: {fontSize: 18, fontFamily: 'Poppins-Light'},
  textBold: {fontSize: 18, fontFamily: 'Poppins-Bold'},
  wraperLabel: {paddingHorizontal: 30, marginTop: 14},
  layanan: {
    marginTop: windowHeight * 0.035,
    flexDirection: 'row',
    paddingHorizontal: 30,
    justifyContent: 'space-between',
  },
  labelSparing: {
    flexDirection: 'row',
    paddingHorizontal: 30,
    marginTop: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  club: {flexDirection: 'row', marginTop: 10},
  wraperScoll: {paddingHorizontal: 30},
});
