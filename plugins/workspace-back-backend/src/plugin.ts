import {
  coreServices,
  createBackendPlugin,
} from '@backstage/backend-plugin-api';
import { createRouter } from './service/router';

/**
 * workspaceBackPlugin backend plugin
 *
 * @public
 */
export const workspaceBackPlugin = createBackendPlugin({
  pluginId: 'workspace-back',
  register(env) {
    env.registerInit({
      deps: {
        httpRouter: coreServices.httpRouter,
        logger: coreServices.logger,
        httpRouter: coreServices.httpRouter,
      },
      async init({
        httpRouter,
        logger,

      }) {
        httpRouter.use(
          await createRouter({
            logger,
          }),
        );
        httpRouter.addAuthPolicy({
          path: '/health',
          allow: 'unauthenticated',
        });
        httpRouter.addAuthPolicy({
          path: '/users',
          allow: 'unauthenticated',
        })
      },
    });
  },
});
