import { Col, Row } from 'antd';
import Avatar from 'antd/lib/avatar';

import graphql from 'babel-plugin-relay/macro';
import React from 'react';
import { useLazyLoadQuery } from 'react-relay/hooks';

import { SponsorsQuery } from '../../__generated__/SponsorsQuery.graphql';
import { LocationIcon, MemberIcon } from '../../icons';

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
              isEmployee
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
    const renderList = (organizations: any) => {
      const [firstOrg, secondOrg, ...restOrgs] = organizations.map((org: any) => org.node.name);

      if (!secondOrg) {
        return firstOrg;
      }

      if (restOrgs.length) {
        return `${firstOrg}, ${secondOrg} and ${restOrgs.length} more`;
      }

      return `${firstOrg} and ${secondOrg}`;
    };
    // console.log('renderOrgList', renderOrgList);

    return (
      <li key={item.node.id}>
        <Avatar size={35} src={item.node.avatarUrl} />
        <div className={styles.popup}>
          <div className={styles.holder}>
            <Row>
              <Col span={6}>
                <div className={styles.avatarHolder}>
                  <Avatar size={60} src={item.node.avatarUrl} alt="avatar" />
                  {item.node.isEmployee && <span className={styles.staffBlock}>Staff</span>}
                </div>
              </Col>
              <Col span={18}>
                <h3 className={styles.title}>
                  {item.node.name} <span className={styles.login}> {item.node.login}</span>
                </h3>
                <p>{item.node.bio}</p>
                {item.node.location && (
                  <address className={styles.location}>
                    <span className={styles.iconHolder}>
                      <LocationIcon color="#8b949e" fontSize="12px" />
                    </span>
                    {item.node.location}
                  </address>
                )}
              </Col>
            </Row>
          </div>
          {organizationsList.length > 0 && (
            <div className={styles.memberInfo}>
              <MemberIcon color="#8b949e" fontSize="12px" />
              Member of&nbsp;
              {renderList(organizationsList)}
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
