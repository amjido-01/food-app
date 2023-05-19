import { Fragment } from "react";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return (
    <div
      onClick={props.onClick}
      style={{ background: "rgba(0, 0, 0, 0.75)" }}
      className="fixed top-0 left-0 w-full h-[100vh] z-20 backdrop"
    ></div>
  );
};

const ModelOverlay = (props) => {
  return (
    <div className="fixed top-[20vh] left-[5%] w-[90%] bg-white p-[1rem] rounded-[14px] z-30 model">
      <div>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

export const Model = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClick={props.onClick}/>, portalElement)}
      {ReactDOM.createPortal(
        <ModelOverlay>{props.children}</ModelOverlay>,
        portalElement
      )}
    </Fragment>
  );
};
