import React, { useState, useEffect, useCallback } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "@rneui/themed";

export default function Stopwatch() {
  const [running, setRunning] = useState(false);
  const [timer, setTimer] = useState(0);

  const updateTimer = useCallback(() => {
    if (running) {
      setTimer((timer) => timer + 10);
    }
  }, [running]);

  useEffect(() => {
    let intervalId = setInterval(updateTimer, 10);
    return () => clearInterval(intervalId);
  }, [updateTimer]);

  const toggleStartStop = () => {
    setRunning(!running);
  };

  const resetTimer = () => {
    setRunning(false);
    setTimer(0);
  };

  let minutes = Math.floor((timer / (1000 * 60)) % 60)
    .toString()
    .padStart(2, "0");
  let seconds = Math.floor((timer / 1000) % 60)
    .toString()
    .padStart(2, "0");
  let milliseconds = (timer % 1000).toString().padStart(3, "0");

  return (
    <View style={styles.container}>
      <Text style={styles.timerText}>
        {minutes}:{seconds}.{milliseconds}
      </Text>
      <Button
        title={running ? "Pause" : "Start"}
        onPress={toggleStartStop}
        buttonStyle={styles.button}
        titleStyle={styles.buttonText}
      />
      <Button
        title="Reset"
        onPress={resetTimer}
        buttonStyle={styles.button}
        titleStyle={styles.buttonText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  timerText: {
    fontSize: 60,
    fontFamily: "monospace",
    marginVertical: 30,
    color: "#FFFFFF",
  },
  button: {
    backgroundColor: "#E6FF67",
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    margin: 10,
  },
  buttonText: {
    color: "#000000",
    fontSize: 24,
    fontWeight: "bold",
  },
});
