import React from "react";
import { Alert, KeyboardAvoidingView } from "react-native";
import { Block, Button, Input } from "galio-framework";
import { Header } from "../../components";


const CadastraGarcom = (props) => {
  const [name, setName] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const save = () => {
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
      Alert.alert("Cliente cadastrado com sucesso!");
      console.log(res);
    }).catch((err) => {
      Alert.alert("Erro ao cadastrar o cliente");
      console.log(err);
    });
  };


  return (
    <Block flex>
      <Header title="Cadastra Garçom"/>
      <KeyboardAvoidingView behavior="height" enabled>
        <Input label={"Nome"} value={name} onChange={setName}/>
        <Input label={"Usuário"} value={username} onChange={setUsername}/>
        <Input label={"Senha"} value={password} onChange={setPassword}/>

        <Button
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


export default CadastraGarcom;
