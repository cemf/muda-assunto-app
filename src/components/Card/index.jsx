import React,{ useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const jsonData= require('../../perguntas.json')

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    height :"240px"
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
    
  },
  textArea:{
      height:"150px"
  }
});

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
    const [pergunta, setPergunta] = useState(jsonData["questoes"][0])

    const handlePerguntas = ()=>{
        setPergunta(jsonData["questoes"][Math.floor(Math.random()*jsonData["questoes"].length)])
    }


  return (
    <Card >
      <CardContent className={classes.root}>
        <Typography className={classes.textArea} variant="h5" component="h2">
            {pergunta}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          categoria?
        </Typography>
        <Typography variant="body2" component="p">
          origem         
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick ={handlePerguntas} size="small">New Question</Button>
      </CardActions>
    </Card>
  );
}
