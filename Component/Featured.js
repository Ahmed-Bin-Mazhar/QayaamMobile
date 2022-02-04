import React, { Component } from "react";

import { FlatList, View, ActivityIndicator } from "react-native";
import HomeListings from "../Listings/HomeListings";

class Featured extends Component {
  state = {
    Listings: [],
    loading: true,
    isLoading: true,
  };

  async componentDidMount() {
    fetch("https://qayaamapi.herokuapp.com/listings-all?format=json")
      .then((res) => res.json())
      .then((resJson) => {
        this.setState({ Listings: resJson, loading: false });
      });
  }

  render() {
    const { Listings, loading } = this.state;

    if (!loading) {
      return (
        <FlatList
          data={Listings}
          renderItem={(data) => (
            <HomeListings {...data.item} navigation={this.props.navigation} />
          )}
          keyExtractor={(item) => item.name}
        />
      );
    } else {
      return (
        <View style={{ padding: 15 }}>
          <ActivityIndicator size="large" color="#6f858c" />
        </View>
      );
    }
  }
}

export default Featured;
