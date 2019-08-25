import React from 'react';
import { connect } from 'dva'
import { Layout } from 'antd';
import { Switch } from 'dva/router';
import pathToRegexp from 'path-to-regexp';
import { HeaderBar, LeftSideBar, FooterBar } from 'components';
import cc from './basicLayout.module.less';

@connect(({ global }) => ({ global }))
export default class BasicLayout extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentMenu: {},
      isMobile: false
    };
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  getCurrentMenu(props) {
    const { location: { pathname }, global } = props || this.props;
    return this.getMeunMatchKeys(global.flatMenu, pathname)[0];
  }

  getMeunMatchKeys = (flatMenu, path) => {
    return flatMenu.filter(item => pathToRegexp(item.path).test(path));
  };

  render() {
    const { routerData } = this.props;
    const { childRoutes } = routerData;

    return (
      <Layout className={cc.root}>
        <Layout.Header>
          <HeaderBar />
        </Layout.Header>
        <Layout>
          <Layout.Sider trigger={null} collapsed={true}>
            <LeftSideBar />
          </Layout.Sider>
          <Layout.Content>
            <Switch>{childRoutes}</Switch>
          </Layout.Content>
        </Layout>
        <Layout.Footer>
          <FooterBar />
        </Layout.Footer>
      </Layout>
    );
  }
}
