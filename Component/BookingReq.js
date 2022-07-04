//This is an example code to make a Star Rating Bar //
import React, { Component, useContext } from "react";
//import react in our code.

import FeebackView from "./FeebackView";
//import all the components we are going to use.
import {
  ActivityIndicator,
  View,
  FlatList,
  ScrollView,
  Text,
  StyleSheet,
  Picker,
} from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import BookingView from "./BookingView";
import { AuthContext } from "../context/AuthContext";
export default class BookingReq extends Component {
  static contextType = AuthContext;
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,

      dataSource: {},
      list_id: this.props.route.params.list_id,
    };
  }
  handleReview = (text) => {
    this.setState({ review: text });
  };

  componentDidMount() {
    fetch(
      `https://qayaamapi.herokuapp.com/bookings-all/specific-listing-booking?list_id=${this.state.list_id}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",

          Authorization: `Token  ${this.context.userInfo.token}`,
        },
      }
    )
      .then((response) => response.json())
      .then((responseJson) => {
        this.arrayholder = responseJson;

        this.setState({
          isLoading: false,

          dataSource: responseJson,
        });
        console.log(this.state.list_id);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  ListViewItemSeparator = () => {
    return (
      <View
        style={{
          height: 0.3,
          width: "90%",
          backgroundColor: "#fff",
        }}
      />
    );
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, paddingTop: 0 }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <ScrollView>
        <FlatList
          data={this.state.dataSource}
          renderItem={(data) => (
            <BookingView {...data.item} navigation={this.props.navigation} />
          )}
          ItemSeparatorComponent={this.ListViewItemSeparator}
          keyExtractor={(item) => item.id}
          enableEmptySections={true}
          style={{ marginTop: 10 }}
        />
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  listItemContainer: {
    borderStyle: "solid",
    borderColor: "#fff",
    borderBottomWidth: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 15,
  },
  textInputStyle: {
    textAlign: "center",
    fontStyle: "italic",
    padding: 8,
    width: "90%",
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
    height: 70,

    borderWidth: 2,
    paddingLeft: 10,
    borderColor: "#6f858c",
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  Button: {
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#6f858c",
    padding: 12,
    width: 240,
    borderRadius: 80,
    left: 62,
  },
});
