import styled, { withTheme } from "styled-components";
import { mdiInformationOutline, mdiMap, mdiHexagonOutline } from '@mdi/js';
import Icon from "@mdi/react";
import Link from 'next/link';

function Menu({theme, showSkillMap=true, showLocationMap=true, showAbout=true}) {
  return (
    <Container>
      {
        showSkillMap && <Item>
          <Link href="/">
            <ItemAnchor>
              <Icon path={mdiHexagonOutline}
                    title="Skill Map"
                    size={1}
                    color={theme.text}/>
              <ItemText>Skill Map</ItemText>
            </ItemAnchor>
          </Link>
        </Item>
      }
      {
        showLocationMap && <Item>
          <Link href="/locations">
            <ItemAnchor>
              <Icon path={mdiMap}
                    title="Location Map"
                    size={1}
                    color={theme.text} />
              <ItemText>Location Map</ItemText>
            </ItemAnchor>
          </Link>
        </Item>
      }
      {
        showAbout && <Item>
          <Link href="/about">
            <ItemAnchor>
              <Icon path={mdiInformationOutline}
                    title="Über diese App"
                    size={1}
                    color={theme.text} />
              <ItemText>Über diese App</ItemText>
            </ItemAnchor>
          </Link>
        </Item>
      }
    </Container>
  );
}

export default withTheme(Menu);

const Container = styled.ul`
  position: absolute;
  top: ${({theme}) => theme.headerHeight};
  right: 0;
  padding: 1rem 0;
  margin: 0;
  background: #EEEEEE;
  box-shadow: 2px 2px 4px #000000;
  border-left: 2px solid ${({theme}) => theme.border};
  border-bottom: 2px solid ${({theme}) => theme.border};
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
  cursor: pointer;
`;
