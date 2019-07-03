import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { connect } from 'react-redux';

import InventoryList from '../InventoryList';
import SearchBar from '../SearchBar';

class Home extends Component {
  state = { activeItem: 'all' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <SearchBar />
        <Menu stackable>
          <Menu.Item
            name="all"
            active={activeItem === 'all'}
            onClick={this.handleItemClick}
          />
          {this.props.categories.map(category => (
            <Menu.Item
              key={category.key}
              name={category.text}
              active={activeItem === category.value}
              onClick={this.handleItemClick}
            />
          ))}
        </Menu>
        <InventoryList inventories={this.props.inventories} />
      </div>
    );
  }
}

const mapStateToProps = ({ inventory }) => {
  return {
    inventories: inventory.inventory,
    categories: inventory.category,
  };
};

export default connect(
  mapStateToProps,
  {},
)(Home);
