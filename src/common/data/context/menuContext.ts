import { menuSlug } from '@/common/interface/type';
import { createContext } from 'react';

export interface MenuContextInterface {
    onMenu: menuSlug,
    setOnMenu: (value: menuSlug) => void,
    burgerMenu: boolean,
    setBurgerMenu: (value: boolean) => void
}

export const MenuContext = createContext<MenuContextInterface>({
    onMenu: 'home',
    setOnMenu: () => {},
    burgerMenu: false,
    setBurgerMenu: () => {}
})