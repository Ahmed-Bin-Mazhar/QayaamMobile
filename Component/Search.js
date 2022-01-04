import React, { Component } from "react";
//import react in our code.

import {
  Text,
  StyleSheet,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";

// import HomeListings from "../Listings/HomeListings";

export default class Search extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.viewStyle}>
          <TextInput
            style={styles.textInputStyle}
            underlineColorAndroid="transparent"
            placeholder="Search City"
          />
          <View style={{ padding: 10 }} />
          <TextInput
            style={styles.textInputStyle}
            underlineColorAndroid="transparent"
            placeholder="Search Hostel Type"
          />
          <View style={{ padding: 10 }} />
          <TextInput
            style={styles.textInputStyle}
            underlineColorAndroid="transparent"
            placeholder="Search location"
          />
          <View style={{ position: "absolute", left: 140, right: 0, top: 193 }}>
            <TouchableOpacity
              //   onPress={this.setdata}
              // onPress={() => this.props.navigation.push("SearchData")}
              style={styles.Button1}
            >
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  justifyContent: "center",
                }}
              >
                search
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ padding: 20 }} />
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  viewStyle: {
    justifyContent: "center",
    flex: 1,
    marginTop: 40,
    padding: 16,
  },
  textStyle: {
    padding: 10,
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 10,
    borderRadius: 80,
    padding: 10,
    borderColor: "#6f858c",
    backgroundColor: "#FFFFFF",
  },
  Button1: {
    padding: 10,
    width: "50%",
    borderRadius: 80,
    backgroundColor: "#6f858c",
    justifyContent: "center",
    alignItems: "center",
    height: 40,
  },
});
