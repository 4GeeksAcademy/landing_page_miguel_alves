import React from "react";
import Jumbotrom from "./Jumbotrom";
import Card from "./Card";



const Main = () => {
    return(
        <div className="container mt-4">
             <Jumbotrom  />
             <div className="row">
                    <Card  />
                    <Card  />
                    <Card  />
                    <Card  /> 
             </div>
        </div>
   


    )
};

export default Main;