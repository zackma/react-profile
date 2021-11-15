import { LocationOnOutlined } from '@material-ui/icons'
import { Avatar, Box, Card, CardMedia, CardContent, Typography } from "@material-ui/core";

export default function PhotoCard({ home, data }) {
    return (
        <Box 
        id="photo-card"
        style={{ display:'flex', justifyContent:'center', width:'100%', marginTop:50, marginBottom:20 }}
        >
            {home?(
                <Card style={{ display:'flex' }}>
                    <CardMedia
                    component="img"
                    style={{width: 144, height: 144, margin:0 }}
                    image="/images/profile.jpg"
                    alt="Zack"
                    />
                    <Box style={{ display:'flex', flexDirection:'column' }}>
                        <CardContent style={{ flex:'1 0 auto' }}>
                            <Typography component="div" variant="h6" align="center" style={{ mb:15 }} >
                                {data['basic-info']['name']}
                            </Typography>
                            <Box style={{ display:'flex', alignItems:'center', marginRight:10, marginTop:24 }}>
                                <Typography component="div" variant="caption" style={{ fontSize:"0.8rem" }} >
                                    <LocationOnOutlined style={{ display:'block', float:'left', paddingBottom:4 }} />{data['basic-info']['location']}
                                </Typography>
                            </Box>
                        </CardContent>
                    </Box>
                </Card>
                
            ):(
                <Avatar 
                    alt="Zack" 
                    src="/images/profile.jpg"
                    style={{width: 108, height: 108}}
                />
            )}
        </Box>
    )
}