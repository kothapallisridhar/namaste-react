import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    const { name, location, component } = this.props;
    const { count } = this.state;
    return (
      <div className="user-card">
        <h3>Count: {count}</h3>
        <button
          onClick={() => {
            this.setState({
              count: count + 1,
            });
          }}
        >
          Count Increase
        </button>
        <h3>Name: {name}</h3>
        <h4>Location: {location}</h4>
        <h4>Component: {component}</h4>
      </div>
    );
  }
}

export default UserClass;
