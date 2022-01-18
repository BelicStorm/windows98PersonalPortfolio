import '../styles/globals.css'
import Head from 'next/head'
function MyApp({ Component, pageProps }) {
  return<>
          <Head>
            <title>Cristian Pardo Casanova</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta name="description" content="Hola, soy Cristian Pardo entusiasta de la programación web, la ciencia ficción, la fantasía y las maquetas."/>
            <meta property="og:title" content="Cristian Pardo Casanova"/>
            <meta property="og:type" content="website"/>
            <link rel="shortcut icon" href="/media/icon.png" />
          </Head>
          <Component {...pageProps} />
        </> 
}

export default MyApp
