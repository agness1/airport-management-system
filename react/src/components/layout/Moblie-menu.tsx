import React, { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import EngineeringIcon from '@mui/icons-material/Engineering';
import { useStateContext } from "../../contexts/ContextProvider";
import axiosClient from "../../axios-client";

export default function MobileNavigation() {
    const {token, setUser, setToken, setRole, role} = useStateContext();
    const onLogout = (ev:any) => {
        ev.preventDefault()
        axiosClient.post('/logout')
          .then(() => {
            setUser({})
            setToken(null)
            setRole(null)
          })
      }

      useEffect(() => {
        axiosClient.get('/user')
          .then(({data}) => {
             setUser(data)
          })
      }, [])

  const [open, setState] = useState(false);

  const toggleDrawer = (open: any) => (event: any) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };

  return (
    <>
      <IconButton
        edge="end"
        color="inherit"
        aria-label="open drawer"
        onClick={toggleDrawer(true)}
        sx={{
          mr: 2,
          display: {
            xs: "block",
            sm: "none",
          },
          position: "absolute",
          left: "0.5rem",

        }}
      >
        <MenuIcon />
      </IconButton>

      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <div className="bg-opal h-full w-full p-4 flex flex-col items-center">
          <IconButton sx={{ mb: 2 }}>
            <ArrowBackIosIcon onClick={toggleDrawer(false)} />
          </IconButton>

          <Divider sx={{ mb: 2 }} />

          <Box sx={{ mb: 2 }}>
            <a href="/">
              <ListItemButton>
                <ListItemIcon>
                  <HomeIcon className="text-black" />
                </ListItemIcon>
                <ListItemText primary="Home" className="text-black font-bold" />
              </ListItemButton>
            </a>
            <a href="/dashboard/flight-operator">
              <ListItemButton>
                <ListItemIcon>
                  <ConnectingAirportsIcon className="text-black" />
                </ListItemIcon>
                <ListItemText primary="Arrivals and Departures" className="text-black" />
              </ListItemButton>
            </a>

            <a href="/dashboard/terminal-manager">
              <ListItemButton>
                <ListItemIcon>
                  <AirplaneTicketIcon className="text-black" />
                </ListItemIcon>
                <ListItemText primary="Terminal" className="text-black" />
              </ListItemButton>
            </a>

            <a href="/dashboard/ground-manager">
              <ListItemButton>
                <ListItemIcon>
                  <EngineeringIcon className="text-black" />
                </ListItemIcon>
                <ListItemText primary="Ground" className="text-black" />
              </ListItemButton>
            </a>
          </Box>
        <a href="/register" className="bg-blue p-2 px-4 text-white rounded-md m-4">Register</a>
          {token ? <><button onClick={onLogout} className="bg-blue p-2 px-4 text-white rounded-md">Logout</button> <p className="p-2 text-xl text-black font-medium">Your role: {role}</p> </>: <a href="/signin" className="bg-blue p-2 px-4 text-white rounded-md">Login</a>}

        </div>
      </Drawer>
    </>
  );
}
