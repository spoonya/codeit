export const getStorage = (storageName: string): string => localStorage.getItem(storageName) || '';

export const setStorage = (storageName: string, value: string) =>
  localStorage.setItem(storageName, value);
