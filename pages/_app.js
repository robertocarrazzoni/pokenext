import { createGlobalStyle, GlobalStyleComponent } from "styled-components"
import Layout from "../components/Layout"

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
    </Layout>
    </>
  )
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: Helvetica, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  main {
    min-height: 70vh;
  }
`