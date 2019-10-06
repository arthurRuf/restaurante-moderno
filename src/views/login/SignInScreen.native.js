import React from "react";
import { ScrollView, StyleSheet, Text, TextInput, View,Button, Alert,TouchableOpacity, } from "react-native";
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
              color="#f194ff"
              onPress={() => {
                props.navigation.navigate("HomeTable");
              }}
            >
              <Text>
                Entrar
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              color="#f194ff"
              onPress={() => {
                props.navigation.navigate("HomeRestaurant");
              }}
            >
              <Text>
                Modo Mesa
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
    justifyContent: "center",
    height: "100%",
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
