import React from "react";
import { useParams } from "react-router-dom";
import Tbilisi from "../assets/tbilisi1.jpg";

const data = [
  {
    id: "tbilisi",
    name: "Tbilisi",
    image1: Tbilisi,
  },
  {
    id: "gudauri",
    name: "Gudauri",
    image1: Tbilisi,
  },
];

export const Place = () => {
  const route = useParams();
  const place = data.find((item) => item.id === route.id);

  return (
    <div>
      <h1>{place.name}</h1>
    </div>
  );
};
