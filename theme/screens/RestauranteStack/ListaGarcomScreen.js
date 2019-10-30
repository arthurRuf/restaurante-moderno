import React from "react";
import { ActivityIndicator, Alert, KeyboardAvoidingView, Text } from "react-native";
import { Block, Button } from "galio-framework";
import { Header } from "../../components";


const ListaGarcomScreen = (props) => {
  const [waiterList, setWaiterList] = React.useState(undefined);

  const deleteWaiter = (id) => {
    fetch(
      "https://kcyst4l620.execute-api.us-east-1.amazonaws.com/dev/waiter/delete",
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
    fetch(
      "https://kcyst4l620.execute-api.us-east-1.amazonaws.com/dev/waiter",
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
      <Header title="Listar Garçons"/>
      <KeyboardAvoidingView behavior="height" enabled>
        {
          waiterList === undefined ?
            <ActivityIndicator size={"large"}/> :
            waiterList.map(item => {
              return (
                <Block key={item._id}>
                  <Text>{item.name}</Text>
                  <Button onPress={() => {
                    deleteWaiter(item._id);
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


export default ListaGarcomScreen;
