import React, { Component, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  ScrollView,
  Image,
  Alert,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

export default RegistrationAdmin = ({ navigation }) => {
  let [selectedImage, setSelectedImage] = React.useState(null);

  let openImagePickerAsync = async () => {
    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage({ localUri: pickerResult.uri });
  };

  // if (selectedImage !== null) {
  //   return (
  //     <View style={styles.container}>
  //       <Image
  //         source={{ uri: selectedImage.localUri }}
  //         style={styles.thumbnail}
  //       />
  //     </View>
  //   );
  // }

  return (
    <ScrollView>
      <View style={{ padding: 15 }}>
        {/* Title */}
        <View style={{ padding: 15 }} />
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 18, fontWeight: "700" }}> Title: </Text>

          <TextInput placeholder="Enter Title" style={styles.TextInput} />
        </View>
        {/* Address */}
        <View style={{ padding: 15 }} />
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 18, fontWeight: "700" }}> Address:</Text>

          <TextInput placeholder="Enter Address" style={styles.TextInput} />
        </View>
        {/* City */}
        <View style={{ padding: 15 }} />
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 18, fontWeight: "700" }}> City:</Text>

          <TextInput placeholder="Enter City" style={styles.TextInput} />
        </View>
        {/* Nearby University */}
        <View style={{ padding: 15 }} />
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 18, fontWeight: "700" }}>
            {" "}
            Nearby University:
          </Text>

          <TextInput
            placeholder="Enter Nearby University"
            style={styles.TextInput}
          />
        </View>
        {/* Zipcode */}
        <View style={{ padding: 15 }} />
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 18, fontWeight: "700" }}> Zipcode:</Text>

          <TextInput
            placeholder="Enter Zipcode"
            style={styles.TextInput}
            keyboardType="numeric"
          />
        </View>
        {/* description */}
        <View style={{ padding: 15 }} />
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 18, fontWeight: "700" }}> description:</Text>

          <TextInput placeholder="Enter Description" style={styles.TextInput} />
        </View>
        {/* Price */}
        <View style={{ padding: 15 }} />
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 18, fontWeight: "700" }}> Price:</Text>

          <TextInput
            placeholder="Enter Price"
            style={styles.TextInput}
            keyboardType="numeric"
          />
        </View>
        {/* Seater */}
        <View style={{ padding: 15 }} />
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 18, fontWeight: "700" }}> Seater:</Text>

          <TextInput
            placeholder="Enter Seater"
            style={styles.TextInput}
            keyboardType="numeric"
          />
        </View>
        {/* Bathroom */}
        <View style={{ padding: 15 }} />
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 18, fontWeight: "700" }}> Bathroom:</Text>

          <TextInput
            placeholder="Enter Bathroom"
            style={styles.TextInput}
            keyboardType="numeric"
          />
        </View>
        {/* Hostel Type */}
        <View style={{ padding: 15 }} />
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 18, fontWeight: "700" }}> Hostel Type:</Text>

          <TextInput
            placeholder="Enter Hostel Type:"
            style={styles.TextInput}
          />
        </View>
        {/* Food Facility */}
        <View style={{ padding: 15 }} />
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 18, fontWeight: "700" }}>
            {" "}
            Food Facility:
          </Text>

          <TextInput
            placeholder="Enter Food Facility:"
            style={styles.TextInput}
          />
        </View>
        {/* Laundary Facility */}
        <View style={{ padding: 15 }} />
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 18, fontWeight: "700" }}>
            {" "}
            Laundary Facility:
          </Text>

          <TextInput
            placeholder="Enter Laundary Facility"
            style={styles.TextInput}
          />
        </View>
        {/* Internet Facility  */}
        <View style={{ padding: 15 }} />
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 18, fontWeight: "700" }}>
            {" "}
            Internet Facility:
          </Text>

          <TextInput
            placeholder="Enter Internet Facility"
            style={styles.TextInput}
          />
        </View>
        {/* Date */}
        <View style={{ padding: 15 }} />
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 18, fontWeight: "700" }}> Date:</Text>

          <TextInput placeholder="Enter Date" style={styles.TextInput} />
        </View>
        {/* Add Image */}
        <View style={{ padding: 15 }} />
        <View style={{ padding: 15 }} />
        <View>
          <TouchableOpacity
            onPress={openImagePickerAsync}
            style={styles.button1}
          >
            <Text style={styles.buttonText}>Pick a photo</Text>
          </TouchableOpacity>
        </View>
        <View style={{ padding: 15 }} />
        {/* Register Button */}
        {/* <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.push("AddImg")}
        >
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "#fff" }}>
            Next
          </Text>
        </TouchableOpacity> */}

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            try {
              fetch("http://3.135.209.144:8000/ep/hostels-all", {
                method: "POST",
                mode: "no-cors",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  title: "Ahmed",
                  address: "Ahmed",
                  city: "RWP",
                  zipcode: "32",
                  price: "001121",
                  seater: "003",
                  bathrooms: "35",

                  photo_main: selectedImage.localUri,
                }),
              });
              Alert.alert("DONE");
            } catch (e) {
              console.log(e);
            }
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "#fff" }}>
            SUBMIT
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 305,
    height: 159,
    marginBottom: 20,
  },
  instructions: {
    color: "#888",
    fontSize: 18,
    marginHorizontal: 15,
    marginBottom: 10,
  },
  button1: {
    alignItems: "center",
    backgroundColor: "#228b22",
    padding: 12,
    width: 200,
    borderRadius: 80,
    left: 90,
    right: 55,
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
  container: {
    backgroundColor: "#fff",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#6f858c",
    padding: 12,
    width: 200,
    borderRadius: 80,
    left: 90,
    right: 55,
  },
  TextInput: {
    position: "absolute",
    borderBottomWidth: 1,
    left: 160,
    width: 200,
    fontSize: 14,
    margin: 0,
  },
});
