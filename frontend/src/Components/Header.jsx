import React from 'react';
//component AppBar in materialUi which act like nav tag in html
import {AppBar, Box, Button, Toolbar, Typography} from '@mui/material';

const Header = () => {
  return (
    <AppBar sx={{background: "linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)"}}>
        {/* full navigation bar */}
        <Toolbar>
            {/* text */}
            <Typography variant="h5">
                BlogsApp
            </Typography>
            {/* its like div */}
            <Box display="flex" marginLeft="auto">
                <Button sx={{margin: 1, borderRadius: 10}} color="warning">Login</Button>
                <Button sx={{margin: 1, borderRadius: 10}} color="warning">Signup</Button>
            </Box>
        </Toolbar>
    </AppBar>
  )
}

export default Header;

