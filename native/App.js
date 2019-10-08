import React from "react";
import { Dimensions } from "react-native";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import reducers from "./src/reducers";
import actions from "./src/actions";
import Context from "./context";

import SignInScreen from "./src/views/login/SignInScreen.native";
import HomeRestaurantScreen from "./src/views/restaurant/HomeRestaurantScreen.native";
import HomeTableScreen from "./src/views/table/HomeTableScreen.native";
import CreateCustomerScreen from "./src/views/table/CreateCustomerScreen.native";
import CreateWaiterScreen from "./src/views/restaurant/CreateWaiterScreen.native";
import CreateCategoryScreen from "./src/views/restaurant/CreateCategoryScreen.native";

const RestaurantDrawer = createDrawerNavigator(
  {
    HomeRestaurantScreen: HomeRestaurantScreen,
    CreateCategoryScreen: CreateCategoryScreen,
    CreateWaiterScreen: CreateWaiterScreen,
  },
  {
    initialRouteName: "HomeRestaurantScreen",
    // contentComponent: MainDrawer,
    // headerMode: "none",
    drawerWidth: () => Dimensions.get("window").width,
    edgeWidth: 0
  }
);

const TableDrawer = createDrawerNavigator(
  {
    HomeTableScreen: HomeTableScreen,
  },
  {
    initialRouteName: "HomeTableScreen",
    // contentComponent: MainDrawer,
    // headerMode: "none",
    drawerWidth: () => Dimensions.get("window").width,
    edgeWidth: 0
  }
);

const Navigation = createAppContainer(
  createSwitchNavigator(
    {
      SignInScreen: SignInScreen,
      Table: TableDrawer,
      Restaurant: RestaurantDrawer,
      CreateCustomerScreen: CreateCustomerScreen,
    },
    {
      initialRouteName: "SignInScreen"
    }
  )
);


export default class AppContainer extends React.Component {

  render() {
    return (
      <Context.Provider reducers={reducers} actions={actions}>
        <Navigation/>
      </Context.Provider>
    );
  }
}

