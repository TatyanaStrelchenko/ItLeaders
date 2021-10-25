/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';

export type SponsorsQueryVariables = {};
export type SponsorsQueryResponse = {
  readonly user: {
    readonly sponsors: {
      readonly totalCount: number;
    };
  } | null;
};
export type SponsorsQuery = {
  readonly response: SponsorsQueryResponse;
  readonly variables: SponsorsQueryVariables;
};

/*
query SponsorsQuery {
  user(login: "M0nica") {
    sponsors {
      totalCount
    }
    id
  }
}
*/

const node: ConcreteRequest = (function () {
  var v0 = [
      {
        kind: 'Literal',
        name: 'login',
        value: 'M0nica',
      },
    ],
    v1 = {
      alias: null,
      args: null,
      concreteType: 'SponsorConnection',
      kind: 'LinkedField',
      name: 'sponsors',
      plural: false,
      selections: [
        {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'totalCount',
          storageKey: null,
        },
      ],
      storageKey: null,
    };
  return {
    fragment: {
      argumentDefinitions: [],
      kind: 'Fragment',
      metadata: null,
      name: 'SponsorsQuery',
      selections: [
        {
          alias: null,
          args: v0 /*: any*/,
          concreteType: 'User',
          kind: 'LinkedField',
          name: 'user',
          plural: false,
          selections: [v1 /*: any*/],
          storageKey: 'user(login:"M0nica")',
        },
      ],
      type: 'Query',
      abstractKey: null,
    },
    kind: 'Request',
    operation: {
      argumentDefinitions: [],
      kind: 'Operation',
      name: 'SponsorsQuery',
      selections: [
        {
          alias: null,
          args: v0 /*: any*/,
          concreteType: 'User',
          kind: 'LinkedField',
          name: 'user',
          plural: false,
          selections: [
            v1 /*: any*/,
            {
              alias: null,
              args: null,
              kind: 'ScalarField',
              name: 'id',
              storageKey: null,
            },
          ],
          storageKey: 'user(login:"M0nica")',
        },
      ],
    },
    params: {
      cacheID: '2824f3ec283128ae2e636ab1c461c833',
      id: null,
      metadata: {},
      name: 'SponsorsQuery',
      operationKind: 'query',
      text: 'query SponsorsQuery {\n  user(login: "M0nica") {\n    sponsors {\n      totalCount\n    }\n    id\n  }\n}\n',
    },
  };
})();
(node as any).hash = 'bca59ac44e02cc1ffa7316092c1f0dd5';
export default node;
