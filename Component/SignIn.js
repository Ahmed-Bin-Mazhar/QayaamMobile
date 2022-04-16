import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";

import Footer from "../Component/Footer";

function SignIn({ navigation }) {
  // hide && show Password
  //   const [PassShow, setPassShow] = useState(true);

  //   Text empty alert
  //   const [usernameshow, setusernameshow] = useState(false);
  //   const [passwordshow, setpasswordshow] = useState(false);

  //   // Get a Textinput
  //   const [username, setuserName] = useState("");
  //   const [password, setPassword] = useState("");

  //   const handleSubmitPress = async () => {
  //     //username check
  //     if (!username.trim()) {
  //       setusernameshow(true);
  //     } else {
  //       setusernameshow(false);
  //     }
  //     //Password check
  //     if (!password.trim()) {
  //       setpasswordshow(true);
  //     } else {
  //       setpasswordshow(false);
  //     }

  // Sign In code Here ...
  //      if (username.trim() && password.trim()) {
  //        await fetch("http://3.135.209.144:8000/ep/login_user", {
  //          method: "POST", //Login
  //          headers: {
  //            Accept: "application/json",
  //            "Content-Type": "application/json",
  //          },
  //          body: JSON.stringify({
  //            username: username,
  //            password: password,
  //          }),
  //        })
  //          .then((res) => res.json()) //resposne
  //          .then((resJson) => {
  //            console.log("Successfull : " + JSON.stringify(resJson));
  //            alert("Successful : " + JSON.stringify(resJson));
  //          })
  //          .catch((error) =>
  //            console.log("there is a error on internet : " + error)
  //          );
  //      }
  //    };

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
              // onChangeText={(text) => setPassword(text)}
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
              // onChangeText={(text) => setPassword(text)}
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
              //   onPress={handleSubmitPress}
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
      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Container: {
    padding: 5,
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
