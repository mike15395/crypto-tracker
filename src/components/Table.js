/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/styles';
import CustomizedTables from './CustomizedTables';
import axios from 'axios';
import { CoinList, TrendingCoins } from '../API';
import { GetCryptoValues } from '../CryptoContext';
import { useEffect, useState } from 'react';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';

const useStyles = makeStyles({
  tableContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    width: '70vw',
    marginLeft:'15vw'
    }
})





function Table() {
  const classes = useStyles();
  const [tableData, setTable] = useState([]);

  const { currency ,symbol} = GetCryptoValues();
  useEffect(() => {
  getTableData();
}, [currency])
const getTableData= async() => {
  const {data} = await axios.get(CoinList(currency));
  console.log(data);
  setTable(data);
}
const darkTheme = createTheme({
    palette: {
        primary: {
            main:'#fff',
        }, type: 'dark',
    }
})


  return (
      <div>
          <div className={classes.tableContainer}>
        <h1>Cryptocurrency Prices By Market Cap</h1><br/>
        <ThemeProvider theme={darkTheme}>
          <TextField color='secondary' style={{ backgroundColor:'transparent', width: '60%' }} id="outlined-basic" label="Search for a Crypto Currency" variant="outlined" />
          </ThemeProvider><br/>
        <CustomizedTables tableData={tableData} setTable={setTable} symbol={symbol}/>
          </div>
      </div>
  )
}

export default Table