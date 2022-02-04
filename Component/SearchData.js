import React, { Component } from "react";
//import react in our code.

import {
  Text,
  View,
  FlatList,
  TextInput,
  ActivityIndicator,
  Alert,
  ScrollView,
  StyleSheet,
} from "react-native";
import HomeListings from "../Listings/HomeListings";
import Footer from "./Footer";

export default SearchData = ({ route }) => {
  state = {
    data: route.params.dataSource,
  };

  return (
    <View>
      <ScrollView>
        <View>
          <FlatList
            data={this.state.data}
            renderItem={(data) => (
              <HomeListings {...data.item} navigation={this.props.navigation} />
            )}
            keyExtractor={(item) => item.name}
          />
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    padding: 80,
    backgroundColor: "#10284e",
    borderBottomRightRadius: 70,
    borderBottomLeftRadius: 70,
  },
  TopText: {
    color: "#fff",
    fontStyle: "italic",
    fontSize: 13,
    position: "absolute",
    left: 100,
    right: 100,
    top: 13,
  },
  icon: {
    position: "absolute",
    left: 50,
    top: 0,
  },
});
