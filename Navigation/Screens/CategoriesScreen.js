import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
import SubCategoryList from "../../Components/SubCategoryList";

export default function CategoriesScreen({ navigation }) {
  const client = new ApolloClient({
    uri: "https://app.psp.ge/graphql",
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
                  uid
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

  return (
    <View style={{ marginTop: 23 }}>
      <ScrollView>
        {categoryList.map((category, index) => (
          <SubCategoryList
            key={index}
            categoryList={category.name}
            children={category.children}
          />
        ))}
      </ScrollView>
    </View>
  );
}
