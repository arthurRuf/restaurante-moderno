import React from "react";
import { Alert, KeyboardAvoidingView, Text, TextInput } from "react-native";
import { Block, Button, Input, } from "galio-framework";
import { Header } from "../../components";


const CadastraItemMenuScreen = (props) => {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [img, setImg] = React.useState("");

  const save = () => {
    console.log("name", name);
    console.log("description", description);
    console.log("price", price);
    console.log("img", img);

    return fetch(
      "https://kcyst4l620.execute-api.us-east-1.amazonaws.com/dev/itemmenu/create",
      {
        method: "POST",
        body: JSON.stringify({
          name: name,
          description: description,
          price: price,
          img: img,
        }),
      }).then((res) => {
      Alert.alert("Item cadastrado com sucesso!");
      console.log(res);
    }).catch((err) => {
      Alert.alert("Erro ao cadastrar o item");
      console.log(err);
    });
  };


  return (
    <Block flex>
      <Header title="Cadastra Item Menu"/>
      <KeyboardAvoidingView behavior="height" enabled>
        <Text>Nome</Text>
        <Input
          value={name}
          onChangeText={setName}
        />
        <Text>Descricao</Text>
        <Input
          value={description}
          onChangeText={setDescription}
        />
        <Text>Price</Text>
        <Input
          value={price}
          onChangeText={setPrice}
        />
 <Text>Img</Text>
        <Input
          value={img}
          onChangeText={setImg}
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


export default CadastraItemMenuScreen;
