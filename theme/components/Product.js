import React from "react";
import { withNavigation } from "react-navigation";
import { Alert, Dimensions, Image, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { Block, Text, theme } from "galio-framework";

const {width} = Dimensions.get("screen");

const Product = props => {
  const {navigation, product, horizontal, full, style, priceColor, imageStyle} = props;
  const imageStyles = [styles.image, full ? styles.fullImage : styles.horizontalImage, imageStyle];

  const orderProduct = () => {
    fetch(
      "https://kcyst4l620.execute-api.us-east-1.amazonaws.com/dev/order/create",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          table: props.tableNumber,
          itemMenu: props.product._id.toString(),
          status: "waiting",
        }),
        credentials: "same-origin",
      })
      .then(response => {
        Alert.alert("Feito!");
      })
      .catch((err) => {
        console.log("err", JSON.stringify(err));
        Alert.alert("Ops, algo deu errado!");
      });
  };

  return (
    <TouchableWithoutFeedback onPress={() => {
      Alert.alert(
        `Tem certeza que deseja pedir ${props.product.name}?`,
        '',
        [
          {
            text: 'Não',
            onPress: () => {},
            style: 'cancel',
          },
          {
            text: 'Sim',
            onPress: () => orderProduct(props.product._id)
          },
        ],
        {cancelable: true},
      );
    }}>
      <Block row={horizontal} card flex style={[styles.product, styles.shadow, style]}>
        <Block flex style={[styles.imageContainer, styles.shadow]}>
          <Image source={{uri: product.image}} style={imageStyles}/>
        </Block>
        <Block flex space="between" style={styles.productDescription}>
          <Text size={14} style={styles.productTitle}>{product.name}</Text>
          <Text size={12} muted={!priceColor} color={priceColor}>${product.price}</Text>
        </Block>
      </Block>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  product: {
    backgroundColor: theme.COLORS.WHITE,
    marginVertical: theme.SIZES.BASE,
    borderWidth: 0,
    minHeight: 114,
  },
  productTitle: {
    flex: 1,
    flexWrap: "wrap",
    paddingBottom: 6,
  },
  productDescription: {
    padding: theme.SIZES.BASE / 2,
  },
  imageContainer: {
    elevation: 1,
  },
  image: {
    borderRadius: 3,
    marginHorizontal: theme.SIZES.BASE / 2,
    marginTop: -16,
  },
  horizontalImage: {
    height: 122,
    width: "auto",
  },
  fullImage: {
    height: 215,
    width: width - theme.SIZES.BASE * 3,
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
    shadowOpacity: 0.1,
    elevation: 2,
  },
});

export default withNavigation(Product);
