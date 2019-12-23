import React from "react";
import ReactDOM from "react-dom";

const LoaderModal = props => {
    return ReactDOM.createPortal(
        <div class="ui active dimmer">
            <div class="ui loader"></div>
        </div>,
        document.querySelector("#loader")
    );
};

export default LoaderModal;
