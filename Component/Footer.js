import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default class Footer extends Component {
  render() {
    return (
      <View>
        <View style={styles.footer}>
          <MaterialCommunityIcons name="home" size={50} color="#fff" />
          <Text
            style={{
              fontSize: 20,
              color: "#fff",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Qayaam’s Services
          </Text>
          <Text style={styles.footertext}>
            Qayaam is a platform to provide users find an accommodation of their
            choice. The accommodation details come from various proprietors and
            owners. The user can search their preferable accommodation and
            contact directly with the proprietor/owner to lock the idea.
          </Text>
        </View>

        <View style={styles.mainfooter}>
          <Text style={{ color: "#fff" }}>Copyright © FURC</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "#758298",
    height: 160,
    padding: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  mainfooter: {
    backgroundColor: "#6f858c",
    height: 30,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  },
  footertext: {
    textAlign: "justify",
    color: "#fff",
    width: 375,
    height: 90,
  },
});
