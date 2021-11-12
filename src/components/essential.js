import { Box, Typography, Grid } from '@material-ui/core'
import { LabelImportant } from '@material-ui/icons'

export default function EssentialInfo({ language, profileData }) {

    return (
        <div>
            <Box 
            id="basic-info"
            style={{ display:'flex', justifyContent:'center', width:'88%', marginTop:20 }}
            >
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Box style={{ display:'flex', flexDirection:'line', justifyContent:'center', width:'100%' }}>
                        <LabelImportant fontSize="small" style={{ display:'block',paddingTop:4 }} />
                        <Typography align="center" style={{ mb:15, fontSize:'1.1rem' }} gutterBottom>
                            {language === 'en'?'Essential':'基本信息 '}
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={2} />
                <Grid item xs={4} />
                <Grid item xs={4} />
                <Grid item xs={8}>
                <Grid container spacing={1}>
                    <Grid item xs={5}>
                        <Typography align="left" style={{ mb:15}} variant="subtitle2" >
                            {language === 'en'?'Name: ':'姓名: '}
                            <Typography align="center" style={{ paddingLeft:15 }} variant="body">
                            {profileData['basic-info']['name']}
                            </Typography>
                        </Typography>
                    </Grid>
                    <Grid item xs={7}>
                    <Typography align="center" style={{ mb:15 }} variant="subtitle2">
                        {language === 'en'?'Gender: ':'性别: '}
                        <Typography align="center" style={{ paddingLeft:15 }} variant="body">
                        {profileData['basic-info']['gender']}
                        </Typography>
                    </Typography>
                    </Grid>
                </Grid>
                </Grid>
                <Grid item xs={4} />
                <Grid item xs={8}>
                <Typography align="left" style={{ mb:15 }} variant="subtitle2">
                    {language === 'en'?'University: ':'学校: '}{(profileData['basic-info']['university']).map(uni=>{
                        return (
                        <Typography key={uni} align="center" style={{ paddingLeft:15, paddingRight:10 }} variant="body">
                            {uni}
                        </Typography>
                        )
                    })}
                </Typography>
                </Grid>
                <Grid item xs={4} />
                <Grid item xs={8}>
                <Typography align="left" style={{ mb:15 }} variant="subtitle2">
                    {language === 'en'?'Degree: ':'学历: '}{(profileData['basic-info']['degree']).map(dg=>{
                        return (
                        <Typography key={dg} align="center" style={{ paddingLeft:15, paddingRight:10 }} variant="body">
                            {dg}
                        </Typography>
                        )
                    })}
                </Typography>
                </Grid>
                <Grid item xs={4} />
                <Grid item xs={8}>
                <Typography align="left" style={{ mb:15 }} variant="subtitle2" >
                    {language === 'en'?'Email: ':'电箱: '}
                    <Typography align="center" style={{ paddingLeft:15 }} variant="body">
                    {profileData['basic-info']['email']}
                    </Typography>
                </Typography>
                </Grid>
            </Grid>
            </Box>
        </div>
    )
}