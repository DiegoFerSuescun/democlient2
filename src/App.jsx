import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css'

//styles
import { Box, CssBaseline, Drawer, List, ListItem, ListItemText, Toolbar, AppBar, Typography, ListItemIcon } from '@mui/material';
import { Home as HomeIcon  } from '@mui/icons-material';
import { FormatListNumbered as LogsIcon } from '@mui/icons-material';
import { AccountCircleSharp as AccountCircleIcon } from '@mui/icons-material';
import { AutoGraphSharp as AutoGraphIcon } from '@mui/icons-material';
import { EventNoteSharp as CalendarIcon } from '@mui/icons-material';
import { HelpOutlineSharp as HelpIcon } from '@mui/icons-material';
import { SettingsApplicationsSharp as SettingIcon } from '@mui/icons-material';
import { LogoutSharp as LogOutIco } from '@mui/icons-material';


//PAGES
import Analitics from "./pages/analitics/Analitics"
import CreateUser from "./pages/create/CreateUser"
import Home from "./pages/home/Home"
import Logs from "./pages/logs/Logs"
import Users from "./pages/users/Users"


//Definicion del Drawer que hara como mi narvar 
const drawerWidth = 220;

//Constante de Menus 

const menuItems = [
  { text: "Home", icon: <HomeIcon />, path: "/" },
  { text: "Logs", icon: <LogsIcon />, path: "/logs" },
  { text: "Users", icon: <AccountCircleIcon />, path: "/users" },
  { text: "Analytics", icon: <AutoGraphIcon />, path: "/analitics" },
  { text: "Calendar", icon: <CalendarIcon />, path: "/calendar" },
  { text: "Help", icon: <HelpIcon />, path: "/Help" },
  { text: "Settings", icon: <SettingIcon />, path: "/settings" },

];

function AppContent() {
  const location = useLocation();

  return (
    <div style={{ display: 'flex' }} className="containerAPP">
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
            bgcolor: '#23326d',
            color: '#dee8f0',
          },
        }}
      >
        <Toolbar />
        <List sx={{ marginTop: '20%' }}>
          {menuItems.map((item) => (
            <ListItem
              button
              component={Link}
              to={item.path}
              key={item.text}
              sx={{
                fontSize: '80px',
                marginBottom: '10px',
                marginLeft: '25px',
                width: '160px',
                borderRadius: '10px',
                backgroundColor: location.pathname === item.path ? 'rgb(36, 33, 243)' : 'transparent', // Resaltar si está seleccionado
                '&:hover': { backgroundColor: 'rgb(36, 33, 243)' },
              }}
            >
              <ListItemIcon sx={{ color: 'white' }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} sx={{ color: 'white', fontSize: '80px' }} />
            </ListItem>
          ))}
          <ListItem
            button
            sx={{
              fontSize: '15px',
              '&:hover': { backgroundColor: 'rgb(36, 33, 243)' },
              marginLeft: '25px',
              marginTop: "20vh",
              width: '160px',
              borderRadius: '10px',
            }}
          >
            <ListItemIcon sx={{ color: 'white' }}>
              <LogOutIco />
            </ListItemIcon>
            <ListItemText primary="Log Out" sx={{ color: 'white', fontSize: '30px' }} />
          </ListItem>
        </List>
      </Drawer>

      <div
        style={{
          flexGrow: 1,
          height: '90vh',
        }}
      >
        <Toolbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/analitics" element={<Analitics />} />
          <Route path="/logs" element={<Logs />} />
          <Route path="/users" element={<Users />} />
          <Route path="/createuser" element={<CreateUser />} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
