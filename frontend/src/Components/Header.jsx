import React, { useState } from 'react';
//component AppBar in materialUi which act like nav tag in html
import {AppBar, Box, Button, Toolbar, Typography, Tabs, Tab} from '@mui/material';
import {Link} from 'react-router-dom';

const Header = () => {
  const [value, setValue] = useState();

  return (
    <AppBar position= "sticky" 
    sx={{background: "linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)"}}>
        {/* full navigation bar */}
        <Toolbar>
            {/* text */}
            <Typography variant="h5">
                BlogsApp
            </Typography>
            {/* its like div */}
            <Box display="flex" marginLeft={'auto'} marginRight="auto">
              <Tabs textColor="secondary" value={value} onChange={(e, val) => setValue(val)}>
                  <Tab LinkComponent={Link} to="/blogs" label="All Blogs" />
                  <Tab LinkComponent={Link} to="/myBlogs" label="My Blogs" />
              </Tabs>
            </Box>
            <Box display="flex" marginLeft="auto">
                <Button LinkComponent={Link} to="/auth" variant= "contained" sx={{margin: 1, borderRadius: 10}} color="warning">Login</Button>
                <Button LinkComponent={Link} to="/auth" variant="contained" sx={{margin: 1, borderRadius: 10}} color="warning">Signup</Button>
                <Button LinkComponent={Link} to="/auth" variant="contained" sx={{margin: 1, borderRadius: 10}} color="warning">Logout</Button>
            </Box>
        </Toolbar>
    </AppBar>
  )
}

export default Header;

