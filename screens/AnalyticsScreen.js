import React from "react";
import { Text, StyleSheet, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const AnalyticsScreen = ({ navigation }) => {
  console.log("AnalyticsScreen");
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#040507" />
      <Text style={{ fontSize: 40, color: "white" }}>Analytics screen</Text>
    </SafeAreaView>
  );
};

export default AnalyticsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
