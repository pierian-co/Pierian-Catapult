import React from 'react';
import { Link } from "react-router-dom";


import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export const MediaCard = (props) => {
  const classes = useStyles();

  let cardTitleStyle = {
    fontSize: "18px",
    textTransform: "uppercase",
    textAlign: "center",
    color: "#666"
  }


  let linkStyle = {
    textDecoration: "none",
    color: "white",
  }



  return (

    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          title={props.product.name}
          image={props.product.thumbNailUrl}

        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" style={cardTitleStyle} >
            {props.product.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{ textAlign: "center" }} >

            {props.isAccount ? "" : props.product.title}

          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions>
        <div className="row col-12">

          <div className="col-6">

            {props.isAccount ? "" : <Button size="small" color="primary"> {props.product.price} </Button>}


            {/* <Button size="small" color="primary">
              $250
               <span className="badge badge-secondary">Secondary</span>
            </Button> */}


          </div>

          { props.isAccount ?

            <div  style={{ textAlign: "center" }}>
              <button className="btn  btn-signin" >
                {/* Add To Fav */}
                <Link to={{ pathname: `/account/thanks`,  search: props.product.name }}  style={linkStyle}> Add To Favourite </Link>
              </button>
            </div> 
            
            :

            <div className="col-6" style={{ textAlign: "end" }}>
              <button className="btn btn-sm btn-signin" >
                {/* <Link to={{ pathname: `/product/${props.product.name}` }} style={linkStyle}> Learn More </Link> */}
                <Link to={{ pathname: `/productdetail`,   search: props.product.name }} style={linkStyle}> Learn More </Link>
              </button>
            </div>

          }


        </div>

      </CardActions>
    </Card>
  );
}
