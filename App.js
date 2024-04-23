import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Home from "./components/Home";
import RepetitionExercise from "./components/RepetitionExercise";
import DurationExercise from "./components/DurationExercise";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ contentStyle: { backgroundColor: "#161616" } }}
          initialRouteName="Home"
        >
          <Stack.Screen name="Home" component={Home} />

          <Stack.Screen
            name="RepetitionExercise"
            component={RepetitionExercise}
          />
          <Stack.Screen name="DurationExercise" component={DurationExercise} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
