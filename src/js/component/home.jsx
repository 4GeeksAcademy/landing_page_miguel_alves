import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import NavBar from "./NavBar";
import Main from "./Main";
import Footer from "./Footer";

//create your first component
const Home = () => {
	return (
		<div className="container-fluid">
			<NavBar />
     		<Main />
		 	<Footer />
		
		</div>
		   
	)
};

export default Home;
