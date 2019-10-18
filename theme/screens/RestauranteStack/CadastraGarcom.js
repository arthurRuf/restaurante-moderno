import React from "react";
import { Alert, KeyboardAvoidingView,Text, TextInput } from "react-native";
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
        <Text>Nome</Text>
        <TextInput
          value={name}
          onChange={e => setName(e)}
        />
        <Text>Usuário { JSON.stringify(username, function (k, v) { return k && v && typeof v !== "number" ? "" + v : v; })} // will expose arrays as strings.}</Text>
        <TextInput
          value={username}
          onChange={e => setUsername(e)}
        />
        <Text>Senha</Text>
        <TextInput
          value={password}
          onChange={e => setPassword(e)}
        />

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
