import React, { useEffect, useState } from "react";
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

const AllFeedback = ({
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

  const fetchPost = async () => {
    const response = await fetch(
      `https://qayaamapi.herokuapp.com/accounts-all/${tenant_id}`
    );
    const data = await response.json();
    SetUsername(data.name);
  };

  const fetchPost2 = async () => {
    const response = await fetch(
      `https://qayaamapi.herokuapp.com/listings-all/${list_id}`
    );
    const data = await response.json();
    Setlist(data.title);
  };

  useEffect(() => {
    fetchPost();
    fetchPost2();
  }, []);
  return (
    <View style={{ flexDirection: "row" }}>
      <View style={styles.listItemContainer}>
        <Ionicons name="home" size={20} color="#000000">
          <Text style={{ fontSize: 18, fontWeight: "700" }}>{list}</Text>
        </Ionicons>
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
      </View>
      <View
        style={{
          flexDirection: "column",
          padding: 30,
        }}
      >
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate(
              "FeedBack_Data",

              {
                tenant_id,
                realtor_id,
              }
            );
          }}
        >
          <Text
            style={{ fontSize: 17, fontWeight: "600", textAlign: "justify" }}
          >
            Rate User
          </Text>
        </TouchableOpacity>
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

export default AllFeedback;
