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
  "https://scontent.ftbs5-3.fna.fbcdn.net/v/t39.30808-6/273147737_5101940886507090_7613687885657188803_n.png?_nc_cat=107&ccb=1-5&_nc_sid=e3f864&_nc_ohc=tX5-w6gFxNYAX8zadYC&_nc_ht=scontent.ftbs5-3.fna&oh=00_AT8Vu72V0ARn6ZKP8LDx24YoSught94uZH-tYgnCBAmfcg&oe=621DEA7E",
  "https://scontent.ftbs5-2.fna.fbcdn.net/v/t39.30808-6/272081686_5009776729056840_2900867949311585266_n.png?_nc_cat=100&ccb=1-5&_nc_sid=e3f864&_nc_ohc=Vucm4QyhTy8AX_ZMHOj&_nc_ht=scontent.ftbs5-2.fna&oh=00_AT8fFmawDSjOsVSHuR-vBB2t6AiYiXjSsm1mKZjkbkY7TQ&oe=621E84DB",
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
    width: WIDTH,
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
