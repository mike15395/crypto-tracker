
import { makeStyles } from '@material-ui/core/styles';
import './App.css';
import Banner from './components/Banner';
import Header from './components/Header';
import Table from './components/Table';

const useStyles = makeStyles({
  app:
  {
    backgroundColor: 'black',
    minHeight: '100vh',
    color: 'white',
    
  }
})



function App() {

  const classes = useStyles();
  return (
    <div className={classes.app}>
      <Header />
      <Banner />
      <Table/>
    </div>
  );
}

export default App;
