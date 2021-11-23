import Link from 'next/link'
import { Box, Grid, Typography } from '@material-ui/core'
import { LabelImportant, WorkOutline, CodeOutlined, StorageOutlined, BuildOutlined, SchoolOutlined } from '@material-ui/icons'
import { switchDetailTitle } from '../utils/switcher'

export default function ProfileDetails({ language, details }) {

    return (
        <Box 
          id="details"
          style={{ display:'flex',justifyContent:'center',width:'88%',marginTop:30 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Box style={{ display:'flex', flexDirection:'line', justifyContent:'center', width:'100%' }}>
                <LabelImportant fontSize="small" style={{ display:'block',paddingTop:4 }} />
                <Typography align="center" style={{ fontSize:'1.1rem' }} gutterBottom>
                  {language === 'en'?'Details':'履历详情'}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={8} />
            <Grid item xs={3} />
            <Grid item xs={9}>
              {details.map( detail => {
                let content = switchDetailTitle(detail, language)
                return (
                  <div key={detail} style={{  marginBottom: 6 }}>
                    <Typography component="div">
                      <Link 
                        href={{ 
                          pathname: `/details/${detail}`,
                          query: {lang: language}
                        }} 
                        as={`/details/${detail}`}
                      >
                        <a key={detail} style={{ color:'#039BE5',textDecoration:'none',fontSize:'0.9rem' }}>
                          { detail==="experiences" && <WorkOutline  style={{ display:'block',float:'left', marginRight:25, paddingBottom:2 }} /> }
                          { detail==="skills-proglang" && <CodeOutlined style={{ display:'block',float:'left', marginRight:25, paddingBottom:2 }} /> }
                          { detail==="skills-database" && <StorageOutlined style={{ display:'block',float:'left', marginRight:25, paddingBottom:2 }} /> }
                          { detail==="skills-tools" && <BuildOutlined style={{ display:'block',float:'left', marginRight:25, paddingBottom:2 }} /> }
                          { detail==="education" && <SchoolOutlined style={{ display:'block',float:'left', marginRight:25, paddingBottom:2 }} /> }
                          {content}
                        </a>
                      </Link>
                      <Typography style={{ fontSize:'0.7rem',paddingLeft:2,color:'#9E9E9E' }}>
                        {language==='en'?'Update: November, 2021':'更新: 2021, 11'}
                      </Typography>
                    </Typography>
                  </div>
                )
              })}
            </Grid>
          </Grid>
        </Box>
    )

}