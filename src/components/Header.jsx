import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";

const Header = () => {
  return (
    <header
      style={{
        width: "100%",
        height: "20vh",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        paddingTop: "5px",
        paddingBottom: "5px",
        backgroundColor: "#1B1A55",
      }}
    >
      <h1 style={{ fontSize: "20px", color: "#9290C3", margin: "0px" }}>
        Toolbox Challenge
      </h1>
      {/* <InputGroup style={{ width: "130px" }}>
        <FormControl
          style={{
            backgroundColor: "#535C91",
            borderRadius: "10px",
            borderWidth: "0px",
          }}
        />
      </InputGroup> */}
    </header>
  );
};

export default Header;
