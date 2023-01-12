import Image from "next/image"
import styled from "styled-components"


export default function About() {
    return (
        <AboutWrapper>
            <h1>Sobre o projeto</h1>
            <p>PokeNext é um App construído em Next.js para consultar Pokémons.</p>
            <Image
                src="/charizard.png"
                alt="Charizard"
                width="300"
                height="300"
      />
        </AboutWrapper>
    )
}

const AboutWrapper = styled.div`
    text-align: center;

    h1 {
        font-size: 2em;
        margin-bottom: 1em;
    }

    p {
        max-width: 500px;
        margin: 0 auto 1.5em;
    }
`;
