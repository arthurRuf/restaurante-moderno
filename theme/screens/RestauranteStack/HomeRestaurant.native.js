import React from "react";
import { StyleSheet, Text } from "react-native";
import { Block } from "galio-framework";
import Header from "../../components/Header";


const HomeRestaurant = (props) => {
  return (
    <Block flex>
      <Header title="Home Garçom"/>
      <Text>Bem-Vindo</Text>
    </Block>
  );
};

const styles = StyleSheet.create({});

HomeRestaurant.propTypes = {};

export default HomeRestaurant;
