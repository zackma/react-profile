import { Container } from '@material-ui/core'
import Head from 'next/head'
import Footer from './foot'
import HeadBar from './head_bar'
import PhotoCard from './photo_card'
import Link from 'next/link'
import { KeyboardBackspace } from '@material-ui/icons'

export const siteTitle = 'Personal Profile'

export default function Layout({ children, home, data, languageChange, language }) {
    return(
        <div style={{ color:'#616161', paddingBottom:50 }} >
            <Container fixed>
                <header>
                    <Head>
                        <title>{siteTitle}</title>
                    </Head>
                    <HeadBar languageChange={languageChange}/>
                    <PhotoCard home={home} data={data} />
                </header>
                <main>
                    {children}
                </main>
                {home && (
                    <Footer />
                )}
                {!home && (
                    <Link 
                        href={{ 
                          pathname: "/",
                          query: {lang: language}
                        }} 
                        as={"/"}
                    >
                        <a style={{ color:'#039BE5',textDecoration:'none' }}>
                            <KeyboardBackspace style={{ display:'block', float:'left', paddingBottom:4 }}/> 
                            Back Home Page
                        </a>
                    </Link>
                )}
            </Container>
        </div>
    )
}