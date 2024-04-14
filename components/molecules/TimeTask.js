import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import TaskCard from "./TaskCard";
import moment from "moment";

export default function TimeTaskContainer({
  startTime = "00:00",
  endTime = "24:00",
  label = "",
  tasks = [],
  selectedDate,
}) {
  const hourBlocks = generateHourBlocks(startTime, endTime);
  const tasksByHourAndMinutes = mapTasksToHourBlocks(tasks, selectedDate);
  console.log(tasksByHourAndMinutes);
  const taskHourBlocks = mapTaskToTimeBlocks(
    tasksByHourAndMinutes,
    hourBlocks,
    selectedDate
  );
  console.log(taskHourBlocks);

  const renderTaskBlocks = () => {
    return hourBlocks.map((hour, index) => {
      const taskBlocks = taskHourBlocks[index];

      return taskBlocks && taskBlocks.length > 1 ? (
        <View key={index} style={styles.taskBlockStyle}>
          <View style={styles.timeGrid}>
            <Text style={styles.timeText}>{hour}</Text>
          </View>

          <View style={styles.taskColumn}>
            <View style={styles.taskBlockStyle}>
              {taskBlocks.map((task, taskIndex) => (
                <TaskCard key={taskIndex} {...task} />
              ))}
            </View>
          </View>
        </View>
      ) : (
        <View key={index} style={styles.taskBlockStyle}>
          <View style={styles.timeGrid}>
            <Text style={styles.timeText}>{hour}</Text>
          </View>
          {taskBlocks && (
            <View style={styles.taskColumn}>
              {taskBlocks.map((task, taskIndex) => (
                <TaskCard key={taskIndex} {...task} />
              ))}
            </View>
          )}
        </View>
      );
    });
  };

  const toggleExpand = (flag) => {
    setExpanded(flag);
  };

  const renderTimeGridWithTaskBlocks = () => {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.taskColumn}>
            <Text style={styles.label} onPress={() => toggleExpand(false)}>
              {label}
            </Text>
            {renderTaskBlocks()}
          </View>
        </View>
      </ScrollView>
    );
  };

  return (
    <View style={{ flex: 1, height: 700 }}>
      {renderTimeGridWithTaskBlocks()}
    </View>
  );
}

const generateHourBlocks = (startTime, endTime) => {
  const startMoment = moment(startTime, "HH:mm");
  const endMoment = moment(endTime, "HH:mm");
  const duration = moment.duration(endMoment.diff(startMoment));
  const hours = Math.ceil(duration.asHours());

  const hourBlocks = [];
  for (let i = 0; i < hours; i++) {
    const hour = startMoment.clone().add(i, "hours").format("HH:mm");
    hourBlocks.push(hour);
  }

  return hourBlocks;
};

const mapTaskToTimeBlocks = (
  tasksByHourAndMinutes,
  hourBlocks,
  selectedDate
) => {
  let taskTimeBlocks = [];
  hourBlocks.forEach((hour) => {
    const hourString = hour.toString();
    const tempHour = moment(hourString, "HH:mm");
    if (!tasksByHourAndMinutes) return taskTimeBlocks.push(null);
    const tasks = tasksByHourAndMinutes.filter((task) => {
      return tempHour.isSame(
        moment(task.taskStartHourWithZeroMinutes, "HH:mm")
      );
    });
    if (tasks.length > 0) {
      taskTimeBlocks.push(tasks);
    } else {
      taskTimeBlocks.push(null);
    }
  });
  return taskTimeBlocks;
};

const checkTaskStartDateTimeAndSelectedDateAreOnSameDay = (
  taskStartDateTime,
  selectedDate
) => {
  const taskDateString = moment(taskStartDateTime, "DD-MM-YYYY").toString();
  const selectedDateString = moment(selectedDate, "DD-MM-YYYY").toString();

  console.log("taskDateString", taskDateString);
  console.log("selectedDateString", selectedDateString);
  return taskDateString === selectedDateString;
};

const mapTasksToHourBlocks = (tasks, selectedDate) => {
  const selectedDateTasks = tasks.filter((task) => {
    return checkTaskStartDateTimeAndSelectedDateAreOnSameDay(
      task.taskStartDateTime,
      selectedDate
    );
  });

  const tasksByHourAndMinutes = selectedDateTasks.map((task) => {
    const taskStart = moment(task.taskStartDateTime, "DD-MM-YYYY HH:mm");
    const taskStartHourWithZeroMinutes = taskStart.format("HH:00");
    const taskStartMinutes = taskStart.format("mm");

    return {
      ...task,
      taskStartHourWithZeroMinutes,
      taskStartMinutes,
    };
  });

  return tasksByHourAndMinutes.length > 0 ? tasksByHourAndMinutes : null;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 10,
  },
  timeColumn: {
    marginRight: 10,
  },
  timeGrid: {
    height: 60,
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  timeText: {
    fontSize: 12,
  },
  taskColumn: {
    flex: 1,
  },
  taskRow: {
    flexDirection: "column",
  },

  taskMegaRow: {
    flex: 1,
    flexDirection: "row",
  },
  taskBlockStyle: {
    flexDirection: "row",
  },
  taskBigBlockStyle: {
    flexDirection: "row",
    gap: 1,
    marginLeft: 2,
    justifyContent: "space-around",
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  simpleBlock: {
    backgroundColor: "#A1BBFF",
    padding: 10,
    marginBottom: 10,
  },
  simpleBlockText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
});
