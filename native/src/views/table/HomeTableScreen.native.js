import React, { Fragment } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar, TouchableOpacity,
} from "react-native";
import PropTypes from "prop-types";
import theme from "../helpers/theme";


const HomeTableScreen = (props) => {
  return (
    <Fragment>
      <StatusBar/>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.pageContainer}>
            <View style={styles.pageContent}>
              <Text>Olá Mundo! Sou a tela HomeTable do React Native</Text>


              <TouchableOpacity
                style={theme.button}
                onPress={() => {
                      props.navigation.navigate("SignInScreen");
                }}
              >
                <Text>
                  Sair
                </Text>
              </TouchableOpacity>

            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
};

HomeTableScreen.navigationOptions = {
  title: "HomeTableScreen",
};

const styles = StyleSheet.create({
  pageContainer: {},
  pageContent: {
    flex: 1,
    alignItems: "center",
    marginTop: 15,
    marginBottom: 20,
    marginLeft: 13,
    marginRight: 13,
  },
});

HomeTableScreen.propTypes = {};

export default HomeTableScreen;
