import React from "react";

import "./AlertItem.scss";

// displays an alert item, either active or inactive (passed expiry date)
function AlertItem (props) {
  return (
    <div>
      {props.alertTitle}
    </div> 
  );
}

export default AlertItem;
