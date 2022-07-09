import React, { Component, useState, useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  Picker,
} from "react-native";
import { AuthContext } from "../context/AuthContext";
export default RegistrationAdmin = ({ navigation }) => {
  // let [selectedImage, setSelectedImage] = React.useState(null);

  const [realtor1, setrealtor] = useState("");
  const [title1, settitle] = useState("");
  const [address1, setaddress] = useState("");
  const [city1, setcity] = useState("");
  const [Nearby_University1, setNearby_University] = useState("");
  const [zipcode1, setzipcode] = useState("");
  const [description1, setdescription] = useState("");
  const [price1, setprice] = useState("");
  const [seater1, setseater] = useState("");
  const [bathrooms1, setbathrooms] = useState("");
  const [hostel_type1, sethostel_type] = useState("");
  const [food_facility1, setfood_facility] = useState("No");
  const [laundary_facility1, setlaundary_facility] = useState("No");
  const [internet_facility1, setinternet_facility] = useState("No");
  const [is_featured1, setis_featured] = useState("false");
  const { userInfo } = useContext(AuthContext);
  // let openImagePickerAsync = async () => {
  //   let pickerResult = await ImagePicker.launchImageLibraryAsync();
  //   if (pickerResult.cancelled === true) {
  //     return;
  //   }

  //   setSelectedImage({ localUri: pickerResult.uri });
  // };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={{ fontSize: 18, fontWeight: "700", textAlign: "center" }}>
          Enter Your Listing Details
        </Text>
        <View style={{ paddingTop: 20 }} />

        {/* TITLE */}
        <View
          style={{
            flexDirection: "row",
            paddingLeft: 15,
            paddingRight: 15,
            paddingTop: 10,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "700" }}>Hostel Name: </Text>
          <TextInput
            style={{
              flexDirection: "column",
              borderBottomWidth: 1,
              left: 10,
              width: "65%",
              fontSize: 14,
            }}
            onChangeText={(text) => settitle(text)}
          />
        </View>

        {/* Address */}
        <View
          style={{
            flexDirection: "row",
            paddingLeft: 15,
            paddingRight: 15,
            paddingTop: 10,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "700" }}>Address: </Text>
          <TextInput
            style={{
              flexDirection: "column",
              borderBottomWidth: 1,
              left: 50,
              width: "65%",

              fontSize: 14,
            }}
            onChangeText={(text) => setaddress(text)}
            multiline={true}
          />
        </View>
        {/* City, Zip code */}
        <View
          style={{
            flexDirection: "row",
            paddingLeft: 15,
            paddingRight: 15,
            paddingTop: 10,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "700" }}>Zipcode: </Text>
          <TextInput
            style={{
              flexDirection: "column",
              borderBottomWidth: 1,
              left: 10,
              width: "30%",

              fontSize: 14,
            }}
            keyboardType="numeric"
            onChangeText={(text) => setzipcode(text)}
          />
          <View style={{ paddingLeft: 10 }} />
          <Text
            style={{ fontSize: 18, fontWeight: "700", flexDirection: "column" }}
          >
            City:
          </Text>
          <TextInput
            style={{
              flexDirection: "column",
              borderBottomWidth: 1,
              left: 10,
              width: "33%",

              fontSize: 14,
            }}
            onChangeText={(text) => setcity(text)}
          />
        </View>
        {/* NearBy Universities */}
        <View
          style={{
            flexDirection: "row",
            paddingLeft: 15,
            paddingRight: 15,
            paddingTop: 10,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "700" }}>Nearby Areas:</Text>
          <TextInput
            style={{
              flexDirection: "column",
              borderBottomWidth: 1,
              left: 10,
              width: "65%",
              textAlign: "center",

              fontSize: 14,
            }}
            onChangeText={(text) => setNearby_University(text)}
            placeholder="eg. universities"
            multiline={true}
          />
        </View>
        {/* Seater, Bathroom */}
        <View
          style={{
            flexDirection: "row",
            paddingLeft: 15,
            paddingRight: 15,
            paddingTop: 10,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "700" }}>Seater: </Text>
          <TextInput
            style={{
              flexDirection: "column",
              borderBottomWidth: 1,
              left: 10,
              width: "25%",

              fontSize: 14,
            }}
            keyboardType="numeric"
            onChangeText={(text) => setseater(text)}
          />
          <View style={{ paddingLeft: 20 }} />
          <Text
            style={{ fontSize: 18, fontWeight: "700", flexDirection: "column" }}
          >
            Bathroom:
          </Text>
          <TextInput
            style={{
              flexDirection: "column",
              borderBottomWidth: 1,
              left: 10,
              width: "25%",

              fontSize: 14,
            }}
            keyboardType="numeric"
            onChangeText={(text) => setbathrooms(text)}
          />
        </View>
        {/* Description */}
        <View
          style={{
            flexDirection: "row",
            paddingLeft: 15,
            paddingRight: 15,
            paddingTop: 10,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "700" }}>Description:</Text>
          <TextInput
            style={{
              flexDirection: "column",
              borderWidth: 1,
              borderRadius: 5,
              left: 6,
              width: "73%",
              padding: 2,
              fontSize: 14,
            }}
            onChangeText={(text) => setdescription(text)}
            multiline={true}
            numberOfLines={5}
          />
        </View>
        {/* Hostel_Type */}
        <View
          style={{
            flexDirection: "row",
            paddingLeft: 15,
            paddingRight: 15,
            paddingTop: 10,

            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "700" }}>Hostel Type:</Text>

          <Picker
            style={{
              left: 20,
              height: 30,
              width: 150,
            }}
            selectedValue={hostel_type1}
            onValueChange={(itemValue, itemIndex) => sethostel_type(itemValue)}
          >
            <Picker.Item label="Boys Hostel" value="Boys Hostel" />
            <Picker.Item label="Girls Hostel" value="Girls Hostel" />
          </Picker>
        </View>
        {/* Featured */}
        <View
          style={{
            flexDirection: "row",
            paddingLeft: 15,
            paddingRight: 15,
            paddingTop: 10,

            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "700" }}>Featured:</Text>

          <Picker
            style={{
              left: 45,
              height: 30,
              width: 150,
            }}
            selectedValue={is_featured1}
            onValueChange={(itemValue, itemIndex) => setis_featured(itemValue)}
          >
            <Picker.Item label="yes" value="true" />
            <Picker.Item label="no" value="false" />
          </Picker>
        </View>
        {/* Utilities */}
        <View
          style={{
            flexDirection: "row",
            paddingLeft: 15,
            paddingRight: 15,
            paddingTop: 10,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "700" }}>Utilities:</Text>
          <View
            style={{ flexDirection: "column", paddingLeft: 20, paddingTop: 10 }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ fontSize: 18, fontWeight: "700" }}>Wifi:</Text>
              <Picker
                style={{
                  left: 80,
                  height: 30,
                  width: 150,
                }}
                selectedValue={internet_facility1}
                onValueChange={(itemValue, itemIndex) =>
                  setinternet_facility(itemValue)
                }
              >
                <Picker.Item label="Yes" value="Yes" />
                <Picker.Item label="No" value="No" />
              </Picker>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ fontSize: 18, fontWeight: "700" }}>Mesing:</Text>
              <Picker
                style={{
                  left: 50,
                  height: 30,
                  width: 150,
                }}
                selectedValue={food_facility1}
                onValueChange={(itemValue, itemIndex) =>
                  setfood_facility(itemValue)
                }
              >
                <Picker.Item label="Yes" value="Yes" />
                <Picker.Item label="No" value="No" />
              </Picker>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ fontSize: 18, fontWeight: "700" }}>Laundary:</Text>
              <Picker
                style={{
                  left: 35,
                  height: 30,
                  width: 150,
                }}
                selectedValue={laundary_facility1}
                onValueChange={(itemValue, itemIndex) =>
                  setlaundary_facility(itemValue)
                }
              >
                <Picker.Item label="Yes" value="Yes" />
                <Picker.Item label="No" value="No" />
              </Picker>
            </View>
          </View>
        </View>

        {/* Price */}
        <View
          style={{
            flexDirection: "row",
            paddingLeft: 15,
            paddingRight: 15,
            paddingTop: 10,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "700" }}>Price:</Text>
          <TextInput
            style={{
              flexDirection: "column",
              borderBottomWidth: 1,

              left: 60,
              width: "50%",
              padding: 2,
              fontSize: 14,
            }}
            keyboardType="numeric"
            onChangeText={(text) => setprice(text)}
            multiline={true}
          />
        </View>

        <View
          style={{
            paddingTop: 25,
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              try {
                fetch("https://qayaamapi.herokuapp.com/listings-all", {
                  method: "POST",
                  mode: "no-cors",
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: `Token  ${userInfo.token}`,
                  },
                  body: JSON.stringify({
                    title: title1,
                    address: address1,
                    city: city1,
                    Nearby_University: Nearby_University1,
                    zipcode: zipcode1,
                    description: description1,
                    price: price1,
                    seater: seater1,
                    bathrooms: bathrooms1,
                    hostel_type: hostel_type1,
                    food_facility: food_facility1,
                    laundary_facility: laundary_facility1,
                    internet_facility: internet_facility1,
                    is_featured: is_featured1,
                    realtor_id: userInfo.user_id,
                  }),
                });
                Alert.alert("Listing Added!");
              } catch (e) {
                console.log(e);
              }
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold", color: "#fff" }}>
              SUBMIT
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    padding: 15,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#6f858c",
    padding: 12,
    width: 200,
    borderRadius: 80,
  },
});
