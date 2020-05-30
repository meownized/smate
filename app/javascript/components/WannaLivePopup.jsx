import React from "react"
import PropTypes from "prop-types"

const WannaLivePopup = ({
	handleClose,
	wannaLive,
	children
}) => {
	const showHideClassName = wannaLive ? 'modal display-block' : 'modal display-none';

	return (<div className={showHideClassName}>
    <div className='wanna_live_popup'>
      {children}
    </div>
  </div>);
};

export default WannaLivePopup;
