import React, { Component } from 'react';

class ProductForm extends Component {
  state = {
    category: '',
    model: '',
    name: '',
    serial: '',
  };

  componentDidMount() {
    if (this.props.product) {
      this.setState({ ...this.props.product });
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (!this.props.update) {
      this.props.addProduct(this.state);
    } else {
      this.props.update({ ...this.state });
    }
  };

  render() {
    const { update } = this.props;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Project Name</label>
            <input
              type="text"
              id="name"
              onChange={this.handleChange}
              value={this.state.name}
            />
          </div>

          <div>
            <label>Product SERIAL / IMEI</label>
            <input
              type="text"
              id="serial"
              onChange={this.handleChange}
              value={this.state.serial}
            />
          </div>

          <div>
            <label>Product Model</label>
            <input
              type="text"
              id="model"
              onChange={this.handleChange}
              value={this.state.model}
            />
          </div>

          <div>
            <label>Product Category</label>
            <input
              type="text"
              id="category"
              onChange={this.handleChange}
              value={this.state.category}
            />
          </div>

          <div>
            <button>{update ? 'Save Changes' : 'Create'}</button>
          </div>
        </form>
      </div>
    );
  }
}

export default ProductForm;
