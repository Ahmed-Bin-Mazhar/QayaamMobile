import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
} from "react-native";
import Footer from "./Footer";

class Aboutus extends Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <View>
            <Text style={styles.Heading}>Welcome To Qayaam</Text>
          </View>
          <View style={{ padding: 7 }}>
            <Text style={styles.text}>
              Qayaam is a platform to provide users find an accommodation of
              their choice. The accommodation details come from various
              proprietors and owners. The user can search their preferable
              accommodation and contact directly with the proprietor/owner to
              lock the idea.
            </Text>
          </View>
          <View>
            <Text style={styles.Heading}>Our Mission</Text>
          </View>
          <View style={{ padding: 7 }}>
            <Text style={styles.text}>
              Qayaam is a platform which looks after the needs of tenants who
              wish to get an economical room according to their budget and needs
              and realtors who can publish their property for rent on a single
              platform. Qayaam comprises both a mobile application and a web
              application. Mainly this project will overcome the difficulty of
              searching for hostels and will also provide the facility to book a
              particular hostel according to needs. The platform also acts as a
              communication channel between realtors and tenants.
            </Text>
          </View>
          <View>
            <Text style={styles.Heading}>Our Core Principles</Text>
          </View>
          <View style={{ padding: 7 }}>
            <Text style={styles.text}>
              Qayaam benefits realtors by the feature of marketing hostels so
              that their hostel’s information is readily available to tenants.
              The digitization of these marketing and booking activities saves
              time and is hassle-free because of the dedicated platform. The
              information is authentic and is checked and verified by the
              administration. The administration has all the permissions to
              decline any information from the platform that is not authentic.
            </Text>
          </View>

          <View style={{ paddingTop: 27 }}>
            <Footer />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "#20c997",
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  picture: {
    width: 150,
    height: 150,
    alignItems: "center",
    justifyContent: "center",

    justifyContent: "space-around",
    alignItems: "center",
  },
  container: {
    backgroundColor: "#fff",
    paddingTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
    borderBottomWidth: 0,
    borderTopWidth: 0,
    textAlign: "justify",
    flexWrap: "wrap",
  },

  Heading: {
    textAlign: "center",
    flexDirection: "column",
    color: "black",
    fontSize: 24,
    justifyContent: "center",
    fontWeight: "bold",
    padding: 25,
  },
  title: {
    textAlign: "center",
    flexDirection: "column",
    color: "white",
    fontSize: 20,
    justifyContent: "center",
    fontWeight: "bold",
  },
  header: {
    backgroundColor: "#10284e",
    height: 100,
    paddingTop: 38,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  },
  mainfooter: {
    backgroundColor: "#10284e",
    height: 30,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  },
});

export default Aboutus;
