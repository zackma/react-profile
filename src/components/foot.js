import Link from 'next/link'
import { Box, Typography } from "@material-ui/core"

export default function Footer() {

    return (
        <Box
          id="footer"
          style={{ display:'flex',justifyContent:'center',width:'100%',marginTop:80, marginBottom:15 }}
        >
          <Typography style={{ color: '#9e9e9e',fontFamily: 'Arial',fontSize: '0.8rem' }}>
            Copyright @Zack Marcus | 
            <Link href="https://www.github.com/zackma">
              <a style={{ color: '#039BE5',textDecoration:'none' }}> Github </a>
            </Link> | 
             WeChat @chatt-mazio
          </Typography>
        </Box>
    )
}