import React from "react";
import ReactDOM from "react-dom";
import { ModalConsumer } from "../../contexts/ModalContext";

import "./ModalManager.css";

const ModalManager = () => (
  <ModalConsumer>
    {({ renderModal }) => ReactDOM.createPortal(renderModal(), document.body)}
  </ModalConsumer>
);

export default ModalManager;
