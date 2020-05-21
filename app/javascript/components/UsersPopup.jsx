import React from "react"
import PropTypes from "prop-types"

const UsersPopup = ({handleClose, usersShow, children}) => {
  const showHideClassName = usersShow ? "modal display-block" : "modal display-none";

  return (<div className={showHideClassName}>
    <section className="modal-main">
      {children}
      <button onClick={handleClose}>close</button>
    </section>
  </div>);
};

export default UsersPopup;
