import { Link } from "expo-router"
import { StyleSheet, View, Text } from "react-native";
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>Asistencia</Text>
      <Link href="/about" style={styles.button}>
        Go to About Us
      </Link>        
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    fontSize: 18,
    color: "#fff",
    backgroundColor: "#415252"
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#23b39b",
  },
  Text: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
});
