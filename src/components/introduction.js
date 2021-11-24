import { Box, Grid, Typography } from "@material-ui/core"
import { LabelImportant } from "@material-ui/icons"

export default function SelfIntroduction({ profileData }) {
    return (
        <Box 
          id="introduction"
          style={{ display:'flex', justifyContent:'center', width:'100%', marginTop:30 }}
        >
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Typography align="left" style={{ mb:15, fontSize:'0.85rem' }} gutterBottom>
                {profileData['basic-info']['self-introduction']}
              </Typography>
            </Grid>
          </Grid>
        </Box>
    )
}