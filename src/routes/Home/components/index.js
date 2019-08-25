import React from 'react';
import { connect } from 'dva';
import { Row, Col, Card } from 'antd';
import { LEFT_MENU } from '@/config';
import cc from './index.module.less';

@connect(state => ({
  ...state.global
}))
export default class Home extends React.Component {
  cardClick = (key) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'global/querySuccess',
      payload: {
        selectedKeys: [key]
      }
    });
  }

  render() {
    return (
      <div className={cc.root}>
        <Row gutter={8}>
          {LEFT_MENU.map((mu, index) => {
            if (index) {
              return (
                <Col span={8}>
                  <Card
                    size={'small'}
                    title={mu.title}
                    bordered={false}
                    extra={
                      <span className={cc.link} onClick={() => this.cardClick(mu.key)}>Go</span>
                    }>
                    {mu.content}
                  </Card>
                </Col>
              )
            }
          })}
        </Row>
      </div>
    );
  }
}
