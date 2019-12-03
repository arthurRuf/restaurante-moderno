import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  StatusBar,
  Dimensions,
  Platform,
  Alert,
  Button,
  InputText,
  Text,
} from "react-native";

const { height, width } = Dimensions.get("screen");

import materialTheme from "../constants/Theme";
import Images from "../constants/Images";


const theme = {
  COLORS: {
    WHITE: "#ffffff",
    BLACK: "#000000",
    GREY: "#898989",
    MUTED: "#9fa5aa",
    TRANSPARENT: "transparent",
    NEUTRAL: "rgba(255,255,255, 0.65)",
  },
  SIZES: {
    BASE: 16,
    FONT: 16,
    ICON: 16,
    OPACITY: 0.8,
    BORDER_RADIUS: 6,
    BORDER_WIDTH: 0.8,

    // Button styles
    BUTTON_WIDTH: 16 * 9,
    BUTTON_HEIGHT: 16 * 2.75,
    BUTTON_SHADOW_RADIUS: 10,

    // Block styles
    BLOCK_SHADOW_OPACITY: 0.15,
    BLOCK_SHADOW_RADIUS: 8,
    ANDROID_ELEVATION: 1,

    // Card styles
    CARD_BORDER_RADIUS: 16 * 0.4,
    CARD_BORDER_WIDTH: 16 * 0.05,
    CARD_WIDTH: width - (16 * 2),
    CARD_MARGIN_VERTICAL: 16 * 0.875,
    CARD_FOOTER_HORIZONTAL: 16 * 0.75,
    CARD_FOOTER_VERTICAL: 16 * 0.75,
    CARD_AVATAR_WIDTH: 16 * 2.5,
    CARD_AVATAR_HEIGHT: 16 * 2.5,
    CARD_AVATAR_RADIUS: 16 * 1.25,
    CARD_IMAGE_HEIGHT: 16 * 12.5,
    CARD_ROUND: 16 * 0.1875,
    CARD_ROUNDED: 16 * 0.5,

    // Input styles
    INPUT_BORDER_RADIUS: 16 * 0.5,
    INPUT_BORDER_WIDTH: 16 * 0.05,
    INPUT_HEIGHT: 16 * 2.75,
    INPUT_HORIZONTAL: 16,
    INPUT_TEXT: 16 * 0.875,
    INPUT_LABEL_TEXT: 16 * 0.9,
    INPUT_LABEL_BOTTOM: 16 / 4,
    INPUT_HELP_TEXT: 16 * 0.8,
    INPUT_ROUNDED: 16 * 1.7,

    // NavBar styles
    NAVBAR_HEIGHT: 16 * 4.125,
    NAVBAR_VERTICAL: 16,
    NAVBAR_TITLE_FLEX: 2,
    NAVBAR_TITLE_HEIGHT: height * 0.07,
    NAVBAR_TITLE_TEXT: 16 * 0.875,
    NAVBAR_LEFT_FLEX: 0.5,
    NAVBAR_LEFT_HEIGHT: height * 0.07,
    NAVBAR_LEFT_MARGIN: 16,
    NAVBAR_RIGHT_FLEX: 0.5,
    NAVBAR_RIGHT_HEIGHT: height * 0.07,
    NAVBAR_RIGHT_MARGIN: 16,

    // Checkbox
    CHECKBOX_WIDTH: 20,
    CHECKBOX_HEIGHT: 20,

    // Slider
    TRACK_SIZE: 4,
    THUMB_SIZE: 25,

    // Radio Button
    RADIO_WIDTH: 24,
    RADIO_HEIGHT: 24,
    RADIO_THICKNESS: 2,
  },
};

const Onboarding = props => {
  const [tableNumber, setTableNumber] = React.useState("");

  return (
    <View flex style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View flex center>
        <ImageBackground
          source={{ uri: Images.Onboarding }}
          style={{ height: height, width: width, zIndex: 1 }}
        />
      </View>
      <View flex space="between" style={styles.padded}>
        <View flex space="around" style={{ zIndex: 2 }}>
          <View>
            <View>
              <Text color="white" size={60}>Cyber</Text>
            </View>
            <View row>
              <Text color="white" size={60}>Food</Text>
            </View>
            <Text size={16} color='rgba(255,255,255,0.6)'>
              Uma inovação no seu jeito de comer.
            </Text>
          </View>
          <View center>
            <InputText
              autofocus={true}
              style={{ fontSize: 24, color: "#000" }}
              placeholder={"Número da Mesa"}
              vaule={tableNumber}
              onChangeText={setTableNumber}
              testID={"tableNumber"}
            />
            <Button
              shadowless
              style={styles.button}
              color={materialTheme.COLORS.BUTTON_COLOR}
              onPress={() => {
                console.log("tableNumber", tableNumber);
                if (tableNumber === "") {
                  Alert.alert("Por favor, informe o número da mesa.");
                  return;
                }

                props.navigation.navigate("ClientStack", { tableNumber: tableNumber });
              }}
            >
              Entrar como Cliente
            </Button>
            <Button
              shadowless
              style={[styles.button, { marginTop: 8 }]}
              color={"#333"}
              onPress={() => {
                props.navigation.navigate("Login");
              }}>
              Acesso aos Garçons
            </Button>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.COLORS.BLACK,
  },
  padded: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    position: "relative",
    bottom: theme.SIZES.BASE,
  },
  button: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0,
  },
});


export default Onboarding;
