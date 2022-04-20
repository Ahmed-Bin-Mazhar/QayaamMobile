import React, { PureComponent } from "react";
import {
  ActivityIndicator,
  View,
  FlatList,
  ScrollView,
  StyleSheet,
  TextInput,
  Text,
} from "react-native";
import Footer from "./Footer";
import AllBooking from "../Listings/AllBooking";
class GetAllBookings extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      text: "",
      dataSource: {},
      realtor_id: 6,
    };
    this.arrayholder = [];
    1;
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

  componentDidMount() {
    fetch(
      `https://qayaamapi.herokuapp.com/bookings-all/specific-realtor-approved-booking?realtor_id=${this.state.realtor_id}&is_approved=No`,
      {
        method: "GET",
      }
    )
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

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, paddingTop: 0 }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View>
        <ScrollView>
          <View style={styles.viewStyle}>
            <FlatList
              data={this.state.dataSource}
              renderItem={(data) => (
                <AllBooking {...data.item} navigation={this.props.navigation} />
              )}
              ItemSeparatorComponent={this.ListViewItemSeparator}
              keyExtractor={(item) => item.id}
              enableEmptySections={true}
              style={{ marginTop: 10 }}
            />
          </View>
        </ScrollView>
      </View>
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
export default GetAllBookings;
