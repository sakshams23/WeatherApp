import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, makeStyles, Container, TextField, InputAdornment, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import SignInDialog from './SignInDialog';
import SignUpDialog from './SignUpDialog';
import { useStyles as useAppStyles } from '../styles/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  sidebar: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  title: {
    flexGrow: 1,
    color: '#000', // Black color for the title
  },
  searchBarContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.1)', // Slightly transparent background for the search box
    borderRadius: theme.shape.borderRadius,
    padding: '1px 10px', // Adjust padding
    width: '100%',
    maxWidth: '300px', // Set a max width for the search container
  },
  searchInput: {
    '& .MuiInputBase-input': {
      padding: theme.spacing(1.5, 1),
      fontSize: '1rem',
      color: '#000', // Black color for the input text
    },
    '& .MuiInput-underline:before': {
      borderBottom: 'none',
    },
    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
      borderBottom: 'none',
    },
    '& .MuiInput-underline:after': {
      borderBottom: 'none',
    },
  },
  searchIcon: {
    color: '#000', // Black color for the search icon
  },
  appBar: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // Translucent background for the AppBar
  },
  list: {
    width: 250,
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // More translucent background for the list
    height: '100%', // Full height for the list
  },
}));

const Navbar = ({ handleSearch, onChange, value }) => {
  const classes = useStyles();
  const appClasses = useAppStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [signInOpen, setSignInOpen] = useState(false);
  const [signUpOpen, setSignUpOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const list = (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List className={classes.sidebar}>
        <ListItem button>
          <Button fullWidth color="primary" variant="contained">Home</Button>
        </ListItem>
        <ListItem button>
          <Button fullWidth color="primary" variant="contained" onClick={() => setSignInOpen(true)}>Sign In</Button>
        </ListItem>
        <ListItem button>
          <Button fullWidth color="primary" variant="contained" onClick={() => setSignUpOpen(true)}>Sign Up</Button>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" className={classes.title}>
            MyWeatherApp
          </Typography>
          <Container maxWidth='xs' className={classes.searchBarContainer}>
            <TextField
              variant='standard'
              type='text'
              fullWidth
              color='primary'
              placeholder='Search City'
              onChange={onChange}
              value={value}
              onKeyPress={handleSearch}
              className={classes.searchInput}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton style={{ backgroundColor: "transparent" }} disableRipple={true} className={classes.searchIcon} onClick={handleSearch}>
                      <SearchIcon fontSize='medium' />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Container>
        </Toolbar>
      </AppBar>
      <Drawer anchor='left' open={drawerOpen} onClose={toggleDrawer(false)}>
        {list}
      </Drawer>
      <SignInDialog open={signInOpen} onClose={() => setSignInOpen(false)} />
      <SignUpDialog open={signUpOpen} onClose={() => setSignUpOpen(false)} />
    </div>
  );
};

export default Navbar;
