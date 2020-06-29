import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from "./Menu";
import './Header.module.scss'
import styles from "./Header.module.scss";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();
    const [visible, setVisible] = useState(false)


    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon  className={styles.menu} onClick={() => setVisible(!visible)}/>
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Pictures
                    </Typography>
                    <Button color="inherit">Login</Button>

                </Toolbar>
            </AppBar>
            {visible &&
            <Menu/>


            }
        </div>
    );
}
