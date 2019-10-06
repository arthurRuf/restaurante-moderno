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

const RestaurantDrawer = createDrawerNavigator(
  {
    HomeRestaurant: HomeRestaurantScreen,
  },
  {
    initialRouteName: "HomeRestaurant",
    // contentComponent: MainDrawer,
    // headerMode: "none",
    drawerWidth: () => Dimensions.get("window").width,
    edgeWidth: 0
  }
);

const TableDrawer = createDrawerNavigator(
  {
    HomeTable: HomeTableScreen,
  },
  {
    initialRouteName: "HomeTable",
    // contentComponent: MainDrawer,
    // headerMode: "none",
    drawerWidth: () => Dimensions.get("window").width,
    edgeWidth: 0
  }
);

const Navigation = createAppContainer(
  createSwitchNavigator(
    {
      SignIn: SignInScreen,
      Table: TableDrawer,
      Restaurant: RestaurantDrawer,
    },
    {
      initialRouteName: "SignIn"
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
