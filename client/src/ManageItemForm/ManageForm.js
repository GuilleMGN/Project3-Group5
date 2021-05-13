import React, { Component } from "react";
import ProductAPI from "../utils/ProductAPI";

class Add extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      category: "",
      price: "",
      errors: {},
    };
  }
  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      title: this.state.title,
      category: this.state.category,
      price: this.state.price,
    };
    ProductAPI.create(newItem).then((res) => console.log(res));
    console.log(newItem);
  };

  render() {
    const { errors } = this.state;
    return (
      <div className="container">
        <div className="card">
          <div className="row">
            <div className="col-lg-12">
              <form onSubmit={this.onSubmit} className="form-group">
                <h1>Add New Item</h1>
                <hr />
                <label htmlFor="title" className="label">
                  Title
                </label>
                <input
                  className="form-control"
                  placeholder="Item"
                  onChange={this.onChange}
                  value={this.state.title}
                  error={errors.title}
                  id="title"
                  type="text"
                />
                <br />
                <label htmlFor="category" className="label">Category </label>
                <input
                  className="form-control"
                  placeholder="category"
                  onChange={this.onChange}
                  value={this.state.category}
                  error={errors.category}
                  id="category"
                  type="text"
                />
                <br />
                <label htmlFor="price" className="label">Price </label>
                <input
                  className="form-control"
                  placeholder="Price"
                  onChange={this.onChange}
                  value={this.state.price}
                  error={errors.price}
                  id="price"
                  type="number"
                />
                <br />
                <div className="input-group mb-3">
                  <input
                    type="file"
                    className="form-control"
                    id="inputGroupFile02"
                  ></input>
                  <label htmlFor="upload" className="input-group-text">
                    Upload
                  </label>
                </div>

                <br />
                <button className="btn btn-outline-info" type="submit">
                  Submit{" "}
                </button>
                <hr />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Add;
