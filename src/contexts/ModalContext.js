import React, { createContext, useReducer } from "react";

const ModalContext = createContext({});

const initialState = {
  Component: null,
  props: {}
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SHOW_MODAL":
      return {
        Component: action.payload.component,
        props: action.payload.props
      };
    case "HIDE_MODAL":
      return { Component: null, props: {} };
    default:
      console.warn("can't recognize " + action.type);
      return state;
  }
};

export const ModalProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const showModal = (component, props = {}) =>
    dispatch({
      type: "SHOW_MODAL",
      payload: { component, props }
    });

  const hideModal = () => dispatch({ type: "HIDE_MODAL" });

  const renderModal = () =>
    state.Component ? (
      <div className="modal-overlay" onClick={hideModal}>
        <div className="modal" onClick={e => e.stopPropagation()}>
          <state.Component {...state.props} onClose={hideModal} />
        </div>
      </div>
    ) : null;

  const value = { renderModal, showModal, hideModal };
  return (
    <ModalContext.Provider value={value}>
      {props.children}
    </ModalContext.Provider>
  );
};

export const ModalConsumer = ModalContext.Consumer;
export default ModalContext;
