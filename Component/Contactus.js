import React, { Component } from "react";
import { StyleSheet, View, Text, ScrollView, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Footer from "./Footer";
import { Ionicons } from "@expo/vector-icons";

export default class ContactUs extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.Icon}>
          <Image
            source={require("../Img/logo1.png")}
            style={{
              width: 200,
              height: 200,
              left: 20,
              alignContent: "center",
            }}
          />
          {/* <MaterialCommunityIcons name="home" size={150} color="black" /> */}
        </View>

        <View style={styles.page}>
          {/* Give Us a Call */}
          <View style={styles.container1}>
            <Text style={styles.heading}>GIVE US A CALL</Text>
            <Text style={styles.text}>We are happy to help you out</Text>
          </View>

          <View style={styles.call}>
            <Ionicons
              name="md-call-sharp"
              size={20}
              color="blue"
              paddingBottom="20"
            >
              {" "}
              +923360585568
            </Ionicons>
          </View>
          <View style={styles.address}>
            <Ionicons name="home" size={20} color="green">
              {" "}
              FURC Dept of Software Engineering
            </Ionicons>
          </View>
          <View style={styles.mail}>
            <Ionicons name="mail" size={20} color="red">
              {" "}
              abdullah034384841@gmail.com
            </Ionicons>
          </View>
        </View>

        <View style={{ paddingTop: 50 }}>
          <Footer />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  call: {
    justifyContent: "space-evenly",
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingTop: 88,
  },
  address: {
    justifyContent: "space-evenly",
    flexDirection: "row",
    paddingTop: 30,
    justifyContent: "flex-start",
  },
  mail: {
    justifyContent: "space-evenly",
    flexDirection: "row",
    paddingTop: 30,
    justifyContent: "flex-start",
  },

  Icon: {
    justifyContent: "center",
    textAlign: "center",
    paddingTop: 30,
    flexDirection: "column",
    paddingBottom: 30,
    alignItems: "center",
  },
  page: {
    padding: 10,
    flex: 1,
    paddingBottom: 5,
  },
  text: {
    textAlign: "center",
    fontWeight: "300",
    fontSize: 20,
  },
  heading: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
  container1: {
    paddingTop: 40,
    paddingBottom: 20,
  },
  container2: {
    paddingTop: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderColor: "#CBCAD1",
    backgroundColor: "#f0f8ff",
  },
  title: {
    textAlign: "center",
    flexDirection: "column",
    color: "white",
    fontSize: 20,
    justifyContent: "center",
    fontWeight: "bold",
  },
  header: {
    backgroundColor: "#10284e",
    height: 100,
    paddingTop: 38,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  },
});
