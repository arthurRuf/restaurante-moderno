import React from 'react';
import { ImageBackground, Image, StyleSheet, StatusBar, Dimensions, Platform } from 'react-native';
import { Block, Button, Text, theme } from 'galio-framework';
import { LinearGradient } from 'expo-linear-gradient';

const { height, width } = Dimensions.get('screen');
import { Images, materialTheme } from '../constants/';
import { HeaderHeight } from "../constants/utils";

export default class Pro extends React.Component {
  render() {
    const { navigation } = this.props;

    return (
      <Block flex style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Block flex>
          <ImageBackground
            source={{ uri: Images.Pro }}
            style={{ height: height / 1.8, width, zIndex: 1 }}
          >
          <LinearGradient
            style={styles.gradient}
            colors={['rgba(0,0,0,0)', 'rgba(0,0,0,1)']} />
          </ImageBackground>
          <Block space="between" style={styles.padded}>
            <Block>
              <Block >
                <Block>
                  <Text color="white" size={45}>Num</Text>
                </Block>
                <Block>
                  <Text color="white" size={45}>Deu</Text>
                </Block>
                <Block row>
                  <Text color="white" size={45}>Prof</Text>              
                </Block>
              </Block>
              <Text size={16} color='rgba(255,255,255,0.6)'>
                Tenho criança pra alimentar e elo no lol pra subir, n desconta da nota porfavorzinho s2.
              </Text>
             <Button
                shadowless
                style={styles.button}
                color={materialTheme.COLORS.BUTTON_COLOR}
                onPress={() => navigation.navigate('Home')}>
                  Voltar para Home
              </Button>
            </Block>
          </Block>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.COLORS.BLACK,
    marginTop: Platform.OS === 'android' ? -HeaderHeight : 0,
  },
  padded: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    zIndex: 3,
    position: 'absolute',
    bottom: Platform.OS === 'android' ? theme.SIZES.BASE * 2 : theme.SIZES.BASE * 3,
  },
  button: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0,
  },
  pro: {
    backgroundColor: materialTheme.COLORS.LABEL,
    paddingHorizontal: 8,
    marginLeft: 12,
    borderRadius: 2,
    height: 22
  },
  gradient: {
    zIndex: 1,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 66,
  },
});
