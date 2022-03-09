import React, { useEffect, useState } from "react";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import {View, ScrollView, Text, Image} from "react-native";

const ProductsList = ({ route }) => {
  const { productId } = route.params;

  const client = new ApolloClient({
    uri: "https://stag.psp.ge/graphql",
    cache: new InMemoryCache(),
  });

  const [productsDetail, setProductsDetail] = useState({});

  useEffect(() => {
    client
      .query({
        query: gql`
        query productDetails ($id: Int!){
           productsByID(id: $id ) {
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
                  category_name,
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
        variables : {
          id : productId
        }
      })
      .then((result) => setProductsDetail(result.data.productsByID))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <ScrollView>
        <View style={{ marginBottom: 15 }}>
          <Image
              style={{
                width: 300,
                height: 300,
                borderRadius: 20,
              }}
              resizeMode="contain"
              source={{ uri: productsDetail?.image?.url }}
          />
        </View>
         <Text>
           {productsDetail.name}
         </Text>
      </ScrollView>
    </>
  );
};

export default ProductsList;
