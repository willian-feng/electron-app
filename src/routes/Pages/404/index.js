import { createRoute } from '../../../utils/core';
import P404 from './404';

const routesConfig = (app) => ({
  title: '页面没有找到',
  component: P404,
});

export default (app) => createRoute(app, routesConfig);
