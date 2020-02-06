import React from "react";
import Aux from "../../../HOC/Aux";
import classes from "./Modal.module.css";
import BackDrop from "../Backdrop/BackDrop";

const modal = (props) => {
  return (
    <Aux>
      <BackDrop show={props.show} clicked={props.ModalClosed} />
      <div
        className={classes.Modal}
        style={{
          transform: props.show ? "TranslateY(0)" : "TranslateY(100vh)",
          opacity: props.show ? "1" : "0"
        }}
      >
        {props.children}
      </div>
    </Aux>
  );
};

export default modal;
