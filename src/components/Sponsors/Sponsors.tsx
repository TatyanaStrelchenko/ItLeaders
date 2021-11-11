import { Col, Row } from 'antd';
import Avatar from 'antd/lib/avatar';
import Icon from '@ant-design/icons';

import graphql from 'babel-plugin-relay/macro';
import React from 'react';
import { useLazyLoadQuery } from 'react-relay/hooks';

import { SponsorsQuery } from '../../__generated__/SponsorsQuery.graphql';

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
              hovercard {
                contexts {
                  message
                  octicon
                }
              }
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

  const locationSvg = () => (
    <svg
      version="1.1"
      id="Capa_1"
      x="0px"
      y="0px"
      width="1em"
      height="1em"
      fill="currentColor"
      viewBox="0 0 395.71 395.71">
      <g>
        <path
          d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738
      c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388
      C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191
      c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z"
        />
      </g>
    </svg>
  );

  const membersSvg = () => (
    <svg
      version="1.1"
      id="Layer_1"
      x="0px"
      y="0px"
      viewBox="0 0 512 512"
      width="1em"
      height="1em"
      fill="currentColor">
      <g>
        <g>
          <path
            d="M488.727,108.606H325.818V23.273C325.818,10.42,315.398,0,302.545,0H23.273C10.42,0,0,10.42,0,23.273v465.455
			C0,501.58,10.42,512,23.273,512h186.182h93.091h186.182C501.58,512,512,501.58,512,488.727V131.879
			C512,119.026,501.58,108.606,488.727,108.606z M325.815,155.152v46.545h-93.088v-46.545H325.815z M325.815,248.242v46.536
			l-93.088-0.009v-46.527H325.815z M186.182,131.879v92.971c0,0.04-0.006,0.079-0.006,0.12s0.006,0.079,0.006,0.119v92.829
			c0,0.04-0.006,0.079-0.006,0.119s0.006,0.079,0.006,0.121v147.296h-46.545v-23.282c0-12.853-10.42-23.273-23.273-23.273
			s-23.273,10.42-23.273,23.273v23.282H46.545V46.545h232.727v62.061h-69.818C196.602,108.606,186.182,119.026,186.182,131.879z
			 M465.455,465.455h-93.091v-23.282c0-12.853-10.42-23.273-23.273-23.273c-12.853,0-23.273,10.42-23.273,23.273v23.282h-23.273
			h-69.818v-124.14l116.075,0.012c0.096,0,0.189,0.014,0.286,0.014c0.096,0,0.189-0.014,0.285-0.014l116.081,0.011V465.455z
			 M465.455,294.793l-93.094-0.009v-46.541h93.094V294.793z M465.455,201.697h-93.094v-46.545h93.094V201.697z"
          />
        </g>
      </g>
    </svg>
  );

  const LocationIcon = (props: any) => <Icon component={locationSvg} {...props} />;
  const MembersIcon = (props: any) => <Icon component={membersSvg} {...props} />;

  const listSponsors = list?.map((item: any) => (
    <li>
      <Avatar size={35} src={item.node.avatarUrl} />
      <div className={styles.popup}>
        <div className={styles.holder}>
          <Row>
            <Col span={6}>
              <Avatar size={60} src={item.node.avatarUrl} />
            </Col>
            <Col span={18}>
              <h3 className={styles.title}>
                {item.node.name} <span className={styles.login}> {item.node.login}</span>
              </h3>
              <p>{item.node.bio}</p>
              {item.node.location && (
                <address className={styles.location}>
                  <span className={styles.iconHolder}>
                    <LocationIcon style={{ fontSize: '12px', color: '#8b949e' }} />
                  </span>
                  {item.node.location}
                </address>
              )}
            </Col>
          </Row>
        </div>
        <div className={styles.memberInfo}>
          <span className={styles.iconHolder}>
            <MembersIcon style={{ fontSize: '12px', color: '#8b949e' }} />
            {console.log('organization', item.node.organizations)}
          </span>
          member
        </div>
      </div>
    </li>
  ));

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
