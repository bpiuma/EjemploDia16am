import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	//fetch
	let [pokeFetch, setPokeFetch] = useState([]);
	let [pokeAsync, setPokeAsync] = useState([]);

	fetch("https://pokeapi.co/api/v2/pokemon")
		.then(res => res.json())
		.then(data => {
			setPokeFetch(data.results);
		})
		.catch(error => console.log(error));

	//async await

	const obtenerPokemones = async () => {
		try {
			const res = await fetch("https://pokeapi.co/api/v2/pokemon");
			const data = await res.json();
			setPokeAsync(data.results);
		} catch (error) {
			console.log(error);
		}
	};

	obtenerPokemones();

	return (
		<div className="text-center mt-5">
			<h1>Hello Rigo!</h1>
			<p>
				<img src={rigoImage} />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working
			</a>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
		</div>
	);
}
