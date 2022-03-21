import React, { useEffect, useState } from "react";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import {
  View,
  ScrollView,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import * as actionTypes from "../redux/types";

const ProductsList = ({ route }) => {

  const dispatch = useDispatch()

  const mycart = useSelector(state => state.mycart)

  const addToCart = () => {
    let addedProduct = mycart.cartItems.filter(cart => cart.id === productsDetail.uid)
    let qty = 1
    if(addedProduct.length === 1){
      qty = addedProduct[0].quantity + 1
    }

    dispatch ({
        type: actionTypes.ADD_TO_CART,
        payload: {
            id: productsDetail.uid,
            ProductPrice: productsDetail?.price_range?.maximum_price?.final_price?.value.toFixed(2) ,
            ProductName: productsDetail.name,
            quantity: qty,
        }
    })

  }

  const { productId } = route.params;

  const client = new ApolloClient({
    uri: "https://app.psp.ge/graphql",
    cache: new InMemoryCache(),
  });

  const [productsDetail, setProductsDetail] = useState({});

  useEffect(() => {
    client
      .query({
        query: gql`
          query productDetails($id: Int!) {
            productsByID(id: $id) {
              uid
              sku
              name
              units
              form
              stock_status
              only_x_left_in_stock
              country_of_manufacture
              product_brand
              related_products {
                uid
                sku
                name
                thumbnail {
                  url
                  position
                  disabled
                  label
                }
                url_key
                url_rewrites {
                  url
                }
                price_range {
                  maximum_price {
                    final_price {
                      currency
                      value
                    }
                    regular_price {
                      currency
                      value
                    }
                  }
                  minimum_price {
                    final_price {
                      currency
                      value
                    }
                    regular_price {
                      currency
                      value
                    }
                  }
                }
              }
              thumbnail {
                url
                position
                disabled
                label
              }
              url_key
              url_rewrites {
                url
              }
              price_range {
                maximum_price {
                  final_price {
                    currency
                    value
                  }
                  regular_price {
                    currency
                    value
                  }
                }
                minimum_price {
                  final_price {
                    currency
                    value
                  }
                  regular_price {
                    currency
                    value
                  }
                }
              }
              categories {
                uid
                name
                url_suffix
                url_path
                breadcrumbs {
                  category_name
                  category_url_path
                }
              }
              price_range {
                maximum_price {
                  final_price {
                    currency
                    value
                  }
                  regular_price {
                    currency
                    value
                  }
                }
                minimum_price {
                  final_price {
                    currency
                    value
                  }
                  regular_price {
                    currency
                    value
                  }
                }
              }
              small_image {
                url
                position
                disabled
                label
              }
              image {
                url
                position
                disabled
                label
              }
              media_gallery {
                url
                position
                disabled
                label
              }
              thumbnail {
                url
                position
                disabled
                label
              }
              url_key
              url_rewrites {
                url
              }
              meta_description
              meta_keyword
              meta_title
              description {
                html
              }
              short_description {
                html
              }
              options_container
              special_to_date
            }
          }
        `,
        variables: {
          id: productId,
        },
      })
      .then((result) => setProductsDetail(result.data.productsByID))
      .catch((error) => console.log(error));

  }, []);

  let cartQty = 0;

  mycart?.cartItems.map(cart => {
    cartQty += cart.quantity
  })

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Image
            style={{
              width: 300,
              height: 300,
              borderRadius: 15,
            }}
            resizeMode="contain"
            source={{ uri: productsDetail?.image?.url }}
          />
          <Text style={styles.description}>{productsDetail.name}</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>
              {productsDetail?.price_range?.maximum_price?.final_price?.value.toFixed(
                2
              )}
              {
                productsDetail?.price_range?.maximum_price?.final_price
                  ?.currency
              }
            </Text>
          </View>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            ხელმისაწვდომობა: {productsDetail.stock_status}
          </Text>
          <Text style={styles.text}>კოდი: {productsDetail.sku}</Text>
          <Text style={styles.text}>
            მწარმოებელი ქვეყანა: {productsDetail.country_of_manufacture}
            {"\n"} 
          </Text>
          <Text style={styles.text}>
            პროდუქტის შესახებ:{" "}
            {productsDetail?.description?.html.replace(/(<([^>]+)>)/gi, "")}
          </Text>
        </View>
        <View style={styles.addButtonContainer}>
          <View style={{ flexDirection: "row" }}>
            <ImageBackground
              source={require("../Images/Cart.png")}
              style={styles.TopSectionShoppingCart}
            />
            <Text style={styles.cartCount}>
              {mycart?.cartItems.length}
              </Text>
          </View>
          <View>
            <TouchableOpacity
            onPress={() => addToCart()}
              activeOpacity={0.8}
              style={styles.button}>
                  <Text style={styles.buttonText}> კალათაში დამატება</Text>
                  
            </TouchableOpacity>
          </View>
        </View>
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
  },
  description: {
    color: "black",
    fontSize: 16,
    marginTop: 10,
    fontWeight: "bold",
  },
  text: {
    color: "black",
    fontSize: 13,
    textAlign: "justify",
  },
  textContainer: {
    marginLeft: 30,
    marginTop: 15,
    width: "83%",
  },
  button: {
    backgroundColor: "#183a7d",
    width: "154%",
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  priceContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price: {
    color: "black",
    fontSize: 17,
    fontWeight: "bold",
  },
  addbutton: {
    borderWidth: 1,
    borderRadius: 30,
    paddingLeft: 20,
    paddingRight: 20,
    borderColor: "gray",
  },
  addbuttonText: {
    fontSize: 18,
    color: "black",
  },
  addButtonContainer: {
    marginTop: 20,
    marginLeft: 30,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },
  TopSectionShoppingCart: {
    width: 40,
    height: 40,
  },
  cartCount: {
    fontSize: 10,
    backgroundColor: "#183a7d",
    color: "white",
    padding: 2,
    width: 18,
    textAlign: "center",
    borderRadius: 40,
    position: "absolute",
    left: 30,
  },
});
