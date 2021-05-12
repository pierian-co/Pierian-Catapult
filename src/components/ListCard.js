import React from 'react';
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

export const MediaCard = ({ title, description, imagePath }) => {
  const classes = useStyles();

  let cardTitleStyle = {
    fontSize: "18px",
    textTransform: "uppercase",
    textAlign: "center",
    color: "#666"
  }

  return (

    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          title={title}
          image={imagePath}

        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" style={cardTitleStyle} >
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{ textAlign: "center" }} >
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions>
        <div className="row col-12">
          <div className="col-6">
            <Button size="small" color="primary">
              $250
              {/* <span className="badge badge-secondary">Secondary</span> */}
            </Button>
            
          </div>

          <div className="col-6" style={{textAlign: "end"}}>
          <button className="btn btn-sm btn-danger" >Learn More</button>
          </div>
        </div>

      </CardActions>
    </Card>
  );
}
