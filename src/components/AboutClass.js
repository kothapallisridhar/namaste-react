import React from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

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
        <h1>About Class Component</h1>
        <div>
          LoggedIn User
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="font-bold text-xl">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <h2>About us page</h2>
        <UserClass name={"Sridhar"} location={"Munich"} component={"Class"} />
      </div>
    );
  }
}

export default AboutClass;
