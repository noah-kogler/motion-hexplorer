import styled, { withTheme } from "styled-components";
import { mdiChevronLeft, mdiDotsVertical, mdiPencil } from '@mdi/js';
import Icon from "@mdi/react";
import { useState } from "react";
import Menu from "./menu";
import { useRouter } from "next/router";

function Header({theme, title, showBackButton, showEditButton, onEditButtonClick, ...menuProps}) {
  const [menuVisible, setMenuVisible] = useState(false);
  const router = useRouter()

  function onMenuButtonClick() {
    setMenuVisible(!menuVisible);
  }

  function onBackButtonClick() {
    router.back();
  }

  return (
    <>
      <Container>
        {
          showBackButton &&
          <Button onClick={onBackButtonClick}>
            <Icon path={mdiChevronLeft}
                  title="Zurück"
                  size={1.8}
                  color={theme.text}/>
          </Button>
        }
        <Title>{title}</Title>
        {
          showEditButton &&
          <Button onClick={onEditButtonClick}>
            <Icon path={mdiPencil}
                  title="Bearbeiten"
                  size={1.8}
                  color={theme.text}/>
          </Button>
        }
        <Button onClick={onMenuButtonClick}>
          <Icon path={mdiDotsVertical}
                title="Menü"
                size={1.8}
                color={theme.text} />
        </Button>
      </Container>
      {menuVisible && (<Menu {...menuProps} />)}
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

const Button = styled.button`
  padding: 1rem 2rem;
  cursor: pointer;
  border: 0;
  background: none;
`;
