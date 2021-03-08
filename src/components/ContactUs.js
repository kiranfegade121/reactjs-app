import React from "react";

const ContactUs = props => {
  console.log(props);
  const goToHomePage = () => {
    props.history.push("/");
  };

  return (
    <>
      <h5>Email: info@abc.com</h5>
      <h5>Phone: 022-34566322</h5>
      <br></br>
      <button className="btn btn-primary" onClick={goToHomePage}>
        Home
      </button>
    </>
  );
};

export default ContactUs;
