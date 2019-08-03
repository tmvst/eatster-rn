export interface MealType {
  id: number;
  name: string;
  price: number;
  picture_url: string;
}

export interface RestaurantType {
  id: number;
  name: string;
  meals: MealType[];
}
