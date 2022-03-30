//This is an example code to make a Star Rating Bar //
import React, { Component } from "react";
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
} from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
export default class Feedback extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      review: "",
      dataSource: {},
    };
  }

  handleReview = (text) => {
    this.setState({ review: text });
  };

  componentDidMount() {
    fetch("https://qayaamapi.herokuapp.com/listingfeedbacks-all?list_id=1", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((responseJson) => {
        //console.log(responseJson);
        this.arrayholder = responseJson;

        this.setState({
          isLoading: false,

          dataSource: responseJson,
        });
        console.log(this.state.dataSource);
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
            <FeebackView {...data.item} navigation={this.props.navigation} />
          )}
          ItemSeparatorComponent={this.ListViewItemSeparator}
          keyExtractor={(item) => item.id}
          enableEmptySections={true}
          style={{ marginTop: 10 }}
        />
        <View>
          <View style={styles.listItemContainer}>
            <TextInput
              style={styles.textInputStyle}
              underlineColorAndroid="transparent"
              placeholderTextColor="#000"
              autoCapitalize="none"
              onChangeText={(text) => this.handleReview(text)}
              placeholder="Give us your review...."
            />

            <View style={{ padding: 5 }} />
            <TouchableOpacity
              style={styles.Button}
              onPress={() => {
                try {
                  fetch(
                    "https://qayaamapi.herokuapp.com/listingfeedbacks-all",
                    {
                      method: "POST",
                      mode: "no-cors",
                      headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({
                        star_rating: "1",
                        description: this.state.review,
                        list_id: "1",
                      }),
                    }
                  );
                } catch (e) {
                  console.log(e);
                }
              }}
            >
              <Text style={{ fontSize: 15, fontWeight: "700" }}>
                {"submit"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
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
    width: 350,
    height: 120,
    left: 15,

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
