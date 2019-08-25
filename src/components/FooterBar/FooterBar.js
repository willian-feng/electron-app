import React from 'react';
import cc from './FooterBar.module.less';

export default class App extends React.Component {
  state = {}

  render() {
    return (
      <div className={cc.root}>Ant Design ©2019 Created by Ant UED</div>
    );
  }
}
