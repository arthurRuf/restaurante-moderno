import React from "react";
import { Alert, Dimensions, ScrollView, StyleSheet , ActivityIndicator,} from "react-native";
import { Block, Button, Input, Text, theme } from "galio-framework";

import { Icon, Product } from "../../components";
import products from "../../constants/products";
import Header from "../../components/Header";

const {width} = Dimensions.get("screen");

const Home = props => {
 const [itemMenuList, setItemMenuList] = React.useState();

  React.useEffect(()=> {
    fetch(
      "https://kcyst4l620.execute-api.us-east-1.amazonaws.com/dev/itemmenu/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
        }),
        credentials: "same-origin",
      })
      .then(res => res.json())
      .then(response => {
        setItemMenuList(response.data)
      })
      .catch((err)=> {
        console.log("err", JSON.stringify(err));
        Alert.alert("Ops, algo deu errado!")
      })
  }, []);

  const renderProducts = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.products}>
        <Block flex>
          {
            itemMenuList.map(item => (
              <Product
                product={item}
                key={item._id}
                tableNumber={props.navigation.getParam("tableNumber", "11")}
              />
            ))
          }
        </Block>
      </ScrollView>
    );
  };

    return (
      <React.Fragment>
        <Header search tabs title="Home"/>
        <Block flex center style={styles.home}>
          {
            itemMenuList === undefined ?
             <ActivityIndicator size={"large"} />:
            renderProducts()
          }
        </Block>
      </React.Fragment>
    );
}

const styles = StyleSheet.create({
  home: {
    width: width,
  },
  search: {
    height: 48,
    width: width - 32,
    marginHorizontal: 16,
    borderWidth: 1,
    borderRadius: 3,
  },
  header: {
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    elevation: 4,
    zIndex: 2,
  },
  tabs: {
    marginBottom: 24,
    marginTop: 10,
    elevation: 4,
  },
  tab: {
    backgroundColor: theme.COLORS.TRANSPARENT,
    width: width * 0.50,
    borderRadius: 0,
    borderWidth: 0,
    height: 24,
    elevation: 0,
  },
  tabTitle: {
    lineHeight: 19,
    fontWeight: "300",
  },
  divider: {
    borderRightWidth: 0.3,
    borderRightColor: theme.COLORS.MUTED,
  },
  products: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE * 2,
  },
});

export default Home;
