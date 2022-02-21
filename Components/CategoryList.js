import React from "react";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import SubCategoryList from "./SubCategoryList";

const CategoryList = () => {
  const client = new ApolloClient({
    uri: "https://pspmagento.perse.pro/graphql",
    cache: new InMemoryCache(),
  });

  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    client
      .query({
        query: gql`
          query categoryList {
            categories {
              items {
                children {
                  include_in_menu
                  is_anchor
                  level
                  name
                  position
                  product_count
                  uid
                  url_path
                  url_suffix
                  meta_title
                  meta_description
                  breadcrumbs {
                    category_name
                    category_url_path
                  }
                  children {
                    include_in_menu
                    is_anchor
                    level
                    name
                    position
                    product_count
                    uid
                    url_path
                    url_suffix
                    meta_title
                    meta_description
                    breadcrumbs {
                      category_name
                      category_url_path
                    }
                    children {
                      include_in_menu
                      is_anchor
                      level
                      name
                      position
                      product_count
                      uid
                      url_path
                      url_suffix
                      meta_title
                      meta_description
                      breadcrumbs {
                        category_name
                        category_url_path
                      }
                    }
                  }
                }
                meta_title
                meta_description
                product_count
                name
                uid
                breadcrumbs {
                  category_name
                  category_url_path
                }
              }
            }
          }
        `,
      })
      .then((result) =>
        setCategoryList(result.data?.categories?.items[0].children)
      );
  }, []);

  console.log(categoryList);

  return (
    <View>
      {categoryList.map((category, index) => (
        <SubCategoryList
          key={index}
          categoryList={category.name}
          children={category.children}
        />
      ))}
    </View>
  );
};

export default CategoryList;
