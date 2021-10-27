import { Col, Row } from 'antd';
import Avatar from 'antd/lib/avatar';
import graphql from 'babel-plugin-relay/macro';
import React from 'react';
import { useLazyLoadQuery } from 'react-relay/hooks';

import { SponsorsQuery } from '../../__generated__/SponsorsQuery.graphql';

import styles from './Sponsors.module.scss';

const RepositoryNameQuery = graphql`
  query SponsorsQuery {
    user(login: "M0nica") {
      sponsors(first: 12) {
        totalCount
        edges {
          node {
            ... on User {
              id
              avatarUrl
              name
              bioHTML
              hovercard {
                contexts {
                  message
                  octicon
                }
              }
            }
          }
        }
      }
    }
  }
`;

// const preloadedQuery = loadQuery<AppRepositoryNameQuery>(RelayEnvironment, RepositoryNameQuery, {});

// type SponsorsProps = {
//   preloadedQuery: PreloadedQuery<AppRepositoryNameQuery>;
// };

const Sponsors = () => {
  const data = useLazyLoadQuery<SponsorsQuery>(RepositoryNameQuery, {});

  const listNodes = data.user?.sponsors.edges;
  console.log('listNodes', listNodes);

  return (
    <section className={styles.section}>
      <h2>Sponsors</h2>
      <ul className={styles.sponsorsList}>
        <li>
          <Avatar src="https://joeschmoe.io/api/v1/random" />
          <div className={styles.popup}>
            <div className={styles.holder}>
              <Row>
                <Col span={12}>
                  <Avatar src="https://joeschmoe.io/api/v1/random" />
                </Col>
                <Col span={12}>
                  <h3>
                    Frederik Ring <span>m90</span>
                  </h3>
                  <p>text</p>
                  <address>location</address>
                </Col>
              </Row>
              <div className={styles.memberInfo}>member</div>
            </div>
          </div>
        </li>
        <li>{data.user?.sponsors.totalCount}</li>
      </ul>
      {/*{getSponsorsInfo}*/}
    </section>
  );
};

export default Sponsors;
