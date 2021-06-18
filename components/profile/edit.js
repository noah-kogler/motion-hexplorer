// noinspection JSUnusedGlobalSymbols

import styled from "styled-components";

export default function Edit () {
  return (
    <form>
      <Field>
        <Label htmlFor="name">Name</Label>
        <input type="text" name="name" id="name" />
      </Field>
      <Field>
        <Label htmlFor="description">Beschreibung</Label>
        <textarea name="description" id="description"/>
      </Field>
      <Button type="submit" primary>Speichern</Button>
      <Button>Abbrechen</Button>
    </form>
  );
}

const Field = styled.div`
  padding: .8rem;
`;

const Label = styled.label`
  display: block;
`;

const Button = styled.button`
  margin: .8rem;
  padding: .8rem;
  border-radius: .4rem;
  background: ${({theme, primary}) => primary ? theme.text : 'none'};
  color: ${({theme, primary}) => primary ? 'rgba(255, 255, 255, 0.75)' : theme.text};
  border: ${({theme}) => theme.border};
  font-family: 'Roboto', sans-serif;
  cursor: pointer;
  font-size: 1rem;
`;
