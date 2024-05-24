import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { urlFor } from "../sanity";
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  MapPinIcon,
  QuestionMarkCircleIcon,
  StarIcon,
} from "react-native-heroicons/solid";
import DishRow from "../components/DishRow";
import CartIcon from "../components/CartIcon";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../slice/CartSlice";
import { setRestaurant } from "../slice/RestaurantSlice";

export default function RestaurantScreen() {
  const items = useSelector(selectCartItems);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const route = useRoute();
  const {
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
  } = route.params;
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  useEffect(() => {
    dispatch(
      setRestaurant({
        id,
        name,
        image,
        address,
        dishes,
        rating,
        description,
        genre,
        long,
        lat,
      })
    );
  }, [dispatch]);

  return (
    <>
      <ScrollView vertical showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className=" absolute z-50 p-2 bg-white rounded-full flex items-center justify-center left-3 top-14"
        >
          <ArrowLeftIcon color="#f19c13" size={20} />
        </TouchableOpacity>

        <Image
          source={{ uri: urlFor(image).url() }}
          className="w-full h-60 object-cover"
        />
        <View className=" bg-white p-4">
          <Text className=" font-bold text-lg text-gray-800">{name}</Text>
          <View className=" flex-row items-center space-x-2 mt-1">
            <StarIcon size={18} color="#f19c13" />
            <Text className=" font-extrabold text-sm text-[#f19c13]">
              {rating}
            </Text>
            <Text className="text-gray-600 text-xs font-semibold">
              . {""}
              {genre}
            </Text>
            <MapPinIcon size={18} color="gray" />
            <Text className=" font-medium text-gray-500 text-xs">NearBy</Text>
            <Text className=" font-bold text-gray-600">
              {address.length > 20 ? address.slice(0, 20) + "..." : address}
            </Text>
          </View>
          <View className="mt-3">
            {showFullDescription ? (
              <Text className="text-[12px] text-gray-600 font-normal">
                {description}
              </Text>
            ) : (
              <TouchableOpacity onPress={toggleDescription}>
                <Text className="text-[12px] text-gray-600 font-normal">
                  {description.slice(0, 150)}
                  <Text style={{ fontWeight: "bold", color: "black" }}>
                    ...More
                  </Text>
                </Text>
              </TouchableOpacity>
            )}
          </View>
          <TouchableOpacity className="mt-5 border-t border-b border-gray-700 p-3 flex-row items-center justify-between">
            <QuestionMarkCircleIcon size={22} color="gray" />
            <Text className=" font-bold text-base text-gray-800">
              Have a Food Allergy?
            </Text>
            <ChevronRightIcon size={22} color="#f19c13" />
          </TouchableOpacity>
        </View>
        {/* dish phrase */}
        <View className="mx-3 mt-3 pb-32">
          <Text className=" font-extrabold text-[#f19c13] text-lg">Menu</Text>
          {/* dish row */}
          <View className="mt-2">
            {dishes.map((dish) => (
              <DishRow
                key={dish._id}
                id={dish._id}
                name={dish.name}
                description={dish.short_description}
                price={dish.price}
                image={dish.image}
              />
            ))}
          </View>
        </View>
      </ScrollView>
      {items.length > 0 && <CartIcon />}
    </>
  );
}
