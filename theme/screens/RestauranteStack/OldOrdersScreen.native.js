import React from "react";
import { ActivityIndicator, Alert, KeyboardAvoidingView, StyleSheet, Text } from "react-native";
import { Block, Button } from "galio-framework";
import Header from "../../components/Header";


const OldOrdersScreen = (props) => {
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
            status: "attended",
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
      <Header title="Histórico de Pedidos"/>
      <KeyboardAvoidingView behavior="height" enabled>
        {
          orderList === undefined ?
            <ActivityIndicator size={"large"}/> :
            orderList.map(item => {
              return (
                <Block key={item._id}>

                  <Block>
                    <Text style={{fontSize: 18, fontWeight: "700"}}>Mesa: {item.table}</Text>
                  </Block>
                  <Block>
                    {
                      item.productList
                        .map(product => <Text style={{fontSize: 18}} key={product._id}>• {product.name}</Text>)
                    }
                  </Block>

                </Block>
              );
            })
        }
      </KeyboardAvoidingView>
    </Block>
  );
};

const styles = StyleSheet.create({});

OldOrdersScreen.propTypes = {};

export default OldOrdersScreen;
