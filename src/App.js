// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import SimpleCard from './components/Card';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import { width } from '@material-ui/system';

const estilos = makeStyles({
  center:{
    position: 'absolute', left: '50%', top: '50%',
    transform: 'translate(-50%, -50%)',
    width:'50%'
  }
    

});

function App() {
  const classes = estilos();
  return (
    < >
    <Navbar />
    <Box className ={classes.center}>
      <SimpleCard />
    </Box>
    








    {/* <div className="max-w-lg rounded overflow-hidden my-8 shadow-lg grid grid-cols-4 gap-4 text-center flex h-screen ">
      <div className="col-start-2 col-span-2 bg-sky-500 justify-center m-auto p-20 pb-15 rounded">
            <p >Perguntas</p> 
            <p>& </p>
            <p>Conversas</p>

            <button onClick={()=>{
              console.log('pq pisca as vzs enquanto edito-te?')
              
            }} class="bg-orange-500 hover:bg-orange-500 text-white-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
              Start
            </button>

      </div>
     
    </div> */}
    </ >
  );
}

export default App;
