import React from 'react';
import { Layout } from 'antd';
import { Switch } from 'dva/router';
import pathToRegexp from 'path-to-regexp';
import cx from 'classnames';
import { HeaderBar, LeftSideBar, FooterBar } from 'components';

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
    const classnames = cx('basic-layout', 'full-layout');

    return (
      <Layout className={classnames}>
        <Layout.Header>
          <HeaderBar />
        </Layout.Header>
        <Layout>
          <Layout.Sider>
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
