import { StyleSheet, ImageBackground } from "react-native";

export default function BackgroundPic() {
  return (
    <ImageBackground
      source={require("../assets/Images/photoBG.jpg")}
      style={styles.image}
    ></ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
  },
});
