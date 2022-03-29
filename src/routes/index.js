// @flow
import { SignIn, Dashboard, CreateUser, CreateStore, Orders } from 'pages';

const dashboardRoutes = {
  id: 'Dashboard',
  path: '/dashboard',
  component: Dashboard,
  children: ([]: Array<any>),
  guard: null,
};

const orderRoutes = [
  {
    id: 'Create Order',
    path: '/order/create-order',
    component: Orders,
    guard: null,
  },
];

const accountRoutes = [
  {
    id: 'Create Account',
    path: '/account/create-user',
    component: CreateUser,
    guard: null,
    children: ([]: Array<any>),
  },
  {
    id: 'Create Store',
    path: '/store/create-store',
    component: CreateStore,
    guard: null,
    children: ([]: Array<any>),
  },
];

export const resetPasswordRoutes = {
  path: '/auth/reset-password',
  name: 'Reset Password',
  component: SignIn,
  guard: null,
  children: ([]: Array<any>),
};
export const signInRoutes = {
  path: '/auth/sign-in',
  name: 'Sign In',
  component: SignIn,
  guard: null,
  children: ([]: Array<any>),
};
export const dashboardLayoutRoutes: Array<
  | {
      children: Array<any>,
      component: any,
      guard: null,
      id: string,
      path: string,
      ...
    }
  | { component: any, id: string, path: string, ... }
> = [dashboardRoutes, ...accountRoutes, ...orderRoutes];
export const authenticationLayoutRoutes = [signInRoutes, resetPasswordRoutes];
