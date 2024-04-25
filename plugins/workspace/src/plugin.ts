import {
  createPlugin,
  createRoutableExtension,
} from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const workspacePlugin = createPlugin({
  id: 'workspace',
  routes: {
    root: rootRouteRef,
  },
});

export const WorkspacePage = workspacePlugin.provide(
  createRoutableExtension({
    name: 'WorkspacePage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
