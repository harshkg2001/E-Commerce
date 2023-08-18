import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.scss"
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";
import { Badge, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Icon, IconButton, Typography } from "@mui/material";
import {CurrencyBitcoin, Logout} from "@mui/icons-material"
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const [open,setOpen] = useState(false)
  const products = useSelector((state) => state.cart.products);
  const [count, setCount] = useState(0);
  const [dialog, setDialog] = useState(false);
  const {logOut} = useAuth()
  const navigate = useNavigate()

  const handleClose = ()=>{
    setDialog(false);
  }
  
  const handleLogout = async ()=>{
    await logOut();
    navigate("/login")
  }

  const handleToken = () => {
    navigate("/transact")
  }

  return (
    <div className="navbar">
      <div className="wrapper">
        
        <div className="left">
          <Link className ="link" to="/">Sneak Kar</Link>
        </div>

        <div className="center">
          
        </div>

        {/* token area */}
        <div className="right">
          <div className="token">
              <Badge badgeContent={count} showZero color="primary">
                <CurrencyBitcoin onClick={handleToken}/>
              </Badge>
          </div>

          <div className="item">
            <Link className ="link" to="/">Home</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/about">About</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/">Contact Us</Link>
          </div>
          
          <div className="icons">
            <SearchIcon/>
            <PersonOutlineOutlinedIcon/>
            <FavoriteBorderOutlinedIcon/>
            
            <div className="cartIcon" onClick={()=>setOpen(!open)}>
              <ShoppingCartOutlinedIcon/>
              <span>{products.length}</span>
            </div>

              <Logout onClick={handleLogout}/>
          </div>
        </div>
      </div>
      
      {open && <Cart/>} 
      
      {/* token dialog box */}
      <Dialog open={dialog} onClose={handleClose} fullWidth>
        <DialogTitle variant="h3">Available Tokens</DialogTitle>
        <DialogContent>
          <Typography variant="h6">
            Total tokens : {count}
          </Typography>
          <Typography variant="h6">
            Days before expiry: 28 
          </Typography>
          <Typography variant="body1" color="primary.main" mt={3}>
            *Expiry date is calculated according to the last purchased
          </Typography>
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Navbar;
