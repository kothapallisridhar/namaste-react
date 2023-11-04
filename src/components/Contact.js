import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Namaste React OP - in useEffect");
    }, 1000);
    return () => {
      console.log("useEffect return");
      clearInterval(timer);
    };
  }, []);
  return (
    <div>
      <h1 className="font-bold text-3xl m-2 p-2">Contact us</h1>
      <form>
        <input className="border border-black p-2 m-2" placeholder="Name" />
        <input className="border border-black p-2 m-2" placeholder="Message" />
        <button className="border border-black rounded-lg p-2 m-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
