import React, { useState } from "react";
import { View, Text } from "react-native";
import { Slider, Text as KittenText } from "@ui-kitten/components";

const CustomSlider = () => {
  const [selectedValue, setSelectedValue] = useState(5);

  const formatValue = (value) => {
    return `${value} min${value !== 1 ? "s" : ""}`;
  };

  const renderCaption = () => (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <Text>{formatValue(5)}</Text>
      <Text>{formatValue(60)}</Text>
    </View>
  );

  return (
    <View>
      <KittenText category="h6">Select Duration</KittenText>
      <Slider
        min={5}
        max={60}
        step={5}
        value={selectedValue}
        onChange={(value) => setSelectedValue(value)}
        style={{ marginVertical: 10 }}
      />
      {renderCaption()}
      <Text>Selected Value: {formatValue(selectedValue)}</Text>
    </View>
  );
};

export default CustomSlider;
