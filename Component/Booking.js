import React, { useState, useEffect } from "react";
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

import DatePicker from "react-native-datepicker";
const Booking = ({ route, navigation }) => {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds
    setCurrentDate(
      year +
        "-" +
        month +
        "-" +
        date +
        "T" +
        hours +
        ":" +
        min +
        ":" +
        sec +
        "Z"
    );
  }, []);
  const [CheckIn, setCheckin] = useState();
  const [CheckOut, setCheckOut] = useState();
  const realtor_id = route.params.realtor_id;
  const list_id = route.params.list_id;
  return (
    <View style={styles.container}>
      <Text
        style={{
          padding: 20,
          textAlign: "center",
          fontWeight: "700",
          fontSize: 22,
        }}
      >
        Please enter your checkin and checkout details
      </Text>
      <View
        style={{
          padding: 20,
          flexDirection: "column",
        }}
      >
        {/* Check in Date  */}
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              padding: 20,
              textAlign: "center",
              fontWeight: "700",
              fontSize: 16,
            }}
          >
            Check-In Date:
          </Text>
          <DatePicker
            style={styles.datePickerStyle}
            date={CheckIn} //initial date from state
            mode="date" //The enum of date, datetime and time
            placeholder="select date"
            format="YYYY-MM-DD"
            minDate="2022-01-01"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                //display: 'none',
                position: "absolute",
                left: 0,
                top: 4,
                marginLeft: 0,
              },
              dateInput: {
                marginLeft: 36,
              },
            }}
            onDateChange={(date) => {
              setCheckin(date);
            }}
          />
        </View>
        {/* Check out Date  */}
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              padding: 20,
              textAlign: "center",
              fontWeight: "700",
              fontSize: 16,
            }}
          >
            Check-Out Date:
          </Text>
          <DatePicker
            style={styles.datePickerStyle1}
            date={CheckOut} //initial date from state
            mode="date" //The enum of date, datetime and time
            placeholder="select date"
            format="YYYY-MM-DD"
            minDate="2022-01-01"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                //display: 'none',
                position: "absolute",
                left: 0,
                top: 4,
                marginLeft: 0,
              },
              dateInput: {
                marginLeft: 36,
              },
            }}
            onDateChange={(date) => {
              setCheckOut(date);
            }}
          />
        </View>
      </View>

      <TouchableOpacity
        style={styles.Button}
        onPress={() => {
          console.log(currentDate);
          console.log(CheckIn);
          console.log(CheckOut);
          console.log(list_id);
          console.log(realtor_id);

          try {
            fetch("https://qayaamapi.herokuapp.com/bookings-all", {
              method: "POST",
              mode: "no-cors",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                booking_date_time: currentDate,
                checkin_date: CheckIn,
                checkout_date: CheckOut,
                tenant_id: "2",
                realtor_id: realtor_id,
                list_id: list_id,
              }),
            });
          } catch (e) {
            console.log(e);
          }
        }}
      >
        <Text
          style={{
            fontSize: 15,
            fontWeight: "700",
          }}
        >
          {"submit"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 1,
  },
  Button: {
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#6f858c",
    padding: 12,
    width: 240,
    borderRadius: 80,
    left: 80,
  },
  datePickerStyle: {
    width: 200,
    marginTop: 10,
    left: 10,
    flexDirection: "column",
  },
  datePickerStyle1: {
    width: 200,
    marginTop: 10,
    flexDirection: "column",
  },
});

export default Booking;
