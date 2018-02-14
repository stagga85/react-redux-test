import React from "react";
import Layout from "../controllers/Layout";
import NavigationController from "../controllers/NavigationController";

const AppMain = () => (
   <div>
       <NavigationController />
        <div id="container">
            <Layout />
        </div>
   </div>
);

export default AppMain;