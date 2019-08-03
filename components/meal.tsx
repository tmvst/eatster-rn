import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { MealType } from "../types";

const Meal: React.FC<MealType> = meal => {
  const meal_picture_url = "https:" + meal.picture_url;

  return (
    <View style={styles.meal}>
      <Image source={{ uri: meal_picture_url }} style={{ width: 150, height: 150 }} />
      <Text style={styles.mealName}>{meal.name}</Text>
      <Text>{meal.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  meal: {
    paddingRight: 8
  },

  mealName: {
    fontSize: 18,
    fontWeight: "500"
  }
});

export default Meal;
