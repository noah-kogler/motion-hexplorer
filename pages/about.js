// noinspection JSUnusedGlobalSymbols

import Header from "../components/header";
import Content from "../components/content";

export default function About () {
  return (
    <>
      <Header title="Über diese App" showAbout={false} />
      <Content>
        <h2>Idee und Inhalte</h2>
        <ul>
          <li>Matthias Fagerer</li>
          <li>Jakob Moser</li>
        </ul>
        <h2>Design und technische Umsetzung</h2>
        <ul>
          <li>Noah Kogler</li>
        </ul>
        <h2>Bilder</h2>
        <ul>
          <li>Hintergrund: <a href="https://unsplash.com/@jeremiecs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jérémie Crausaz</a> über <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></li>
        </ul>
      </Content>
    </>
  );
};
