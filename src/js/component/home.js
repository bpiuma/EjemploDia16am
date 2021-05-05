import React, { useState, useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	useEffect(() => {
		obtenerPokemones();
	}, []);
	//fetch
	let [pokeFetch, setPokeFetch] = useState([]);
	let [pokeAsync, setPokeAsync] = useState([]);

	// fetch("https://pokeapi.co/api/v2/pokemon")
	// 	.then(res => res.json())
	// 	.then(data => {
	// 		setPokeFetch(data.results);
	// 	})
	// 	.catch(error => console.log(error));

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

	return (
		<div className="text-center mt-5">
			<h1>Hello Rigo!</h1>
			<ul>
				{pokeAsync.map((item, index) => {
					return <li key={index}>{item.name}</li>;
				})}
			</ul>
		</div>
	);
}
