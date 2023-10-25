import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About us</h1>
      <h2>About us page</h2>
      <UserClass name={"Sridhar"} location={"Munich"} component={"Class"} />
    </div>
  );
};

export default About;
