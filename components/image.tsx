import React from "react";
import { Image } from "react-native";

export const Bananas: React.FC = () => {
  let pic = {
    uri: "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg"
  };
  return <Image source={pic} style={{ width: 193, height: 110 }} />;
};
