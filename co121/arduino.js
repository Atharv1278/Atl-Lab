import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  StatusBar,
  ImageBackground,
  Image,
} from 'react-native';
import { Paragraph } from 'react-native-paper';
import { Link } from 'react-router-dom';

export default class Mumbaiii extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <ImageBackground
        
          style={styles.backgroundImage}>
          <View style={styles.titleBar}>
            <Text style={styles.titleText}>alphacencury</Text>
          </View>
          <Image
            source={require('../assets/alphacencury.jpg')}
            style={styles.image}></Image>

          <Paragraph>
           
            Here are 5 interesting facts about Arduino :
            <br />
            <br />
            1. Arduino is a mini Computer .
            <br />

            2. It's  Operating Voltage	5V.
            <br />
            3.The microcontroller used is 	ATmega38P – 8 bit AVR family microcontroller
            <br />
            4. Recommended Input Voltage	7-12V
            <br />
            5. Input Voltage Limits	6-20V
          </Paragraph>

          <td>
            <a href="https://learn.sparkfun.com/tutorials/what-is-an-arduino/all">
              Click Here to get more Information!
            </a>
              <a href="https://en.wikipedia.org/wiki/Arduino">
              Click Here to get more Information!
            </a>
          </td>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  droidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  titleBar: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
    alignItems: 'center',
    marginTop: 10,
  },
  image: {
    width: 200,
    height: 300,
    alignItems: 'center',
    marginLeft: 70,
    marginTop: 20,
  },
});
