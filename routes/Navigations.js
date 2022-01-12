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
import { View, Text, Image } from "react-native";
import Home from "../Component/Home";
import Featured from "../Component/Featured";
import Search from "../Component/Search";
import SignIn from "../Component/SignIn";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";

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
            padding: 80,
            backgroundColor: "#6f858c",
            marginBottom: 20,
            marginTop: 0,
          }}
        ></View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      <View
        style={{
          backgroundColor: "#6f858c",
          flexDirection: "column",
          padding: 30,
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

function HomeNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          flexDirection: "row",
          headerTitleAlign: "center",
          headerTitle: "Qayaam",
          headerRight: () => (
            <MaterialCommunityIcons
              name="filter-outline"
              size={28}
              color="#fff"
              style={{ position: "relative", flexDirection: "row", right: 5 }}
              // onPress={() => this.props.navigation.push("Search")}
            />
          ),
          headerTitle: () => (
            <Image
              source={require("../Img/logo.png")}
              style={{ width: 100, height: 100, alignContent: "center" }}
            />
          ),
        }}
      />

      <Stack.Screen
        name="Data"
        component={Data}
        options={{
          headerTitle: "Details",
          headerTitleAlign: "center",
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
      />

      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          headerTitle: "Filter Search",
          headerTitleAlign: "center",
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
      <Drawer.Screen name="Home" component={HomeNavigation} />

      <Drawer.Screen
        name="Featured Listing"
        component={Featured}
        options={{ headerTitleAlign: "center" }}
      />
      <Drawer.Screen
        name="Search"
        component={Search}
        options={{ headerTitleAlign: "center" }}
      />
      <Drawer.Screen
        name="Account"
        component={SignIn}
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
