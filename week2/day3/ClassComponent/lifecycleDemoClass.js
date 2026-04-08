import React from "react";

class LifecycleDemoClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidMount() {
    console.log("Mounted!");
  }

  componentDidUpdate() {
    console.log("Updated!");
  }

  componentWillUnmount() {
    console.log("Unmounted!");
  }

  render() {
    return (
      <div>
        <h2>Class Lifecycle Demo</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}

export default LifecycleDemoClass;
