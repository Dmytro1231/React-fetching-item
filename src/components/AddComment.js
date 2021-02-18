import React, { Component } from "react";

class AddComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: [],
    };
  }

  updateInput(key, value) {
    // update react state
    this.setState({ [key]: value });
  }

  addItem() {
    // create a new item with unique id
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice(),
    };

    // copy current list of items
    const list = [...this.state.list];

    // add the new item to the list
    list.push(newItem);

    // update state with new list, reset the new item input
    this.setState({
      list,
      newItem: "",
    });
  }

  render() {
    return (
      <div>
        <div className="container">
          <div>
            <input
              className="input"
              type="text"
              placeholder="Type item here"
              value={this.state.newItem}
              onChange={(e) => this.updateInput("newItem", e.target.value)}
            />
            <button
              className="btn"
              onClick={() => this.addItem()}
              disabled={!this.state.newItem.length}
            >
              Comment
            </button>
            <ul>
              {this.state.list.map((item) => {
                return <p key={item.id}>Comment: {item.value}</p>;
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default AddComment;
