import React, { useState } from "react";

import moana from '../../img/moana.jpg';
import micky from '../../img/micky.jpg';
import frozen from '../../img/frozen.jpg';
import tangled from '../../img/tangled.jpg'

//include images into your bundle
import Card from "./card";
import Footer from "./footer";
import Jumbotron from "./jumbotron";
import NavBar from "./navbar";
//create your first component
const movies = [
	{
		name: "Micky Mouse",
		image: micky,
		description: "Mickey Mouse takes on new adventures finding himself in silly situations in different settings."
	},
	{
		name: "Frozen",
		image: frozen,
		description: "When the newly crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home in infinite winter, her sister Anna teams up with a mountain man, his playful reindeer, and a snowman to change the weather condition."
	},
	{
		name: "Tandled",
		image: tangled,
		description: "The magically long-haired Rapunzel has spent her entire life in a tower, but now that a runaway thief has stumbled upon her, she is about to discover the world for the first time, and who she really is."
	},
	{
		name: "Moana",
		image: moana,
		description: "In Ancient Polynesia, when a terrible curse incurred by the Demigod Maui reaches Moana's island, she answers the Ocean's call to seek out the Demigod to set things right."
	},
]

const listItems = movies.map((item) =>
	<Card name={item.name} description={item.description} image={item.image} />
);
const Home = () => {
	return (
		<>
			<NavBar />
			<Jumbotron />
			<div className="card-container">
				{listItems}
			</div>
			<Footer />
		</>
	);
};

export default Home;
