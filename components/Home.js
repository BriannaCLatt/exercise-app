import React from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import { Button } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();
  const exercises = [
    { name: "Pushups", type: "repetition", suggested: "Running" },
    { name: "Running", type: "duration", suggested: "Planks" },
    { name: "Planks", type: "repetition", suggested: "Swimming" },
    { name: "Swimming", type: "duration", suggested: "Pushups" },
  ];

  const ExerciseButton = ({ name, onPress }) => (
    <View style={styles.buttonContainerStyle}>
      <Button
        title={name}
        onPress={onPress}
        buttonStyle={styles.buttonStyle}
        titleStyle={styles.titleStyle}
      />
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.title}>Bolt+Intensity</Text>
      <FlatList
        data={exercises}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <ExerciseButton
            name={item.name}
            onPress={() =>
              navigation.navigate(
                item.type === "repetition"
                  ? "RepetitionExercise"
                  : "DurationExercise",
                { name: item.name, suggested: item.suggested },
              )
            }
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: "#E6FF67",
    fontSize: 50,
    fontWeight: "bold",
    textAlign: "center",
    padding: "25px",
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
    fontSize: 16,
    fontWeight: "bold",
  },
  containerStyle: {
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  buttonContainerStyle: {
    width: "20%",
    alignSelf: "center",
    marginBottom: 10,
  },
});

export default Home;
