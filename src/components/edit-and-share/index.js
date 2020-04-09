/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/button-has-type */
/* eslint-disable react/forbid-dom-props */
import React from 'react';
import { EllipsisOutlined } from '@ant-design/icons';
import { Dropdown } from 'antd';

import MenuDropdown from './menudropdown';

import 'antd/dist/antd.css';
import './style.css';
import '../ColorsDropdown/style.css';

// eslint-disable-next-line react/prefer-stateless-function
class EditAndShare extends React.Component {
  render() {
    const menu = <MenuDropdown />;
    return (
      <Dropdown overlay={menu} zIndex={2} style={{ border: '1px' }}>
        <button
          className="ant-dropdown-link"
          style={{ background: 'transparent', border: 'none', fontSize: '25px' }}
          onClick={(e) => e.preventDefault()}
        >
          <EllipsisOutlined />
        </button>
      </Dropdown>
    );
  }
}

export default EditAndShare;
