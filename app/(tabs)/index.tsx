import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#25292e",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home screen</Text>
      <Link href="/about">Go to About</Link>
    </View>
  );
}
