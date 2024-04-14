import React from "react";
import { StyleSheet, Text, View } from "react-native";

import HomeSvg from "../../assets/images/favicon.png";
import HomeSvg2 from "../../assets/images/favicon.png";
import SettingsSvg from "../../assets/images/favicon.png";
import SettingsSvg2 from "../../assets/images/favicon.png";
import ActivitySvg from "../../assets/images/favicon.png";
import ActivitySvg2 from "../../assets/images/favicon.png";
import EditSvg from "../../assets/images/favicon.png";
import EditSvg2 from "../../assets/images/favicon.png";

const NavigationIcon = ({ route, isFocused }) => {
  const renderIcon = (route, isFocues) => {
    let height = 20;
    let width = 20;

    switch (route) {
      case "home":
        return isFocues ? (
          <HomeSvg2 height={height} width={width} />
        ) : (
          <HomeSvg height={height} width={width} />
        );
      case "analytics":
        return isFocues ? (
          <ActivitySvg2 height={height} width={width} />
        ) : (
          <ActivitySvg height={height} width={width} />
        );
      case "notes":
        return isFocues ? (
          <EditSvg2 height={height} width={width} />
        ) : (
          <EditSvg height={height} width={width} />
        );
      case "settings":
        return isFocues ? (
          <SettingsSvg2 height={height} width={width} />
        ) : (
          <SettingsSvg height={height} width={width} />
        );
      default:
        break;
    }
  };

  return <View>{renderIcon(route, isFocused)}</View>;
};

const styles = StyleSheet.create({});

export default NavigationIcon;
