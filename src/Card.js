import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';

var useStyles = theme  => ({
    root: {
      maxWidth: 245,
    },
    media: {
      height: 260,
    },
  });
class MediaCard extends Component {
    render() {
    const { classes } = this.props;
        return (
          <Card className={classes.root} style={{display: 'flex', position: "center", backgroundColor:this.props.color_code, border: this.props.cardSelect ? '4px solid black' : '4px solid white'  }}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="/static/images/cards/contemplative-reptile.jpg"
                title= {this.props.colorText+" Card"}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                {this.props.colorText}
                </Typography>
       
              </CardContent>
            </CardActionArea>
          </Card>
        );
    }
}

export default withStyles(useStyles)(MediaCard);

// export default function MediaCard(colorText) {
//     const classes = useStyles();
//     console.log(colorText);
//     return (
//       <Card className={classes.root}>
//         <CardActionArea>
//           <CardMedia
//             className={classes.media}
//             image="/static/images/cards/contemplative-reptile.jpg"
//             title="Contemplative Reptile"
//           />
//           <CardContent>
//             <Typography gutterBottom variant="h5" component="h2">
//       {this.props.colorText}
//             </Typography>
//             <Typography variant="body2" color="textSecondary" component="p">
//               Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
//               across all continents except Antarctica
//             </Typography>
//           </CardContent>
//         </CardActionArea>
//       </Card>
//     );
  
// }
