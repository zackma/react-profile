import { Box, Typography, Grid } from '@material-ui/core'

export default function EssentialInfo({ language, profileData }) {

    return (
        <div>
            <Box 
            id="basic-info"
            style={{ display:'flex', justifyContent:'center', width:'98%', marginTop:20 }}
            >
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    {language === 'en'?(
                        <Grid container spacing={0}>
                            <Grid item xs={7}>
                                <Typography align="left" style={{ mb:15}} variant="subtitle2" >
                                    Name: 
                                    <Typography align="left" style={{ paddingLeft:10,fontSize:'0.85rem' }} variant="caption">
                                        {profileData['basic-info']['name']}
                                    </Typography>
                                </Typography>
                            </Grid>
                            <Grid item xs={5}>
                                <Typography align="right" style={{ mb:15 }} variant="subtitle2">
                                    Gender: 
                                    <Typography align="right" style={{ paddingLeft:10,marginRight:5,fontSize:'0.85rem' }} variant="caption">
                                        {profileData['basic-info']['gender']}
                                    </Typography>
                                </Typography>
                            </Grid>
                        </Grid>
                    ):(
                        <Grid container spacing={0}>
                            <Grid item xs={6}>
                                <Typography align="left" style={{ mb:15 }} variant="subtitle2" >
                                    姓名: 
                                    <Typography align="left" style={{ paddingLeft:15,fontSize:'0.85rem' }} variant="caption">
                                        {profileData['basic-info']['name']}
                                    </Typography>
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography align="right" style={{ mb:15 }} variant="subtitle2">
                                    性别: 
                                    <Typography align="right" style={{ paddingLeft:15,marginRight:5,fontSize:'0.85rem' }} variant="caption">
                                        {profileData['basic-info']['gender']}
                                    </Typography>
                                </Typography>
                            </Grid>
                        </Grid>
                    )}
                </Grid>
                <Grid item xs={12}>
                    <Typography align="left" style={{ mb:15 }} variant="subtitle2">
                        {language === 'en'?'University: ':'学校: '}{(profileData['basic-info']['university']).map(uni=>{
                            return (
                            <Typography key={uni} align="right" style={{ fontSize:'0.85rem' }} variant="body1">
                                {uni}
                            </Typography>
                            )
                        })}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography align="left" style={{ mb:15 }} variant="subtitle2">
                        {language === 'en'?'Degree: ':'学历: '}{(profileData['basic-info']['degree']).map(dg=>{
                            return (
                            <Typography key={dg} align="right" style={{ fontSize:'0.85rem' }} variant="body1">
                                {dg}
                            </Typography>
                            )
                        })}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography align="left" style={{ mb:15 }} variant="subtitle2" >
                        {language === 'en'?'Email: ':'电邮: '}
                        <Typography align="right" display="block" style={{ fontSize:'0.9rem',float:'right' }} variant="body1">
                            {profileData['basic-info']['email']}
                        </Typography>
                    </Typography>
                </Grid>
            </Grid>
            </Box>
        </div>
    )
}