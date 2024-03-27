import { atom } from "nanostores";

export const nameThemeStore = atom("");
export const searchQueryString = atom("");

export const addTheme = (theme) => {
  nameThemeStore.set(theme);
};

export const addSearchQueryString = (string) => {
  searchQueryString.set(string);
};

export const resetTheme = () => {
  nameThemeStore.set("");
};
