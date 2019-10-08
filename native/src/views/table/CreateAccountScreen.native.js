import React from "react";
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert,} from "react-native";
import ScreenWrapper from "../components/ScreenWrapper.native";


const CreateAccountScreen = (props) => {
  const [name, setName] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const createAccount = () => {
    return fetch("https://undefined.execute-api.us-east-1.amazonaws.com/dev/menu", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        username: username,
        password: password,
      })
    }).then((res) => {
      Alert.alert("Cliente cadastrado!");
      console.log(res);
    }).catch((err) => {
      Alert.alert("Erro ao cadastrar o cliente");
      console.log(err);
    })

  };

  return (
    <ScreenWrapper>
      <ScrollView>
        <View style={styles.pageContent}>
          <View>
            <Text>Name</Text>
            <TextInput value={name} onChange={setName}/>
          </View>
          <View>
            <Text>Usuário</Text>
            <TextInput value={username} onChange={setUsername}/>
          </View>
          <View>
            <Text>Senha</Text>
            <TextInput value={password} onChange={setPassword}/>
          </View>


          <TouchableOpacity
            onPress={() => {
              createAccount()
                .then(() => {
                  props.navigation.navigate("HomeTable");
                });
            }}
          >
            <Text>
              Criar nova conta
            </Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

CreateAccountScreen.navigationOptions = {
  title: "CreateAccountScreen",
};

const styles = StyleSheet.create({
  pageContent: {
    flex: 1,
    justifyContent: "center",
  },
});

CreateAccountScreen.propTypes = {};

export default CreateAccountScreen;
