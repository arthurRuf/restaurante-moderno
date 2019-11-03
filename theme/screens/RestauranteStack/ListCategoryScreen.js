import React from "react";
import { ActivityIndicator, Alert, KeyboardAvoidingView, Text } from "react-native";
import { Block, Button } from "galio-framework";
import { Header } from "../../components";


const ListCategoryScreen = (props) => {
  const [waiterList, setWaiterList] = React.useState(undefined);

  const deleteCategory = (id) => {

    Alert.alert("Not implemented yet.");

    fetch(
      "https://kcyst4l620.execute-api.us-east-1.amazonaws.com/dev/category/delete",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: id,
        }),
        credentials: "same-origin",
      })
      .then(res => res.json())
      .then(response => {
        Alert.alert("Ops, algo deu errado!");
        setWaiterList(
          (waiterList || []).filter(item => {
            if (item._id === id) {
              return false;
            } else {
              return true;
            }
          }),
        );
      })
      .catch((err) => {
        Alert.alert("Ops, algo deu errado!");
      });
  };

  React.useEffect(() => {
    console.log("props", props);
    fetch(
      "https://kcyst4l620.execute-api.us-east-1.amazonaws.com/dev/category",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
        credentials: "same-origin",
      })
      .then(res => res.json())
      .then(response => {
        setWaiterList(response.data);
      })
      .catch((err) => {
        console.log("err", JSON.stringify(err));
        Alert.alert("Ops, algo deu errado!");
      });
  }, []);


  return (
    <Block flex>
      <Header title="Listar Categorias"/>
      <KeyboardAvoidingView behavior="height" enabled>
        {
          waiterList === undefined ?
            <ActivityIndicator size={"large"}/> :
            waiterList.map(item => {
              return (
                <Block key={item._id}>
                  <Text>{item.name}</Text>
                  <Button onPress={() => {
                    deleteCategory(item._id);
                  }}>
                    Excluir
                  </Button>
                </Block>
              );
            })
        }
      </KeyboardAvoidingView>
    </Block>
  );
};


export default ListCategoryScreen;
