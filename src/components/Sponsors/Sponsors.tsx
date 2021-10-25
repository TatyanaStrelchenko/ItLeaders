import React from 'react';
import Avatar from 'antd/lib/avatar';
import { Col, Row } from 'antd';
import graphql from 'babel-plugin-relay/macro';

import {
  loadQuery,
  PreloadedQuery,
  RelayEnvironmentProvider,
  usePreloadedQuery,
} from 'react-relay/hooks';
import { AppRepositoryNameQuery } from '../../__generated__/AppRepositoryNameQuery.graphql';

import RelayEnvironment from '../../RelayEnvironment';

import styles from './Sponsors.module.scss';

const { Suspense } = React;

const RepositoryNameQuery = graphql`
  query SponsorsQuery {
    user(login: "M0nica") {
      sponsors {
        totalCount
      }
    }
  }
`;

const preloadedQuery = loadQuery<AppRepositoryNameQuery>(RelayEnvironment, RepositoryNameQuery, {});

interface SponsorsProps {
  preloadedQuery: PreloadedQuery<AppRepositoryNameQuery>;
}

const Sponsors2 = (props: SponsorsProps) => {
  const { user } = usePreloadedQuery(RepositoryNameQuery, props.preloadedQuery);

  return (
    <section>
      <h2>Sponsors</h2>
      <ul className={styles.sponsorsList}>
        <li>
          <Avatar src="https://joeschmoe.io/api/v1/random" />
          <div className={styles.popup}>
            <div className="holder">
              <Row>
                <Col span={12}>
                  <Avatar src="https://joeschmoe.io/api/v1/random" />
                </Col>
                <Col span={12}>
                  <div className={styles.info}>
                    <h2 className={styles.title}>
                      Frederik Ring <span>m90</span>
                    </h2>
                    <p className={styles.description}>Repeatedly refreshing websites</p>
                    <address className={styles.location}>Repeatedly refreshing websites</address>
                  </div>
                </Col>
              </Row>
              <div className={styles.memberInfo}>member</div>
            </div>
          </div>
        </li>
        <li>{user?.sponsors.totalCount} sponsors</li>
      </ul>
    </section>
  );
};

function Sponsors() {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback="Loading...">
        <Sponsors2 preloadedQuery={preloadedQuery} />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default Sponsors;
