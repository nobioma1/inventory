import React, { Component } from 'react';
import { Input, Menu } from 'semantic-ui-react';

export default class SearchBar extends Component {
  state = { activeItem: 'all' };

  render() {
    return (
      <div>
        <Menu.Menu>
          <Menu.Item>
            <Input icon="search" placeholder="Search..." />
          </Menu.Item>
        </Menu.Menu>
      </div>
    );
  }
}
