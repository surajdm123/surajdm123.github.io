import NavBar from "./components/navbar";
import "./App.css";
import Counters from "./components/counters";
import React, { Component } from "react";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });

    this.setState(counters);
  };

  handleAdd = () => {
    let maxId = 0;
    let len = this.state.counters.length;
    let counters = this.state.counters;
    for (let i = 0; i < len; i++) {
      if (counters[i].id > maxId) {
        maxId = counters[i].id;
      }
    }

    counters.push({ id: maxId + 1, value: 0 });
    this.setState(counters);
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };

    if (counters[index].value !== 0) {
      counters[index].value--;
      this.setState({ counters });
    }
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  getCount = () => {
    let counters = this.state.counters;
    let sum = 0;
    for (let counter of counters) {
      sum += counter.value;
    }
    return sum;
  };

  render() {
    return (
      <React.Fragment>
        <NavBar totalCounters={this.getCount()} />
        <main className="container">
          <Counters
            onAdd={this.handleAdd}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            counters={this.state.counters}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
