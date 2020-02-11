import React from "react";
import Modal from "../../components/UI/Modal/Modal";
import Aux from "../Aux";

const errorHandler = (WrappedComponent, axios) => {
  return (props) => {
    return (
      <Aux>
        <Modal show={props.error}>SOMETHING WENT WRONG</Modal>
        <WrappedComponent {...props} />;
      </Aux>
    );
  };
};
export default errorHandler;
