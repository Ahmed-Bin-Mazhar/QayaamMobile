import React from "react";

import {
  Image,
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Footer from "../Component/Footer";

export default Data = ({ route, navigation }) => {
  const Nearby_University = route.params.Nearby_University;
  const zipcode = route.params.zipcode;
  const address = route.params.address;
  const bathrooms = route.params.bathrooms;
  const city = route.params.city;
  const description = route.params.description;
  const food_facility = route.params.food_facility;
  const hostel_type = route.params.hostel_type;
  const list_id = route.params.list_id;
  const internet_facility = route.params.internet_facility;
  const is_featured = route.params.is_featured;
  const laundary_facility = route.params.laundary_facility;
  // const photo1 = route.params.photo1;
  // const photo2 = route.params.photo2;
  const price = route.params.price;
  const realtor = route.params.realtor;
  const seater = route.params.seater;
  const title = route.params.title;

  return (
    <ScrollView>
      {/* Picture */}
      <View style={styles.picture_view}>
        <Image source={require("../Img/hostel.jpg")} style={styles.picture} />
      </View>

      {/* Container */}
      <View style={styles.container}>
        {/* Data */}
        <View style={styles.heading}>
          {/* Title */}
          <View style={styles.title_view}>
            <Text style={styles.title}>{title}</Text>
          </View>
          {/* Price & Hostel Type */}
          <View style={styles.price_type}>
            {/* Price */}
            <Text style={styles.price}>
              Rs: {price}
              {"/-"}
            </Text>
            {/* Hostel-Type */}

            <Text style={{ fontSize: 18 }}>
              {"\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t("}
              {hostel_type}
              {")"}
            </Text>
          </View>
        </View>
        {/*Location*/}
        <View style={styles.Location}>
          <View>
            <Ionicons name="location" size={22} color="#000000" style={{}}>
              <Text style={{ fontSize: 20, fontWeight: "700" }}>Address:</Text>
            </Ionicons>
            {/* Address & City */}
            <View style={styles.address}>
              <Text
                style={{
                  fontSize: 16,
                  left: 30,
                  width: 380,
                }}
              >
                {address}
                {","}
              </Text>

              <Text style={{ fontSize: 16, left: 30, width: 380 }}>
                {city}
                {"."}
              </Text>
            </View>
          </View>
        </View>
        {/* Nearby Institutes */}
        <View style={styles.NearBy}>
          <Text style={{ fontSize: 20, fontWeight: "700" }}>Nearby Areas:</Text>

          <Text
            style={{
              fontSize: 16,
              left: 30,
              width: 380,
            }}
          >
            {Nearby_University}
          </Text>
        </View>
        {/* Details */}
        <View style={styles.Details_View}>
          <Text style={{ fontSize: 20, fontWeight: "700" }}>Details:</Text>
          {/* Seater */}
          <View style={{ flexDirection: "row", left: 30 }}>
            <MaterialCommunityIcons name="bed" size={20} color="#000000">
              <Text style={{ fontSize: 16 }}>
                {"\t"}Seater :{"\t\t\t"}
              </Text>
            </MaterialCommunityIcons>

            <View style={{ flexDirection: "column" }}>
              <Text style={{ fontSize: 16 }}>{seater}</Text>
            </View>
          </View>
          {/* Bathroom */}
          <View style={{ flexDirection: "row", left: 30 }}>
            <MaterialCommunityIcons name="shower" size={20} color="#000000">
              <Text style={{ fontSize: 16 }}>{"\t"}Bathroom : </Text>
            </MaterialCommunityIcons>

            <View style={{ flexDirection: "column" }}>
              <Text style={{ fontSize: 16 }}>{bathrooms}</Text>
            </View>
          </View>
        </View>
        {/* Utilities */}
        <View style={styles.Utilities_View}>
          <Text style={{ fontSize: 20, fontWeight: "700" }}>Utilities:</Text>
        </View>
        {/* Wifi */}
        <View style={{ flexDirection: "row", left: 30 }}>
          <MaterialCommunityIcons name="wifi" size={20} color="#000000">
            <Text style={{ fontSize: 16 }}>{"\t"}Wifi : </Text>
          </MaterialCommunityIcons>

          <View style={{ flexDirection: "column" }}>
            <Text style={{ fontSize: 16 }}>
              {"\t\t\t\t\t"} {internet_facility}
            </Text>
          </View>
        </View>
        {/* Messing */}
        <View style={{ flexDirection: "row", left: 30 }}>
          <Ionicons name="fast-food-outline" size={20} color="#000000">
            <Text style={{ fontSize: 16 }}>{"\t"}Messing : </Text>
          </Ionicons>

          <View style={{ flexDirection: "column" }}>
            <Text style={{ fontSize: 16 }}>
              {"\t\t"}
              {food_facility}
            </Text>
          </View>
        </View>
        {/* Laundary */}
        <View style={{ flexDirection: "row", left: 30 }}>
          <MaterialCommunityIcons
            name="washing-machine"
            size={20}
            color="#000000"
          >
            <Text style={{ fontSize: 16 }}>{"\t"}Laundary : </Text>
          </MaterialCommunityIcons>

          <View style={{ flexDirection: "column" }}>
            <Text style={{ fontSize: 16 }}>
              {"\t\t"}
              {laundary_facility}
            </Text>
          </View>
        </View>
        {/* Description */}
        <View style={styles.Description_View}>
          <Text style={{ fontSize: 20, fontWeight: "700" }}>Description:</Text>
        </View>
        <Text style={{ fontSize: 16, left: 30, width: 380 }}>
          {description}
          {"."}
        </Text>
        {/* BOOKING RATING FEEDBACK */}
        <View style={styles.BOOKINGRATINGFEEDBACK}></View>
        <View
          style={{
            // flexDirection: "row",
            // alignContent: "space-around",
            flex: 1,
            color: "#6f858c",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            style={{
              borderWidth: 2,
              borderRadius: 80,
              paddingHorizontal: 50,
              paddingVertical: 20,
              borderStyle: "solid",
              backgroundColor: "#6f858c",
              fontWeight: "700",
            }}
            onPress={() => {
              navigation.navigate("Booking", { list_id });

              // navigation.navigate(
              //   "Booking",

              //   {
              //     list_id,
              //     navigation,
              //   }
              // );
            }}
          >
            <Text
              style={{
                fontWeight: "700",
              }}
            >
              {" "}
              BOOKING{" "}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              borderWidth: 2,
              borderRadius: 80,
              paddingHorizontal: 50,
              paddingVertical: 20,
              borderStyle: "solid",
              backgroundColor: "#6f858c",
              fontWeight: "700",
            }}
            onPress={() => {
              navigation.navigate("Feedback", { list_id, navigation });
            }}
          >
            <Text
              style={{
                fontWeight: "700",
              }}
            >
              FEEDBACK
            </Text>
          </TouchableOpacity>
        </View>
        {/* Realtor */}
        <View style={{ paddingTop: 10 }} />
        <View style={styles.realtor}>
          <Image
            style={styles.picturerealtor}
            source={require("../Img/user.png")}
          />
          <Text
            style={{
              position: "absolute",
              left: 120,
              top: 25,
              fontSize: 16,
              fontWeight: "700",
            }}
          >
            {realtor}
          </Text>
          <Text
            style={{ position: "absolute", left: 120, top: 45, fontSize: 14 }}
          >
            Realtor
          </Text>

          {/* Call Button */}
          <TouchableOpacity
            style={{
              position: "absolute",
              right: 20,
              top: 14,
              borderWidth: 1,
              borderRadius: 80,
              paddingHorizontal: 15,
              paddingVertical: 15,
              borderStyle: "solid",
              backgroundColor: "#6f858c",
            }}
            //  onPress={() => this.dialCall(usercontact)}
          >
            <Ionicons name="md-call-sharp" size={28} color="#fff" />
          </TouchableOpacity>
        </View>
        <View style={{ paddingTop: 10 }} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  picture_view: {
    padding: 1,

    backgroundColor: "#fff",
  },
  picture: {
    height: 300,
    width: 410,
  },
  container: {
    padding: 2,
  },
  heading: {
    paddingTop: 2,
  },
  title_view: {
    flexDirection: "column",
  },

  title: {
    fontSize: 26,
    width: 380,
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  price_type: {
    flexDirection: "row",
  },

  price: {
    fontSize: 20,
    fontWeight: "700",
  },
  Location: {
    paddingTop: 5,
    flexDirection: "column",
  },

  address: {
    paddingTop: 2,
  },
  NearBy: {
    paddingTop: 5,
  },
  Details_View: {
    paddingTop: 5,
  },
  Utilities_View: {
    paddingTop: 5,
  },
  Description_View: {
    paddingTop: 5,
  },

  realtor: {
    padding: 5,
    borderColor: "#000000",
    borderRadius: 50,
    borderWidth: 1,
    flexDirection: "row",
  },
  picturerealtor: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  BOOKINGRATINGFEEDBACK: {
    paddingTop: 15,
  },
});
