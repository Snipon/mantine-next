import {Box, Container, Title} from "@mantine/core";
import Link from "next/link";
import {getData} from "@/utils/apiFetch";
import {SiteSettingsType} from "@/types/Global.types";

export default async function SiteHeader() {
  const {title} = await getData<SiteSettingsType>("settigns/1");
  return (
    <Box bg="gray.8">
      <Container size="xl">
        <Box mb="md" py="md">
          <Title>
            <Link href="/" style={{textDecoration: "none", color: "inherit"}}>{title}</Link>
          </Title>
        </Box>
      </Container>
    </Box>
  );
}
