import Image from "next/image"
import Link from "next/link"
import styled from "styled-components"

export default function Card({pokemon}) {
    return (
        <PokemonCard>
            <Image 
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} 
                width='120'
                height='120'
                alt={pokemon.name}
            />
            <p>#{pokemon.id}</p>
            <h3>{pokemon.name}</h3>
            <Link href={`/pokemon/${pokemon.id}`}>Detalhes</Link>
        </PokemonCard>
    )
}

const PokemonCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 2em 1em;
    margin-bottom: 2em;
    width: 23%;
    border-radius: 1em;
    border: 2px solid #e33d33;
    box-shadow: 5px 5px 12px rgba(0, 0, 0, 0.5);
    background-color: #333;
    color: #fff;

    p {
        margin: 1em 0;
        background-color: #e33d33;
        border-radius: 5px;
        padding: 5px;
        color: #fff;
        text-align: center;
    }

    h3 {
        text-transform: capitalize;
        margin-bottom: 1em;
        font-size: 1.4em;
    }

    a {
        text-decoration: none;
        background-color: #fff;
        color: #222;
        padding: .7em 1.2em;
        border-radius: 5px;
        font-weight: bold;
        transition: .4s;
    }

    a:hover {
        background-color: #e33d33;
        color: #fff;
    }
`;