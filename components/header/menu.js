import styled from "styled-components";
import { mdiInformationOutline, mdiMap, mdiHexagonOutline } from '@mdi/js';
import Icon from "@mdi/react";
import Link from 'next/link';

export default function Menu(topRem) {
  return (
    <Container topRem={topRem}>
      <Item>
        <Link href="/">
          <ItemAnchor>
            <Icon path={mdiHexagonOutline}
                  title="Skill Map"
                  size={1}
                  color="#333333" />
            <ItemText>Skill Map</ItemText>
          </ItemAnchor>
        </Link>
      </Item>
      <Item>
        <Link href="/locations">
          <ItemAnchor>
            <Icon path={mdiMap}
                  title="Location Map"
                  size={1}
                  color="#333333" />
            <ItemText>Location Map</ItemText>
          </ItemAnchor>
        </Link>
      </Item>
      <Item>
        <Link href="/about">
          <ItemAnchor>
            <Icon path={mdiInformationOutline}
                  title="Über diese App"
                  size={1}
                  color="#333333" />
            <ItemText>Über diese App</ItemText>
          </ItemAnchor>
        </Link>
      </Item>
    </Container>
  );
}

const Container = styled.ul`
  position: absolute;
  top: ${props => props.topRem}rem;
  right: 0;
  padding: 1rem 0;
  margin: 0;
  background: #EEEEEE;
  box-shadow: 2px 2px 4px #000000;
  border-left: 2px solid #333333;
  border-bottom: 2px solid #333333;
  width: 100vw;
  max-width: 20rem;
  z-index: 100;
`;

const Item = styled.li`
  list-style-type: none;
  margin: 0;
  passing: 0;
`;

const ItemText = styled.span`
  padding-left: 1rem;
  font-size: 1.2rem;
`;

const ItemAnchor = styled.a`
  display: block;
  padding: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #333333;
  cursor: pointer;
`;
