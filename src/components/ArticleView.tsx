import {ArticleTypes} from "@/types/Article.types";
import {
  Box,
  Button,
  Divider,
  Grid,
  GridCol,
  Space,
  Text,
  Title
} from "@mantine/core";
import Image from "next/image";

export default function ArticleView({title, material, price, brand, description, image, id}: ArticleTypes) {
  return (
    <Grid columns={2}>
      <GridCol span={1}>
        <Image src={`${image}?random=${id}`} alt={title} width={800} height={450} style={{maxWidth: "100%", objectFit: "contain"}}/>
      </GridCol>
      <GridCol span={1}>
        <Title>{title}</Title>
        <Text c="dimmed">{brand}</Text>
        <Divider my="md" />
        <Text>{description}</Text>
        <Space h="md" />
        <Text size="sm">Material: {material}</Text>
        <Divider my="md" />
        <Text size="xl">${price}</Text>
        <Space h="md" />
        <Button>Add to cart</Button>
      </GridCol>
    </Grid>
  );
}
