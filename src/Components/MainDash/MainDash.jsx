import React from "react";
import "./Main.css";
import Cards from "../Cards/Cards";

import BasicTable from "../Table/Table";

function MainDash() {
  return( 
  <div className="MainDash">
    <h1>DASHBOARD</h1>
    <Cards/>
<BasicTable/>
    
  </div>
  )
}

export default MainDash;
