/* eslint-disable import/no-anonymous-default-export */
// Modules
import React from "react";
import { Link, useLocation } from "react-router-dom";

// CSS
import "./breadcrumbs.scss";


// Routes
import {
  ROUTE_HOME,
} from "../../constants/routes";

import { ReactComponent as HomeIcon } from "../../assets/icons/home.svg";

// Component
export default () => {

  let location = useLocation();
  const detailName = "demo"

  return (    
      <ul className="breadcrums_list">
        { location.pathname === ROUTE_HOME && (
            <li><HomeIcon  width="24px"  /> Home</li>
            )}

        { detailName && location.pathname !== ROUTE_HOME && (
          <>
            <li><HomeIcon  width="16px" height="16px" /> <Link to={ROUTE_HOME}>Home</Link></li>
            <li className="last">{detailName.model}</li>
          </>
        )}
      </ul>    

  );
};