import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
//import axios from "axios";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

export default function MediaCard(elem) {
    //console.log("[in media card elem] --> ", elem)
    const classes = useStyles();
    let img = elem.photos[0];

    /*let config = {
        withCredentials: false,
        maxBodyLength: Infinity,
        method: 'get',
        url: elem.photos[0],
        headers: {}
        //responseType: 'stream'
    };

    let response = await axios.request(config)
    console.log(response)*/


    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={img}
                    title={elem.brand}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {elem.brand}
                        <br/>
                        {elem.model}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        price: {elem.priceUSD}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
                <Button size="small" color="primary">
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
}