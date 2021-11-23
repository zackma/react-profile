import { Container } from '@material-ui/core'
import Head from 'next/head'
import HeadBar from './head_bar'
import PhotoCard from './photo_card'
import Link from 'next/link'
import Footer from './foot'
import { KeyboardBackspace } from '@material-ui/icons'

export const siteTitle = 'Personal Profile'

export default function Layout({ children, home, data, languageChange, language }) {
    return(
        <div style={{ color:'#616161' }} >
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
                {!home && (
                    <Link href="/" >
                        <a style={{ color:'#039BE5',textDecoration:'none' }}>
                            <KeyboardBackspace style={{ display:'block', float:'left', paddingBottom:4 }}/> 
                            Back Home Page
                        </a>
                    </Link>
                )}
                <footer>
                    <Footer />
                </footer>
            </Container>
        </div>
    )
}