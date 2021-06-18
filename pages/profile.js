// noinspection JSUnusedGlobalSymbols

import Header from "../components/header";
import styled, { createGlobalStyle } from "styled-components";
import { useState } from "react";
import Edit from "../components/profile/edit";
import Show from "../components/profile/show";

export default function Profile () {
  const [edit, setEdit] = useState(false);

  function onEditButtonClick() {
    setEdit(!edit);
  }

  return (
    <>
      <GlobalStyle />
      <Header title="Profile" showBackButton={!edit} showEditButton={!edit} onEditButtonClick={onEditButtonClick}/>
      <Container>
        {edit ? <Edit /> : <Show />}
      </Container>
    </>
  );
};

const Container = styled.div`
  margin: 2rem;
`;

export const GlobalStyle = createGlobalStyle`
  body {
    background: #7D8E99;
  }
`;
