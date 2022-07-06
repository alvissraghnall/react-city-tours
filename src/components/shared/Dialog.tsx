import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import { Dialog, 
  ListItemText, 
  ListItem,
  List,
  Divider,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Slide,
  makeStyles
} from '@material-ui/core';
import { Close as CloseIcon, Menu as MenuIcon } from "@material-ui/icons"
import { TransitionProps } from '@material-ui/core/transitions';
/*
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref < unknown > ,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
*/
const useStyles = makeStyles(() => ({
  link: {
    textDecoration: "none",
    color: "blue",
    fontSize: "20px",
  },
  icon: {
    color: "white"
  }
}));


export default function DialogBox() {
  const classes = useStyles();
  
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
      >
        <AppBar position="relative">
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            {/* <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Sound
            </Typography> */}
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          <ListItem button>
            <ListItemText primary="Phone ringtone" secondary="Titania" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText
              primary="Default notification ringtone"
              secondary="Tethys"
            />
          </ListItem>
        </List>
      </Dialog>
      <IconButton onClick = {handleClickOpen}>
        <MenuIcon /> 
      </IconButton> 

    </>
  );
}