import React from 'react';
import { Row, Col, Select, Input, Button } from 'antd';
import CopyToClipboard from 'copy-to-clipboard'
import { SELECT_LIST } from '../constants';
import cc from './index.module.less';

const keys = SELECT_LIST.map(s => ({ [s.value]: s.value}));

export default class App extends React.Component {
  state = {
    leftSelect: '',
    rightSelect: '',
    leftValue: '',
    rightValue: ''
  }

  transformValue = value => {
    switch (this.state.rightSelect) {
      case keys['bin']:
        return value;
      default:
        return value;
    }
  }

  inputChange = value => {
    this.setState(() => {
      const rightValue = this.transformValue(value);
      return { leftValue: value, rightValue };
    });
  }

  selectChange = (value, isRight) => {
    this.setState(() => {
      return isRight ? { rightSelect: value } : { leftSelect: value };
    });
  }

  selectDiv = (isRight) => {
    const disabled = SELECT_LIST.find(select => select.value === this.state.leftSelect);
    return (
      <Select className={cc.select} onChange={value => this.selectChange(value, isRight)}>
        {SELECT_LIST.map(li => (
          <Select.Option key={li.value} value={li.value} disabled={isRight ? disabled : false}>
            {li.title}
          </Select.Option>
        ))}
      </Select>
    );
  }

  render() {
    return (
      <div className={cc.root}>
        <Row gutter={10}>
          <Col span={12}>
            {this.selectDiv(false)}
            <Input.TextArea
              autosize={{ minRows: 15, maxRows: 15 }}
              value={this.state.leftValue}
              onChange={e => this.inputChange(e.target.value)} />
          </Col>
          <Col span={12}>
            {this.selectDiv(true)}
            <Input.TextArea
              autosize={{ minRows: 15, maxRows: 15 }}
              value={this.state.rightValue} />
            <Button type={'primary'} onClick={() => CopyToClipboard(this.state.rightValue)}>复制</Button>
          </Col>
        </Row>
      </div>
    );
  }
}
