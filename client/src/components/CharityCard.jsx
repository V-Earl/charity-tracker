import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardMedia, CardContent, Typography } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

const CharityCard = (props) => {
    const classes = useStyles();

    return (
        <>
            <Grid item key={props.key} xs={12} sm={6} md={4}>
                <Card className={classes.root}>
                    <CardMedia 
                        className={classes.media}
                        image={props.image}
                        title={props.name}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {props.name}
                    </Typography>
                    <Typography>
                      {props.about}
                    </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </>
     );
}
 
export default CharityCard;