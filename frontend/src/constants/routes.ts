import { FC } from 'react';

import { AddCard } from '../pages/admin/Cards/AddCard/AddCard';
import { CardsList } from '../pages/admin/Cards/CardsList';
import { Cards } from '../pages/Cards';
import { NotFound } from '../pages/NotFound';
import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SIgnUp/SignUp';

import { PATHS, ADMIN_PATHS } from './paths';

interface IRoute {
  path: string;
  element: FC;
}

export const ROUTES: IRoute[] = [
  { path: PATHS.SIGN_UP, element: SignUp },
  { path: PATHS.SIGN_IN, element: SignIn },
  { path: PATHS.CARDS, element: Cards },
  { path: '*', element: NotFound },
];

export const ADMIN_ROUTES: IRoute[] = [
  { path: ADMIN_PATHS.CARDS, element: CardsList },
  { path: ADMIN_PATHS.ADD_CARD, element: AddCard },
];
