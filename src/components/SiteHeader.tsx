import {Box, Container, Flex, Title} from "@mantine/core";
import Link from "next/link";
import {getData} from "@/utils/apiFetch";
import {SiteSettingsType} from "@/types/Global.types";
import MiniCart from "@/components/MiniCart";

export default async function SiteHeader() {
  const {title} = await getData<SiteSettingsType>("settigns/1");
  return (
    <Box bg="gray.8">
      <Container size="xl">
        <Flex mb="md" py="md" justify="space-between">
          <Title>
            <Link href="/" style={{textDecoration: "none", color: "inherit"}}>{title}</Link>
          </Title>
          <MiniCart />
        </Flex>
      </Container>
    </Box>
  );
}
