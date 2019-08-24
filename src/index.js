import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import dva from 'dva';
import createLoading from 'dva-loading';
import { Router } from 'dva/router';
import { createHashHistory } from 'history';
import React from 'react';
import createRoutes from './routes';
import { unregister } from './serviceWorker';

// -> 初始化
const app = dva({
  history: createHashHistory({
    basename: '/'
  })
});

// -> 插件
app.use(createLoading());

// -> 注册全局模型
app.model(require('./models').default);

// -> 初始化路由
app.router(({ history, app }) => (
  <ConfigProvider locale={zhCN}>
    <Router history={history}>{createRoutes(app)}</Router>
  </ConfigProvider>
));

// -> Start
app.start('#root');

// export global
export default {
  app,
  store: app._store,
  dispatch: app._store.dispatch
};

// 如果想可以离线使用，请使用register()代替unregister()。可能会带来一些问题，如缓存等
// 相关资料，可以从 https://bit.ly/CRA-PWA 了解
unregister();
