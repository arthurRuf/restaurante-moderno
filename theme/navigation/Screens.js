import React from "react";
import { Animated, Easing } from "react-native";
import {
  createAppContainer,
  createDrawerNavigator,
  createStackNavigator,
  createSwitchNavigator,
} from "react-navigation";

import { Block, Text } from "galio-framework";
import HomeScreen from "../screens/ClienteStack/Home";
import OnboardingScreen from "../screens/Onboarding";
import ProfileScreen from "../screens/Profile";
import ProScreen from "../screens/Pro";
import SettingsScreen from "../screens/Settings";
import LoginScreen from "../screens/RestauranteStack/LoginScreen";

import Menu from "./Menu";
import Header from "../components/Header";
import { Drawer } from "../components/";
import HomeRestaurant from "../screens/RestauranteStack/HomeRestaurant.native";
import RegisterProductScreen from "../screens/RestauranteStack/RegisterProductScreen";
import RegisterWaiterScreen from "../screens/RestauranteStack/RegisterWaiterScreen";
import ListWaiterScreen from "../screens/RestauranteStack/ListWaiterScreen";
import ListProductScreen from "../screens/RestauranteStack/ListProductScreen";
import ListCategoryScreen from "../screens/RestauranteStack/ListCategoryScreen";
import RegisterCategoryScreen from "../screens/RestauranteStack/RegisterCategoryScreen";
import OldOrdersScreen from "../screens/RestauranteStack/OldOrdersScreen.native";

const transitionConfig = (transitionProps, prevTransitionProps) => ({
  transitionSpec: {
    duration: 400,
    easing: Easing.out(Easing.poly(4)),
    timing: Animated.timing,
  },
  screenInterpolator: sceneProps => {
    const {layout, position, scene} = sceneProps;
    const thisSceneIndex = scene.index;
    const width = layout.initWidth;

    const scale = position.interpolate({
      inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
      outputRange: [4, 1, 1],
    });
    const opacity = position.interpolate({
      inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
      outputRange: [0, 1, 1],
    });
    const translateX = position.interpolate({
      inputRange: [thisSceneIndex - 1, thisSceneIndex],
      outputRange: [width, 0],
    });

    const scaleWithOpacity = {opacity};
    const screenName = "Search";

    if (screenName === transitionProps.scene.route.routeName ||
      (prevTransitionProps && screenName === prevTransitionProps.scene.route.routeName)) {
      return scaleWithOpacity;
    }
    return {transform: [{translateX}]};
  },
});

const ProfileStack = createStackNavigator({
  Profile: {
    screen: ProfileScreen,
    navigationOptions: ({navigation}) => ({
      header: <Header white transparent title="Profile"/>,
      headerTransparent: true,
    }),
  },
}, {
  cardStyle: {backgroundColor: "#eeeeee"},
  transitionConfig,
});

const SettingsStack = createStackNavigator({
  Settings: {
    screen: SettingsScreen,
    navigationOptions: ({navigation}) => ({
      header: <Header title="Settings"/>,
    }),
  },
}, {
  cardStyle: {backgroundColor: "#eeeeee"},
  transitionConfig,
});


const Login = createStackNavigator({
  Components: {
    screen: LoginScreen,
    navigationOptions: ({navigation}) => ({
      header: <Header title="Login"/>,
    }),
  },
}, {
  cardStyle: {backgroundColor: "#EEE"},
  transitionConfig,
});


const RestaurantStack = createDrawerNavigator({
  HomeRestaurant: {
    screen: HomeRestaurant,
    navigationOptions: ({navigation}) => ({
      DrawerLabel: ({focused}) => (
        <Drawer focused={focused} screen="HomeRestaurant" title="Home"/>
      ),
    }),
  },
  RegisterWaiterScreen: {
    screen: RegisterWaiterScreen,
    navigationOptions: ({navigation}) => ({
      DrawerLabel: ({focused}) => (
        <Drawer focused={focused} screen="RegisterWaiterScreen" title="Cadastrar Garçom"/>
      ),
    }),
  },
  ListWaiterScreen: {
    screen: ListWaiterScreen,
    navigationOptions: ({navigation}) => ({
      DrawerLabel: ({focused}) => (
        <Drawer focused={focused} screen="ListWaiterScreen" title="Listar Garçons"/>
      ),
    }),
  },
  RegisterCategoryScreen: {
    screen: RegisterCategoryScreen,
    navigationOptions: ({navigation}) => ({
      DrawerLabel: ({focused}) => (
        <Drawer focused={focused} screen="RegisterCategoryScreen" title="Cadastrar Categoria"/>
      ),
    }),
  },
  ListCategoryScreen: {
    screen: ListCategoryScreen,
    navigationOptions: ({navigation}) => ({
      DrawerLabel: ({focused}) => (
        <Drawer focused={focused} screen="ListCategoryScreen" title="Listar Categoria"/>
      ),
    }),
  },
  RegisterProductScreen: {
    screen: RegisterProductScreen,
    navigationOptions: ({navigation}) => ({
      DrawerLabel: ({focused}) => (
        <Drawer focused={focused} screen="RegisterProductScreen" title="Cadastrar Produto"/>
      ),
    }),
  },
  ListProductScreen: {
    screen: ListProductScreen,
    navigationOptions: ({navigation}) => ({
      DrawerLabel: ({focused}) => (
        <Drawer focused={focused} screen="ListProductScreen" title="Listar Produtos"/>
      ),
    }),
  },
  OldOrdersScreen: {
    screen: OldOrdersScreen,
    navigationOptions: ({navigation}) => ({
      DrawerLabel: ({focused}) => (
        <Drawer focused={focused} screen="OldOrdersScreen" title="Pedidos Antigos"/>
      ),
    }),
  },
  Profile: {
    screen: ProfileStack,
    navigationOptions: (navOpt) => ({
      header: <Header back white transparent title=""/>,
      drawerLabel: ({focused}) => (
        <Drawer focused={focused} screen="Profile" title="Profile"/>
      ),
    }),
  },
  Settings: {
    screen: SettingsStack,
    navigationOptions: (navOpt) => ({
      header: <Header back white transparent title=""/>,
      drawerLabel: ({focused}) => (
        <Drawer focused={focused} screen="Settings" title="Settings"/>
      ),
    }),
  },
  Logout: {
    screen: OnboardingScreen,
    navigationOptions: (navOpt) => ({
      header: <Header back white transparent title=""/>,
      drawerLabel: ({focused}) => (
        <Drawer focused={focused} screen="AppStack" title="Logout"/>
      ),
    }),
  },
}, {
  cardStyle: {backgroundColor: "#eeeeee"},
  transitionConfig,
});


const ClientStack = createDrawerNavigator({
    Home: {
      screen: HomeScreen,
      navigationOptions: ({navigation}) => ({
        drawerLabel: ({focused}) => (
          <Drawer focused={focused} screen="Home" title="Cardápio"/>
        ),
      }),
    },
    Pro: {
      screen: ProScreen,
      navigationOptions: ({navigation}) => ({
        header: <Header back white transparent title=""/>,
        drawerLabel: ({focused}) => (
          <Drawer focused={focused} screen="Settings" title="Configurações"/>
        ),
        headerTransparent: true,
      }),
    },
    Logout: {
      screen: OnboardingScreen,
      navigationOptions: (navOpt) => ({
        header: <Header back white transparent title=""/>,
        drawerLabel: ({focused}) => (
          <Drawer focused={focused} screen="AppStack" title="Logout"/>
        ),
      }),
    },
  },
  {
    cardStyle: {
      backgroundColor: "#eeeeee", //this is the backgroundColor for the app
    },
    transitionConfig,
  });

const AppStack = createSwitchNavigator(
  {
    Onboarding: {
      screen: OnboardingScreen,
      navigationOptions: {
        drawerLabel: () => {
        },
      },
    },
    ClientStack: {
      screen: ClientStack,
      navigationOptions: {
        drawerLabel: ({focused}) => (
          <Drawer focused={focused} screen="Home" title="Home"/>
        ),
      },
    },
    RestaurantStack: {
      screen: RestaurantStack,
      navigationOptions: {
        drawerLabel: ({focused}) => (
          <Drawer focused={focused} screen="Home" title="Home"/>
        ),
      },
    },
    Login: {
      screen: LoginScreen,
      navigationOptions: (navOpt) => ({
        drawerLabel: ({focused}) => (
          <Drawer focused={focused} screen="Login" title="Login"/>
        ),
      }),
    },
  },
  Menu,
);

const AppContainer = createAppContainer(AppStack);
export default AppContainer;
