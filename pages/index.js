import styled from "styled-components"
import Image from "next/image"
import Card from "../components/Card"

export async function getStaticProps() {

  const maxPokemons = 251
  const api = `https://pokeapi.co/api/v2/pokemon/`
  const res = await fetch(`${api}/?limit=${maxPokemons}`)
  const data = await res.json()

  //add pokemon index

  data.results.forEach((item, index) => {

    item.id = index + 1

  });

  return {
    props: {
      pokemons: data.results,
    }
  }

}

export default function Home({ pokemons }) {
  return (
    <>
      <TitleContainer>
        <Title>Poke<span>Next</span></Title>
        <Image src='/pokeball.png' width='50' height='50' alt='Pokebola' />
      </TitleContainer>
      <PokemonContainer>
        {pokemons.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </PokemonContainer>
    </>
  )
}

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2em;
`;

const Title = styled.h1`
  color: #e33d33;
  text-align: center;
  font-size: 3em;
  margin-right: .4em;

  span {
    color: #333;
  }
`;

const PokemonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;