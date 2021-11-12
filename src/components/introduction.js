import { Box, Grid, Typography } from "@material-ui/core"
import { LabelImportant } from "@material-ui/icons"

export default function SelfIntroduction({ language, profileData }) {
    return (
        <Box 
          id="introduction"
          style={{ display:'flex', justifyContent:'center', width:'88%', marginTop:30 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Box style={{ display:'flex', flexDirection:'line', justifyContent:'center', width:'100%' }}>
                <LabelImportant fontSize="small" style={{ display:'block',paddingTop:4 }} />
                <Typography align="center" style={{ mb:15, fontSize:'1.1rem' }} gutterBottom>
                  {language === 'en'?'Introduction':'自我介绍'}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={8} />
            <Grid item xs={4} />
            <Grid item xs={8}>
              <Typography align="left" style={{ mb:15, fontSize:'0.9rem' }} gutterBottom>
                {profileData['basic-info']['self-introduction']}
              </Typography>
            </Grid>
          </Grid>
        </Box>
    )
}