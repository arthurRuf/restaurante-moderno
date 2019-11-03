import React from "react";
import { Alert, KeyboardAvoidingView, Text, TextInput } from "react-native";
import { Block, Button, Input, } from "galio-framework";
import { Header } from "../../components";


const RegisterCategoryScreen = (props) => {
  const [name, setName] = React.useState("");

  const save = () => {
    console.log("name", name);

    return fetch(
      "https://kcyst4l620.execute-api.us-east-1.amazonaws.com/dev/category/create",
      {
        method: "POST",
        body: JSON.stringify({
          name: name,
        }),
      }).then((res) => {
      Alert.alert("Categoria cadastrada com sucesso!");
      console.log(res);
    }).catch((err) => {
      Alert.alert("Erro ao cadastrar a Categoria");
      console.log(err);
    });
  };


  return (
    <Block flex>
      <Header title="Cadastra Categoria"/>
      <KeyboardAvoidingView behavior="height" enabled>
        <Text>Nome</Text>
        <Input
          value={name}
          onChangeText={setName}
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


export default RegisterCategoryScreen;
