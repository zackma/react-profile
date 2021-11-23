import { Box, InputLabel, Select, MenuItem, FormControl } from '@material-ui/core'

export default function HeadBar({ languageChange }) {
    return (
        <Box sx={{ display:'flex',justifyContent: 'flex-end',width: '100%' }} >
            <FormControl style={{ minWidth: 80, marginTop: 2, marginRight: 10 }} >
                <InputLabel id="language-select-label" style={{ fontSize:'0.8rem',color:'#039BE5' }} >Language</InputLabel>
                <Select
                    labelId="language-select-label"
                    id="language-select"
                    label="language"
                    style={{ fontSize:'0.7rem', height: 30 }}
                    onChange={languageChange}
                    autoWidth
                    disableUnderline
                >
                    <MenuItem value={'cn'} style={{ fontSize:'0.7rem' }}>中文</MenuItem>
                    <MenuItem value={'en'} style={{ fontSize:'0.7rem' }}>English</MenuItem>
                </Select>
            </FormControl>
        </Box>
    )
}