export interface CartItemType {
  id: string;
  title: string;
}

export interface CartStateType {
  cart: CartItemType[];
  addToCart: (item: CartItemType) => void;
  removeFromCart: (id: string) => void;
}
