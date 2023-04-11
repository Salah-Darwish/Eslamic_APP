import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import MyStack from "./linked_pages/MyStack";
import MyTab from "./linked_pages/MyTab";
export default function App() {
  return (
    <NavigationContainer >
      <MyStack />
    </NavigationContainer>
  );
}
