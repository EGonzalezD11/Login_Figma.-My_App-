import { StyleSheet } from "react-native";
export default function App() {
  return (
    <view style={styles.container}>
      <text style={styles.Text}>Asistencia</text>
    </view>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#11c1c1",
  },
  Text: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
});
