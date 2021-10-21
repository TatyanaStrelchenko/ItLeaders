import React from 'react';
import Avatar from 'antd/lib/avatar';
import { Col, Row } from 'antd';
import styles from './Sponsors.module.css';

export const Sponsors = () => (
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
    </ul>
  </section>
);
