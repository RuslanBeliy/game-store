import { IGame } from '../models/game';

export const calcTotalPrice = (items: IGame[]) => items.reduce((acc, el) => (acc += el.price), 0);

export const setCartLS = (items: IGame[]) => {
  const cart = JSON.stringify(items);
  localStorage.setItem('cart', cart);
};

export const getCartLS = () => {
  const cart = localStorage.getItem('cart');
  return cart;
};
