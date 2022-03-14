import React, { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Dimensions,
  Image,
} from "react-native";

const images = [
  "https://scontent.ftbs5-2.fna.fbcdn.net/v/t39.30808-6/275383896_5177589235608921_4463035434157699715_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=e3f864&_nc_ohc=7sfQTOIpP64AX8ro7cr&_nc_ht=scontent.ftbs5-2.fna&oh=00_AT8D4nkSCuQ-kOw5ZGeTzSAwIROOcO0-QM4aIKyrfIG0jg&oe=6230747D",
  "https://scontent.ftbs5-3.fna.fbcdn.net/v/t39.30808-6/274921663_5155659771135201_7085333697414186914_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=e3f864&_nc_ohc=pk0A6PdS834AX86W4Qr&_nc_ht=scontent.ftbs5-3.fna&oh=00_AT-MP61srLnopTcUiv5oXEg-v3F18tR0JiKAIYBe-k5uMQ&oe=623003EF",
];

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const Carousel = () => {
  const [imageActive, setImageActive] = useState(0);
  onchange = (nativeEvent) => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
      );
      if (slide != imageActive) {
        setImageActive(slide);
      }
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.wrap}>
        <ScrollView
          onScroll={({ nativeEvent }) => onchange(nativeEvent)}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
          style={styles.wrap}
        >
          {images.map((e, index) => (
            <Image
              key={e}
              resizeMode="stretch"
              style={styles.wrap}
              source={{ uri: e }}
            />
          ))}
        </ScrollView>
        <View style={styles.wrapDot}>
          {images.map((e, index) => (
            <Text
              key={e}
              style={imageActive === index ? styles.dotActive : styles.dot}
            >
              ●
            </Text>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrap: {
    width: WIDTH * 1.0,
    height: HEIGHT * 0.2,
  },
  wrapDot: {
    position: "absolute",
    bottom: 0,
    left: "44%",
    flexDirection: "row",
    alignItems: "center",
  },
  dotActive: {
    margin: 3,
    color: "white",
  },
  dot: {
    margin: 3,
    color: "gray",
  },
});

export default Carousel;
