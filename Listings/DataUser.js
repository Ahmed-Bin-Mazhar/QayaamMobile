import React, { Component, useContext } from "react";
import {
  ActivityIndicator,
  View,
  FlatList,
  ScrollView,
  Text,
  StyleSheet,
  Picker,
} from "react-native";
import UserReviewDesign from "../Component/UserReviewDesign";
import { AuthContext } from "../context/AuthContext";
export default class DataUser extends Component {
  static contextType = AuthContext;
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,

      dataSource: {},
      tenant_id: this.props.route.params.tenant_id,
    };
  }
  componentDidMount() {
    fetch(
      `https://qayaamapi.herokuapp.com/tenantsfeedbacks-all/specific-feedbacks/?tenant_id=${this.state.tenant_id}`,
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
        console.log(this.state.tenant_id);
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
      <ScrollView>
        <FlatList
          data={this.state.dataSource}
          renderItem={(data) => (
            <UserReviewDesign
              {...data.item}
              navigation={this.props.navigation}
            />
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
