import React from 'react';
import { connect } from 'dva';
import { Menu, Icon } from 'antd';
import { LEFT_MENU } from '@/config';
import cc from './LeftSideBar.module.less';


@connect(state => ({
  ...state.global
}))
export default class LeftSideBar extends React.Component {
  handleClick = ({ key }) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'global/querySuccess',
      payload: {
        selectedKeys: [key]
      }
    });
  }

  render() {
    const { selectedKeys } = this.props;
    return (
      <div className={cc.root}>
        <div className={cc.logo}>LOGO</div>
        <Menu mode="inline" theme="dark" selectedKeys={selectedKeys} onClick={this.handleClick}>
          {LEFT_MENU.map(item => (
            <Menu.Item key={item.key}>
              <Icon type={item.icon} />
              <span>{item.title}</span>
            </Menu.Item>
          ))}
        </Menu>
      </div>
    );
  }
}
