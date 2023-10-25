const User = (props) => {
  const { name, location, component } = props;
  return (
    <div className="user-card">
      <h3>Name: {name}</h3>
      <h4>Location: {location}</h4>
      <h4>Component: {component}</h4>
    </div>
  );
};

export default User;
