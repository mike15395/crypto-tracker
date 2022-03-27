/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/styles';
import CustomizedTables from './CustomizedTables';
import axios from 'axios';
import { TrendingCoins } from '../API';
import { GetCryptoValues } from '../CryptoContext';
import { useEffect,useState } from 'react';

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
  const {data} = await axios.get(TrendingCoins(currency));
  console.log(data);
  setTable(data);
}


  return (
      <div>
          <div className={classes.tableContainer}>
                <h2>Cryptocurrency Prices By Market Cap</h2>
        <TextField color='secondary' style={{ backgroundColor: 'white', width: '60%' }} id="outlined-basic" label="Outlined" variant="outlined" />
        <CustomizedTables tableData={tableData} setTable={setTable} symbol={symbol}/>
          </div>
      </div>
  )
}

export default Table