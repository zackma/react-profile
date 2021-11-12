import { AppBar, Box, Toolbar, InputLabel, Select, MenuItem, FormControl } from '@material-ui/core'

export default function HeadBar({ languageChange }) {
    return (
        <Box sx={{ display:'flex',justifyContent: 'flex-end',width: '100%' }} >
            <FormControl style={{minWidth: 100, marginTop: 6, marginRight: 40 }} >
                <InputLabel id="language-select-label">Language</InputLabel>
                <Select
                    labelId="language-select-label"
                    id="language-select"
                    label="language"
                    style={{ fontSize:'0.7rem', width: 100 }}
                    onChange={languageChange}
                >
                    <MenuItem value={'en'} style={{ fontSize:'0.7rem' }}>English</MenuItem>
                    <MenuItem value={'cn'} style={{ fontSize:'0.7rem' }}>中文</MenuItem>
                </Select>
            </FormControl>
        </Box>
    )
}