import Layout from "../../src/components/layout"
import { getAllRootDetails, loadProfileDetailsById } from "../../src/utils/load"
import { Box, Typography, Divider, Grid, Chip } from "@material-ui/core"
import { useRouter } from "next/dist/client/router"
import { useState, useEffect } from "react"
import { switchDetailTitle } from "../../src/utils/switcher"

export async function getStaticPaths() {
    const paths = getAllRootDetails()
    return {
        paths,
        fallback: false
    }
} 

export async function getStaticProps({ params }) {
    const detailsData = await loadProfileDetailsById(params.id)
    return {
        props: {
            detailsData
        }
    }
}

export default function Details( {detailsData} ) {

    const router = useRouter()
    const { lang } = router.query
    const { id, cn, en } = detailsData

    const [language, setLanguage] = useState(lang)
    const initialDeatils = (language === 'en'? en : cn)
    const [details, setDetails] = useState(initialDeatils)

    const title = switchDetailTitle(id, language)
    
    useEffect(() => {
        const curDeatils = (language === 'en'? en : cn)
        setDetails(curDeatils)
        title = switchDetailTitle(id, language)
    }, [language])

    function handleChange(event) {
        const lang = event['target']['value']
        setLanguage(lang)
    }

    return (
        <Layout
            languageChange={handleChange}
            language={language}
        >
            <Typography variant="h6" align="center" component="div" gutterBottom>
                {title}
            </Typography>
            <Divider style={{ marginTop:30 }} />
            <Box style={{ display:'flex', flexDirection:'column', justifyContent:'center', width:'100%', marginTop: 30 }} >
                {id==="experiences" && details.map(each => {
                    return (
                        <Box key={each['latest']} style={{ paddingRight:5, paddingBottom:30, paddingLeft:5 }} >
                            <Grid container spacing={0}>
                                <Grid item xs={8}>
                                    <Box style={{ display:'flex', justifyContent:'left'}} >
                                        <Typography variant="subtitle1" align="left" component="div" >
                                            {each['company']}  |  {each['position']}
                                            <Typography variant="caption" align="left" component="div" >
                                                {each['technics-tag'].map(tag => {
                                                    return <Chip key={tag} size="small" label={tag} color="primary" variant="outlined" style={{ marginRight:4, marginBottom:2 }} />
                                                })}
                                            </Typography>
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={4}>
                                    <Box style={{ display:'block', float:'right', fontStyle:'italic', color:'#9E9E9E', marginRight:1 }} >
                                        <Typography variant="caption" align="right" component="div" >
                                            {each['serving-time']}
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={2} />
                                <Grid item xs={10} >
                                    <Box style={{ display:'flex', justifyContent:'left', padding:4 }} >
                                        <section>
                                            <div dangerouslySetInnerHTML={{ __html: `${each['summary']}` }} />
                                        </section>
                                    </Box>
                                </Grid> 
                            </Grid>
                        </Box>
                    )
                })}
                {(id==="skills-proglang"||id==="skills-database"||id==="skills-tools") && details.map(each => {
                    return (
                        <Box key={each['index']} style={{ paddingRight:5, paddingBottom:30, paddingLeft:5 }} >
                            <Grid container spacing={0}>
                                <Grid item xs={8}>
                                    <Box style={{ display:'flex', justifyContent:'left'}} >
                                        <Typography variant="subtitle1" align="left" component="div">
                                            {id==="skills-proglang" && each['prog-lang']}
                                            {id==="skills-database" && each['db-type']}
                                            {id==="skills-tools" && each['tool-name']}
                                            <Typography variant="caption" align="left" component="div" >
                                                {language==='en'?'proficiency':'熟练度'} : {each['proficiency']}
                                            </Typography>
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={4}>
                                    <Box style={{ display:'block', float:'right', fontStyle:'italic', color:'#9E9E9E', marginRight:1 }} >
                                        <Typography variant="caption" align="right" component="div" >
                                            {language==='en'?'experience':'经验'} : {each['using-time']}
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={2} />
                                <Grid item xs={10} >
                                    <Box style={{ display:'flex', justifyContent:'left', padding:4 }} >
                                        <section>
                                            <div dangerouslySetInnerHTML={{ __html: `${each['description']}` }} style={{ lineHeight:1.4 }} />
                                        </section>
                                    </Box>
                                </Grid> 
                            </Grid>
                        </Box>
                    )
                })}
                {id==="education" && details.map(each => {
                    return (
                        <Box key={each['latest']} style={{ paddingRight:5, paddingBottom:30, paddingLeft:5 }} >
                            <Grid container spacing={0}>
                                <Grid item xs={8}>
                                    <Box style={{ display:'flex', justifyContent:'left'}} >
                                        <Typography variant="subtitle1" align="left" component="div">
                                            {each['university']} | {each['degree']}
                                            <Typography variant="caption" align="left" component="div" >
                                                {language==='en'?'Major':'专业'} : {each['major']}
                                            </Typography>
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={4}>
                                    <Box style={{ display:'block', float:'right', fontStyle:'italic', color:'#9E9E9E', marginRight:1 }} >
                                        <Typography variant="caption" align="right" component="div" >
                                            {each['study-time']} 
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={2} />
                                <Grid item xs={10} >
                                    <Box style={{ display:'flex', justifyContent:'left', padding:4 }} >
                                        <section>
                                            <div dangerouslySetInnerHTML={{ __html: `${each['description']}` }} />
                                        </section> 
                                    </Box>
                                </Grid> 
                            </Grid>
                        </Box>
                    )
                })}
            </Box>
        </Layout>
    )
}