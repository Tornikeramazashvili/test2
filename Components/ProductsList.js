import React, { useEffect, useState } from "react";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView 
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const ProductsList = ({ route }) => {
  const { categoryId } = route.params;

  const client = new ApolloClient({
    uri: "https://stag.psp.ge/graphql",
    cache: new InMemoryCache(),
  });

  const [productList, setProductList] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    client
      .query({
        query: gql`
          query Products {
            products(
              filter: {category_uid: {eq: "${categoryId}"}}
              pageSize: 10
              currentPage: 1
            ) {
              aggregations {
                  attribute_code
                  count
                  label
                  options {
                    label
                    value
                    count
                  }
                }
               items {
                  name
                  id
                  uid
                  sku
                  image {
                    url
                  }
                  price_range {
                    minimum_price {
                      regular_price {
                        value
                        currency
                      }
                    }
                  }
                }
              page_info {
                  page_size
                }
            }
          }
        `,
      })
      .then((result) => setProductList(result.data.products?.items))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <ScrollView>
        {productList.map((product, index) => {
          return (
            <View style={styles.container}>
              <View style={styles.innerContainer}>
                <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={() =>
                    navigation.navigate("About product", {
                      productId: product.id,
                    })
                  }
                >
                  <View style={{ marginBottom: 15 }}>
                    <Image
                      style={styles.productImage}
                      resizeMode="contain"
                      source={{ uri: product.image.url }}
                    />
                  </View>
                  <View>
                    <Text style={styles.innterContainerText} key={index}>
                      {product.name}{" "}
                      {product.price_range.minimum_price.regular_price.value.toFixed(
                        2
                      )}{" "}
                      {product.price_range.minimum_price.regular_price.currency}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </>
  );
};

export default ProductsList;

const styles = StyleSheet.create({
  container: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    marginBottom: 20,
  },
  innterContainerText: {
    textAlign: "center",
    color: "black",
  },
  productImage: {
    width: 300,
    height: 300,
    borderRadius: 20,
  },
});
