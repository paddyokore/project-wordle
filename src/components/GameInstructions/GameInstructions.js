import React from "react";
import { X as Close } from "react-feather";
import FocusLock from "react-focus-lock";
import { RemoveScroll } from "react-remove-scroll";

function GameInstructions({ title, handleDismiss, children }) {
  const closeBtnRef = React.useRef();

  React.useEffect(() => {
    const currentlyFocusedElem = document.activeElement;

    closeBtnRef.current.focus();

    return () => {
      currentlyFocusedElem?.focus();
    };
  }, []);

  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === "Escape") {
        handleDismiss();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleDismiss]);

  return (
    <FocusLock>
      <RemoveScroll>
        <div className="mwrapper">
          <div className="backdrop" onClick={handleDismiss} />
          <div 
            className="dialog"
            aria-modal="true"
            aria-label={title}
          >
            <button
              ref={closeBtnRef}
              className="closeBtn"
              onClick={handleDismiss}
            >
              <Close />
            </button>
            {children}
          </div>
        </div>
      </RemoveScroll>
    </FocusLock>
  );
}

export default GameInstructions;
