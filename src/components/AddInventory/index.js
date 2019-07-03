import React, { Component } from '../../../node_modules/react';
import { Header } from '../../../node_modules/semantic-ui-react';
import InventoryForm from '../InventoryForm';
import InventoryList from '../InventoryList';

class AddInventory extends Component {
  state = {
    newInventories: [],
  };
  render() {
    return (
      <div>
        <Header as="h1">Add Inventory</Header>
        <InventoryForm />
        <InventoryList inventories={this.state.newInventories} />
      </div>
    );
  }
}

export default AddInventory;
