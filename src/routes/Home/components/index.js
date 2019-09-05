import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
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

  getMenuItemPath = item => {
    const { icon, title, target, key } = item;
    const { location = {} } = this.props;
	const { pathname = '' } = location;
    return (
      <Link
        to={key}
        target={target}
        replace={key === pathname}>
        Go
      </Link>
    );
  }

  render() {
    return (
      <div className={cc.root}>
        <Row gutter={8}>
          {LEFT_MENU.map((mu, index) => {
            if (index) {
              return (
                <Col span={8} key={index}>
                  <Card
                    size={'small'}
                    title={mu.title}
                    bordered={false}
                    extra={
					<span onClick={() => this.cardClick(mu.key)}>{this.getMenuItemPath(mu)}</span>
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
