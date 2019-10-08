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


const HomeRestaurantScreen = (props) => {
  return (
    <Fragment>
      <StatusBar/>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.pageContainer}>
            <View style={styles.pageContent}>
              <Text>Menu</Text>
              <TouchableOpacity
                style={theme.button}
                onPress={() => {
                  props.navigation.navigate("CreateWaiterScreen");
                }}
              >
                <Text>
                  Cadastrar Garçom
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={theme.button}
                onPress={() => {
                  props.navigation.navigate("CreateCategoryScreen");
                }}
              >
                <Text>
                  Cadastrar Categoria
                </Text>
              </TouchableOpacity>


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

HomeRestaurantScreen.navigationOptions = {
  title: "HomeRestaurantScreen",
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

HomeRestaurantScreen.propTypes = {};

export default HomeRestaurantScreen;
