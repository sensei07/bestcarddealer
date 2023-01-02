import { FC } from 'react';

import { PATHS, ADMIN_PATHS } from './paths';
import { SignUp } from '../pages/SignUp';
import { SignIn } from '../pages/SignIn';
import { Cards } from '../pages/Cards';
import { CardsList } from '../pages/admin/CardsList';

interface IRoute {
  path: string;
  element: FC;
}

export const ROUTES: IRoute[] = [
  { path: PATHS.SIGN_UP, element: SignUp },
  { path: PATHS.SIGN_IN, element: SignIn },
  { path: PATHS.CARDS, element: Cards },
];

export const ADMIN_ROUTES: IRoute[] = [
  { path: ADMIN_PATHS.CARDS, element: CardsList },
];
