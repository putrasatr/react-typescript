import { gql } from "graphql-tag";

export const GET_BIKE = gql`
  query {
    otobai{
      _id
      image
      description
      brand
      created_date
      engine_volume
    }
  }
`;
