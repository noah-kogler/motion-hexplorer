// noinspection JSUnusedGlobalSymbols

import Header from "../components/header";
import useSWR from "swr";
import fetchJson from "../tools/fetcher";
import Image from 'next/image'
import { Box } from "@material-ui/core";
import Content from "../components/content";

export default function Profile () {
  const { data, error } = useSWR("/api/user", fetchJson);
  if (error) {
    return <div>Failed to load. Error: {error.message}</div>;
  }
  if (!data) {
    return <div>loading...</div>;
  }

  return (
    <>
      <Header title="Profile" showBackButton={true} showEditButton={true} editButtonHref="/profile/edit"/>
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
