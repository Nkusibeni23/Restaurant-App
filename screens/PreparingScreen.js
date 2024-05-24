import { View, Text, SafeAreaView, Image } from "react-native";
import React, { useEffect } from "react";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/native";

export default function PreparingScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery");
    }, 5000);
  }, []);

  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-[#f19c13]">
      <Animatable.Image
        source={require("../assets/images/delivery.gif")}
        className="w-96 h-96"
        animation="slideInUp"
        iterationCount={2}
      />
      <Animatable.Text
        animation="slideInUp"
        iterationCount={3}
        className=" text-base my-10 text-white font-extrabold text-center"
      >
        Waiting for Restaurant to approve your order!
      </Animatable.Text>
      <Progress.CircleSnail color="white" size={60} indeterminate={true} />
    </SafeAreaView>
  );
}
