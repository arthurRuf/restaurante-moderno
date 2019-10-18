import React from 'react';
import { ImageBackground, StyleSheet, StatusBar, Dimensions, Platform , Alert} from 'react-native';
import { Block, Button, Input, Text, theme } from "galio-framework";

const { height, width } = Dimensions.get('screen');

import materialTheme from '../constants/Theme';
import Images from '../constants/Images';

const Onboarding = props => {
    const [tableNumber, setTableNumber] = React.useState("");

    return (
      <Block flex style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Block flex center>
          <ImageBackground
            source={{  uri: Images.Onboarding }}
            style={{ height: height, width: width, zIndex: 1 }}
          />
        </Block>
        <Block flex space="between" style={styles.padded}>
          <Block flex space="around" style={{ zIndex: 2 }}>
            <Block>
              <Block>
                <Text color="white" size={60}>Cyber</Text>
              </Block>
              <Block row>
                <Text color="white" size={60}>Food</Text>
              </Block>
              <Text size={16} color='rgba(255,255,255,0.6)'>
                Uma inovação no seu jeito de comer.
              </Text>
            </Block>
            <Block center>
              <Input
                autofocus={true}
                style={{fontSize: 24, color: "#000"}}
                placeholder={"Número da Mesa"}
                vaule={tableNumber}
                onChange={setTableNumber}
                />
              <Button
                shadowless
                style={styles.button}
                color={materialTheme.COLORS.BUTTON_COLOR}
                onPress={() =>{
                  if (tableNumber === "") {
                    Alert.alert("Por favor, informe o número da mesa.");
                    return;
                  }

                  props.navigation.navigate('ClientStack');
                }}
              >
                Entrar como Cliente
              </Button>
              <Button
                shadowless
                style={[styles.button, { marginTop: 8}]}
                color={"#333"}
                onPress={() => {
                  props.navigation.navigate("Login");
                }}>
                Acesso aos Garçons
              </Button>
            </Block>
          </Block>
        </Block>
      </Block>
    );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.COLORS.BLACK,
  },
  padded: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    position: 'relative',
    bottom: theme.SIZES.BASE,
  },
  button: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0,
  },
});


export  default  Onboarding;
