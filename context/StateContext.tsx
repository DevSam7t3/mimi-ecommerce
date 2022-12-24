import React, { createContext, useContext, useReducer } from "react";
import Cookies from "js-cookie";

import { SHOW_CART_FALSE, SHOW_CART_TRUE } from "@constants";

type CartItem = {
  id: number;
  name: string;
  href: string;
  color: string;
  price: string;
  quantity: number;
  imageSrc: string;
};

type InitialStateType = {
  cartItems: CartItem[];
  showCart: boolean;
};

export const Context = createContext(null);

const initialState: InitialStateType = {
  cartItems: Cookies.get("cartItems")
    ? JSON.parse(Cookies.get("cartItems") as string)
    : [],
  showCart: false,
};

function reducer(state: any, action: any) {
  switch (action.type) {
    case SHOW_CART_TRUE:
      return { ...state, showCart: true };
    case SHOW_CART_FALSE:
      return { ...state, showCart: false };
    default:
      return state;
  }
}

export const StateProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
