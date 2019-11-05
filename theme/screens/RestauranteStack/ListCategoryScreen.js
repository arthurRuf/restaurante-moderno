import React from "react";
import { ActivityIndicator, Alert,  StyleSheet ,KeyboardAvoidingView, Text } from "react-native";
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
                <Block style={styles.blockquote} key={item._id}>
                  <Text style={styles.mesa}>{item.name}</Text>
                  <Button  style={styles.botao} onPress={() => {
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

const styles = StyleSheet.create({
  blockquote: {
 
    marginBottom:15,
    marginTop:30,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#d6d7da',
  },
  
  botao:{
    
    marginLeft:15,
 
  },
  mesa:{
   
    marginBottom:5,
    marginLeft:150,
    fontSize: 19,
    fontWeight: 'bold',
    color:"#A901DB",
  },
});

export default ListCategoryScreen;
