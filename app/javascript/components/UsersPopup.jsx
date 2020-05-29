import React from "react"
import PropTypes from "prop-types"

const UsersPopup = ({
	handleClose,
	usersShow,
	children
}) => {
	const showHideClassName = usersShow ? 'modal display-block' : 'modal display-none';

	return (<div className={showHideClassName}>
    <div className='user_list'>
      {children}
    </div>
  </div>);
};

export default UsersPopup;