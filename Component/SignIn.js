import React, { useContext, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";

import Spinner from "react-native-loading-spinner-overlay";
import { AuthContext } from "../context/AuthContext";
import Footer from "./Footer";

function SignIn({ navigation }) {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  // const { login } = useContext(AuthContext);
  const { login } = useContext(AuthContext);

  // const handleSubmitPress = async () => {
  //   // Sign In code Here ...
  //   if (username.trim() && password.trim()) {
  //     await fetch(
  //       `https://qayaamapi.herokuapp.com/accounts-all/sign-in?email=${email}&password=${password}`
  //     )
  //       .then((response) => response.json())
  //       .then((resJson) => {
  //         console.log("Successfull : " + JSON.stringify(resJson));
  //       })
  //       .catch((error) =>
  //         console.log("there is a error on internet : " + error)
  //       );
  //   }
  // };

  return (
    <ScrollView>
      <View style={styles.Container}>
        <Image
          source={require("../Img/logo1.png")}
          style={{
            width: 200,
            height: 200,
            alignSelf: "center",
          }}
        />
        {/* Username & Passward & Registration */}
        <View style={styles.Container2}>
          <Text
            style={{ textAlign: "center", fontSize: 20, fontWeight: "700" }}
          >
            Log in with your Email and Passward
          </Text>
          {/* Username */}
          <View style={{ flexDirection: "column", paddingTop: 10 }}>
            <Text style={styles.Text}>Username:</Text>
            <TextInput
              placeholderTextColor="black"
              placeholder="Enter Email"
              style={styles.TextInput}
              color="#000"
              //   secureTextEntry={PassShow}
              onChangeText={(text) => setEmail(text)}
            />
          </View>
          {/* Passward */}
          <View style={{ flexDirection: "column", paddingTop: 10 }}>
            <Text style={styles.Text}>Passward:</Text>
            <TextInput
              placeholderTextColor="black"
              placeholder="Enter Password"
              style={styles.TextInput}
              color="#000"
              //   secureTextEntry={PassShow}
              onChangeText={(text) => setPassword(text)}
            />
          </View>
          {/* Button */}
          <View
            style={{
              flexDirection: "column",
              paddingTop: 10,
              alignSelf: "center",
            }}
          >
            <TouchableOpacity
              style={styles.Button}
              // onPress={handleSubmitPress}
              onPress={() => {
                login(email, password);
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: "bold", color: "#fff" }}>
                SIGN IN
              </Text>
            </TouchableOpacity>
          </View>
          {/* Registration */}
          <View
            style={{
              flexDirection: "row",
              paddingTop: 10,
              alignSelf: "center",
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "700" }}>
              To to create a new account
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("Registration")}
            >
              <Text
                style={{ fontSize: 16, fontWeight: "500", color: "#01688c" }}
              >
                {" "}
                Register Now
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Container: {
    padding: 15,
    marginTop: 140,
  },
  Container2: {
    padding: 10,
  },
  Text: {
    fontSize: 20,
    fontWeight: "700",
  },
  TextInput: {
    height: 40,
    margin: 5,

    borderBottomWidth: 1,
    color: "black",
  },
  Button: {
    alignItems: "center",
    backgroundColor: "#6f858c",
    padding: 12,
    width: 200,
    borderRadius: 80,
  },
});

export default SignIn;
