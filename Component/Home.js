import React, { Component, PureComponent } from "react";
import {
  View,
  FlatList,
  TouchableOpacity,
  Text,
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  TextInput,
  Image,
} from "react-native";
import Footer from "./Footer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import HomeListings from "../Listings/HomeListings";

class Home extends PureComponent {
  constructor(props) {
    super(props);

    this.state = { isLoading: true, text: "" };
    this.arrayholder = [];
  }
  componentDidMount() {
    return fetch("http://3.135.209.144:8000/ep/hostels-all")
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson,
          },
          function () {
            this.arrayholder = responseJson;
          }
        );
      })
      .catch((error) => {
        console.error(error);
      });
  }
  SearchFilterFunction(text) {
    const newData = this.arrayholder.filter(function (item) {
      const itemData = item.title ? item.title.toUpperCase() : "".toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      dataSource: newData,
      text: text,
    });
  }
  render() {
    return (
      <ScrollView>
        <View style={styles.viewStyle}>
          <View style={styles.header}>
            <TextInput
              style={styles.textInputStyle}
              onChangeText={(text) => this.SearchFilterFunction(text)}
              //value={this.state.text}
              placeholder="Search for Residence"
            ></TextInput>
          </View>

          <FlatList
            data={this.state.dataSource}
            ItemSeparatorComponent={this.ListViewItemSeparator}
            renderItem={(data) => (
              <HomeListings {...data.item} navigation={this.props.navigation} />
            )}
            keyExtractor={(item) => item.name}
            enableEmptySections={true}
            style={{ marginTop: 10 }}
          />
        </View>
        <Footer />
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    padding: 50,
    backgroundColor: "#6f858c",
    borderBottomRightRadius: 70,
    borderBottomLeftRadius: 70,
  },

  viewStyle: {
    justifyContent: "center",
    flex: 1,
    marginTop: 0,
    padding: 0,
    backgroundColor: "#fff",
  },
  textStyle: {
    padding: 10,
  },
  textInputStyle: {
    position: "absolute",
    bottom: 25,
    left: 50,
    right: 50,
    textAlign: "center",
    fontStyle: "italic",
    padding: 8,
    borderWidth: 1,
    paddingLeft: 10,
    borderColor: "#009688",
    backgroundColor: "#fff",
    borderRadius: 80,
  },
});
export default Home;
