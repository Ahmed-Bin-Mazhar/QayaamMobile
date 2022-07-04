import React, { useEffect, useState, useContext } from "react";
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
import { AuthContext } from "../context/AuthContext";
const AllBooking = ({
  booking_id,
  booking_date_time,
  checkin_date,
  checkout_date,
  is_approved,
  tenant_id,
  realtor_id,
  list_id,
  navigation,
}) => {
  const [Username, SetUsername] = useState(null);
  const [list, Setlist] = useState(null);
  const { userInfo } = useContext(AuthContext);
  const fetchPost = async () => {
    const response = await fetch(
      `https://qayaamapi.herokuapp.com/accounts-all/${tenant_id}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",

          Authorization: `Token  ${userInfo.token}`,
        },
      }
    );
    const data = await response.json();
    SetUsername(data.name);
  };

  const fetchPost2 = async () => {
    const response = await fetch(
      `https://qayaamapi.herokuapp.com/listings-all/${list_id}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",

          Authorization: `Token  ${userInfo.token}`,
        },
      }
    );
    const data = await response.json();
    Setlist(data.title);
  };

  useEffect(() => {
    fetchPost();
    fetchPost2();
  }, []);
  return (
    <View style={{ flexDirection: "row", height: 140, padding: 8 }}>
      <View style={{ flexDirection: "column" }}>
        <View style={{ flexDirection: "row" }}>
          <Ionicons name="home" size={20} color="#000000"></Ionicons>
          <Text style={{ fontSize: 18, fontWeight: "700", width: "73%" }}>
            {list}
          </Text>
        </View>
        <View style={styles.listItemContainer}>
          <Ionicons name="person" size={20} color="#000000">
            <Text
              style={{
                fontSize: 17,
                fontWeight: "500",
                textTransform: "capitalize",
              }}
            >
              {Username}
            </Text>
          </Ionicons>

          <View>
            <Ionicons name="calendar" size={20} color="#000000">
              <Text style={{ fontSize: 17, fontWeight: "500" }}>
                {"CheckIn \t\t:\t"}
                {checkin_date}
              </Text>
            </Ionicons>
            <Ionicons name="calendar" size={20} color="#000000">
              <Text style={{ fontSize: 17, fontWeight: "500" }}>
                {"CheckOut : "}
                {checkout_date}
              </Text>
            </Ionicons>
          </View>
        </View>
      </View>
      <View
        style={{
          padding: 30,
          flexDirection: "row",
          position: "absolute",
          right: 25,
          top: 15,
        }}
      >
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            try {
              fetch(
                `https://qayaamapi.herokuapp.com/bookings-all/${booking_id}`,
                {
                  method: "PUT",
                  mode: "no-cors",
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",

                    Authorization: `Token  ${userInfo.token}`,
                  },

                  body: JSON.stringify({
                    booking_id: booking_id,
                    booking_date_time: booking_date_time,
                    checkin_date: checkin_date,
                    checkout_date: checkout_date,
                    is_approved: "Yes",
                    tenant_id: tenant_id,
                    realtor_id: realtor_id,
                    list_id: list_id,
                  }),
                }
              );
            } catch (e) {
              console.log(e);
            }
          }}
        >
          <Text
            style={{ fontSize: 17, fontWeight: "600", textAlign: "justify" }}
          >
            Approve
          </Text>
        </TouchableOpacity>
        {/* <View style={{ padding: 5 }} /> */}
        {/* <TouchableOpacity style={styles.button}>
          <Text
            style={{ fontSize: 17, fontWeight: "600", textAlign: "justify" }}
          >
            Reject
          </Text>
        </TouchableOpacity> */}

        <View style={{ position: "absolute", right: -15 }}>
          <TouchableOpacity
            style={{ position: "absolute", top: 35, right: 1 }}
            onPress={() => {
              navigation.navigate(
                "Tenantfeedback",

                {
                  tenant_id,
                }
              );
            }}
          >
            <Ionicons name="play" size={30} color="#000000" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  listItemContainer: {
    borderStyle: "solid",
    borderColor: "#fff",
    borderBottomWidth: 1,
    flexDirection: "column",
    // justifyContent: "space-between",
    padding: 10,
  },
  button: {
    borderWidth: 1.5,
    height: 38,
    width: 100,
    borderRadius: 80,
    padding: 5,

    alignItems: "center",

    borderStyle: "solid",
    backgroundColor: "#6f858c",
  },
});

export default AllBooking;
