import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import Footer from "./Footer";

export default function Realtor({ navigation }) {
  return (
    <ScrollView>
      <View>
        <View style={{ padding: 5 }}>
          <View style={styles.Icon}>
            <Image
              source={require("../Img/logo.png")}
              style={{
                width: 150,
                height: 150,
                position: "absolute",

                left: 20,
              }}
            />
            <Text
              style={{
                justifyContent: "center",
                alignItems: "center",
                fontSize: 26,
                fontWeight: "600",
                color: "#fff",
                position: "absolute",
                fontStyle: "italic",
                top: 10,
                right: 120,
              }}
            >
              WELCOME TO
            </Text>
            <Text
              style={{
                justifyContent: "center",
                alignItems: "center",
                fontSize: 26,
                fontWeight: "600",
                color: "#fff",
                position: "absolute",
                top: 40,
                right: 30,
                fontStyle: "italic",
              }}
            >
              REALTOR PANEL
            </Text>
          </View>
        </View>
        {/* --------------------------------------------------------- */}
        <View
          style={{
            padding: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.push("Add_Listings")}
            style={styles.Button1}
          >
            <Text
              style={{
                color: "white",
                textAlign: "center",
                justifyContent: "center",
                fontSize: 20,
              }}
            >
              Add Listing
            </Text>
          </TouchableOpacity>
        </View>
        {/* --------------------------------------------------------- */}
        <View
          style={{
            padding: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.push("View_Listings")}
            style={styles.Button1}
          >
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontSize: 20,
                justifyContent: "center",
              }}
            >
              View Listing
            </Text>
          </TouchableOpacity>
        </View>
        {/* --------------------------------------------------------- */}
        <View
          style={{
            padding: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.push("Rate_Tenant")}
            style={styles.Button1}
          >
            <Text
              style={{
                color: "white",
                textAlign: "center",
                justifyContent: "center",
                fontSize: 20,
              }}
            >
              Rate Tenant
            </Text>
          </TouchableOpacity>
        </View>
        {/* --------------------------------------------------------- */}
        <View
          style={{
            padding: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.push("BookingReq")}
            style={styles.Button1}
          >
            <Text
              style={{
                color: "white",
                textAlign: "center",
                justifyContent: "center",
                fontSize: 20,
              }}
            >
              Booking Rquest
            </Text>
          </TouchableOpacity>
        </View>
        {/* --------------------------------------------------------- */}
        <View>
          <Footer />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Button1: {
    paddingTop: 20,
    width: "60%",
    margin: 3,
    borderRadius: 120,
    backgroundColor: "#6f858c",
    paddingBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  Icon: {
    justifyContent: "center",
    // textAlign: "center",
    borderTopRightRadius: 100,
    borderBottomRightRadius: 100,
    // borderRadius: 100,
    // flexDirection: "column",
    paddingBottom: 110,
    // alignItems: "center",
    backgroundColor: "#515B5F",
  },
});
