import React from "react";
import { Alert, ImageBackground, KeyboardAvoidingView, Text, TextInput , StyleSheet } from "react-native";
import { Block, Button, Input, } from "galio-framework";
import { Header } from "../../components";

import { materialTheme } from '../../constants';

const RegisterWaiterScreen = (props) => {
  const [name, setName] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const save = () => {
    console.log("name", name);
    console.log("username", username);
    console.log("password", password);

    return fetch(
      "https://kcyst4l620.execute-api.us-east-1.amazonaws.com/dev/waiter/create",
      {
        method: "POST",
        body: JSON.stringify({
          name: name,
          username: username,
          password: password,
        }),
      }).then((res) => {
      Alert.alert("Garçom cadastrado com sucesso!");
      console.log(res);
    }).catch((err) => {
      Alert.alert("Erro ao cadastrar o Garçom");
      console.log(err);
    });
  };


  return (
    <Block   flex>
         <ImageBackground
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQmAPaZNZdvtX9gyUM3ebCmRdfN_FXyTOafSDcnBxnrrTrra2ME' }}
            style={{ height: 1}}
          ></ImageBackground>
      <Header title="Cadastra Garçom"/>
      <KeyboardAvoidingView behavior="height" enabled style={styles.campos}>
        <Text style={styles.text} >Nome</Text>
        <Input  style={styles.input}
          value={name}
          onChangeText={setName}
        />
        <Text style={styles.text}>Usuário</Text>
        <Input style={styles.input}
          value={username}
          onChangeText={setUsername}
        />
        <Text style={styles.text}>Senha</Text>
        <Input style={styles.input}
          value={password}
          onChangeText={setPassword}
        />

        <Button style={styles.button}
          center
          onPress={() => {
            save();
          }}
        >
          Salvar
        </Button>
      </KeyboardAvoidingView>
    </Block>
  );
};

const styles = StyleSheet.create({ 
  campos: {
 marginTop:150,
 
 },
  text: {
   fontSize: 15,
  //color:	materialTheme.COLORS.PRICE_COLOR,
  paddingBottom: 5,
  marginTop:20,
  },
  input: {
   //color: materialTheme.COLORS.INPUT,
   // borderEndColor:materialTheme.COLORS.DEFAULT,
    borderEndWidth: 0 ,
    borderStartWidth:0,
    textDecorationColor: 0,
   // borderWidth:2,
  //border-width: 0 0 2px,
 // border-color: materialTheme.COLORS.DEFAULT,
  }, 
  button: {
   // paddingBottom:28
   //alignContent:center,
   marginTop:30,
   marginVertical: 10,
   marginHorizontal: 20,
  },
});
export default RegisterWaiterScreen;
