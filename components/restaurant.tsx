import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { MealType, RestaurantType } from "../types";
import Meal from "./meal";

const Restaurant: React.FC<RestaurantType> = restaurant => {
  const renderMeal = ({ item }: { item: MealType }) => (
    <Meal id={item.id} name={item.name} price={item.price} picture_url={item.picture_url} />
  );

  return (
    <View style={styles.restaurant}>
      <Text style={styles.restaurantName}>{restaurant.name}</Text>
      <FlatList data={restaurant.meals} renderItem={renderMeal} keyExtractor={(item: MealType, index) => item.name} horizontal={true} />
    </View>
  );
};

const styles = StyleSheet.create({
  restaurant: {
    marginTop: 16,
    paddingLeft: 16
  },

  restaurantName: {
    fontSize: 20,
    fontWeight: "500",
    paddingBottom: 8
  },

  restaurantMeals: {
    paddingLeft: 16
  }
});

export default Restaurant;
