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

  const list = data.user?.sponsors.edges;

  console.log({ list });

  const listSponsors = list?.map((item: any) => (
    <li>
      <Avatar src={item.node.avatarUrl} />
      <div className={styles.popup}>
        <div className={styles.holder}>
          <Row>
            <Col span={6}>
              <div className={styles.avatarHolder}>
                <Avatar src={item.node.avatarUrl} />
              </div>
            </Col>
            <Col span={18}>
              <h3>
                {item.node.name} <span>m90</span>
              </h3>
              <p>text</p>
              <address>location</address>
            </Col>
          </Row>
          <div className={styles.memberInfo}>member</div>
        </div>
      </div>
    </li>
  ));

  return (
    <section className={styles.section}>
      <h2>Sponsors</h2>
      <ul className={styles.sponsorsList}>
        {listSponsors}
        <li>{data.user?.sponsors.totalCount}</li>
      </ul>
      {/*{getSponsorsInfo}*/}
    </section>
  );
};

export default Sponsors;
