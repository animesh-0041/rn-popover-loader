import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
export const RnPopoverLoader = ({ loaderColor = "#000", loaderSize = "small", loadingText = "Loading...", loadingTextColor = "#000", showLoader = true, }) => {
    if (!showLoader)
        return null;
    return (<View style={styles.overlay}>
      <View style={styles.container}>
        <ActivityIndicator color={loaderColor} size={loaderSize}/>
        <Text style={{ textAlign: "center", color: loadingTextColor }}>
          {loadingText}
        </Text>
      </View>
    </View>);
};
const styles = StyleSheet.create({
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 999,
    },
    container: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        width: "40%",
        paddingVertical: 15,
        borderRadius: 10,
    },
});
export default RnPopoverLoader;
