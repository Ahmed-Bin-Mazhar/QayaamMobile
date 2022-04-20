import React, { useState } from "react";
import {
  TouchableOpacity,
  Text,
  View,
  Image,
  StyleSheet,
  Button,
} from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Data from "./Data";

const HomeListings = ({
  list_id,
  realtor,
  title,
  address,
  city,
  Nearby_University,
  zipcode,
  description,
  price,
  seater,
  bathrooms,
  hostel_type,
  food_facility,
  laundary_facility,
  internet_facility,
  is_featured,
  photo1,
  photo2,
  realtor_id,
  navigation,
}) => {
  return (
    <View>
      <TouchableOpacity
        style={{ backgroundColor: "transparent" }}
        //onPress={() => navigation.navigate("Data", { name: "AHMED" })}
        onPress={() => {
          navigation.navigate(
            "Data",

            {
              list_id,
              realtor,
              title,
              address,
              city,
              Nearby_University,
              zipcode,
              description,
              price,
              seater,
              bathrooms,
              hostel_type,
              food_facility,
              laundary_facility,
              internet_facility,
              is_featured,
              photo1,
              photo2,
              realtor_id,
              navigation,
            }
          );
        }}
      >
        <View style={styles.listItemContainer}>
          <View style={styles.ItemHeader}>
            <Text style={{ color: "#000000", fontSize: 20 }}>{title}</Text>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{ color: "#000000", fontSize: 16, fontWeight: "700" }}
              >
                Rs {price}
                {"/-\n"}
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ color: "#000000" }}>
                <Ionicons name="home" size={24} color="#000000" />
                {"  "}
                {hostel_type}
              </Text>

              <Text style={{ color: "#000000", paddingLeft: 10 }}>
                <Ionicons name="fast-food-outline" size={24} color="#000000" />
                {"  "}
                {food_facility}
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ color: "#000000" }}>
                <MaterialCommunityIcons
                  name="washing-machine"
                  size={24}
                  color="#000000"
                />
                {"  "}
                {laundary_facility}
              </Text>
              <Text style={{ color: "#000000", paddingLeft: 62 }}>
                <MaterialCommunityIcons name="wifi" size={24} color="#000000" />
                {"  "}
                {internet_facility}
              </Text>
            </View>
          </View>

          <Image
            source={require("../Img/hostel.jpg")}
            // source={{
            //   uri: photo1,
            // }}
            style={styles.pokeImage}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  listItemContainer: {
    borderStyle: "solid",
    borderColor: "#fff",
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },
  ItemHeader: {},
  pokeImage: {
    justifyContent: "flex-end",
    backgroundColor: "transparent",
    height: 120,
    width: 120,
    flexDirection: "column",
    paddingTop: 1,
    paddingBottom: 1,
  },
});

export default HomeListings;
