import { Col, Row } from 'antd';
import Avatar from 'antd/lib/avatar';

import graphql from 'babel-plugin-relay/macro';
import React from 'react';
import { useLazyLoadQuery } from 'react-relay/hooks';

import { SponsorsQuery } from '../../__generated__/SponsorsQuery.graphql';
import { ReactComponent as LocationImage } from '../../ assets/images/location.svg';
import { ReactComponent as MemberImage } from '../../ assets/images/member.svg';

import styles from './Sponsors.module.scss';

const RepositoryNameQuery = graphql`
  query SponsorsQuery {
    user(login: "M0nica") {
      sponsors(first: 13) {
        totalCount
        edges {
          node {
            ... on User {
              id
              avatarUrl
              name
              bio
              login
              location
              organizations(first: 10) {
                edges {
                  node {
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

const Sponsors = () => {
  const data = useLazyLoadQuery<SponsorsQuery>(RepositoryNameQuery, {});

  const listNodes = data.user?.sponsors.edges;
  console.log('listNodes', listNodes);

  const list = data.user?.sponsors.edges;

  console.log({ list });

  const listSponsors = list?.map((item: any) => {
    const organizationsList = item.node.organizations ? item.node.organizations.edges : [];
    const count = organizationsList.length;
    const renderOrgList = organizationsList.map((org: any) => org.node.name).join(', ');

    return (
      <li key={item.node.id}>
        <Avatar size={35} src={item.node.avatarUrl} />
        <div className={styles.popup}>
          <div className={styles.holder}>
            <Row>
              <Col span={6}>
                <Avatar size={60} src={item.node.avatarUrl} alt="avatar" />
              </Col>
              <Col span={18}>
                <h3 className={styles.title}>
                  {item.node.name} <span className={styles.login}> {item.node.login}</span>
                </h3>
                <p>{item.node.bio}</p>
                {item.node.location && (
                  <address className={styles.location}>
                    <span className={styles.iconHolder}>
                      <LocationImage color="#8b949e" fontSize="12px" />
                    </span>
                    {item.node.location}
                  </address>
                )}
              </Col>
            </Row>
          </div>
          {organizationsList.length > 0 && (
            <div className={styles.memberInfo}>
              <MemberImage color="#8b949e" fontSize="12px" />
              Member of&nbsp;
              {count < 3 ? renderOrgList : renderOrgList.slice(2, count)}
              {count > 1 && <span className={styles.infoText}>&nbsp;and&nbsp;{count} more</span>}
            </div>
          )}
        </div>
      </li>
    );
  });

  return (
    <section className={styles.section}>
      <h2>Sponsors</h2>
      <ul className={styles.sponsorsList}>
        {listSponsors}
        <li>+{data.user?.sponsors.totalCount}</li>
      </ul>
    </section>
  );
};

export default Sponsors;
