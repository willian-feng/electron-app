import {dynamicWrapper, createRoute} from '@/utils/core';
import cfg from '../config';

const routesConfig = (app) => ({
  ...cfg.home,
  component: dynamicWrapper(app, [], () => import('./components'))
});

export default (app) => createRoute(app, routesConfig);
