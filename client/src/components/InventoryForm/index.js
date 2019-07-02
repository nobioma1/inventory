import React, { Component } from 'react';
import { Button, Dropdown, Form, Container } from 'semantic-ui-react';
import { connect } from 'react-redux';

class InventoryForm extends Component {
  state = {
    productName: '',
    description: '',
    serial: '',
    category: '',
  };

  inputHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitHandler = event => {
    event.preventDefault();
  };

  render() {
    return (
      <Container style={{ marginBottom: '2em' }}>
        <Form>
          <Form.Field>
            <label>Product Name</label>
            <input
              onChange={this.inputHandler}
              value={this.state.productName}
              name="productName"
            />
          </Form.Field>
          <Form.Field>
            <label>Category</label>
            <input
              placeholder="Add new Category"
              onChange={this.inputHandler}
              value={this.state.category}
              name="category"
            />
          </Form.Field>
          <Form.Field>
            <Dropdown
              placeholder="Select From Category"
              fluid
              search
              selection
              options={this.props.categories}
              onChange={this.inputHandler}
              name="category"
            />
          </Form.Field>
          <Form.Field>
            <label>Serial / Identity Number</label>
            <input
              onChange={this.inputHandler}
              value={this.state.serial}
              name="serial"
            />
          </Form.Field>
          <Form.Field>
            <label>Description</label>
            <input
              onChange={this.inputHandler}
              value={this.state.description}
              name="description"
            />
          </Form.Field>
          <Button type="submit">Add my Item</Button>
        </Form>
      </Container>
    );
  }
}

const mapStateToProps = ({ inventoryReducer }) => {
  return {
    categories: inventoryReducer.category,
  };
};

export default connect(
  mapStateToProps,
  {},
)(InventoryForm);
