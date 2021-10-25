import RelayEnvironment from '../../RelayEnvironment';

import { Col, Row } from 'antd';
import Avatar from 'antd/lib/avatar';
import graphql from 'babel-plugin-relay/macro';
import React, { Suspense } from 'react';
import {
  loadQuery,
  PreloadedQuery,
  RelayEnvironmentProvider,
  useLazyLoadQuery,
  usePreloadedQuery,
} from 'react-relay/hooks';

import { AppRepositoryNameQuery } from '../../__generated__/AppRepositoryNameQuery.graphql';

import styles from './Sponsors.module.scss';

const RepositoryNameQuery = graphql`
  query SponsorsQuery {
    user(login: "M0nica") {
      sponsors {
        totalCount
      }
    }
  }
`;

// const preloadedQuery = loadQuery<AppRepositoryNameQuery>(RelayEnvironment, RepositoryNameQuery, {});

type SponsorsProps = {
  preloadedQuery: PreloadedQuery<AppRepositoryNameQuery>;
};

const Sponsors = () => {
  const { user } = useLazyLoadQuery(RepositoryNameQuery, {});

  return (
    <section>
      <h2>Sponsors</h2>
      <ul className={styles.sponsorsList}>
        <li>
          <Avatar src="https://joeschmoe.io/api/v1/random" />
          <div className={styles.popup}>
            <div className="holder">
              <div className={styles.memberInfo}>member</div>
            </div>
          </div>
        </li>
        <li>{user?.sponsors.totalCount} sponsors</li>
      </ul>
    </section>
  );
};

export default Sponsors;
