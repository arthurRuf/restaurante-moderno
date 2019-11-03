import React from "react";
import { Alert, KeyboardAvoidingView, Text, TextInput } from "react-native";
import { Block, Button, Input } from "galio-framework";
import { Header } from "../../components";

const ListProductScreen = (props) => {
  const [productList, setProductList] = React.useState([]);

  React.useEffect(() => {
    fetch(
      "https://kcyst4l620.execute-api.us-east-1.amazonaws.com/dev/product",
      {
        method: "POST",
        body: JSON.stringify({
        }),
      })
      .then(res => res.json())
      .then(response => {
        setProductList(response.data);
      })
      .catch((err) => {
        console.log("err", err);
        Alert.alert("Ops, algo deu errado!");
      });
  }, []);


  return (
    <Block flex>
      <Header title="Listar Item"/>
      <KeyboardAvoidingView behavior="height" enabled>
        {
          productList.map(item => {
            return (
              <Text>{item.name}</Text>
            );
          })
        }
      </KeyboardAvoidingView>
    </Block>
  );
};


export default ListProductScreen;
