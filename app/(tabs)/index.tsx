import { View, StyleSheet } from "react-native";
import Button from "@/components/Button";
import ImageViewer from "@/components/ImageViewer";
const placeholderImage = require("../../assets/images/background-image.png");

export default function Index() {
  return (
    <View style={styles.container}>
      <View>
        <ImageViewer imgSource={placeholderImage}></ImageViewer>
      </View>
      <View style={styles.footerContainer}>
        <Button theme="primary" label="Choose a photo" />
        <Button label="Take a photo" />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
});
