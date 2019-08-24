import { createRoute } from '../../../utils/core';
import cfg from '../../config';
import P404 from './404';

const routesConfig = (app) => ({
  ...cfg.notfond,
  component: P404,
});

export default (app) => createRoute(app, routesConfig);
