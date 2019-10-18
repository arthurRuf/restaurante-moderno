import React from "react";
import { Alert, KeyboardAvoidingView, Text, TextInput } from "react-native";
import { Block, Button, Input, } from "galio-framework";
import { Header } from "../../components";

const ListaItemMenuScreen = (props) => {
  const [itemList, setItemList] = React.useState([]);

  React.useEffect(() => {
    fetch(
      "https://kcyst4l620.execute-api.us-east-1.amazonaws.com/dev/waiter",
      {
        method: "POST",
        body: JSON.stringify({
          test: 1
        }),
      })
      .then(response => JSON.parse(response))
      .then(response => {
        setItemList(response.data)
      })
      .catch((err)=> {
        console.log("err", err);
        Alert.alert("Ops, algo deu errado!")
      })
  }, []);


  return (
    <Block flex>
      <Header title="Listar Item"/>
      <KeyboardAvoidingView behavior="height" enabled>
        {
          itemList.map(item => {
            return (
              <Text>{item.name}</Text>
             )
          })
        }
      </KeyboardAvoidingView>
    </Block>
  );
};


export default ListaItemMenuScreen;
