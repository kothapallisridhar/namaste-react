import React from "react";
import UserClass from "./UserClass";

class AboutClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor");
  }
  componentDidMount() {
    console.log("component did mount");
    this.timer = setInterval(() => {
      console.log("Namaste React OP");
    }, 1000);
  }
  componentDidUpdate() {
    console.log("component did update");
  }
  componentWillUnmount() {
    console.log("component will unmount");
    clearInterval(this.timer);
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
