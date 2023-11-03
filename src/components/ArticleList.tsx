import {
  Avatar,
  Box,
  Flex,
  Grid,
  GridCol,
  List,
  ListItem,
  Text,
  Title
} from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import {ArticleTypes} from "@/types/Article.types";
import AddCartButton from "@/components/AddCartButton";

interface ArticleListProps {
  data: ArticleTypes[];
}

function ArticleTeaser ({title, brand, price, image, id}: ArticleTypes) {
  return (
    <Flex direction="column"  bg="gray.8" style={{width: "100%", height: "100%"}}>
      <Link style={{textDecoration: "none", color: "inherit"}} href={'/item/' + id}>
        <Image src={`${image}?random=${id}`} alt={title} width={400} height={225}  style={{maxWidth: "100%", objectFit: "contain"}}/>
        <Box p="md">
          < Title order={1} size="h3" >{title}</Title>
          <Text size="xs" mb="md" c="dimmed">{brand}</Text>
          <Text size="lg">${price}</Text>
        </Box>
      </Link>
      <AddCartButton id={id} title={title} minimal />
    </Flex>
  );
}

export default function ArticleList ({data}: ArticleListProps) {
  return <Grid columns={4}>{data.map(article => (
    <GridCol span={1} key={article.id}>
      <ArticleTeaser {...article} />
    </GridCol>
  ))}</Grid>;
}
