import Link from 'next/link'
import { Box, Grid, Typography } from '@material-ui/core'
import { LabelImportant } from '@material-ui/icons'

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
                let content
                switch (detail) {
                  case "experiences":
                    content = (language==='en'?'Experiences':'工作经验')
                    break
                  case "skills-proglang":
                    content = (language==='en'?'Skills / Programming Language':'技术栈/语言')
                    break
                  case "skills-database":
                    content = (language==='en'?'Skills / Database':'技术栈/数据库')
                    break
                  case "skills-tools":
                    content = (language==='en'?'Skills / Tools': '技术栈/工具')
                    break
                  case "education":
                    content = (language==='en'?'Education':'教育')
                    break
                  default:
                    content = (language==='en'?'Others':'其它')
                    break
                }
                return (
                  <div key={detail} style={{  marginBottom: 6 }}>
                    <Typography component="div">
                      <Link href={`/details/${detail}`}>
                        <a key={detail} style={{ color:'#039BE5',textDecoration:'none',fontSize:'0.9rem' }}>{content}</a>
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