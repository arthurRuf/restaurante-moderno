import React from "react";
import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, } from "react-native";
import ScreenWrapper from "../components/ScreenWrapper.native";
import theme from "../helpers/theme";


const CreateCustomerScreen = (props) => {
  const [name, setName] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const createAccount = () => {
    return fetch("http://localhost:3001/user/create", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        username: username,
        password: password,
      })
    }).then((res) => {
      Alert.alert("Cliente cadastrado com sucesso!");
      console.log(res);
    }).catch((err) => {
      Alert.alert("Erro ao cadastrar o cliente");
      console.log(err);
    });
  };

  return (
    <ScreenWrapper>
      <ScrollView>
        <View style={styles.pageContent}>
          <View>
            <Text>Name</Text>
            <TextInput value={name} onChange={setName}/>
          </View>
          <View>
            <Text>Usuário</Text>
            <TextInput value={username} onChange={setUsername}/>
          </View>
          <View>
            <Text>Senha</Text>
            <TextInput value={password} onChange={setPassword}/>
          </View>


          <TouchableOpacity
            style={theme.button}
            onPress={() => {
              createAccount()
                .then(() => {
                  props.navigation.navigate("Table");
                });
            }}
          >
            <Text>
              Criar nova conta
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={theme.button}
            onPress={() => {
              props.navigation.navigate("SignInScreen");
            }}
          >
            <Text>
              Voltar
            </Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

CreateCustomerScreen.navigationOptions = {
  title: "Create Custumer",
};

const styles = StyleSheet.create({
  pageContent: {
    flex: 1,
    justifyContent: "center",
  },
});

CreateCustomerScreen.propTypes = {};

export default CreateCustomerScreen;
