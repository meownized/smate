import React from "react"
import PropTypes from "prop-types"



// const UserList = () => {
//   console.log(children);
//   const {users} = this.state.flat;
//   const all_users = [...users];
//
//   return all_users.map((user, index) =>
//     <div className="col-sm-12" key={index}>
//       <p className="message-text">
//         {user.full_name}
//       </p>
//     </div>
// }

const UsersPopup = ({handleClose, usersShow, children}) => {
  const showHideClassName = usersShow ? "modal display-block" : "modal display-none";
  console.log('Дети', children);

  return (<div className={showHideClassName}>
    <section className="modal-main">
      {children}
      <button onClick={handleClose}>close</button>
    </section>
  </div>);
};

export default UsersPopup;
