import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";
import { Image } from "expo-image";
const PlaceholderImage = require("@/assets/images/background-image.png");

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

  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});

export default function Index() {
  return (
    <View style={styles.container}>
      <View>
        <Image source={PlaceholderImage} style={styles.image} />
      </View>
      <Text style={styles.text}>Home screen</Text>
      <Link href="/about">Go to About</Link>
    </View>
  );
}
