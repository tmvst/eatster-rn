import { observer } from "mobx-react-lite";
import * as React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Restaurant from "./components/restaurant";
import { RestaurantStoreContext } from "./stores/RestaurantStore";
import { RestaurantType } from "./types";

const App: React.FC = observer(() => {
  const restaurantStore = React.useContext(RestaurantStoreContext);

  React.useEffect(() => {
    restaurantStore.getRestaurantsAsync("49.2001485", "16.6067463");
  }, []);

  const renderRestaurant = ({ item }: { item: RestaurantType }) => <Restaurant id={item.id} name={item.name} meals={item.meals} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={restaurantStore.restaurantData}
        renderItem={renderRestaurant}
        keyExtractor={(item: RestaurantType, index) => item.name}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginTop: 40
  }
});

export default App;
