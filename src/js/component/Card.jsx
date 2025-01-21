import React from "react";

const Card = () =>{
    return(
          <div className="col-12 col-md-3 d-flex justify-content-center">
        <div className="card" style={{width: "18rem;"}}>
       <img src="https://i.ebayimg.com/images/g/xRQAAOSwotJmRTJl/s-l1600.webp" className="card-img-top" alt="..."/>
       <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Find Out More</a>
  </div>
</div>
</div>

    )
};

    export default Card;