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
    <Block flex style={styles.pageContent}>
      <Header title="Pedidos pendentes"/>
      <KeyboardAvoidingView behavior="height" enabled>
        {
          orderList === undefined ?
            <ActivityIndicator size={"large"}/> :
            orderList.map(item => {
              return (
                <Block style={styles.blockquote} key={item._id}>

                  <Block style={styles.pedido}>
                    <Text style={styles.mesa}>Mesa: {item.table}</Text>
                  </Block>
                  <Block>
                    {// style={{fontSize: 18, fontWeight: "700"}}
                      item.productList
                        .map(product => <Text style={styles.pedido} key={product._id}>{product.name}</Text>)
                    }
                  </Block>

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


const styles = StyleSheet.create({
  blockquote: {
 
    marginBottom:40,
    marginTop:3,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#d6d7da',
  },
  pageContent: {
    flex: 1,
    paddingHorizontal: 20,

  
  },
  pedido:{
    
    marginLeft:100,
 
  },
  mesa:{
    fontSize: 366, fontWeight: "700",
    marginBottom:5,
    
    fontSize: 19,
    fontWeight: 'bold',
    color:"#A901DB",
  },
});

HomeRestaurant.propTypes = {};

export default HomeRestaurant;
