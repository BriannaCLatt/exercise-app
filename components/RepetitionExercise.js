import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "@rneui/themed";

export default function RepetitionExercise({ route, navigation }) {
  const { name, suggested } = route.params;
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.exerciseName}>{name}</Text>
      <Text style={styles.counter}>{count}</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Increment"
          onPress={() => setCount(count + 1)}
          buttonStyle={styles.buttonStyle}
          titleStyle={styles.titleStyle}
        />
        <Button
          title="Reset"
          onPress={() => setCount(0)}
          buttonStyle={styles.buttonStyle}
          titleStyle={styles.titleStyle}
        />
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
              navigation.navigate("DurationExercise", { name: suggested })
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
  },
  exerciseName: {
    color: "#E6FF67",
    fontSize: 24,
    fontWeight: "bold",
  },
  counter: {
    color: "#FFFFFF",
    fontSize: 48,
    margin: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 20,
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
    backgroundColor: "#FFCBC2",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginVertical: 5,
  },
});
