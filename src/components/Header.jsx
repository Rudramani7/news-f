import React from 'react'
import { AppBar,Toolbar,makeStyles } from '@material-ui/core';
import {Menu} from '@material-ui/icons';

const useStyles = makeStyles({
    header: {
        backgroundColor:'#fff',
        height:70
    },
    menu:{
        color:'#000',
    },
    logo:{
        height: 55,
        margin:'auto',
        paddingRight:70
    }
})

const Header = () => {
    const classes = useStyles();
    const url="https://kashmirrays.com/wp-content/uploads/2021/12/21601_1.png?w=640";
  return (
      <AppBar className={classes.header}>
          <Toolbar>
              <Menu className={classes.menu} />
              <img src={url} alt="logo" className={classes.logo}/>
          </Toolbar>
      </AppBar>
  )
}

export default Header;