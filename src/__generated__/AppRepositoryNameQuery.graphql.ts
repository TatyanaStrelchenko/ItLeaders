/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type AppRepositoryNameQueryVariables = {};
export type AppRepositoryNameQueryResponse = {
    readonly user: {
        readonly sponsors: {
            readonly totalCount: number;
        };
    } | null;
};
export type AppRepositoryNameQuery = {
    readonly response: AppRepositoryNameQueryResponse;
    readonly variables: AppRepositoryNameQueryVariables;
};



/*
query AppRepositoryNameQuery {
  user(login: "M0nica") {
    sponsors {
      totalCount
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
v1 = {
  "alias": null,
  "args": null,
  "concreteType": "SponsorConnection",
  "kind": "LinkedField",
  "name": "sponsors",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "totalCount",
      "storageKey": null
    }
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppRepositoryNameQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          (v1/*: any*/)
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
    "name": "AppRepositoryNameQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": "user(login:\"M0nica\")"
      }
    ]
  },
  "params": {
    "cacheID": "ccaf19966aac76ae75ae661948799b50",
    "id": null,
    "metadata": {},
    "name": "AppRepositoryNameQuery",
    "operationKind": "query",
    "text": "query AppRepositoryNameQuery {\n  user(login: \"M0nica\") {\n    sponsors {\n      totalCount\n    }\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '273807ae7ad3a278fb8bb61baa88abc0';
export default node;
