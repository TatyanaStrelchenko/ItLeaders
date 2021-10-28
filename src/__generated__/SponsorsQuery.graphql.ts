/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';

export type SponsorsQueryVariables = {};
export type SponsorsQueryResponse = {
  readonly user: {
    readonly sponsors: {
      readonly totalCount: number;
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly id?: string;
          readonly avatarUrl?: unknown;
          readonly name?: string | null;
          readonly bioHTML?: unknown;
          readonly hovercard?: {
            readonly contexts: ReadonlyArray<{
              readonly message: string;
              readonly octicon: string;
            }>;
          };
        } | null;
      } | null> | null;
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
    sponsors(first: 12) {
      totalCount
      edges {
        node {
          __typename
          ... on User {
            id
            avatarUrl
            name
            bioHTML
            hovercard {
              contexts {
                __typename
                message
                octicon
              }
            }
          }
          ... on Node {
            __isNode: __typename
            id
          }
        }
      }
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
    v1 = [
      {
        kind: 'Literal',
        name: 'first',
        value: 12,
      },
    ],
    v2 = {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: 'totalCount',
      storageKey: null,
    },
    v3 = {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: 'id',
      storageKey: null,
    },
    v4 = {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: 'avatarUrl',
      storageKey: null,
    },
    v5 = {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: 'name',
      storageKey: null,
    },
    v6 = {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: 'bioHTML',
      storageKey: null,
    },
    v7 = {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: 'message',
      storageKey: null,
    },
    v8 = {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: 'octicon',
      storageKey: null,
    },
    v9 = {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: '__typename',
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
          selections: [
            {
              alias: null,
              args: v1 /*: any*/,
              concreteType: 'SponsorConnection',
              kind: 'LinkedField',
              name: 'sponsors',
              plural: false,
              selections: [
                v2 /*: any*/,
                {
                  alias: null,
                  args: null,
                  concreteType: 'SponsorEdge',
                  kind: 'LinkedField',
                  name: 'edges',
                  plural: true,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: null,
                      kind: 'LinkedField',
                      name: 'node',
                      plural: false,
                      selections: [
                        {
                          kind: 'InlineFragment',
                          selections: [
                            v3 /*: any*/,
                            v4 /*: any*/,
                            v5 /*: any*/,
                            v6 /*: any*/,
                            {
                              alias: null,
                              args: null,
                              concreteType: 'Hovercard',
                              kind: 'LinkedField',
                              name: 'hovercard',
                              plural: false,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: null,
                                  kind: 'LinkedField',
                                  name: 'contexts',
                                  plural: true,
                                  selections: [v7 /*: any*/, v8 /*: any*/],
                                  storageKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                          ],
                          type: 'User',
                          abstractKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: 'sponsors(first:12)',
            },
          ],
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
            {
              alias: null,
              args: v1 /*: any*/,
              concreteType: 'SponsorConnection',
              kind: 'LinkedField',
              name: 'sponsors',
              plural: false,
              selections: [
                v2 /*: any*/,
                {
                  alias: null,
                  args: null,
                  concreteType: 'SponsorEdge',
                  kind: 'LinkedField',
                  name: 'edges',
                  plural: true,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: null,
                      kind: 'LinkedField',
                      name: 'node',
                      plural: false,
                      selections: [
                        v9 /*: any*/,
                        {
                          kind: 'InlineFragment',
                          selections: [
                            v3 /*: any*/,
                            v4 /*: any*/,
                            v5 /*: any*/,
                            v6 /*: any*/,
                            {
                              alias: null,
                              args: null,
                              concreteType: 'Hovercard',
                              kind: 'LinkedField',
                              name: 'hovercard',
                              plural: false,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: null,
                                  kind: 'LinkedField',
                                  name: 'contexts',
                                  plural: true,
                                  selections: [v9 /*: any*/, v7 /*: any*/, v8 /*: any*/],
                                  storageKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                          ],
                          type: 'User',
                          abstractKey: null,
                        },
                        {
                          kind: 'InlineFragment',
                          selections: [v3 /*: any*/],
                          type: 'Node',
                          abstractKey: '__isNode',
                        },
                      ],
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: 'sponsors(first:12)',
            },
            v3 /*: any*/,
          ],
          storageKey: 'user(login:"M0nica")',
        },
      ],
    },
    params: {
      cacheID: 'f206ec0cd5f1665c52bf4b3a392a6d5d',
      id: null,
      metadata: {},
      name: 'SponsorsQuery',
      operationKind: 'query',
      text: 'query SponsorsQuery {\n  user(login: "M0nica") {\n    sponsors(first: 12) {\n      totalCount\n      edges {\n        node {\n          __typename\n          ... on User {\n            id\n            avatarUrl\n            name\n            bioHTML\n            hovercard {\n              contexts {\n                __typename\n                message\n                octicon\n              }\n            }\n          }\n          ... on Node {\n            __isNode: __typename\n            id\n          }\n        }\n      }\n    }\n    id\n  }\n}\n',
    },
  };
})();
(node as any).hash = '58f4668702f8dbbede21063301bf6023';
export default node;
