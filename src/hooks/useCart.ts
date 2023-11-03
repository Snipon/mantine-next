import {create} from "zustand";
import {CartItemType, CartStateType} from "@/types/Cart.types";

export const useCart = create<CartStateType>((set) => ({
  cart: [],
  addToCart: (item:CartItemType) => {
    set((state:CartStateType) => {
      if (state.cart.find((i:CartItemType) => i.id === item.id)) {
        return {cart: [...state.cart]};
      }
      return {cart: [...state.cart, item]};
    });
  },
  removeFromCart: (id:string) => {
    set((state:CartStateType) => ({
      cart: state.cart.filter((item:CartItemType) => item.id !== id)
    }));
  }
}));
