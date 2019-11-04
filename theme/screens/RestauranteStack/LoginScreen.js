import React from "react";
import {
  Alert,
  Dimensions,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,ImageBackground,
} from "react-native";
import ScreenWrapper from "../../components/ScreenWrapper.native";
import { Block, Button, Input, theme } from "galio-framework";
import { Images } from '../../constants/';
const { height, width } = Dimensions.get('screen');
import { LinearGradient } from 'expo-linear-gradient';
const Login = props => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  return ( 
          
    <Block flex>
            <ImageBackground
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQmAPaZNZdvtX9gyUM3ebCmRdfN_FXyTOafSDcnBxnrrTrra2ME' }}
            style={{ height: height / 2, width, zIndex: 1 }}
          >
          <LinearGradient
            style={styles.gradient}
            colors={['rgba(0,0,0,0)', 'rgba(0,0,0,1)']} />
          </ImageBackground>
      <KeyboardAvoidingView behavior="height" enabled style={{  alignItems: 'baseline',marginLeft:20 }} > 
        <Input style={styles.textUsuario} label={"Usuário"} value={username} onChangeText={setUsername}/>
        <Input style={styles.text} label={"Senha"} value={password} onChangeText={setPassword}/>

        <Button style={{  }}
          center
          onPress={() => {
            props.navigation.navigate("HomeRestaurant");
          }}
        >
          Entrar
        </Button>


        <Button style={{ marginTop:5}}
             center
             onPress={() => {
               props.navigation.navigate("Onboarding");
             }}
        >
          Voltar
        </Button>
      </KeyboardAvoidingView>
    </Block>
  );
};


const styles = StyleSheet.create({
  pageContent: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: "center",
    marginTop:15,
    height: Dimensions.get("window").height,
    backgroundColor: "#c800ff",
  },
  center: {
    
    marginVertical: 10,
    marginHorizontal: 20,
    backgroundColor: "#5e006f",
  },
  textUsuario: {
    
    width:250,
    marginTop: 15,
    paddingTop:23,
  },
  text:{
    
    width:250,
    marginBottom:15,
  },
});

export default Login;
