import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { MapPinIcon } from "react-native-heroicons/outline";
import { StarIcon } from "react-native-heroicons/solid";
import { urlFor } from "../sanity";
import { useNavigation } from "@react-navigation/native";

export default function RestaurantItems({
  id,
  name,
  image,
  address,
  dishes,
  rating,
  description,
  long,
  lat,
  genre,
}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Restaurant", {
          id,
          name,
          id,
          name,
          image,
          address,
          dishes,
          rating,
          description,
          long,
          lat,
          genre,
        })
      }
    >
      <View className="mx-1 w-[250px] h-[220px] rounded-lg bg-white overflow-hidden">
        <Image
          source={{ uri: urlFor(image).url() }}
          className="w-full h-32 object-cover"
        />
        <Text className=" mx-3 font-bold text-base text-gray-800 mt-2">
          {name}
        </Text>
        <View className=" flex-row items-center space-x-2 mx-4 mt-1">
          <StarIcon size={18} color="#f19c13" />
          <Text className=" font-bold text-[#f19c13]">
            {rating} .{""}
          </Text>
          <Text className=" font-semibold text-xs text-gray-500]">{genre}</Text>
        </View>
        <View className=" flex-row items-center space-x-2 mx-4 mt-1">
          <MapPinIcon size={18} color="gray" />
          <Text className=" font-medium text-gray-600 text-xs">
            NearBy . {""}
          </Text>
          <Text className=" font-semibold text-xs text-gray-500]">
            {address.length > 18 ? address.slice(0, 18) + "..." : address}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
