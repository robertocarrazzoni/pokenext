import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";


export default function Layout({children}) {
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/favicon.ico" />
                <title>PokeNext</title>
            </Head>
            <Navbar>
                <Logo>
                    <Image 
                        src='/pokeball.png'
                        width='30'
                        height='30'
                        alt="Pokenext"
                    />    
                    <h1>PokeNext</h1>
                </Logo>
                <LinkItems>
                    <li>
                        <Link href='/'>Home</Link>
                    </li>
                    <li>
                        <Link href='/about'>Sobre</Link>
                    </li>
                </LinkItems>
            </Navbar>
            <main>{children}</main>
            <Footer>
                <p>
                    <span>PokeNext</span> &copy; 2023
                </p>
            </Footer>

        </>
    )
}

const Navbar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em 1.2em;
    margin-bottom: 2em;
    background-color: #333;
    color: #fff;
`;

const Logo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
        margin-left: .5em;
    }
`;

const LinkItems = styled.ul`
    display: flex;
    list-style: none;

    li {
        margin-right: 1.3em;
    }
    a {
        color: #fff;
        text-decoration: none;
        padding: 5px;
        transition: .4s;
        border-bottom: 2px solid transparent;
    }
    a:hover{
        border-color: #fff;
    }
`;
const Footer = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #333;
    height: 150px;
    margin-top: 2em;
    border-top: 3px solid #111;
    color: #fff;

    span {
        font-weight: bold;
    }
`;
