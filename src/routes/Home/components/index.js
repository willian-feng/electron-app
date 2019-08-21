import React from 'react';
import { connect } from 'dva';

import cc from './index.module.less';

@connect(({ global }) => ({ global }))
export default class Home extends React.Component {
  render() {

    return (
      <div className={cc['home-page']}>
        123
      </div>
    );
  }
}
