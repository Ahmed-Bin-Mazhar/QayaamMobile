import React, { Component, PureComponent } from "react";
import {
  View,
  FlatList,
  TouchableOpacity,
  Text,
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  TextInput,
} from "react-native";
import Footer from "./Footer";
import { MaterialCommunityIcons } from "@expo/vector-icons";

class Home extends PureComponent {
  constructor(props) {
    super(props);

    this.state = { isLoading: true, text: "" };
    this.arrayholder = [];
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.viewStyle}>
          <View style={styles.header}>
            <MaterialCommunityIcons
              name="filter-outline"
              size={30}
              color="#fff"
              style={{ position: "absolute", right: 18, top: 75 }}
              onPress={() => this.props.navigation.push("Search")}
            />
            <Text style={styles.TopText}>Search for Hostels</Text>

            <TextInput
              style={styles.textInputStyle}
              onChangeText={(text) => this.SearchFilterFunction(text)}
              //value={this.state.text}
              placeholder="Search Here ..."
            ></TextInput>
          </View>

          {/* <FlatList
            data={this.state.dataSource}
            ItemSeparatorComponent={this.ListViewItemSeparator}
            renderItem={(data) => (
              <HomeListings {...data.item} navigation={this.props.navigation} />
            )}
            keyExtractor={(item) => item.name}
            enableEmptySections={true}
            style={{ marginTop: 10 }}
          /> */}
        </View>
        <Footer />
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    padding: 80,
    backgroundColor: "#6f858c",
    borderBottomRightRadius: 70,
    borderBottomLeftRadius: 70,
  },
  TopText: {
    color: "#fff",
    fontStyle: "italic",
    fontSize: 16,
    position: "absolute",
    left: 60,
    right: 100,
    top: 45,
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
    bottom: 50,
    left: 50,
    right: 50,
    padding: 5,
    borderWidth: 1,
    paddingLeft: 10,
    borderColor: "#009688",
    backgroundColor: "#fff",
    borderRadius: 80,
  },
});
export default Home;
