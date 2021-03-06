import { gql } from "graphql-tag";

export const GET_BIKE = gql`
query ($bikeId: String!, $keyword: String!) {
  otobai(filter: {bikeId: $bikeId, keyword: $keyword}) {
    items {
      _id
      image
      description
      brand
      engine_volume
      created_date
    }
  }
}
`;
