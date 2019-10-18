import React from "react";
import {
  Alert,
  Dimensions,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import ScreenWrapper from "../../components/ScreenWrapper.native";
import { Block, Button, Input, theme } from "galio-framework";


const Login = props => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <Block flex>
      <KeyboardAvoidingView behavior="height" enabled>
        <Input label={"Usuário"} value={username} onChangeText={setUsername}/>
        <Input label={"Senha"} value={password} onChangeText={setPassword}/>

        <Button
          center
          onPress={() => {
            props.navigation.navigate("HomeRestaurant");
          }}
        >
          Entrar
        </Button>


        <Button
          style={{marginTop: 8}}
          onPress={() => {
          }}
        >
          Voltar
        </Button>
      </KeyboardAvoidingView>
    </Block>
  );
};


const styles = StyleSheet.create({
  pageContent: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
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

export default Login;
