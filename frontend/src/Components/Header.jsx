import React, { useState } from 'react';
//component AppBar in materialUi which act like nav tag in html
import {AppBar, Box, Button, Toolbar, Typography, Tabs, Tab} from '@mui/material';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../Store';

const Header = () => {
  const dispath = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
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
            {isLoggedIn && <Box display="flex" marginLeft={'auto'} marginRight="auto">
              <Tabs textColor="secondary" value={value} onChange={(e, val) => setValue(val)}>
                  <Tab LinkComponent={Link} to="/blogs" label="All Blogs" />
                  <Tab LinkComponent={Link} to="/myBlogs" label="My Blogs" />
                  <Tab LinkComponent={Link} to="/blogs/add" label="Add Blog" />
              </Tabs>
            </Box> }
            <Box display="flex" marginLeft="auto">
                { !isLoggedIn && <> <Button LinkComponent={Link} to="/auth" variant= "contained" sx={{margin: 1, borderRadius: 10}} color="warning">Login</Button>

                <Button LinkComponent={Link} to="/auth" variant="contained" sx={{margin: 1, borderRadius: 10}} color="warning">Signup</Button> </>}
                {isLoggedIn && 
                <Button onClick={() => dispath(authActions.logout())}
                LinkComponent={Link} to="/auth" variant="contained" 
                sx={{margin: 1, borderRadius: 10}} color="warning">
                Logout
                </Button> } 
            </Box>
        </Toolbar>
    </AppBar>
  )
}

export default Header;

