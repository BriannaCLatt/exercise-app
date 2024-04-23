import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Stopwatch from "./Stopwatch";
import { Button } from "@rneui/themed";

export default function DurationExercise({ route, navigation }) {
  const { name, suggested } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.exerciseName}>{name}</Text>
      <Stopwatch />
      <View style={styles.buttonContainer}>
        <Button
          title="Back to Home"
          onPress={() => navigation.navigate("Home")}
          buttonStyle={styles.buttonStyle}
          titleStyle={styles.titleStyle}
        />
        {suggested && (
          <Button
            title={`Suggested: ${suggested}`}
            onPress={() =>
              navigation.navigate("RepetitionExercise", { name: suggested })
            }
            buttonStyle={styles.sugButtonStyle}
            titleStyle={styles.titleStyle}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  exerciseName: {
    color: "#E6FF67",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 20,
  },
  buttonStyle: {
    backgroundColor: "#E6FF67",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginVertical: 5,
  },
  titleStyle: {
    color: "#000000",
  },
  sugButtonStyle: {
    backgroundColor: "#7DEBCF",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginVertical: 5,
  },
});
