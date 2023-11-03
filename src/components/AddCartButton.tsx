"use client";

import {Button, Flex} from "@mantine/core";
import {useCart} from "@/hooks/useCart";
import {MdOutlineAddShoppingCart, MdOutlineRemoveShoppingCart} from "react-icons/md";

interface AddCartButtonProps {
  id: string;
  title: string;
  minimal?: boolean;
}

export default function AddCartButton({id, title, minimal}: AddCartButtonProps) {
  const {cart, addToCart, removeFromCart} = useCart();

  const isInCart = cart.some(item => item.id === id);

  const cartText = isInCart ? "Remove from cart" : "Add to cart";

  const handleClick = () => {
    isInCart ? removeFromCart(id) :addToCart({id, title});
  };

  const CartIcon = () => (isInCart ? <MdOutlineRemoveShoppingCart /> : <MdOutlineAddShoppingCart />);

  return (
    <Flex>
      <Button color={isInCart ? "red" : "blue"} onClick={handleClick}>{minimal ? <CartIcon /> : cartText}</Button>
    </Flex>
  );
}
