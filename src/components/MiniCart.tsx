"use client";

import {
  Button,
  Divider,
  Flex,
  List,
  ListItem,
  Modal,
  Text
} from "@mantine/core";
import {useCart} from "@/hooks/useCart";
import {LuShoppingCart} from "react-icons/lu";
import {useState} from "react";

export default function MiniCart() {
  const {cart} = useCart();
  const [modalOpen, setModalOpen] = useState(false);
  const handleOnClick = () => {
    setModalOpen(true);
  };
  return (
    <>
      <Flex>
        <Button onClick={handleOnClick}>
          <LuShoppingCart />
          <Text ml="xs" size="sm">{cart.length}</Text>
        </Button>
      </Flex>
      <Modal opened={modalOpen} onClose={() => setModalOpen(false)}>
        <Text>Cart</Text>
        <Divider my="sm" />
        <List>
          {cart.map(item => (<ListItem key={item.id}><Text >{item.title}</Text></ListItem>))}
        </List>
      </Modal>
    </>
  );
}
