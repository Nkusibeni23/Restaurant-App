import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import sanityClient from "../sanity";
import RestaurantItems from "./RestaurantItems";

export default function FeaturedItems({ id, featured }) {
  const [restaurants, setRestaurants] = useState([]);
  //   fetch Restaurants Items APIs
  useEffect(() => {
    sanityClient
      .fetch(
        `
    *[_type == "featured" && _id == $id]{
        ...,
        restaurants[]-> {
          ...,
          type->{name},
          dishes[]->
        },
      }[0]`,
        { id }
      )
      .then((data) => setRestaurants(data?.restaurants));
  }, [id]);
  console.log("Restaurants Items", restaurants);
  return (
    <View className=" mt-5">
      <Text className=" font-bold text-lg text-[#f19c13]">{featured.name}</Text>
      <Text className="text-gray-600 font-light">
        {featured.short_description}
      </Text>
      {/* fetch restaurants APIs */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 10,
          paddingTop: 15,
        }}
      >
        {restaurants.map((restaurant) => (
          <RestaurantItems
            key={restaurant._id}
            id={restaurant._id}
            name={restaurant.name}
            image={restaurant.image}
            dishes={restaurant.dishes}
            rating={restaurant.rating}
            address={restaurant.address}
            description={restaurant.short_description}
            genre={restaurant.type?.name}
            long={restaurant.long}
            lat={restaurant.lat}
          />
        ))}
      </ScrollView>
    </View>
  );
}
