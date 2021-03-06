import React from "react";
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert,} from "react-native";
import ScreenWrapper from "../components/ScreenWrapper.native";



const CreateWaiterScreen = (props) => {
  const [name, setName] = React.useState("");

  const createAccount = () => {
    return fetch("https://kcyst4l620.execute-api.us-east-1.amazonaws.com/dev/category/create", {
      method: "POST",
      body: JSON.stringify({
        name: name,
      })
    }).then((res) => {
      Alert.alert("Cliente cadastrado com sucesso!");
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
            <TextInput value={name} onChangeText={setName}/>
          </View>


          <TouchableOpacity
            style={theme.button}
            onPress={() => {
              createAccount();
            }}
          >
            <Text>
              Criar nova conta
            </Text>
          </TouchableOpacity>


          <TouchableOpacity
            style={theme.button}
            onPress={() => {
              props.navigation.navigate("HomeRestaurantScreen");
            }}
          >
            <Text>
              Voltar
            </Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};
