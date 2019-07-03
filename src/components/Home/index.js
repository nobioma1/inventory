import React, { Component } from '../../../node_modules/react';
import { Menu } from '../../../node_modules/semantic-ui-react';
import { connect } from '../../../node_modules/react-redux/lib';

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

const mapStateToProps = ({ inventoryReducer }) => {
  return {
    inventories: inventoryReducer.inventory,
    categories: inventoryReducer.category,
  };
};

export default connect(
  mapStateToProps,
  {},
)(Home);
