import { View, StyleSheet, Text } from "react-native";
export default function about() {
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>About Us</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3711c1",
  },
  Text: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
});
