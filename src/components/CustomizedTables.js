import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles(() => ({
  head: {
    backgroundColor: 'gold',
    color: 'black',
    fontWeight:'800'
  },
  body: {
    fontSize: 16,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);


const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  firstCellContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    marginLeft: 'none'
    
  },
  firstCell: {
    paddingRight:'50px',
  }
});

export default function CustomizedTables({tableData,setTable,symbol}) {
  const classes = useStyles();
  const change = tableData.price_change_percentage_24h;
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Coin</StyledTableCell>
            <StyledTableCell align="right">Price</StyledTableCell>
            <StyledTableCell align="right">24h Change</StyledTableCell>
            <StyledTableCell align="right">Market Cap</StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <StyledTableRow key={row.id}>
             
              <StyledTableCell component="th" scope="row">
                <div className={classes.firstCellContainer}>
                  <span><img src={row.image} alt='crytpo_image' style={{ height: '50px', width: '50px' }} /> </span>
                    <div className={classes.firstCell}>
                      <span style={{fontSize:'30px'}}>{row.symbol}</span><br/>
                      <span style={{ fontSize: '15px' }}>{row.name}</span>
                    </div>
                </div>
              </StyledTableCell>
              <StyledTableCell align="right">{symbol}{" "}{row.current_price}</StyledTableCell>
              <StyledTableCell align="right" style={{color: change>0 ? 'green':'red'}}>{ row.price_change_percentage_24h.toFixed(2)}</StyledTableCell>
              <StyledTableCell align="right">{ row.market_cap}</StyledTableCell>
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}