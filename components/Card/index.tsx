import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

import * as S from './styles'

export interface RecipeCard {
    imgUrl?: string;
    recipeName: string;
    handleClick?: Function;
    id?: string;
}

const useStyles = makeStyles({
    root: {
        width: 240,
        height: 195,
        marginTop: 10
    },
    cardcontent: {
        height: 55,
        textAlign: "center",
        padding: "3px 7px",
        verticalAlign: "text-bottom"
    },
    media: {
        height: 140,
        objectFit: 'cover'
    },
});

const RecipeCard: React.FunctionComponent<RecipeCard> = ({ imgUrl, recipeName, handleClick, id }) => {
    const classes = useStyles();

    return (
        <Card className={classes.root} onClick={() => {handleClick(id, "details")}}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={imgUrl}
                    title={recipeName}
                />
                <CardContent className={classes.cardcontent}>
                    <S.Typography gutterBottom component="h3">
                        {recipeName}
                    </S.Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default RecipeCard;

