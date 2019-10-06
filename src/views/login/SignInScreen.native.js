import React from "react";
import { Dimensions, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, } from "react-native";
import ScreenWrapper from "../components/ScreenWrapper.native";


const SignInScreen = (props) => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");


  return (
    <ScreenWrapper>
      <ScrollView>
        <View style={styles.pageContent}>
          <View style={styles.center}>
            <View>
              <Text>Usuário</Text>
              <TextInput value={username} onChange={setUsername}/>
            </View>
            <View>
              <Text>Senha</Text>
              <TextInput value={password} onChange={setPassword}/>
            </View>

            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate("HomeTable");
              }}
            >
              <Text>
                Entrar
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate("CreateAccount", {userId: undefined,});
              }}
            >
              <Text>
                Criar uma nova conta
              </Text>
            </TouchableOpacity>


          </View>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

SignInScreen.navigationOptions = {
  title: "Fazer Login",
};

const styles = StyleSheet.create({
  pageContent: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 10,
    justifyContent: "center",
    height: Dimensions.get("window").height,
    backgroundColor: "#c800ff",
  },
  center: {
    marginVertical: 10,
    marginHorizontal: 20,
    backgroundColor: "#5e006f",
  },
});

SignInScreen.propTypes = {};

export default SignInScreen;
