import React, { PureComponent } from "react";
import {
  ActivityIndicator,
  View,
  FlatList,
  ScrollView,
  StyleSheet,
  TextInput,
  Text,
  Picker,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import AllFeedback from "../Listings/AllFeedback";
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
      `https://qayaamapi.herokuapp.com/bookings-all/specific-realtor-approved-booking?realtor_id=${this.state.realtor_id}&is_approved=Yes`,
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
          <FlatList
            data={this.state.dataSource}
            renderItem={(data) => (
              <AllFeedback {...data.item} navigation={this.props.navigation} />
            )}
            ItemSeparatorComponent={this.ListViewItemSeparator}
            keyExtractor={(item) => item.id}
            enableEmptySections={true}
            style={{ marginTop: 10 }}
          />
        </ScrollView>
      </View>
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
export default GetAllBookings;
