import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  add?: Maybe<Otobai>;
  update?: Maybe<Otobai>;
};


export type MutationAddArgs = {
  image: Scalars['String'];
  brand: Scalars['String'];
  description: Scalars['String'];
  engine_volume: Scalars['String'];
};


export type MutationUpdateArgs = {
  _id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  brand?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  engine_volume?: Maybe<Scalars['String']>;
};


export type OtobaiOtobaiArgs = {
  filter?: Maybe<ParamArg>;
};

export type ParamArg = {
  bikeId?: Maybe<Scalars['String']>;
  /** Filter Search Keyword */
  keyword?: Maybe<Scalars['String']>;
};

export type Otobai = {
  __typename?: 'otobai';
  _id?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  brand?: Maybe<Scalars['String']>;
  engine_volume?: Maybe<Scalars['String']>;
  created_date?: Maybe<Scalars['ID']>;
  otobai?: Maybe<Paramotobai>;

};

export type Paramotobai = {
  __typename?: 'paramotobai';
  items?: Maybe<Array<Maybe<Otobai>>>;
};

export type Unnamed_1_QueryVariables = Exact<{
  bikeId: Scalars['String'];
  keyword: Scalars['String'];
}>;


export type Unnamed_1_Query = { __typename?: 'Otobai', otobai?: Maybe<{ __typename?: 'paramotobai', items?: Maybe<Array<Maybe<{ __typename?: 'otobai', _id?: Maybe<string>, image?: Maybe<string>, description?: Maybe<string>, brand?: Maybe<string>, engine_volume?: Maybe<string>, created_date?: Maybe<string> }>>> }> };


export const Document = gql`
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

/**
 * __useQuery__
 *
 * To run a query within a React component, call `useQuery` and pass it any options that fit your needs.
 * When your component renders, `useQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQuery({
 *   variables: {
 *      bikeId: // value for 'bikeId'
 *      keyword: // value for 'keyword'
 *   },
 * });
 */
// export function useQuery(baseOptions: Apollo.QueryHookOptions<Query, QueryVariables>) {
//         const options = {...defaultOptions, ...baseOptions}
//         return Apollo.useQuery<Query, QueryVariables>(Document, options);
//       }
// export function useLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Query, QueryVariables>) {
//           const options = {...defaultOptions, ...baseOptions}
//           return Apollo.useLazyQuery<Query, QueryVariables>(Document, options);
//         }
// export type QueryHookResult = ReturnType<typeof useQuery>;
// export type LazyQueryHookResult = ReturnType<typeof useLazyQuery>;
// export type QueryResult = Apollo.QueryResult<Query, QueryVariables>;