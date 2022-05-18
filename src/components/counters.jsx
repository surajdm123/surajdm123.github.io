import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.onAdd}
          className="btn btn-success btn-sm m-2"
        >
          Add
        </button>

        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>

        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
