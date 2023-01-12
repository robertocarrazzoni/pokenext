import Image from "next/image"
import { 
    PokemonWrapper, 
    PokemonTitle, 
    TypesContainer, 
    Type,  
    DataContainer
} from "../../components/Styles"


export const getStaticPaths = async () => {
    const maxPokemons = 251
    const api = `https://pokeapi.co/api/v2/pokemon/`
    const res = await fetch(`${api}/?limit=${maxPokemons}`)
    const data = await res.json()

    const paths = data.results.map((pokemon, index) => {
        return {
            params: { pokemonId: (index+1).toString()},
        }
    })

    return {
        paths,
        fallback: false,
     }

}

export const getStaticProps = async (constext) => {
    const id = constext.params.pokemonId
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await res.json()

    return {
        props: {pokemon: data,}
    }

}

export default function Pokemon({pokemon}) {
    return (
        <PokemonWrapper>
            <PokemonTitle>{pokemon.name}</PokemonTitle>
            <Image 
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} 
                width='200'
                height='200'
                alt={pokemon.name}
            />
            <div>
                <h3>Numero:</h3>
                <p>#{pokemon.id}</p>
            </div>
            <div>
                <h3>Tipo:</h3>
                <TypesContainer>{pokemon.types.map((item, index) => (
                    <Type className={`type_${item.type.name}`} key={index}>{item.type.name}</Type>
                ))}</TypesContainer>
            </div>
            <DataContainer>
                <div className="data_height">
                    <h4>Altura:</h4>
                    <p>{pokemon.height * 10} cm</p>
                </div>
                <div>
                    <h4>Peso:</h4>
                    <p>{pokemon.weight / 10} kg</p>
                </div>
            </DataContainer>
        </PokemonWrapper>
    )
}