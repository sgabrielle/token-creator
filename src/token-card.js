import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Card, CardActions, CardContent, Collapse, IconButton, Switch, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    expand: {
        fontSize: '18px',
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    root: {
        backgroundColor: 'lightgrey',
        height: '100%',
        minWidth: 275,
        margin: '2vh'
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
    }
}));

const TokenCard = (props) => {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);
    const [switchState, setSwitchState] = useState(false);
    const [status, setStatus] = useState(props.token.status);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const updateStatus = e => {
        setStatus(!status);
        setSwitchState(true);
    }

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h5">
                    Token Name
                </Typography>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {props.token.name}
                </Typography>
                <Typography variant="h5">
                    Supply
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {props.token.supply} tokens
                </Typography>
                <Typography variant="h5">
                    Status <Switch
                        value={status}
                        onChange={updateStatus}
                        name="status"
                        disabled={switchState}
                    />
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {status ? 'Active' : 'Pending'}
                </Typography>
            </CardContent>
            <CardActions>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                    color="secondary"
                >
                    More
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography variant="h5">
                        Owner
                </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        {props.token.owner}
                    </Typography>
                    <Typography variant="h5">
                        Mintable
                </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        {props.token.mintable ? 'True' : 'False'}
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}

export default TokenCard;

