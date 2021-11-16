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
                    readonly isEmployee?: boolean;
                    readonly isDeveloperProgramMember?: boolean;
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
    sponsors(first: 14) {
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
            isEmployee
            isDeveloperProgramMember
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
    "value": 14
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
  "name": "isEmployee",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isDeveloperProgramMember",
  "storageKey": null
},
v11 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 10
  }
];
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
                          (v9/*: any*/),
                          (v10/*: any*/),
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
            "storageKey": "sponsors(first:14)"
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
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "__typename",
                        "storageKey": null
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v3/*: any*/),
                          (v4/*: any*/),
                          (v5/*: any*/),
                          (v6/*: any*/),
                          (v7/*: any*/),
                          (v8/*: any*/),
                          (v9/*: any*/),
                          (v10/*: any*/),
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
            "storageKey": "sponsors(first:14)"
          },
          (v3/*: any*/)
        ],
        "storageKey": "user(login:\"M0nica\")"
      }
    ]
  },
  "params": {
    "cacheID": "6ed1d018576570c053598cfd91b471b8",
    "id": null,
    "metadata": {},
    "name": "SponsorsQuery",
    "operationKind": "query",
    "text": "query SponsorsQuery {\n  user(login: \"M0nica\") {\n    sponsors(first: 14) {\n      totalCount\n      edges {\n        node {\n          __typename\n          ... on User {\n            id\n            avatarUrl\n            name\n            bio\n            login\n            location\n            isEmployee\n            isDeveloperProgramMember\n            organizations(first: 10) {\n              edges {\n                node {\n                  name\n                  id\n                }\n              }\n            }\n          }\n          ... on Node {\n            __isNode: __typename\n            id\n          }\n        }\n      }\n    }\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '6735198a1472376ffe297d6322bc02be';
export default node;
