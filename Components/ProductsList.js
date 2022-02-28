import React from "react";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { useEffect, useState } from "react";
import { View, Text } from "react-native";

const ProductsList = () => {
  const client = new ApolloClient({
    uri: "https://pspmagento.perse.pro/graphql",
    cache: new InMemoryCache(),
  });

  const [productList, setProductList] = useState([]);

  useEffect(() => {
    client
      .query({
        query: gql`
          query productsList(
            $search: String = ""
            $filter: ProductAttributeFilterInput
            $pageSize: Int = 20
            $currentPage: Int = 1
            $sort: ProductAttributeSortInput
          ) {
            products(
              search: $search
              filter: $filter
              pageSize: $pageSize
              currentPage: $currentPage
              sort: $sort
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
                uid
                sku
                name
                stock_status
                only_x_left_in_stock
                rating_summary
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
              page_info {
                current_page
                page_size
                total_pages
              }
              total_count
            }
          }
        `,
      })
      .then((result) => setProductList(result.data?.products.items));
  }, []);

  console.log(productList);

  return (
    <>
      <View>
        {productList.map((product, index) => (
          <Text key={index}>{product.name}</Text>
        ))}
      </View>
    </>
  );
};

export default ProductsList;
