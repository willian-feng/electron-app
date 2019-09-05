import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
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

  getMenuItemPath = item => {
    const { icon, title, target, key } = item;
	console.log(this.props);
    const { location = {} } = this.props;
	const { pathname = '' } = location;
    return (
      <Link
        to={key}
        target={target}
        replace={key === pathname}>
        <Icon type={icon} />
        <span>{title}</span>
      </Link>
    );
  }

  render() {
    const { selectedKeys } = this.props;
    return (
      <div className={cc.root}>
        <div className={cc.logo}>LOGO</div>
        <Menu mode="inline" theme="dark" selectedKeys={selectedKeys} onClick={this.handleClick}>
          {LEFT_MENU.map(item => (
            <Menu.Item key={item.key}>
			  {this.getMenuItemPath(item)}
            </Menu.Item>
          ))}
        </Menu>
      </div>
    );
  }
}
