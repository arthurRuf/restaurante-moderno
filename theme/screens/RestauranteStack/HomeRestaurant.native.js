import React from "react";
import { ActivityIndicator, Alert, KeyboardAvoidingView, StyleSheet, Text } from "react-native";
import { Block, Button } from "galio-framework";
import Header from "../../components/Header";


const HomeRestaurant = (props) => {
  const [orderList, setOrderList] = React.useState(undefined);

  const attendOrder = (id) => {
    fetch(
      "https://kcyst4l620.execute-api.us-east-1.amazonaws.com/dev/order/attend",
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
        setOrderList(
          (orderList || []).filter(item => {
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
      "https://kcyst4l620.execute-api.us-east-1.amazonaws.com/dev/order/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          filter: {
            status: "waiting",
          },
        }),
        credentials: "same-origin",
      })
      .then(res => res.json())
      .then(response => {
        const orderListTemp = response.data;
        setOrderList(orderListTemp);
      })
      .catch((err) => {
        console.log("err", JSON.stringify(err));
        Alert.alert("Ops, algo deu errado!");
      });
  }, []);


  return (
    <Block flex>
      <Header title="Pedidos pendentes"/>
      <KeyboardAvoidingView behavior="height" enabled>
        {
          orderList === undefined ?
            <ActivityIndicator size={"large"}/> :
            orderList.map(item => {
              return (
                <Block key={item._id}>
                  <Text>{item.table}</Text>
                  <Text>
                    {
                      item.itemMenu.title
                    }
                  </Text>
                  <Button onPress={() => {
                    attendOrder(item._id);
                  }}>
                    Concluir Pedido
                  </Button>
                </Block>
              );
            })
        }
      </KeyboardAvoidingView>
    </Block>
  );
};

const styles = StyleSheet.create({});

HomeRestaurant.propTypes = {};

export default HomeRestaurant;
