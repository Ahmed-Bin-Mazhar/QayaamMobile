import * as React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

import { NavigationContainer } from "@react-navigation/native";
const Drawer = createDrawerNavigator();
import Aboutus from "../Component/Aboutus";
import ContactUs from "../Component/Contactus";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Home from "../Component/Home";
import Featured from "../Component/Featured";
import Search from "../Component/Search";
import SignIn from "../Component/SignIn";
import AddImage from "../Component/AddImage";
import Registration from "../Component/Registration";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import AddListing from "../Component/AddListing";
import Realtor from "../Component/Realtor";
import BookingRequest from "../Component/BookingReq";
import ViewListings from "../Component/ViewListing";

import BookingReq from "../Component/BookingReq";
import { ScrollView } from "react-native-gesture-handler";
import HomeListings from "../Listings/HomeListings";
import Booking from "../Component/Booking";
import Feedback from "../Component/Feedback";
import FeebackView from "../Component/FeebackView";
import Tenantfeedback from "../Component/Tenantfeedback";
import BookingView from "../Component/BookingView";
import DataUser from "../Listings/DataUser";
import UserReviewDesign from "../Component/UserReviewDesign";
import ViewListingFeedBack from "../Component/ViewListingFeedBack";
import GetAllBookings from "../Component/GetAllBookings";
import AllBookings from "../Listings/AllBooking";
import GetAllT_Feedback from "../Component/GetAllT_Feedback";
import FeedBack_Data from "../Listings/FeedBack_Data";

const CustomDrawer = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            justifyContent: "center",
            padding: 40,
            backgroundColor: "#6f858c",
            marginBottom: 20,
            marginTop: 0,
          }}
        >
          <Image
            source={require("../Img/user.png")}
            style={{ width: 60, height: 60, borderRadius: 30 }}
          />
          <View>
            <Text style={{ paddingTop: 5, color: "#fff" }}>
              ahmedbinmazhar@gmail.com
            </Text>
          </View>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <TouchableOpacity
        style={{
          position: "absolute",
          right: 0,
          left: 0,
          bottom: 50,
          backgroundColor: "#5f9ea0",
          padding: 15,
          flexDirection: "column",
          borderRadius: 25,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            color: "#fff",
          }}
        >
          Log Out
        </Text>
      </TouchableOpacity>

      <View
        style={{
          backgroundColor: "#6f858c",
          flexDirection: "column",
          padding: 15,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>
          <Text style={{ color: "#fff" }}>Copyright © FURC</Text>
        </Text>
      </View>
    </View>
  );
};
const Stack = createStackNavigator();
function Account({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Sign In"
        component={SignIn}
        options={{
          headerShown: false,
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#6f858c",
            elevation: 0,
            shadowOpacity: 0,
          },
          headerTintColor: "#fff",

          headerTitleStyle: {
            color: "#fff",
            fontWeight: "600",
            fontSize: 22,
          },
          headerLeft: () => (
            <Ionicons name="ios-menu-sharp" size={24} color="#fff" />
          ),
          headerLeftContainerStyle: {
            left: 16,
          },
        }}
      />
      <Stack.Screen name="AddImg" component={AddImage} />

      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          headerTitle: "BETHEK",
          headerTitleAlign: "left",

          headerStyle: {
            backgroundColor: "#6f858c",
            elevation: 0,
            shadowOpacity: 0,
          },
          headerTintColor: "#fff",

          headerTitleStyle: {
            color: "#fff",
            fontWeight: "600",
            fontSize: 22,
          },
        }}
      />
      <Stack.Screen
        name="Registration"
        component={Registration}
        options={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#6f858c",
            elevation: 0,
            shadowOpacity: 0,
          },
          headerTintColor: "#fff",

          headerTitleStyle: {
            color: "#fff",
            fontWeight: "600",
            fontSize: 22,
          },
        }}
      />
    </Stack.Navigator>
  );
}
function RealtorView({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Qayaam_Realtor"
        component={Realtor}
        options={{
          flexDirection: "row",
          headerTitleAlign: "center",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="View_Listings"
        component={ViewListings}
        options={{
          flexDirection: "row",
          headerTitleAlign: "center",
          headerShown: true,
          title: "Listings",

          headerStyle: {
            backgroundColor: "#6f858c",
            elevation: 0,
            shadowOpacity: 0,
          },

          headerTitleStyle: {
            color: "#fff",
            fontWeight: "600",
            fontSize: 22,
          },
        }}
      />
      <Stack.Screen
        name="UserReviewDesign"
        component={UserReviewDesign}
        options={{
          flexDirection: "row",
          headerTitleAlign: "center",
          headerShown: true,
          title: "Listings",

          headerStyle: {
            backgroundColor: "#6f858c",
            elevation: 0,
            shadowOpacity: 0,
          },

          headerTitleStyle: {
            color: "#fff",
            fontWeight: "600",
            fontSize: 22,
          },
        }}
      />

      <Stack.Screen
        name="DataUser"
        component={DataUser}
        options={{
          flexDirection: "row",
          headerTitleAlign: "center",
          headerShown: true,
          title: "Listings",

          headerStyle: {
            backgroundColor: "#6f858c",
            elevation: 0,
            shadowOpacity: 0,
          },

          headerTitleStyle: {
            color: "#fff",
            fontWeight: "600",
            fontSize: 22,
          },
        }}
      />

      <Stack.Screen
        name="HomeListings"
        component={HomeListings}
        options={{
          headerTitle: "Details",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#6f858c",
            elevation: 0,
            shadowOpacity: 0,
          },
          headerTintColor: "#fff",

          headerTitleStyle: {
            color: "#fff",
            fontWeight: "600",
            fontSize: 22,
          },
        }}
      />

      <Stack.Screen
        name="Data"
        component={Data}
        options={{
          headerTitle: "Details",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#6f858c",
            elevation: 0,
            shadowOpacity: 0,
          },
          headerTintColor: "#fff",

          headerTitleStyle: {
            color: "#fff",
            fontWeight: "600",
            fontSize: 22,
          },
        }}
      />
      <Stack.Screen
        name="Booking"
        component={BookingReq}
        options={{
          headerTitle: "Booking",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#6f858c",
            elevation: 0,
            shadowOpacity: 0,
          },
          headerTintColor: "#fff",

          headerTitleStyle: {
            color: "#fff",
            fontWeight: "600",
            fontSize: 22,
          },
        }}
      />
      <Stack.Screen
        name="Feedback"
        component={ViewListingFeedBack}
        options={{
          headerTitle: "Booking",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#6f858c",
            elevation: 0,
            shadowOpacity: 0,
          },
          headerTintColor: "#fff",

          headerTitleStyle: {
            color: "#fff",
            fontWeight: "600",
            fontSize: 22,
          },
        }}
      />
      <Stack.Screen
        name="BookingView"
        component={BookingView}
        options={{
          headerTitle: "Booking",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#6f858c",
            elevation: 0,
            shadowOpacity: 0,
          },
          headerTintColor: "#fff",

          headerTitleStyle: {
            color: "#fff",
            fontWeight: "600",
            fontSize: 22,
          },
        }}
      />
      <Stack.Screen
        name="Tenantfeedback"
        component={Tenantfeedback}
        options={{
          headerTitle: "Feedback",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#6f858c",
            elevation: 0,
            shadowOpacity: 0,
          },
          headerTintColor: "#fff",

          headerTitleStyle: {
            color: "#fff",
            fontWeight: "600",
            fontSize: 22,
          },
        }}
      />

      <Stack.Screen
        name="Add_Listings"
        component={AddListing}
        options={{
          flexDirection: "row",
          headerTitleAlign: "center",
          headerShown: true,
          headerTitle: "Add Listings",
          headerStyle: {
            backgroundColor: "#6f858c",
            elevation: 0,
            shadowOpacity: 0,
          },

          headerTitleStyle: {
            color: "#fff",
            fontWeight: "600",
            fontSize: 22,
          },
        }}
      />
      <Stack.Screen
        name="BookingReq"
        component={BookingReq}
        options={{
          flexDirection: "row",
          headerTitleAlign: "center",
          headerShown: true,
          headerTitle: "Bookings",
          headerShown: true,
          headerStyle: {
            backgroundColor: "#6f858c",
            elevation: 0,
            shadowOpacity: 0,
          },

          headerTitleStyle: {
            color: "#fff",
            fontWeight: "600",
            fontSize: 22,
          },
        }}
      />
      <Stack.Screen
        name="GetAllBookings"
        component={GetAllBookings}
        options={{
          flexDirection: "row",
          headerTitleAlign: "center",
          headerShown: true,
          headerTitle: "Bookings",
          headerShown: true,
          headerStyle: {
            backgroundColor: "#6f858c",
            elevation: 0,
            shadowOpacity: 0,
          },

          headerTitleStyle: {
            color: "#fff",
            fontWeight: "600",
            fontSize: 22,
          },
        }}
      />

      <Stack.Screen
        name="AllBookings"
        component={AllBookings}
        options={{
          flexDirection: "row",
          headerTitleAlign: "center",
          headerShown: true,
          headerTitle: "Bookings",
          headerShown: true,
          headerStyle: {
            backgroundColor: "#6f858c",
            elevation: 0,
            shadowOpacity: 0,
          },

          headerTitleStyle: {
            color: "#fff",
            fontWeight: "600",
            fontSize: 22,
          },
        }}
      />

      <Stack.Screen
        name="GetAllT_Feedback"
        component={GetAllT_Feedback}
        options={{
          flexDirection: "row",
          headerTitleAlign: "center",
          headerShown: true,
          title: "Listings",

          headerStyle: {
            backgroundColor: "#6f858c",
            elevation: 0,
            shadowOpacity: 0,
          },

          headerTitleStyle: {
            color: "#fff",
            fontWeight: "600",
            fontSize: 22,
          },
        }}
      />
      <Stack.Screen
        name="FeedBack_Data"
        component={FeedBack_Data}
        options={{
          flexDirection: "row",
          headerTitleAlign: "center",
          headerShown: true,
          title: "Listings",

          headerStyle: {
            backgroundColor: "#6f858c",
            elevation: 0,
            shadowOpacity: 0,
          },

          headerTitleStyle: {
            color: "#fff",
            fontWeight: "600",
            fontSize: 22,
          },
        }}
      />
      {/* <Stack.Screen
        name="FeebackView"
        component={FeebackView}
        options={{
          flexDirection: "row",
          headerTitleAlign: "center",
          headerShown: true,
          title: "Listings",

          headerStyle: {
            backgroundColor: "#6f858c",
            elevation: 0,
            shadowOpacity: 0,
          },

          headerTitleStyle: {
            color: "#fff",
            fontWeight: "600",
            fontSize: 22,
          },
        }}
      /> */}
    </Stack.Navigator>
  );
}
function ListingViewFunc({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="View_Listings"
        component={ViewListings}
        options={{
          flexDirection: "row",
          headerTitleAlign: "center",
          headerShown: false,
          title: "Listings",

          headerStyle: {
            backgroundColor: "#6f858c",
            elevation: 0,
            shadowOpacity: 0,
          },

          headerTitleStyle: {
            color: "#fff",
            fontWeight: "600",
            fontSize: 22,
          },
        }}
      />
      <Stack.Screen
        name="UserReviewDesign"
        component={UserReviewDesign}
        options={{
          flexDirection: "row",
          headerTitleAlign: "center",
          headerShown: false,
          title: "Listings",

          headerStyle: {
            backgroundColor: "#6f858c",
            elevation: 0,
            shadowOpacity: 0,
          },

          headerTitleStyle: {
            color: "#fff",
            fontWeight: "600",
            fontSize: 22,
          },
        }}
      />

      <Stack.Screen
        name="DataUser"
        component={DataUser}
        options={{
          flexDirection: "row",
          headerTitleAlign: "center",
          headerShown: false,
          title: "Listings",

          headerStyle: {
            backgroundColor: "#6f858c",
            elevation: 0,
            shadowOpacity: 0,
          },

          headerTitleStyle: {
            color: "#fff",
            fontWeight: "600",
            fontSize: 22,
          },
        }}
      />

      <Stack.Screen
        name="HomeListings"
        component={HomeListings}
        options={{
          headerShown: false,
          headerTitle: "Details",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#6f858c",
            elevation: 0,
            shadowOpacity: 0,
          },
          headerTintColor: "#fff",

          headerTitleStyle: {
            color: "#fff",
            fontWeight: "600",
            fontSize: 22,
          },
        }}
      />

      <Stack.Screen
        name="Data"
        component={Data}
        options={{
          headerShown: false,
          headerTitle: "Details",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#6f858c",
            elevation: 0,
            shadowOpacity: 0,
          },
          headerTintColor: "#fff",

          headerTitleStyle: {
            color: "#fff",
            fontWeight: "600",
            fontSize: 22,
          },
        }}
      />
      <Stack.Screen
        name="Booking"
        component={BookingReq}
        options={{
          headerTitle: "Booking",
          headerTitleAlign: "center",
          headerShown: false,
          headerStyle: {
            backgroundColor: "#6f858c",
            elevation: 0,
            shadowOpacity: 0,
          },
          headerTintColor: "#fff",

          headerTitleStyle: {
            color: "#fff",
            fontWeight: "600",
            fontSize: 22,
          },
        }}
      />
      <Stack.Screen
        name="Feedback"
        component={ViewListingFeedBack}
        options={{
          headerTitle: "Booking",
          headerShown: false,
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#6f858c",
            elevation: 0,
            shadowOpacity: 0,
          },
          headerTintColor: "#fff",

          headerTitleStyle: {
            color: "#fff",
            fontWeight: "600",
            fontSize: 22,
          },
        }}
      />
      <Stack.Screen
        name="BookingView"
        component={BookingView}
        options={{
          headerTitle: "Booking",
          headerShown: false,
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#6f858c",
            elevation: 0,
            shadowOpacity: 0,
          },
          headerTintColor: "#fff",

          headerTitleStyle: {
            color: "#fff",
            fontWeight: "600",
            fontSize: 22,
          },
        }}
      />

      <Stack.Screen
        name="BookingReq"
        component={BookingReq}
        options={{
          flexDirection: "row",
          headerTitleAlign: "center",
          headerShown: false,
          headerTitle: "Bookings",
          headerShown: false,
          headerStyle: {
            backgroundColor: "#6f858c",
            elevation: 0,
            shadowOpacity: 0,
          },

          headerTitleStyle: {
            color: "#fff",
            fontWeight: "600",
            fontSize: 22,
          },
        }}
      />
    </Stack.Navigator>
  );
}
function Bookingfunc({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="GetAllBookings"
        component={GetAllBookings}
        options={{
          flexDirection: "row",
          headerTitleAlign: "center",

          headerTitle: "Bookings",
          headerShown: false,
          headerStyle: {
            backgroundColor: "#6f858c",
            elevation: 0,
            shadowOpacity: 0,
          },

          headerTitleStyle: {
            color: "#fff",
            fontWeight: "600",
            fontSize: 22,
          },
        }}
      />
      <Stack.Screen
        name="Tenantfeedback"
        component={Tenantfeedback}
        options={{
          headerShown: false,
          headerTitle: "Feedback",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#6f858c",
            elevation: 0,
            shadowOpacity: 0,
          },
          headerTintColor: "#fff",

          headerTitleStyle: {
            color: "#fff",
            fontWeight: "600",
            fontSize: 22,
          },
        }}
      />

      <Stack.Screen
        name="AllBookings"
        component={AllBookings}
        options={{
          flexDirection: "row",
          headerTitleAlign: "center",
          headerShown: false,
          headerTitle: "Bookings",
          headerShown: false,
          headerStyle: {
            backgroundColor: "#6f858c",
            elevation: 0,
            shadowOpacity: 0,
          },

          headerTitleStyle: {
            color: "#fff",
            fontWeight: "600",
            fontSize: 22,
          },
        }}
      />
    </Stack.Navigator>
  );
}
function RateALLFunc() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="GetAllT_Feedback"
        component={GetAllT_Feedback}
        options={{
          flexDirection: "row",
          headerTitleAlign: "center",
          headerShown: false,
          title: "Listings",

          headerStyle: {
            backgroundColor: "#6f858c",
            elevation: 0,
            shadowOpacity: 0,
          },

          headerTitleStyle: {
            color: "#fff",
            fontWeight: "600",
            fontSize: 22,
          },
        }}
      />
      <Stack.Screen
        name="FeedBack_Data"
        component={FeedBack_Data}
        options={{
          flexDirection: "row",
          headerTitleAlign: "center",
          headerShown: false,
          title: "Listings",

          headerStyle: {
            backgroundColor: "#6f858c",
            elevation: 0,
            shadowOpacity: 0,
          },

          headerTitleStyle: {
            color: "#fff",
            fontWeight: "600",
            fontSize: 22,
          },
        }}
      />
      <Stack.Screen
        name="FeebackView"
        component={FeebackView}
        options={{
          flexDirection: "row",
          headerTitleAlign: "center",
          headerShown: false,
          title: "Listings",

          headerStyle: {
            backgroundColor: "#6f858c",
            elevation: 0,
            shadowOpacity: 0,
          },

          headerTitleStyle: {
            color: "#fff",
            fontWeight: "600",
            fontSize: 22,
          },
        }}
      />
    </Stack.Navigator>
  );
}
function HomeNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          flexDirection: "row",
          headerTitleAlign: "center",
          headerShown: false,
        }}
      />
      {/* <Stack.Screen
        name="SearchData"
        component={SearchData}
        options={{
          headerTitle: "Search Result",
          headerTitleAlign: "left",

          headerStyle: {
            backgroundColor: "#10284e",
            elevation: 0,
            shadowOpacity: 0,
          },
          headerTintColor: "#fff",

          headerTitleStyle: {
            color: "#fff",
            fontWeight: "600",
            fontSize: 22,
          },
        }}
      /> */}
      <Stack.Screen
        name="HomeListings"
        component={HomeListings}
        options={{
          headerTitle: "Details",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#6f858c",
            elevation: 0,
            shadowOpacity: 0,
          },
          headerTintColor: "#fff",

          headerTitleStyle: {
            color: "#fff",
            fontWeight: "600",
            fontSize: 22,
          },
        }}
      />

      <Stack.Screen
        name="Data"
        component={Data}
        options={{
          headerTitle: "Details",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#6f858c",
            elevation: 0,
            shadowOpacity: 0,
          },
          headerTintColor: "#fff",

          headerTitleStyle: {
            color: "#fff",
            fontWeight: "600",
            fontSize: 22,
          },
        }}
      />
      <Stack.Screen
        name="Booking"
        component={Booking}
        options={{
          headerTitle: "Booking",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#6f858c",
            elevation: 0,
            shadowOpacity: 0,
          },
          headerTintColor: "#fff",

          headerTitleStyle: {
            color: "#fff",
            fontWeight: "600",
            fontSize: 22,
          },
        }}
      />
      <Stack.Screen
        name="Feedback"
        component={Feedback}
        options={{
          headerTitle: "Feedback",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#6f858c",
            elevation: 0,
            shadowOpacity: 0,
          },
          headerTintColor: "#fff",

          headerTitleStyle: {
            color: "#fff",
            fontWeight: "600",
            fontSize: 22,
          },
        }}
      />
      <Stack.Screen
        name="FeebackView"
        component={FeebackView}
        options={{
          headerShown: "False",
          headerTitle: "Feedback",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#6f858c",
            elevation: 0,
            shadowOpacity: 0,
          },
          headerTintColor: "#fff",

          headerTitleStyle: {
            color: "#fff",
            fontWeight: "600",
            fontSize: 22,
          },
        }}
      />

      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          headerTitle: "Filter Search",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#6f858c",
            elevation: 0,
            shadowOpacity: 0,
          },
          headerTintColor: "#fff",

          headerTitleStyle: {
            color: "#fff",
            fontWeight: "600",
            fontSize: 22,
          },
        }}
      />
    </Stack.Navigator>
  );
}
function FeaturedNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Featured Listing"
        component={Featured}
        options={{
          flexDirection: "row",
          headerTitleAlign: "center",
          headerShown: false,
        }}
      />
      {/* <Stack.Screen
        name="SearchData"
        component={SearchData}
        options={{
          headerTitle: "Search Result",
          headerTitleAlign: "left",

          headerStyle: {
            backgroundColor: "#10284e",
            elevation: 0,
            shadowOpacity: 0,
          },
          headerTintColor: "#fff",

          headerTitleStyle: {
            color: "#fff",
            fontWeight: "600",
            fontSize: 22,
          },
        }}
      /> */}
      <Stack.Screen
        name="HomeListings"
        component={HomeListings}
        options={{
          headerTitle: "Details",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#6f858c",
            elevation: 0,
            shadowOpacity: 0,
          },
          headerTintColor: "#fff",

          headerTitleStyle: {
            color: "#fff",
            fontWeight: "600",
            fontSize: 22,
          },
        }}
      />

      <Stack.Screen
        name="Data"
        component={Data}
        options={{
          headerTitle: "Details",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#6f858c",
            elevation: 0,
            shadowOpacity: 0,
          },
          headerTintColor: "#fff",

          headerTitleStyle: {
            color: "#fff",
            fontWeight: "600",
            fontSize: 22,
          },
        }}
      />
      <Stack.Screen
        name="Booking"
        component={Booking}
        options={{
          headerTitle: "Booking",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#6f858c",
            elevation: 0,
            shadowOpacity: 0,
          },
          headerTintColor: "#fff",

          headerTitleStyle: {
            color: "#fff",
            fontWeight: "600",
            fontSize: 22,
          },
        }}
      />
      <Stack.Screen
        name="Feedback"
        component={Feedback}
        options={{
          headerTitle: "Feedback",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#6f858c",
            elevation: 0,
            shadowOpacity: 0,
          },
          headerTintColor: "#fff",

          headerTitleStyle: {
            color: "#fff",
            fontWeight: "600",
            fontSize: 22,
          },
        }}
      />
      <Stack.Screen
        name="FeebackView"
        component={FeebackView}
        options={{
          headerShown: "False",
          headerTitle: "Feedback",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#6f858c",
            elevation: 0,
            shadowOpacity: 0,
          },
          headerTintColor: "#fff",

          headerTitleStyle: {
            color: "#fff",
            fontWeight: "600",
            fontSize: 22,
          },
        }}
      />

      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          headerTitle: "Filter Search",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#6f858c",
            elevation: 0,
            shadowOpacity: 0,
          },
          headerTintColor: "#fff",

          headerTitleStyle: {
            color: "#fff",
            fontWeight: "600",
            fontSize: 22,
          },
        }}
      />
    </Stack.Navigator>
  );
}

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,

        headerStyle: {
          backgroundColor: "#6f858c",
          elevation: 0,
          shadowOpacity: 0,
          height: 110,
        },
        headerTintColor: "#fff",

        headerTitleStyle: {
          color: "#fff",
          fontWeight: "600",
          fontSize: 22,
        },
      }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen
        name="Qayaam"
        component={HomeNavigation}
        options={{
          flexDirection: "row",
          headerTitleAlign: "center",

          // headerRight: ({ navigation }) => (
          //   <MaterialCommunityIcons
          //     name="filter-outline"
          //     size={28}
          //     color="#fff"
          //     style={{ position: "relative", flexDirection: "row", right: 5 }}
          //     onPress={() => this.navigation.push("Search")}
          //   />
          // ),
          headerTitle: () => (
            <Image
              source={require("../Img/logo.png")}
              style={{ width: 100, height: 100, alignContent: "center" }}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="Featured Listing"
        component={FeaturedNavigation}
        options={{ headerTitleAlign: "center" }}
      />
      <Drawer.Screen
        name="Search"
        component={Search}
        options={{ headerTitleAlign: "center" }}
      />
      <Drawer.Screen
        name="Account"
        component={Account}
        options={{ headerTitleAlign: "center" }}
      />

      <Drawer.Screen
        name="Qayaam Realtor"
        component={RealtorView}
        options={{ headerTitleAlign: "center" }}
      />
      <Drawer.Screen
        name="Add Listings"
        component={AddListing}
        options={{ headerTitleAlign: "center" }}
      />
      <Drawer.Screen
        name="View Listings"
        component={ListingViewFunc}
        options={{ headerTitleAlign: "center" }}
      />

      <Drawer.Screen
        name="Booking Requests"
        component={Bookingfunc}
        options={{ headerTitleAlign: "center" }}
      />
      <Drawer.Screen
        name="Rate Tenants"
        component={RateALLFunc}
        options={{ headerTitleAlign: "center" }}
      />
      <Drawer.Screen
        name="About US"
        component={Aboutus}
        options={{ headerTitleAlign: "center" }}
      />

      <Drawer.Screen
        name="Contact US"
        component={ContactUs}
        options={{ headerTitleAlign: "center" }}
      />
    </Drawer.Navigator>
  );
};

export default class Navigations extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    );
  }
}
