import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function CategoriesItem({ name }) {
  return (
    <TouchableOpacity>
      <View className=" mx-1 p-1 px-2bg-white rounded-full border border-gray-300">
        <Text className="font-bold text-base">{name}</Text>
      </View>
    </TouchableOpacity>
  );
}
