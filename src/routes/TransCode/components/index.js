import React from 'react';
import { connect } from 'dva';
import cc from './index.module.less'

@connect(state => ({
  ...state.code
}))
export default class App extends React.Component {
  state = {}

  render() {
    return (
      <div className={cc.root}>
        123 456
      </div>
    );
  }
}
