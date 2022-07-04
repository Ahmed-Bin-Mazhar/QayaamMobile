import React, { useEffect, useState, useContext } from "react";
import {
  TouchableOpacity,
  Text,
  View,
  Image,
  StyleSheet,
  Button,
} from "react-native";
import { AuthContext } from "../context/AuthContext";
const BookingView = ({
  booking_id,
  booking_date_time,
  checkin_date,
  checkout_date,
  tenant_id,
  list_id,
  navigation,
}) => {
  const [Username, SetUsername] = useState(null);
  const { userInfo } = useContext(AuthContext);
  useEffect(() => {
    fetch(`https://qayaamapi.herokuapp.com/accounts-all/${tenant_id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",

        Authorization: `Token  ${userInfo.token}`,
      },
    })
      .then((response) => response.json())

      .then((data) => SetUsername(data.name));
  }, []);

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(
          "DataUser",

          {
            tenant_id,
            navigation,
          }
        );
      }}
    >
      <View style={styles.listItemContainer}>
        <View style={styles.ItemHeader}>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "700",
              }}
            >
              {"Tenant Name: \t"}
            </Text>
            <Text
              style={{
                flexDirection: "column",
                width: 320,
                justifyContent: "space-around",
                fontSize: 15,
                textTransform: "uppercase",
              }}
            >
              {Username}
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 16, fontWeight: "700" }}>
              {"CheckIn Date:"}
              {"\t\t"}
            </Text>
            <Text
              style={{
                flexDirection: "column",
                width: 320,
                justifyContent: "space-around",
                fontSize: 15,
              }}
            >
              {checkin_date}
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 16, fontWeight: "700" }}>
              {"CheckOut Date:\t"}
            </Text>
            <Text
              style={{
                flexDirection: "column",
                width: 320,
                justifyContent: "space-around",
                fontSize: 15,
              }}
            >
              {checkout_date}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
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
});

export default BookingView;
