import Link from 'next/link'
import { Box, Grid, Typography } from '@material-ui/core'
import { LabelImportant, WorkOutline, CodeOutlined, StorageOutlined, BuildOutlined, SchoolOutlined } from '@material-ui/icons'
import { switchDetailTitle } from '../utils/switcher'

export default function ProfileDetails({ language, details }) {

    return (
        <Box 
          id="details"
          style={{ display:'flex',justifyContent:'center',marginTop:10 }}
        >
          <Grid container spacing={1}>
            <Grid item xs={12}>
              {details.map( detail => {
                let content = switchDetailTitle(detail, language)
                return (
                  <div key={detail} style={{  marginBottom: 6 }}>
                    <Typography align='center'>
                      <Link 
                        href={{ 
                          pathname: `/details/${detail}`,
                          query: {lang: language}
                        }} 
                        as={`/details/${detail}`}
                      >
                        <a key={detail} style={{ color:'#039BE5',textDecoration:'none',fontSize:'0.9rem' }}>
                          { detail==="experiences" && <WorkOutline style={{ paddingTop:6, marginRight:'auto',marginLeft:'auto' }} />}
                          { detail==="skills-proglang" && <CodeOutlined style={{ paddingTop:6, marginRight:'auto',marginLeft:'auto' }} /> }
                          { detail==="skills-database" && <StorageOutlined style={{ paddingTop:6, marginRight:'auto',marginLeft:'auto' }} /> }
                          { detail==="skills-tools" && <BuildOutlined style={{ paddingTop:6, marginRight:'auto',marginLeft:'auto' }} /> }
                          { detail==="education" && <SchoolOutlined style={{ paddingTop:6, marginRight:'auto',marginLeft:'auto' }} /> }
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