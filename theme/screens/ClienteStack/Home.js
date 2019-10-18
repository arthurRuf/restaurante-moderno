import React from "react";
import { Dimensions, ScrollView, StyleSheet } from "react-native";
import { Block, Button, Input, Text, theme } from "galio-framework";

import { Icon, Product } from "../../components";
import products from "../../constants/products";
import Header from "../../components/Header";

const {width} = Dimensions.get("screen");

export default class Home extends React.Component {
  renderSearch = () => {
    const {navigation} = this.props;
    const iconCamera = <Icon size={16} color={theme.COLORS.MUTED} name="zoom-in" family="material"/>;

    return (
      <Input
        right
        color="black"
        style={styles.search}
        iconContent={iconCamera}
        placeholder="O que deseja no cardapio?"
        onFocus={() => this.props.navigation.navigate("Pro")}
      />
    );
  };

  renderTabs = () => {
    const {navigation} = this.props;

    return (
      <Block row style={styles.tabs}>
        <Button shadowless style={[styles.tab, styles.divider]} onPress={() => this.props.navigation.navigate("Pro")}>
          <Block row middle>
            <Icon name="grid" family="feather" style={{paddingRight: 8}}/>
            <Text size={16} style={styles.tabTitle}>Categorias</Text>
          </Block>
        </Button>
        <Button shadowless style={styles.tab} onPress={() => this.props.navigation.navigate("Pro")}>
          <Block row middle>
            <Icon size={16} name="camera-18" family="GalioExtra" style={{paddingRight: 8}}/>
            <Text size={16} style={styles.tabTitle}>QrCode</Text>
          </Block>
        </Button>
      </Block>
    );
  };
//aqui adiciona vindo do banco

  renderProducts = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.products}>
        <Block flex>
          <Product product={products[0]} horizontal/>
          <Block flex row>
            <Product product={products[1]} style={{marginRight: theme.SIZES.BASE}}/>
            <Product product={products[2]}/>
          </Block>
          <Product product={products[3]} horizontal/>
          <Product product={products[4]} full/>
        </Block>
      </ScrollView>
    );
  };

  render() {
    return (
      <React.Fragment>
        <Header search tabs title="Home"/>
        <Block flex center style={styles.home}>

          {this.renderProducts()}
        </Block>
      </React.Fragment>
    );
  }
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
