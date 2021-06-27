// noinspection JSUnusedGlobalSymbols

import Header from "../components/header";
import useSWR from "swr";
import fetchJson from "../tools/fetcher";
import Image from 'next/image'
import { Box } from "@material-ui/core";
import Content from "../components/content";
import Error from "../components/error";
import Loading from "../components/loading";

export default function Profile () {
  const title = 'Profil';

  const { data, error } = useSWR("/api/user", fetchJson);
  if (error) {
    return <Error title={title} error={error}/>;
  }
  if (!data) {
    return <Loading title={title} />;
  }

  return (
    <>
      <Header title={title} showBackButton={true} showEditButton={true} editButtonHref="/profile/edit"/>
      <Content>
        <Box mb={4}>
          <Image src={data.avatarUrl} width={300} height={300} />
        </Box>
        <h2>Name</h2>
        <Box mb={4}>
          {data.name}
        </Box>
        <h2>Beschreibung</h2>
        <Box mb={4}>
          {data.description}
        </Box>
      </Content>
    </>
  );
}
