import React, { Component } from "react";

import { FlatList, ActivityIndicator } from "react-native";
// import HomeListings from "../Listings/HomeListings";

class Featured extends Component {
  state = {
    Listings: [],
    loading: true,
  };

  //   async componentDidMount() {
  //     fetch("http://3.135.209.144:8000/ep/hostels-all")
  //       .then((res) => res.json())
  //       .then((resJson) => {
  //         this.setState({ Listings: resJson, loading: false });
  //       });
  //   }

  render() {
    const { Listings, loading } = this.state;
    if (!loading) {
      //   return (
      //     // <FlatList
      //     //   data={Listings}
      //     //   renderItem={(data) => (
      //     //     <HomeListings {...data.item} navigation={this.props.navigation} />
      //     //   )}
      //     //   keyExtractor={(item) => item.name}
      //     // />
      //   );
    } else {
      return <ActivityIndicator size="large" color="#10284e" />;
    }
  }
}

export default Featured;
