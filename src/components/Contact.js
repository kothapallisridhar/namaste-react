import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Namaste React OP - in useEffect");
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div>
      <h1>Contact us</h1>
      <h2>Contact us page</h2>
    </div>
  );
};

export default Contact;
