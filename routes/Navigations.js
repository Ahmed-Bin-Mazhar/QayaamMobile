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
import { View, Text } from "react-native";
import Home from "../Component/Home";

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
            padding: 50,
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
          <Text style={{ color: "#fff" }}>Copyright © 2021 AAA PAK</Text>
        </Text>
      </View>
    </View>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,

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
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{ headerTitleAlign: "center", headerTitle: "Qayaam" }}
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
