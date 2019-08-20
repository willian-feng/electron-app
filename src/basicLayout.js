import React from 'react';
import { Layout } from 'antd';
import { Switch, routerRedux } from 'dva/router';
// import { LeftSideBar } from '@/components/SideBar';
import pathToRegexp from 'path-to-regexp';
import $$ from 'cmn-utils';
import cx from 'classnames';

const { Content, Header } = Layout;

export default class BasicLayout extends React.PureComponent {
  constructor(props) {
    super(props);
    const user = $$.getStore('user', []);
    const theme = $$.getStore('theme', {
      leftSide: 'darkgrey', // 左边
      navbar: 'light' // 顶部
    });
    if (!theme.layout) {
      theme.layout = [
        'fixedHeader',
        'fixedSidebar',
        'fixedBreadcrumbs'
      ];
    }
    this.state = {
      collapsedLeftSide: false, // 左边栏开关控制
      leftCollapsedWidth: 60, // 左边栏宽度
      showSidebarHeader: false, // 左边栏头部开关
      user,
      theme: {},
      currentMenu: {},
      isMobile: false
    };

  }

  componentWillMount() {

  }

  componentDidMount() {

  }

  componentWillUnmount() {
    // 清理监听
    this.unregisterEnquire();
  }

  getCurrentMenu(props) {
    const {
      location: { pathname },
      global
    } = props || this.props;
    const menu = this.getMeunMatchKeys(global.flatMenu, pathname)[0];
    return menu;
  }

  getMeunMatchKeys = (flatMenu, path) => {
    return flatMenu.filter(item => {
      return pathToRegexp(item.path).test(path);
    });
  };

  /**
   * 顶部左侧菜单图标收缩控制
   */
  onCollapseLeftSide = _ => {
    const collapsedLeftSide =
      this.state.leftCollapsedWidth === 0
        ? true
        : !this.state.collapsedLeftSide;
    const collapsedRightSide =
      this.state.collapsedRightSide || !collapsedLeftSide;

    this.setState({
      collapsedLeftSide,
      collapsedRightSide,
      leftCollapsedWidth: 60
    });
  };

  /**
   * 完全打开左边栏
   */
  onOpenlapseLeftSideAll = _ => {
    this.setState({
      collapsedLeftSide: false,
      leftCollapsedWidth: 60
    });
  };

  /**
   * 展开面包屑所在条中的多功能区
   */
  onExpandTopBar = _ => {
    this.setState({
      expandTopBar: true
    });
  };

  /**
   * 与上面相反
   */
  onCollapseTopBar = _ => {
    this.setState({
      expandTopBar: false
    });
  };

  render() {
    const {
      collapsedLeftSide,
      leftCollapsedWidth,
      showSidebarHeader,
      theme,
      user,
      currentMenu,
      isMobile
    } = this.state;
    const { routerData, location } = this.props;
    const { childRoutes } = routerData;
    const classnames = cx('basic-layout', 'full-layout', {
      fixed: theme.layout && theme.layout.indexOf('fixedSidebar') !== -1,
      'fixed-header':
        theme.layout && theme.layout.indexOf('fixedHeader') !== -1,
      'fixed-breadcrumbs':
        theme.layout && theme.layout.indexOf('fixedBreadcrumbs') !== -1,
      'hided-breadcrumbs':
        theme.layout && theme.layout.indexOf('hidedBreadcrumbs') !== -1
    });

    return (
      <Layout className={classnames}>
        <Header>
          {/**顶部功能栏 */}
        </Header>
        <Layout>
          {/*<LeftSideBar
            collapsed={collapsedLeftSide}
            leftCollapsedWidth={leftCollapsedWidth}
            showHeader={showSidebarHeader}
            onCollapse={this.onCollapseLeftSide}
            location={location}
            theme={theme.leftSide}
            flatMenu={flatMenu}
            currentMenu={currentMenu}
            menu={menu}
            user={user}
            isMobile={isMobile} />*/}
          <Content>
            <Switch>{childRoutes}</Switch>
          </Content>
        </Layout>
      </Layout>
    );
  }
}
