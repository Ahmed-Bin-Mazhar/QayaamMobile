import React, { Component } from "react";
import { FlatList, View, ActivityIndicator } from "react-native";
import HomeListings from "../Listings/HomeListings";
export default class ViewListing extends Component {
  state = {
    Listings: [],
    loading: true,
    isLoading: true,
    realtor_id: "6",
  };

  async componentDidMount() {
    fetch(
      `https://qayaamapi.herokuapp.com/listings-all/specific-listings/?realtor_id=${this.state.realtor_id}`
    )
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
