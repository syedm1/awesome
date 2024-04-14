import React from "react";
import { StyleSheet, View, Text } from "react-native";
import ScreenWrapper from "../atoms/ScreenWrapper";
import { Card } from "@ui-kitten/components";
import moment from "moment";

export default function TaskCard({
  title = "test",
  description = "test",
  priority = "low",
  categoryTags = "test",
  dueDate = "today",
  taskType = "basic",
  taskStartDateTime = moment().format("DD-MM-YYYY"),
}) {
  const Footer = () => {
    return (
      <View style={styles.footer}>
        <View style={styles.priority}>
          <Text style={styles.priorityText}>{priority}</Text>
        </View>
        <View style={styles.categoryTags}>
          <Text style={styles.categoryTagsText}>{categoryTags}</Text>
        </View>
        <View style={styles.dueDate}>
          <Text style={styles.dueDateText}>{dueDate}</Text>
        </View>
        <View style={styles.taskType}>
          <Text style={styles.taskTypeText}>{taskType}</Text>
        </View>
      </View>
    );
  };

  const header = () => {
    return (
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
    );
  };

  const getStatusColor = () => {
    // Implement logic to determine the status color based on your requirements
    return "green"; // Default color, update accordingly
  };

  return (
    <ScreenWrapper>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View
          style={[
            styles.statusIndicator,
            { backgroundColor: getStatusColor(), flex: 0.035, marginLeft: 5 },
          ]}
        ></View>
        <Card style={styles.card} header={header} footer={Footer}>
          <Text style={styles.description}>{description}</Text>
        </Card>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 0.9,
    borderRadius: 0,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  statusIndicator: {
    width: 5,
    height: "100%",
    backgroundColor: "green", // Default color, update accordingly
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  header: {
    flex: 1,
    justifyContent: "center",
    marginLeft: 10,
  },
  description: {
    color: "#909090",
    fontSize: 14,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 4,
    alignItems: "center",
    marginTop: 20,
    paddingBottom: 5,
    paddingRight: 5,
  },
  priority: {
    backgroundColor: "#182028",
    borderRadius: 10,
    padding: 5,
  },
  priorityText: {
    color: "white",
    fontSize: 14,
  },
  categoryTags: {
    backgroundColor: "#182028",
    borderRadius: 10,
    padding: 5,
  },
  categoryTagsText: {
    color: "white",
    fontSize: 14,
  },
  dueDate: {
    backgroundColor: "#182028",
    borderRadius: 10,
    padding: 5,
  },
  dueDateText: {
    color: "white",
    fontSize: 14,
  },
  taskType: {
    backgroundColor: "#182028",
    borderRadius: 10,
    padding: 5,
  },
  taskTypeText: {
    color: "white",
    fontSize: 14,
  },
  title: {
    color: "#909090",
    fontSize: 20,
  },
});
