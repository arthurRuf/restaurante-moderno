import React from "react";
import { Dimensions, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import ScreenWrapper from "../../components/ScreenWrapper.native";
import { Button, theme } from "galio-framework";


const Login = props => {

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <ScreenWrapper>
      <ScrollView>
        <View style={styles.pageContent}>
          <View style={styles.center}>
            <View>
              <Text>Usuário</Text>
              <TextInput value={username} onChange={setUsername}/>
            </View>
            <View>
              <Text>Senha</Text>
              <TextInput value={password} onChange={setPassword}/>
            </View>

            <Button
              style={theme.button}
              onPress={() => {
                props.navigation.navigate("HomeRestaurant");
              }}
            >
              <Text>
                Entrar
              </Text>
            </Button>

            <TouchableOpacity
              style={theme.button}
              onPress={() => {

                props.navigation.navigate("CreateCustomerScreen", {userId: undefined});
              }}
            >
              <Text>
                Criar uma nova conta
              </Text>
            </TouchableOpacity>


          </View>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};


const styles = StyleSheet.create({
  pageContent: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: "center",
    height: Dimensions.get("window").height,
    backgroundColor: "#c800ff",
  },
  center: {
    marginVertical: 10,
    marginHorizontal: 20,
    backgroundColor: "#5e006f",
  },
});

export default Login;
