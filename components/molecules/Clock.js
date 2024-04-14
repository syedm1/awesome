// Clock.js
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Switch,
  TextInput,
  Button,
} from "react-native";

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [is24HourFormat, setIs24HourFormat] = useState(false);
  const [isAlarmSet, setIsAlarmSet] = useState(false);
  const [alarmTime, setAlarmTime] = useState("12:00");
  const [showSettingsModal, setShowSettingsModal] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
      checkAlarm();
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isAlarmSet, alarmTime]);

  const toggleFormat = () => {
    setIs24HourFormat(!is24HourFormat);
  };

  const checkAlarm = () => {
    if (isAlarmSet) {
      const currentFormattedTime = formatTime(currentTime, is24HourFormat);
      if (currentFormattedTime === alarmTime) {
        // Implement alarm action here
        alert("Alarm!");
        setIsAlarmSet(false); // Reset alarm after it triggers
      }
    }
  };

  const formatTime = (date, is24Hour) => {
    const options = {
      hour12: !is24Hour,
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };

  const handleSetAlarm = () => {
    setShowSettingsModal(false);
    setIsAlarmSet(true);
  };

  return (
    <View style={styles.clockContainer}>
      <TouchableOpacity onPress={() => setShowSettingsModal(true)}>
        <Text style={styles.digitalClock}>
          {formatTime(currentTime, is24HourFormat)}
        </Text>
      </TouchableOpacity>

      <Modal visible={showSettingsModal} animationType="slide">
        <View style={styles.settingsContainer}>
          <Text style={styles.settingsTitle}>Settings</Text>

          <View style={styles.settingRow}>
            <Text>Time Format: </Text>
            <Switch value={is24HourFormat} onValueChange={toggleFormat} />
          </View>

          <View style={styles.settingRow}>
            <Text>Set Alarm: </Text>
            <Switch
              value={isAlarmSet}
              onValueChange={() => setIsAlarmSet(!isAlarmSet)}
            />
          </View>

          {isAlarmSet && (
            <View style={styles.settingRow}>
              <Text>Alarm Time: </Text>
              <TextInput
                style={styles.alarmInput}
                placeholder="HH:mm"
                value={alarmTime}
                onChangeText={(text) => setAlarmTime(text)}
              />
            </View>
          )}

          <Button title="Set Alarm" onPress={handleSetAlarm} />
          <Button
            title="Close Settings"
            onPress={() => setShowSettingsModal(false)}
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  clockContainer: {
    backgroundColor: "#282828",
    padding: 20,
    borderRadius: 10,
    marginRight: 10,
  },
  digitalClock: {
    color: "#00FF00",
    fontSize: 15,
    fontWeight: "bold",
    fontFamily: "monospace",
  },
  settingsContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  settingsTitle: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 20,
  },
  settingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  alarmInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    flex: 1,
    marginLeft: 10,
  },
});

export default Clock;
