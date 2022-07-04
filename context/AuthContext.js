import AsyncStorage from "@react-native-async-storage/async-storage";

import React, { createContext, useEffect, useState } from "react";
import { Alert } from "react-native";
import { ActivityIndicator } from "react-native-web";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [splashLoading, setSplashLoading] = useState(false);

  const register = (
    name,
    email,
    number,
    address,
    city,
    userType,
    username,
    passward,
    verifypassward
  ) => {
    setIsLoading(true);

    try {
      fetch("https://qayaamapi.herokuapp.com/accounts/users/", {
        method: "POST",
        mode: "no-cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          name: name,
          phone: number,
          address: address,
          city: city,
          user_type: userType,
          email: email,
          password: passward,
          re_password: verifypassward,
        }),
      })
        .then((response) => response.json())
        .then((res) => {
          let userInfo = res;
          setUserInfo(res);
          Alert.alert(JSON.stringify(res));

          AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
          setIsLoading(false);
        });
    } catch (e) {
      console.log(e);
    }
  };

  const login = async (email, password) => {
    setIsLoading(true);

    try {
      fetch(
        "https://qayaamapi.herokuapp.com/accounts/get-token-with-userID/login",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: email,
            password: password,
          }),
        }
      )
        .then((response) => response.json())
        .then((res) => {
          let userInfo = res;
          setUserInfo(res);
          console.log(res);
          AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
          setIsLoading(false);
        });
    } catch (e) {
      console.log("error:" + e.message);
    }
  };
  const logout = () => {
    try {
      fetch("https://qayaamapi.herokuapp.com/accounts/token/logout", {
        method: "POST",
        mode: "no-cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Token  ${userInfo.token}`,
        },
      }).then((res) => {
        console.log(res.data);
        AsyncStorage.removeItem("userInfo");
        setUserInfo({});
        setIsLoading(false);
      });
    } catch (e) {
      console.log(e);
    }
  };

  const isLoggedIn = async () => {
    try {
      setSplashLoading(true);

      let userInfo = await AsyncStorage.getItem("userInfo");
      userInfo = JSON.parse(userInfo);

      if (userInfo) {
        setUserInfo(userInfo);
      }

      setSplashLoading(false);
    } catch (e) {
      setSplashLoading(false);
      console.log(`is logged in error ${e}`);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        userInfo,
        login,
        splashLoading,
        logout,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
