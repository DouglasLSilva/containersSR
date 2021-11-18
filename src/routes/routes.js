import { v4 as uuid } from 'uuid';

import { Login } from '../pages/Login';
import { Dashboard } from '../pages/Dashboard';
import { ContainersList } from '../pages/Containers/List';
import { ContainerShow } from '../pages/Containers/Show';
import { ImagesList } from '../pages/Images/List';
import { SystemInfo } from '../pages/System/Info';

const routes = [
  { id: uuid(), path: '/login', exact: true, component: Login },
  { id: uuid(), path: '/dashboard', exact: true, component: Dashboard },
  { id: uuid(), path: '/containers', exact: true, component: ContainersList },
  { id: uuid(), path: '/containers/:containerId', exact: true, component: ContainerShow },
  { id: uuid(), path: '/images', exact: true, component: ImagesList },
  { id: uuid(), path: '/info', exact: true, component: SystemInfo },
];

export default routes;
