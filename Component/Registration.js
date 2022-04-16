import React, { Component, useState } from "react";
import Footer from "./Footer";

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  Picker,
  Alert,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export default Registration = ({ navigation }) => {
  const [name, setname] = useState("");
  const [number, setnumber] = useState("");
  const [passward, setpassward] = useState("");
  const [verifypassward, setverifypassward] = useState("");
  const [email, setemail] = useState("");
  const [city, setcity] = useState("");
  const [address, setaddress] = useState("");
  const [userType, setuserType] = useState("Realtor");

  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          backgroundColor: "#fff",
          padding: 5,
          flex: 1,
        }}
      >
        <Image
          source={require("../Img/logo1.png")}
          style={{
            width: 200,
            height: 200,
            alignSelf: "center",
          }}
        />
        <View>
          {/* Name */}
          <View style={{ padding: 10 }}>
            <Feather name="user" size={20} color="black">
              <Text> Name:</Text>
            </Feather>
            <TextInput
              placeholder="Enter Name"
              style={styles.TextInput}
              onChangeText={(text) => setname(text)}
            />
          </View>

          {/* Number */}
          <View style={{ padding: 10 }}>
            <Feather name="phone-call" size={20} color="black">
              <Text> Number:</Text>
            </Feather>
            <TextInput
              keyboardType="numeric"
              placeholder="Enter Number"
              style={styles.TextInput}
              onChangeText={(text) => setnumber(text)}
            />
          </View>

          {/* Emaill */}
          <View style={{ padding: 10 }}>
            <Fontisto name="email" size={20} color="black">
              <Text> Email:</Text>
            </Fontisto>
            <TextInput
              placeholder="Enter Email"
              style={styles.TextInput}
              onChangeText={(text) => setemail(text)}
            />
          </View>

          {/* Password */}
          <View style={{ padding: 10 }}>
            <Feather name="lock" size={20} color="black">
              <Text> Password: </Text>
              <Text style={{ color: "red" }}>*</Text>
            </Feather>
            <TextInput
              placeholder="Enter Password"
              style={styles.TextInput}
              onChangeText={(text) => setpassward(text)}
            />
          </View>

          {/* Verify Password */}
          <View style={{ padding: 10 }}>
            <Feather name="lock" size={20} color="black">
              <Text> Verify Password: </Text>
              <Text style={{ color: "red" }}>*</Text>
            </Feather>
            <TextInput
              placeholder="Verify Password"
              style={styles.TextInput}
              onChangeText={(text) => setverifypassward(text)}
            />
          </View>

          {/* City */}
          <View style={{ padding: 10 }}>
            <Ionicons name="location-outline" size={20} color="black">
              <Text> Enter City: </Text>
            </Ionicons>
            <TextInput
              placeholder="Enter City"
              style={styles.TextInput}
              onChangeText={(text) => setcity(text)}
            />
          </View>
          {/* address */}
          <View style={{ padding: 10 }}>
            <Ionicons name="location-outline" size={20} color="black">
              <Text> Enter Address: </Text>
            </Ionicons>
            <TextInput
              placeholder="Enter Address"
              style={styles.TextInput}
              onChangeText={(text) => setaddress(text)}
            />
          </View>
          {/* User Type */}
          <View style={{ padding: 10, flexDirection: "row" }}>
            <Ionicons name="person-add" size={20} color="black">
              <Text> Select Account Type: </Text>
            </Ionicons>
            <Picker
              style={{
                height: 30,
                width: 150,
              }}
              selectedValue={userType}
              onValueChange={(itemValue, itemIndex) =>
                (setuserType = itemValue)
              }
            >
              <Picker.Item label="Tenant" value="Tenant" />
              <Picker.Item label="Realtor" value="Realtor" />
            </Picker>
          </View>

          {/* Upload your image */}
          <View style={{ padding: 10 }}>
            <Feather name="image" size={20} color="black">
              <Text> Upload your image: </Text>
            </Feather>
            <View style={{ padding: 10, alignSelf: "center" }}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => this.props.navigation.navigate("AddImg")}
              >
                <Text
                  style={{ fontSize: 16, fontWeight: "bold", color: "#fff" }}
                >
                  Add Image
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      {/* Register Button */}
      <View style={{ paddingBottom: 15, padding: 10, alignSelf: "center" }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            if (passward == verifypassward) {
              try {
                fetch("https://qayaamapi.herokuapp.com/accounts-all", {
                  method: "POST",
                  mode: "no-cors",
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    name: name,
                    email: email,
                    phone: number,
                    password: passward,
                    address: address,
                    city: city,
                    user_type: userType,
                  }),
                });
              } catch (e) {
                console.log(e);
              }
              navigation.navigate("Home");
            } else {
              Alert.alert("Your passward is not valid");
            }
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "#fff" }}>
            SUBMIT
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <Footer />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#6f858c",
    padding: 12,
    width: 240,
    borderRadius: 80,
  },
  TextInput: {
    height: 40,
    margin: 5,
    borderBottomWidth: 1,
    color: "black",
  },
});
