import {
  Box,
  ClickAwayListener,
  Grow,
  IconButton, ListItem,
  ListItemIcon, ListItemText,
  MenuItem,
  MenuList,
  Paper,
  Popper, withTheme
} from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import EditIcon from '@material-ui/icons/Edit';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InfoIcon from '@material-ui/icons/Info';
import MapIcon from '@material-ui/icons/Map';
import PersonIcon from '@material-ui/icons/Person';
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import Link from 'next/link';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    height: props => props.headerHeight,
    boxSizing: 'border-box',
    background: 'rgba(255, 255, 255, 0.75)',
    boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
    position: "relative",
    zIndex: '10',
  },
  title: {
    padding: '1rem',
    margin: '0',
    paddingTop: '2rem',
    fontFamily: "'M PLUS Rounded 1c', sans-serif",
    textAlign: 'center',
    color: props => props.palette.primary.main,
    flexGrow: '1',
  },
  button: {
    width: '4rem',
    height: '4rem',
  },
});

function Header({
  theme,
  title,
  showBackButton = false,
  showEditButton,
  editButtonHref,
  showSkillMap=true,
  showLocationMap=true,
  showAbout=true
}) {
  const classes = useStyles(theme);
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  function handleToggle() {
    setOpen((prevOpen) => !prevOpen);
  }

  function handleClose(event) {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  }

  function onBackButtonClick() {
    router.push('/');
  }

  return (
    <>
      <Box className={classes.container} display="flex" justifyContent="space-between" alignItems="baseline">
        {
          showBackButton &&
          <IconButton className={classes.button} onClick={onBackButtonClick} title="Zurück">
            <ArrowBackIosIcon />
          </IconButton>
        }
        <h1 className={classes.title}>{title}</h1>
        {
          showEditButton &&
          <IconButton className={classes.button} href={editButtonHref} title="Bearbeiten">
            <EditIcon />
          </IconButton>
        }
        <IconButton className={classes.button} ref={anchorRef} onClick={handleToggle} title="Menü">
          <MoreVertIcon />
        </IconButton>
      </Box>
      <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition style={{zIndex: 1000}}>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem={open} id="menu-list-grow">
                  {
                    showSkillMap &&
                    <MenuItem>
                      <Link href="/" passHref>
                        <ListItem component="a">
                          <ListItemIcon>
                            <PersonIcon/>
                          </ListItemIcon>
                          <ListItemText primary="Skill Map"/>
                        </ListItem>
                      </Link>
                    </MenuItem>
                  }
                  {
                    showLocationMap &&
                    <MenuItem>
                      <Link href="/locations" passHref>
                        <ListItem component="a">
                          <ListItemIcon>
                            <MapIcon />
                          </ListItemIcon>
                          <ListItemText primary="Location Map" />
                        </ListItem>
                      </Link>
                    </MenuItem>
                  }
                  {
                    showAbout &&
                    <MenuItem>
                      <Link href="/about" passHref>
                        <ListItem component="a">
                          <ListItemIcon>
                            <InfoIcon />
                          </ListItemIcon>
                          <ListItemText primary="Über diese App" />
                        </ListItem>
                      </Link>
                    </MenuItem>
                  }
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
}

export default withTheme(Header);
