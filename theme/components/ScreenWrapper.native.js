import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, } from "react-native";
import PropTypes from "prop-types";


const ScreenWrapper = (props) => {
  return (
    <React.Fragment>
      <StatusBar barStyle="dark-content"/>
      <SafeAreaView>
        {
          props.children
        }
      </SafeAreaView>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({});

ScreenWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
};

export default ScreenWrapper;
