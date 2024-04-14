import * as React from "react";
import { useState } from "react";
import { View, TouchableOpacity, StyleSheet, Text, Modal } from "react-native";
import CalendarStrip from "react-native-calendar-strip";
import moment from "moment";
import TimeTaskContainer from "../components/molecules/TimeTask";
import Clock from "../components/molecules/Clock";
import NewTaskForm from "../components/molecules/NewTaskForm";
import { dummyTasks } from "../Constants";

// Get the device width

function DetailsScreen({ navigation }) {
  const currentDate = moment().format("DD-MM-YYYY");

  const [isFormVisible, setFormVisibility] = useState(false);

  const [stripSelectedDate, setStripSelectedDate] = useState(currentDate);

  // @fi paginated task fetch
  const [uerTasks, setUserTasks] = useState([...dummyTasks]);

  const handleOpenForm = () => {
    setFormVisibility(true);
  };

  const handleCloseForm = () => {
    setFormVisibility(false);
  };

  const handleSaveTask = (taskData) => {
    // Handle saving the task data, e.g., sending it to an API or updating state
    console.log("Task Saved:", taskData);
    setUserTasks([...uerTasks, taskData]);
  };

  return (
    <View
      style={{
        flex: 1,
        rowGap: 15,
        justifyContent: "space-between",
      }}
    >
      {/* item 1 Calnedar */}

      <CalendarStrip
        scrollable
        style={{
          margin: 20,
          minHeight: 200,
          paddingTop: 20,
          paddingBottom: 10,
          margin: 30,
        }}
        daySelectionAnimation={{
          type: "border",
          duration: 200,
          borderWidth: 2,
          borderHighlightColor: "#638FFF",
        }}
        calendarColor={"#D7DCED"}
        calendarHeaderStyle={{ color: "white" }}
        dateNumberStyle={{ color: "white" }}
        dateNameStyle={{ color: "white" }}
        highlightDateNumberStyle={{ color: "#638FFF", fontSize: 18 }}
        highlightDateNameStyle={{ color: "#638FFF" }}
        selectedDate={{ currentDate }}
        iconLeft={require("../assets/prev-arrow.png")}
        iconRight={require("../assets/next-arrow.png")}
        onDateSelected={(date) => {
          console.log("Selected Date", date.format("DD-MM-YYYY"));
          setStripSelectedDate(date.format("DD-MM-YYYY"));
        }}
      />

      {/* Item 2 Task container */}
      <View
        style={{
          minHeight: 50,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontWeight: "600",
            fontSize: 24,
            paddingTop: 5,
            marginLeft: 8,
          }}
        >
          Today's Tasks
        </Text>

        <Clock />
      </View>

      <View
        style={{
          flexDirection: "row",
          backgroundColor: "#fff",
          padding: 20,
          minHeight: 800,
          flex: 0.6,
        }}
      >
        <TimeTaskContainer selectedDate={stripSelectedDate} tasks={uerTasks} />
      </View>

      <TouchableOpacity style={styles.floatingButton} onPress={handleOpenForm}>
        {/* Your button icon or content goes here */}
        <Text style={{ color: "white", fontSize: 20 }}>+</Text>
      </TouchableOpacity>
      <Modal
        visible={isFormVisible}
        transparent
        animationType="slide"
        onRequestClose={handleCloseForm}
      >
        <View style={styles.modalContainer}>
          <NewTaskForm onClose={handleCloseForm} onSave={handleSaveTask} />
        </View>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  mainContent: {
    flex: 1,
    // Other styling for your main content
  },
  bottomAppBar: {
    height: 56, // Adjust height as needed
    backgroundColor: "#2196F3", // Change to your preferred color
    justifyContent: "center",
    alignItems: "center",
  },
  floatingButton: {
    position: "absolute",
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#A1BBFF", // Change to your preferred color
    justifyContent: "center",
    shadowColor: "#333333",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    alignItems: "center",
    bottom: 16, // Adjust bottom position as needed
    right: 16, // Adjust right position as needed
    elevation: 4,
  },
});

export default DetailsScreen;
