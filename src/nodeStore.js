import { atom } from "nanostores";

export const nameThemeStore = atom("");

export const addTheme = (theme) => {
    nameThemeStore.set(theme);
 

};
