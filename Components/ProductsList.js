import React from "react";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { useEffect, useState } from "react";
import { View, Text } from "react-native";

const ProductsList = ({route}) => {

    const { categoryId } = route.params;


    const client = new ApolloClient({
        uri: "https://pspmagento.perse.pro/graphql",
        cache: new InMemoryCache(),
      });

  const [productList, setProductList] = useState([]);

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
                  sku
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
      <View>
          {productList.map(product => {
              return (
                  <View>
                      <Text key={product.id}>{product.name}</Text>
                      <Text key={product.id}>{product.id}</Text>
                  </View>
              )
          })}
      </View>
    </>
  );
};

export default ProductsList;
