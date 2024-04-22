import {scaffolderActionsExtensionPoint} from "@backstage/plugin-scaffolder-node/alpha";
import {createAcmeExampleAction} from "./actions/example/example";
import { createBackendModule } from '@backstage/backend-plugin-api';


export const scaffolderMyModule = createBackendModule({
  pluginId: 'scaffolder',
  moduleId: 'my-module',
  register(reg) {
    reg.registerInit({
      deps: {
        scaffolder: scaffolderActionsExtensionPoint,
      },
      async init({ scaffolder, config }) {
        scaffolder.addActions(new createAcmeExampleAction());
      },
    });
  },
});
