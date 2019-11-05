import React from "react";
import { Alert, KeyboardAvoidingView, Text, TextInput , StyleSheet} from "react-native";
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
              <Block style={styles.blockquote} key={item._id}>

                  <Block style={styles.pedido}>
                    <Text style={styles.mesa}> {item.name} </Text>
                  </Block>
                  <Block>
                    
                         <Text style={styles.descricao}> {item.description}</Text>
                         <Block>
                           <Text style={styles.preco}> {item.price}</Text>
                           </Block>
                       
                        
                  </Block>
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
  descricao:{
    fontSize:12,
    marginLeft:100,
 
  },
  preco:{
    
    marginLeft:30,
 
  },
  mesa:{
    fontSize: 366, fontWeight: "700",
    marginBottom:5,
    
    fontSize: 19,
    fontWeight: 'bold',
    color:"#A901DB",
  },
});


export default ListProductScreen;
