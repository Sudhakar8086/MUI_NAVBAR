import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  Button,
  useMediaQuery,
  useTheme,
  Typography,
} from '@mui/material';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import DrawerComp from './DrawerComp';

const Pages = ['Products', 'Services', 'Contact Us', 'About Us'];
const Header = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  console.log(isMatch);

  return (
    <React.Fragment>
      <AppBar sx={{ background: '#063970' }}>
        <Toolbar>
          <ShoppingCartCheckoutIcon />
          {isMatch ? (
            <>
              <Typography sx={{ fontSize: '1.3rem', paddingLeft: '10%' }}>
                SHOPHEE
              </Typography>
              <DrawerComp />
            </>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: 'auto' }}
                textColor='inherit'
                value={value}
                onChange={(e, value) => setValue(value)}
                indicatorColor='secondary'
              >
                {Pages.map((page, index) => (
                  <Tab key={index} label={page} />
                ))}
              </Tabs>

              <Button sx={{ marginLeft: 'auto' }} variant='contained'>
                Login{' '}
              </Button>
              <Button sx={{ marginLeft: '10px' }} variant='contained'>
                SignUp{' '}
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
