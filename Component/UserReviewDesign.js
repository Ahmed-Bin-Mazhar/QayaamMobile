import React, { useEffect, useState } from "react";
import {
  TouchableOpacity,
  Text,
  View,
  Image,
  StyleSheet,
  Button,
} from "react-native";

const UserReviewDesign = ({
  feedback_id,
  star_rating,
  description,
  tenant_id,
  realtor_id,
  navigation,
}) => {
  const [Username, SetUsername] = useState(null);

  useEffect(() => {
    fetch(`https://qayaamapi.herokuapp.com/accounts-all/${realtor_id}`)
      .then((response) => response.json())

      .then((data) => SetUsername(data.name));
  }, []);

  return (
    <View>
      <View style={styles.listItemContainer}>
        <View style={styles.ItemHeader}>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 16, fontWeight: "700" }}>{"User : "}</Text>
            <Text
              style={{
                flexDirection: "column",
                width: 320,
                textTransform: "uppercase",
              }}
            >
              {Username}
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 16, fontWeight: "700" }}>
              {"Rating: "}
            </Text>
            <Text style={{ flexDirection: "column", width: 320 }}>
              {star_rating}
              {"/5"}
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 16, fontWeight: "700" }}>
              {"Review: "}
            </Text>
            <Text style={{ flexDirection: "column", width: 320 }}>
              {description}
            </Text>
          </View>
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
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },
  ItemHeader: {},
  pokeImage: {
    justifyContent: "flex-end",
    backgroundColor: "transparent",
    height: 120,
    width: 120,
    flexDirection: "column",
    paddingTop: 1,
    paddingBottom: 1,
  },
});

export default UserReviewDesign;
