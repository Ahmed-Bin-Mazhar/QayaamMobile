import React, { Component } from "react";
//import react in our code.

import {
  Text,
  StyleSheet,
  View,
  FlatList,
  TextInput,
  ActivityIndicator,
  Alert,
  ScrollView,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import HomeListings from "../Listings/HomeListings";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.setdata = this.setdata.bind(this);

    this.state = {
      isLoading: true,
      textcity: "",
      textlocation: "",
      texthostel_type: "",
      dataSource: [],
      arrayholder: [],
    };
  }

  componentDidMount() {
    return fetch("https://qayaamapi.herokuapp.com/listings-all?format=json")
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          arrayholder: responseJson,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
  SearchCity(textcity) {
    const Data = this.state.arrayholder.filter(function (item) {
      const itemData = item.city ? item.city.toUpperCase() : "".toUpperCase();

      const textData = textcity.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });

    this.setState({
      textcity: textcity,
      newData: Data,
    });
  }
  SearchHostel_Type(texthostel_type) {
    const Data = this.state.arrayholder.filter(function (item) {
      const itemData = item.hostel_type
        ? item.hostel_type.toUpperCase()
        : "".toUpperCase();

      const textData = texthostel_type.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });

    this.setState({
      texthostel_type: texthostel_type,
      newData1: Data,
    });
  }
  Searchlocation(textlocation) {
    const Data = this.state.arrayholder.filter(function (item) {
      const itemData = item.location
        ? item.city.toUpperCase()
        : "".toUpperCase();

      const textData = textlocation.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });

    this.setState({
      textlocation: textlocation,
      newData2: Data,
    });
  }
  setdata() {
    this.setState({
      dataSource: [
        ...this.state.newData1,
        ...this.state.newData,
        this.state.newData2,
      ],
    });
    console.log(this.state.dataSource);
  }
  ListViewItemSeparator = () => {
    return (
      <View
        style={{
          height: 0.3,
          width: "90%",
          backgroundColor: "#080808",
        }}
      />
    );
  };
  render() {
    const { dataSource } = this.state;
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <ScrollView>
        <View style={styles.viewStyle}>
          <TextInput
            style={styles.textInputStyle}
            onChangeText={(text) => this.SearchCity(text)}
            value={this.state.textcity}
            underlineColorAndroid="transparent"
            placeholder="Search City"
          />
          <View style={{ padding: 10 }} />
          <TextInput
            style={styles.textInputStyle}
            onChangeText={(text) => this.SearchHostel_Type(text)}
            value={this.state.texthostel_type}
            underlineColorAndroid="transparent"
            placeholder="Search Hostel Type"
          />
          <View style={{ padding: 10 }} />
          <TextInput
            style={styles.textInputStyle}
            onChangeText={(text) => this.Searchlocation(text)}
            value={this.state.textlocation}
            underlineColorAndroid="transparent"
            placeholder="Search location"
          />
          <View style={{ position: "absolute", left: 140, right: 0, top: 193 }}>
            <TouchableOpacity
              onPress={this.setdata}
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
          <FlatList
            data={dataSource}
            ItemSeparatorComponent={this.ListViewItemSeparator}
            renderItem={(data) => (
              <HomeListings {...data.item} navigation={this.props.navigation} />
            )}
            keyExtractor={(item) => item.name}
            enableEmptySections={true}
            style={{ marginTop: 10 }}
          />
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
