const TOKEN_KEY = 'jwt';

export const login = () => localStorage.setItem(TOKEN_KEY, 'testLogin');

export const logout = () => localStorage.removeItem(TOKEN_KEY);

export const isLogin = () => localStorage.getItem(TOKEN_KEY) ? true : false;