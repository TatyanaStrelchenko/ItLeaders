/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

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
                    readonly bio?: string | null;
                    readonly login?: string;
                    readonly location?: string | null;
                    readonly hovercard?: {
                        readonly contexts: ReadonlyArray<{
                            readonly message: string;
                            readonly octicon: string;
                        }>;
                    };
                    readonly organizations?: {
                        readonly edges: ReadonlyArray<{
                            readonly node: {
                                readonly name: string | null;
                            } | null;
                        } | null> | null;
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
    sponsors(first: 13) {
      totalCount
      edges {
        node {
          __typename
          ... on User {
            id
            avatarUrl
            name
            bio
            login
            location
            hovercard {
              contexts {
                __typename
                message
                octicon
              }
            }
            organizations(first: 10) {
              edges {
                node {
                  name
                  id
                }
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

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "login",
    "value": "M0nica"
  }
],
v1 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 13
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "totalCount",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "avatarUrl",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "bio",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "login",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "location",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "message",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "octicon",
  "storageKey": null
},
v11 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 10
  }
],
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "SponsorsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v1/*: any*/),
            "concreteType": "SponsorConnection",
            "kind": "LinkedField",
            "name": "sponsors",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "SponsorEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v3/*: any*/),
                          (v4/*: any*/),
                          (v5/*: any*/),
                          (v6/*: any*/),
                          (v7/*: any*/),
                          (v8/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Hovercard",
                            "kind": "LinkedField",
                            "name": "hovercard",
                            "plural": false,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": null,
                                "kind": "LinkedField",
                                "name": "contexts",
                                "plural": true,
                                "selections": [
                                  (v9/*: any*/),
                                  (v10/*: any*/)
                                ],
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": (v11/*: any*/),
                            "concreteType": "OrganizationConnection",
                            "kind": "LinkedField",
                            "name": "organizations",
                            "plural": false,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "OrganizationEdge",
                                "kind": "LinkedField",
                                "name": "edges",
                                "plural": true,
                                "selections": [
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "Organization",
                                    "kind": "LinkedField",
                                    "name": "node",
                                    "plural": false,
                                    "selections": [
                                      (v5/*: any*/)
                                    ],
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": null
                              }
                            ],
                            "storageKey": "organizations(first:10)"
                          }
                        ],
                        "type": "User",
                        "abstractKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "sponsors(first:13)"
          }
        ],
        "storageKey": "user(login:\"M0nica\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "SponsorsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v1/*: any*/),
            "concreteType": "SponsorConnection",
            "kind": "LinkedField",
            "name": "sponsors",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "SponsorEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v12/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v3/*: any*/),
                          (v4/*: any*/),
                          (v5/*: any*/),
                          (v6/*: any*/),
                          (v7/*: any*/),
                          (v8/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Hovercard",
                            "kind": "LinkedField",
                            "name": "hovercard",
                            "plural": false,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": null,
                                "kind": "LinkedField",
                                "name": "contexts",
                                "plural": true,
                                "selections": [
                                  (v12/*: any*/),
                                  (v9/*: any*/),
                                  (v10/*: any*/)
                                ],
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": (v11/*: any*/),
                            "concreteType": "OrganizationConnection",
                            "kind": "LinkedField",
                            "name": "organizations",
                            "plural": false,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "OrganizationEdge",
                                "kind": "LinkedField",
                                "name": "edges",
                                "plural": true,
                                "selections": [
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "Organization",
                                    "kind": "LinkedField",
                                    "name": "node",
                                    "plural": false,
                                    "selections": [
                                      (v5/*: any*/),
                                      (v3/*: any*/)
                                    ],
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": null
                              }
                            ],
                            "storageKey": "organizations(first:10)"
                          }
                        ],
                        "type": "User",
                        "abstractKey": null
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v3/*: any*/)
                        ],
                        "type": "Node",
                        "abstractKey": "__isNode"
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "sponsors(first:13)"
          },
          (v3/*: any*/)
        ],
        "storageKey": "user(login:\"M0nica\")"
      }
    ]
  },
  "params": {
    "cacheID": "f2331f98bad7a0caaea643099b9541d8",
    "id": null,
    "metadata": {},
    "name": "SponsorsQuery",
    "operationKind": "query",
    "text": "query SponsorsQuery {\n  user(login: \"M0nica\") {\n    sponsors(first: 13) {\n      totalCount\n      edges {\n        node {\n          __typename\n          ... on User {\n            id\n            avatarUrl\n            name\n            bio\n            login\n            location\n            hovercard {\n              contexts {\n                __typename\n                message\n                octicon\n              }\n            }\n            organizations(first: 10) {\n              edges {\n                node {\n                  name\n                  id\n                }\n              }\n            }\n          }\n          ... on Node {\n            __isNode: __typename\n            id\n          }\n        }\n      }\n    }\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '410e5dafa0722d8c397b5e1dc5fd3fc9';
export default node;
