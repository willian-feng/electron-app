import React from 'react';
import cc from './HeaderBar.module.less';

export default class App extends React.Component {
  state = {}

  render() {
    return (
      <div className={cc.root}>
        <span className={cc.logo}></span>
      </div>
    );
  }
}
