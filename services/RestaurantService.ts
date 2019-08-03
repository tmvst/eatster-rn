const webApiUrl = "https://eatster.herokuapp.com/api/v1/restaurants.json";

class RestaurantService {
  get = async urlParams => {
    const options = {
      method: "GET"
    };

    const request = new Request(webApiUrl + "?" + urlParams, options);
    console.log(request.url);

    const response = await fetch(request);

    return response.json();
  };
}

export default RestaurantService;
