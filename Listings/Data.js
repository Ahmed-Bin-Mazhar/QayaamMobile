import React, { Component, useState, useEffect } from "react";

import {
  Image,
  Text,
  View,
  StyleSheet,
  ScrollView,
  ImageBackground,
  ImageBackgroundBase,
  TouchableOpacity,
  Alert,
  Linking,
  Platform,
  Button,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Footer from "../Component/Footer";
// import GridImageView from "react-native-grid-image-viewer";
// import GridImageViewer from "react-native-grid-image-viewer";

export default Data = ({ route }) => {
  const id = route.params.id;
  const title = route.params.title;
  const location = route.params.location;
  const address = route.params.address;
  const city = route.params.city;
  const zipcode = route.params.zipcode;
  const description = route.params.description;
  const price = route.params.price;
  const seater = route.params.seater;
  const bathrooms = route.params.bathrooms;
  const hostel_type = route.params.hostel_type;
  const available = route.params.available;
  const photo_main = route.params.photo_main;
  const photo_1 = route.params.photo_1;
  const photo_2 = route.params.photo_2;
  const photo_3 = route.params.photo_3;
  const photo_4 = route.params.photo_4;
  const photo_5 = route.params.photo_5;
  const photo_6 = route.params.photo_6;
  const is_published = route.params.is_published;
  const list_date = route.params.list_date;
  const owner = route.params.owner;
  const nearby_universities = route.params.nearby_universities;
  const utilities = route.params.utilities;

  const [usercontact, setusercontact] = useState();
  const [abcdef, setuserid] = useState();
  const [username, setusername] = useState();
  useEffect(() => {
    fetch(`http://3.135.209.144:8000/ep/owners-all/${owner}`)
      .then((resp) => resp.json())
      .then((data) => {
        setuserid(data.user), setusercontact(data.phone);

        fetch(`http://3.135.209.144:8000/ep/pusers-all/${data.user}`)
          .then((resp) => resp.json())
          .then((data) => {
            setusername(data.username);
          });
      })

      .catch((error) => {
        console.error(error);
      });
  }, []);

  // useEffect(() => {
  //   console.log(abcdef);
  //   fetch(`http://3.135.209.144:8000/ep/pusers-all/${abcdef}`)
  //     .then((resp) => resp.json())
  //     .then((data) => {
  //       setusername(data.username);
  //     });
  // }, []);

  dialCall = (number) => {
    let phoneNumber = "";
    if (Platform.OS === "android") {
      phoneNumber = `tel:${number}`;
    } else {
      phoneNumber = `telprompt:${number}`;
    }
    Linking.openURL(phoneNumber);
  };

  return (
    <ScrollView>
      <View>
        <Image
          source={{
            uri: photo_main,
          }}
          style={styles.picture}
        />
      </View>

      <View style={styles.container}>
        {/* Data */}
        <View>
          <View style={styles.heading}>
            <View>
              <Text style={styles.title}>{title}</Text>
              <Text style={{ fontSize: 18 }}>
                {hostel_type}
                {"\n"}
              </Text>
              {/* <Text style={styles.addresshead}>Address</Text> */}
            </View>
          </View>
          <View style={styles.addresshead}>
            <Ionicons name="location" size={22} color="#000000" style={{}}>
              <Text style={{ fontSize: 16 }}>{address}</Text>
            </Ionicons>
            <Text style={styles.address}>
              {city} {location}
            </Text>
          </View>

          <Text style={styles.price}>
            Rs: {price}
            {"/-"}
          </Text>
        </View>
        {/* Nearest Institution
         */}
        <View style={{ paddingTop: 30 }} />
        <View style={styles.institutes}>
          <Text style={{ fontSize: 20, fontWeight: "700" }}>
            Nearby Institutions:
          </Text>
          <Text style={{ fontSize: 16 }}>{nearby_universities}</Text>
        </View>
        {/* Details */}
        <View style={{ padding: 15 }} />
        <View style={styles.details}>
          <Text style={{ fontSize: 20, fontWeight: "700" }}>Details: </Text>
          <View
            style={{
              flexDirection: "column",
              paddingLeft: 25,
            }}
          >
            <View
              style={{ flexDirection: "row", justifyContent: "space-evenly" }}
            >
              <MaterialCommunityIcons
                name="bed"
                size={20}
                color="#000000"
                style={{ position: "absolute", left: 70 }}
              >
                {" "}
                Seater
              </MaterialCommunityIcons>

              <Text style={{ fontSize: 18 }}>
                {"                    "}|{"       "}
                {seater}
              </Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-evenly" }}
            >
              <MaterialCommunityIcons
                name="shower"
                size={20}
                color="#000000"
                style={{ position: "absolute", left: 70 }}
              >
                {" "}
                Bathroom
              </MaterialCommunityIcons>

              <Text style={{ fontSize: 18 }}>
                {"                    "}|{"       "}
                {bathrooms}
              </Text>
            </View>
          </View>
        </View>
        {/*  */}

        <View style={{ padding: 15 }} />
        <View style={styles.details}>
          <Text style={{ fontSize: 20, fontWeight: "700" }}>Utilities : </Text>
          <View
            style={{
              flexDirection: "column",
              paddingLeft: 25,
            }}
          >
            <Text>{utilities}</Text>
          </View>
        </View>
        {/*  */}
        {/* Discription */}
        <View style={{ padding: 15 }} />
        <View style={styles.discription}>
          <Text style={{ fontSize: 20, paddingBottom: 5, fontWeight: "700" }}>
            Discription:{" "}
          </Text>

          <Text style={{ fontSize: 16 }}>{description}</Text>
        </View>
        {/* Realtor */}
        <View style={{ paddingTop: 30 }} />
        <View style={styles.realtor}>
          <Image
            style={styles.picturerealtor}
            source={require("../Img/logo.png")}
          />
          <Text
            style={{
              position: "absolute",
              left: 120,
              top: 25,
              fontSize: 16,
              fontWeight: "700",
            }}
          >
            {username}
          </Text>
          <Text
            style={{ position: "absolute", left: 120, top: 45, fontSize: 14 }}
          >
            Realtor
          </Text>
          {/* Call Button */}
          <TouchableOpacity
            style={{
              position: "absolute",
              right: 20,
              top: 16,
              fontSize: 14,
              borderWidth: 2,
              borderRadius: 80,
              paddingTop: 3,
              paddingBottom: 3,
              paddingLeft: 3,
              paddingRight: 3,
              backgroundColor: "#183563",
            }}
            onPress={() => this.dialCall(usercontact)}
          >
            <Ionicons name="md-call-sharp" size={28} color="#fff" />
          </TouchableOpacity>
          <Text
            style={{
              position: "absolute",
              right: 12,
              bottom: 25,
              fontSize: 14,
            }}
          >
            Published On:
          </Text>
          <Text
            style={{
              position: "absolute",
              right: 12,
              bottom: 10,
              fontSize: 14,
            }}
          >
            {list_date}
          </Text>
        </View>
      </View>
      <View style={{ paddingTop: 30 }}>
        <Footer />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 4,
    paddingRight: 4,
    paddingTop: 0,
    paddingBottom: 0,
  },
  title: {
    fontSize: 26,
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  heading: {
    flexDirection: "row",
    paddingTop: 12,
  },
  price: {
    fontSize: 23,
    flexDirection: "column",
    position: "absolute",
    fontWeight: "700",
    right: 10,
    top: 18,
  },
  picture: {
    height: 400,
    width: 393,
    paddingLeft: 2,
    paddingRight: 2,
  },
  addresshead: {
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 15,
    borderColor: "#000000",
    borderRadius: 10,
    borderWidth: 2,
    flexDirection: "column",
  },
  address: {
    fontSize: 16,
    left: 23,
  },
  details: {
    paddingTop: 8,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 15,
    borderColor: "#000000",
    borderRadius: 10,
    borderWidth: 2,
    flexDirection: "column",
  },
  discription: {
    paddingTop: 8,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 15,
    borderColor: "#000000",
    borderRadius: 10,
    borderWidth: 2,
  },
  realtor: {
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 15,
    borderColor: "#000000",
    borderRadius: 10,
    borderWidth: 2,
    flexDirection: "row",
  },
  picturerealtor: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  institutes: {
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 15,
    borderColor: "#000000",
    borderRadius: 10,
    borderWidth: 2,
    flexDirection: "column",
  },
});
