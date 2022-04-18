import React, { useEffect, useState } from "react";
import {
  TouchableOpacity,
  Text,
  View,
  Image,
  StyleSheet,
  Button,
  FlatList,
} from "react-native";
import UserReviewDesign from "../Component/UserReviewDesign";

const DataUser = ({ route, navigation }) => {
  const tenant_id = route.params.tenant_id;
  const [Data, SetData] = useState();

  useEffect(() => {
    fetch(
      `https://qayaamapi.herokuapp.com/tenantsfeedbacks-all/specific-feedbacks/?tenant_id=${tenant_id}`
    )
      .then((response) => response.json())

      .then((data) => SetData(data));
  }, []);

  return (
    // <FlatList
    //   data={Data}
    //   renderItem={(data) => <UserReviewDesign {...data.item} />}
    //   keyExtractor={(item) => item.name}
    // />
    <Text>Hello Not Working Now </Text>
  );
};

export default DataUser;
