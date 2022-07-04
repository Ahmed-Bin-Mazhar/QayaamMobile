import React, { Component } from "react";
import { FlatList, View, ActivityIndicator } from "react-native";
import HomeListings from "../Listings/HomeListings";
import { AuthContext } from "../context/AuthContext";
export default class ViewListing extends Component {
  static contextType = AuthContext;
  state = {
    Listings: [],
    loading: true,
    isLoading: true,
    realtor_id: "6",
  };

  async componentDidMount() {
    fetch(
      `https://qayaamapi.herokuapp.com/listings-all/specific-listings/?realtor_id=${this.context.userInfo.user_id}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",

          Authorization: `Token  ${this.context.userInfo.token}`,
        },
      }
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
