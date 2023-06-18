import { menuSlug } from '@/interface/type';
import { createContext } from 'react';

export interface MenuContextInterface {
    onMenu: menuSlug,
    setOnMenu: (value: menuSlug) => void
}

export const MenuContext = createContext<MenuContextInterface>({
    onMenu: 'home',
    setOnMenu: () => {}
})