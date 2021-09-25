import { gql } from "graphql-tag";

export const ADD_BIKE = gql(`
mutation add($image: String!, $description: String!, $engine_volume: String!, $brand: String!) {
    add(image: $image, description: $description, brand: $brand, engine_volume: $engine_volume) {
      image
      engine_volume
      brand
      created_date
    }
  }
`)