import styled, { withTheme } from "styled-components";
import {
  ClickAwayListener,
  Grow,
  IconButton, ListItem,
  ListItemIcon, ListItemText,
  MenuItem,
  MenuList,
  Paper,
  Popper
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

function Header({
  title,
  showBackButton = false,
  showEditButton,
  onEditButtonClick,
  showSkillMap=true,
  showLocationMap=true,
  showAbout=true
}) {
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
    router.back();
  }

  return (
    <>
      <Container>
        {
          showBackButton &&
          <IconButton onClick={onBackButtonClick} title="Zurück">
            <ArrowBackIosIcon />
          </IconButton>
        }
        <Title>{title}</Title>
        {
          showEditButton &&
          <IconButton onClick={onEditButtonClick} title="Bearbeiten">
            <EditIcon />
          </IconButton>
        }
        <IconButton ref={anchorRef} onClick={handleToggle} title="Menü">
          <MoreVertIcon />
        </IconButton>
      </Container>
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

const Container = styled.div`
  height: ${({theme}) => theme.headerHeight};
  border-bottom: 2px solid #333333;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.75);
  box-shadow: 0 0 15px #000000;
  display: flex;
  justify-content: space-between;
  align-items: bottom;
`;

const Title = styled.h1`
  padding: 1rem;
  margin: 0;
  padding-top: 2rem;
  font-family: 'M PLUS Rounded 1c', sans-serif;
  text-align: center;
  color: ${({ theme }) => theme.text};
  flex-grow: 1;
`;
