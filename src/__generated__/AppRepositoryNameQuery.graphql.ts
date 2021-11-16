/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';

export type AppRepositoryNameQueryVariables = {};
export type AppRepositoryNameQueryResponse = {
  readonly user: {
    readonly name: string | null;
  } | null;
};
export type AppRepositoryNameQuery = {
  readonly response: AppRepositoryNameQueryResponse;
  readonly variables: AppRepositoryNameQueryVariables;
};

/*
query AppRepositoryNameQuery {
  user(login: "M0nica") {
    name
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
      kind: 'ScalarField',
      name: 'name',
      storageKey: null,
    };
  return {
    fragment: {
      argumentDefinitions: [],
      kind: 'Fragment',
      metadata: null,
      name: 'AppRepositoryNameQuery',
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
      name: 'AppRepositoryNameQuery',
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
      cacheID: '93d93a9e7487afd7b6b1471248cc6c91',
      id: null,
      metadata: {},
      name: 'AppRepositoryNameQuery',
      operationKind: 'query',
      text: 'query AppRepositoryNameQuery {\n  user(login: "M0nica") {\n    name\n    id\n  }\n}\n',
    },
  };
})();
(node as any).hash = '71d0e88a8e0e7809388fb9f97caa3f61';
export default node;
