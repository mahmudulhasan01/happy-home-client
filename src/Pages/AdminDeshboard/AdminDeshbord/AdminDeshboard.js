import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import ManageAllOrder from "../ManageAllOrder/ManageAllOrder";
import AddProducts from "../AddProducts/AddProducts";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import ManageProduct from "../ManageProduct/ManageProduct";

const drawerWidth = 240;

function AdminDeshboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  let { path, url } = useRouteMatch();

  const drawer = (
    <div>
      <Toolbar />
      <Divider />

      <List>
        <ListItemText>
          <Link
            style={{ textDecoration: "none" }}
            to={`${url}/manageallorders`}
          >
            <Button style={{ fontWeight: "bold" }} variant="text">
              Manage All Orders
            </Button>
          </Link>
        </ListItemText>
        <ListItemText>
          <Link style={{ textDecoration: "none" }} to={`${url}/addproducts`}>
            <Button style={{ fontWeight: "bold" }} variant="text">
              Add Products
            </Button>
          </Link>
        </ListItemText>
        <ListItemText>
          <Link style={{ textDecoration: "none" }} to={`${url}/makeadmin`}>
            <Button style={{ fontWeight: "bold" }} variant="text">
              Make Admin
            </Button>
          </Link>
        </ListItemText>
        <ListItemText>
          <Link style={{ textDecoration: "none" }} to={`${url}/manageproducts`}>
            <Button style={{ fontWeight: "bold" }} variant="text">
              Manage Products
            </Button>
          </Link>
        </ListItemText>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Link style={{ textDecoration: "none", color: "white" }} to="/home">
            <Typography variant="h6" noWrap component="div">
              RENT YOUR HOME
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        <Switch>
          <Route exact path={path}>
            <ManageAllOrder></ManageAllOrder>
          </Route>
          <Route exact path={`${path}/manageallorders`}>
            <ManageAllOrder></ManageAllOrder>
          </Route>
          <Route exact path={`${path}/addproducts`}>
            <AddProducts></AddProducts>
          </Route>
          <Route exact path={`${path}/makeadmin`}>
            <MakeAdmin></MakeAdmin>
          </Route>
          <Route exact path={`${path}/manageproducts`}>
            <ManageProduct></ManageProduct>
          </Route>
        </Switch>
      </Box>
    </Box>
  );
}

AdminDeshboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default AdminDeshboard;
