import { FC, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import s from './Layout.module.scss';

import { Footer, Header } from '../../components';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setCart } from '../../redux/slices/cart-slice';
import { getCartLS, setCartLS } from '../../utils';

interface LayoutProps {}

export const Layout: FC<LayoutProps> = () => {
  const dispatch = useAppDispatch();
  const games = useAppSelector((state) => state.cart.items);

  useEffect(() => {
    const ls = getCartLS();
    if (ls) {
      const gamesLS = JSON.parse(ls);
      dispatch(setCart(gamesLS));
    }
  }, []);

  useEffect(() => {
    setCartLS(games);
  }, [games]);
  return (
    <div className={s.layout}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
