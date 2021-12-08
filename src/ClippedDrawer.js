import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { BrowserRouter as Router, Routes, Link , Route} from 'react-router-dom';
import Demo1 from './Demo1';
import Demo2 from './Demo2';
import App from './fnwithredux/index';
import { Auth0Provider } from '@auth0/auth0-react';
import Auth0ProviderWithHistory from './auth/auth0-provider-with-history';
import AuthenticationButton from './AuthenticationButton';
import AppThunk from './classwithreduxthunk/index';
import AppPro from './ProAsynAwait/index';
const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Router>
      <Auth0ProviderWithHistory>
        <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
            <Toolbar>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{ mr: 2, ...(open && { display: 'none' }) }}
            >
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
                U M A R
            </Typography>
            </Toolbar>
        </AppBar>
        <Drawer
            sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',
            },
            }}
            variant="persistent"
            anchor="left"
            open={open}
        >
            <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
            <AuthenticationButton style={{float:'right'}} />
            </DrawerHeader>
            <Divider />
            <List>
            <ListItem button key="FunctionCmp">
                <ListItemIcon>
                   <InboxIcon /> 
                </ListItemIcon>
                <Link to="/" exact>   <ListItemText primary="Fcn Cpt wout Redux" ></ListItemText></Link>
            </ListItem>
            <ListItem button key="ClassCmp">
                <ListItemIcon>
                   <InboxIcon /> 
                </ListItemIcon>
                <Link to="/demo2" > <ListItemText primary="Class Cpt-Redux" ></ListItemText></Link>
            </ListItem>

            <ListItem button key="fnCmpWithRedux">
                <ListItemIcon>
                   <InboxIcon /> 
                </ListItemIcon>
                <Link to="/fbcmwithredux" > <ListItemText primary="Fcn With-Redux" ></ListItemText></Link>
            </ListItem>
      
            <ListItem button key="fnCmpWithReduxThunk">
                <ListItemIcon>
                   <InboxIcon /> 
                </ListItemIcon>
                <Link to="/fbcmwithreduxthunk" > <ListItemText primary="Fcn With-Redux" ></ListItemText></Link>
            </ListItem>

            
            <ListItem button key="pro">
                <ListItemIcon>
                   <InboxIcon /> 
                </ListItemIcon>
                <Link to="/pro" > <ListItemText primary="Fcn With-Redux" ></ListItemText></Link>
            </ListItem>
            </List>
            <Divider />
            <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
                <ListItem button key={text}>
                <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
                </ListItem>
            ))}
            </List>
        </Drawer>
        <Main open={open}>
            <DrawerHeader />
            <Routes>
                <Route path="/" element= {<Demo1/>} />
                <Route path="/demo2" element= {<Demo2/>} />
                <Route path="/fbcmwithredux" element= {<App/>} />
                <Route path="/fbcmwithreduxthunk" element= {<AppThunk/>} />
                <Route path="/pro" element= {<AppPro/>} />
             </Routes>   
        </Main>
        </Box>
        </Auth0ProviderWithHistory>
    </Router>
  );
}
