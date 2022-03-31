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
import { ListItem } from "react-native-elements";
import HomeListings from "../Listings/HomeListings";
class Home extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      text: "",
      dataSource: {},
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
    fetch("https://qayaamapi.herokuapp.com/listings-all", {
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
  SearchFilterFunction(text) {
    const newData = this.arrayholder.filter(function (item) {
      const itemData = item.title ? item.title.toUpperCase() : "".toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      dataSource: newData,
      text: text,
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
        <View style={styles.viewStyle}>
          <View style={styles.header}>
            <TextInput
              style={styles.textInputStyle}
              onChangeText={(text) => this.SearchFilterFunction(text)}
              value={this.state.text}
              placeholder="Search Here ..."
            ></TextInput>
          </View>

          <FlatList
            data={this.state.dataSource}
            renderItem={(data) => (
              <HomeListings {...data.item} navigation={this.props.navigation} />
            )}
            ItemSeparatorComponent={this.ListViewItemSeparator}
            keyExtractor={(item) => item.id}
            enableEmptySections={true}
            style={{ marginTop: 10 }}
          />
        </View>
        <Footer />
      </ScrollView>
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
export default Home;
