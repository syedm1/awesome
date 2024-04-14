import React, { useState, useRef } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

import { Text, Input, RadioGroup, Radio, Button } from "@ui-kitten/components";
import Ionicons from "react-native-vector-icons/Ionicons";

const NewTaskForm = ({ onClose, onSave }) => {
  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
    priority: "low",
    categoryTags: "",
    dueDate: new Date(),
    taskType: "basic",
    taskStartDateTime: new Date(),
    taskEndDateTime: new Date(),
  });

  const handleSave = () => {
    onSave(taskData);
    onClose();
  };

  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const handleStartDateChange = (event, selectedDate) => {
    setTaskData({
      ...taskData,
      taskStartDateTime: selectedDate || taskData.taskStartDateTime,
    });
  };

  const handleEndDateChange = (event, selectedDate) => {
    setTaskData({
      ...taskData,
      taskEndDateTime: selectedDate || taskData.taskEndDateTime,
    });
  };

  const [date, setDate] = useState(new Date(taskData.dueDate));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [taskDuration, setTaskDuration] = useState(5);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
    setTaskData({
      ...taskData,
      taskStartDateTime: date.toLocaleString(),
    });
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  const isWebWindow = useRef(typeof window === "object").current;
  return (
    <View style={styles.formContainer}>
      <Text style={styles.formTitle}>Add New Task</Text>

      {/* Task Title */}
      <Input
        label={"Task Title"}
        placeholder="Awesome Task"
        value={taskData.title}
        onChangeText={(text) => setTaskData({ ...taskData, title: text })}
      />

      {/* Task Description */}
      <Input
        label={"Task Description"}
        placeholder="Plan of action is..."
        multiline
        numberOfLines={3}
        value={taskData.description}
        onChangeText={(text) => setTaskData({ ...taskData, description: text })}
      />

      <Text style={{ fontWeight: 600, paddingTop: 4 }}>Priority</Text>
      <RadioGroup
        selectedIndex={selectedIndex}
        onChange={(index) => setSelectedIndex(index)}
      >
        <Radio>Low</Radio>
        <Radio>Medium</Radio>
        <Radio>High </Radio>
      </RadioGroup>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: 10,
        }}
      >
        <Button
          onPress={showDatepicker}
          appearance="outline"
          style={{ margin: 2 }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              display: "flex",
            }}
          >
            <Ionicons
              style={{ alignSelf: "center" }}
              name="calendar-outline"
              size={35}
              color={"#A1BBFF"}
            />
            <Text style={{ color: "#A1BBFF", fontWeight: 600 }}>{`${
              date.toLocaleString().split(",")[0]
            }`}</Text>
          </View>
        </Button>
        <Button
          appearance="outline"
          onPress={showTimepicker}
          style={{ margin: 2 }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              display: "flex",
            }}
          >
            <Ionicons
              style={{ alignSelf: "center" }}
              name="stopwatch-outline"
              size={35}
              color={"#A1BBFF"}
            />
            <Text style={{ color: "#A1BBFF" }}>{`${
              date.toLocaleString().split(",")[1]
            }`}</Text>
          </View>
        </Button>
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
        />
      )}

      <View>
        <Input
          style={{ margin: 2, marginTop: 10 }}
          label={"Task Duration in minutes"}
          value={taskDuration}
          onChange={(value) =>
            !value || value === NaN
              ? setTaskDuration(value)
              : setTaskDuration(5)
          }
        />
      </View>

      <Button style={{ color: "#A1BBFF" }} onPress={handleSave}>
        Save Task
      </Button>

      <Button appearance={"outline"} onPress={onClose}>
        Close
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 5,
    gap: 10,
    minWidth: 350,
  },
  formTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  saveButton: {
    backgroundColor: "#2196F3",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  saveButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  closeButton: {
    backgroundColor: "gray",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  closeButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default NewTaskForm;
