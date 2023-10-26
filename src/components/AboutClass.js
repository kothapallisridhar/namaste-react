import React from "react";
import UserClass from "./UserClass";

class AboutClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor");
  }
  componentDidMount() {
    console.log("component did mount");
  }
  componentDidUpdate() {
    console.log("component did update");
  }
  componentWillUnmount() {
    console.log("component will unmount");
  }
  render() {
    console.log("render");
    return (
      <div>
        <h1>About us</h1>
        <h2>About us page</h2>
        <UserClass name={"Sridhar"} location={"Munich"} component={"Class"} />
      </div>
    );
  }
}

export default AboutClass;
