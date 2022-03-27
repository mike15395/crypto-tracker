import React from 'react'
import { makeStyles, } from '@material-ui/styles';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { GetCryptoValues } from '../CryptoContext';

const useStyles = makeStyles({
    title: {
        color: 'gold',
        marginLeft: '100px'
    },
    
    headerContainer: {
        display: 'flex',
        justifyContent: 'center' ,
      
        
    }

})

const darkTheme = createTheme({
    palette: {
        primary: {
            main:'#fff',
        }, type: 'dark',
    }
})

function Header() {
    const classes = useStyles();
    const { currency, setCurrency } = GetCryptoValues();
    console.log(currency);
    
  return (
      <div className={classes.headerContainer}>
          <ThemeProvider theme={darkTheme}>
              <AppBar color='transparent' position="static">
                 
                                <Toolbar>
                                    <Typography variant="h6" className={classes.title}>
                                    CryptoTracker
                                    </Typography>
                                    
                                </Toolbar>
                    
              </AppBar>
              
              <Select onChange={(e) => setCurrency(e.target.value)}
                  value={currency}
                                        variant='outlined'
                                    style={{width:100,height:40,marginRight:'120px',marginTop:'10px'}}    
                            >
                                <MenuItem value={'INR'} >INR</MenuItem>
                                <MenuItem value={'USD'}>USD</MenuItem>
                </Select>
              
              </ThemeProvider>
          

      </div>
  )
}

export default Header