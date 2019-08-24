import React from 'react';
import { Menu, Icon } from 'antd';

export default class App extends React.Component {
  state = {}

  handleClick = ({ item, key, keyPath, domEvent }) => {
    console.log(item, key, keyPath, domEvent);
  }

  render() {
    return (
      <div>
        <Menu mode="inline" theme="dark" inlineCollapsed={true} onClick={this.handleClick}>
          {['A', 'B'].map(item => (
            <Menu.Item key={item}>
              <Icon type="pie-chart" />
              <span>{item}</span>
            </Menu.Item>
          ))}
        </Menu>
      </div>
    );
  }
}
