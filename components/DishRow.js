import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { MinusIcon, PlusIcon } from "react-native-heroicons/solid";
import { urlFor } from "../sanity";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  selectCartItems,
  selectCartWithId,
} from "../slice/CartSlice";

export default function DishRow({ id, name, image, description, price }) {
  const dispatch = useDispatch();
  const items = useSelector((state) => selectCartWithId(state, id));
  const [showFullDescription, setShowFullDescription] = useState(false);
  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };
  //   handlePress addToCart
  const addItemsToCart = () => {
    dispatch(addToCart({ id, name, image, description, price }));
  };
  const removeItemFromCart = () => {
    if (!items.length > 0) return;
    dispatch(removeFromCart({ id }));
  };
  return (
    <View className="bg-white rounded-lg p-4 my-2">
      <View className=" flex-row items-center justify-between space-x-2">
        <View className=" flex-1 space-x-1">
          <Text className=" font-extrabold text-base text-gray-800">
            {name}
          </Text>
          {showFullDescription ? (
            <Text className=" mt-1 text-xs text-gray-500">{description}</Text>
          ) : (
            <TouchableOpacity onPress={toggleDescription}>
              <Text className=" mt-1 text-xs text-gray-500">
                {description.slice(0, 100)}
                <Text style={{ fontWeight: "bold", color: "black" }}>
                  ...More
                </Text>
              </Text>
            </TouchableOpacity>
          )}

          <View className="mt-2">
            <Text className=" font-extrabold text-sm text-gray-900">
              <Text className=" font-bold text-gray-600 text-sm">Rf</Text>
              {""} {price.toLocaleString()}
            </Text>
          </View>
          <View className=" mt-2 flex-row items-center space-x-2">
            <TouchableOpacity onPress={removeItemFromCart}>
              <View className=" bg-[#f19c13] rounded-full p-[3px]">
                <MinusIcon size={18} color="white" />
              </View>
            </TouchableOpacity>
            <Text className=" font-bold text-gray-800 text-base">
              {items.length}
            </Text>
            <TouchableOpacity onPress={addItemsToCart}>
              <View className=" bg-[#f19c13] rounded-full p-[3px]">
                <PlusIcon size={18} color="white" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <Image
          source={{ uri: urlFor(image).url() }}
          className=" w-24 h-24 object-cover rounded-lg"
        />
      </View>
    </View>
  );
}
