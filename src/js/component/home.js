import React, { useState, useEffect } from "react";

export function Home() {
	useEffect(() => {
		obtenerPokemones();
    }, []);
    
    //OPCION 1: fetch
    
	// let [pokeFetch, setPokeFetch] = useState([]);

	// fetch("https://pokeapi.co/api/v2/pokemon")
	// 	.then(res => res.json())
	// 	.then(data => {
	// 		setPokeFetch(data.results);
	// 	})
	// 	.catch(error => console.log(error));

    //OPCION2: async await (mejor práctica)
    
    let [pokeAsync, setPokeAsync] = useState([]);   

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
