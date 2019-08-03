import { decorate, observable, runInAction } from "mobx";
import { createContext } from "react";
import RestaurantService from "../services/RestaurantService";
import { RestaurantType } from "../types";

class RestaurantStore {
  restaurantService: any;
  constructor() {
    this.restaurantService = new RestaurantService();
  }

  restaurantData: RestaurantType[];

  status = "initial";

  getRestaurantsAsync = async (lat, lng) => {
    try {
      var params = {
        lat: lat,
        lng: lng
      };
      const urlParams = new URLSearchParams(params);
      const data = await this.restaurantService.get(urlParams);
      runInAction(() => {
        this.restaurantData = data.data;
      });
    } catch (error) {
      runInAction(() => {
        this.status = "error";
      });
    }
  };
}

decorate(RestaurantStore, {
  restaurantData: observable,
  status: observable
});

export const RestaurantStoreContext = createContext(new RestaurantStore());
